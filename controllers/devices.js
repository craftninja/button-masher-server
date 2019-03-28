const currentUser = require('../lib/currentUser');
const Device = require('../models/device');
const deviceSerializer = require('../serializers/device');

exports.create = async (req, res) => {
  const token = req.headers.jwt;
  const user = await currentUser(token);
  const device = await Device.create({
    ...req.body,
    ...{ creatorId: user.id },
  });
  const serializedDevice = await deviceSerializer(device);
  res.json({ device: serializedDevice });
};
