const expect = require('expect');
const jwt = require('jsonwebtoken');
const request = require('supertest');

require('../helpers/testSetup');

const app = require('../../app');

const userSerializer = require('../../serializers/user');
const { createUser } = require('../helpers/objectCreationMethods');

describe('Devices', () => {
  it('can be created by a logged in user', async () => {
    await request(app)
      .post('/devices')
      .send({
        name: 'office front door',
      })
      .expect(404);

    const user = await createUser();
    const serializedUser = userSerializer(user);
    const token = jwt.sign({ currentUserId: user.id }, process.env.JWT_SECRET);

    const resLoggedIn = await request(app)
      .post('/devices')
      .set('jwt', token)
      .send({
        name: 'office front door',
      })
      .expect(200);

    expect(Object.keys(resLoggedIn.body.device)).toEqual(['id', 'name', 'creator']);
    expect(resLoggedIn.body.device.id).not.toBe(undefined);
    expect(resLoggedIn.body.device.name).toEqual('office front door');
    expect(resLoggedIn.body.device.creator).toEqual(serializedUser);

    expect(resLoggedIn.body.device.createdAt).toEqual(undefined);
    expect(resLoggedIn.body.device.updatedAt).toEqual(undefined);
  });
});
