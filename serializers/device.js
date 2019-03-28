const User = require('../models/user');
const userSerializer = require('./user');

module.exports = async device => {
  const serialized = {
    id: device.id,
    name: device.name,
    creator: userSerializer(await User.find(device.creatorId)),
  };
  return serialized;
};
