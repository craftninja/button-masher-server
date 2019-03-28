const { query } = require('../db/index');

exports.create = async properties => {
  const createdDevice = (await query(
    `INSERT INTO "devices"(
      "creatorId",
      "name"
    ) values ($1, $2) returning *`,
    [
      properties.creatorId,
      properties.name,
    ],
  )).rows[0];
  return createdDevice;
};
