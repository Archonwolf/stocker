const { model } = require('mongoose');
const { HoldingSchema } = require('../Schemas/HoldingSchema');

const HoldingsModel = new model("holding", HoldingSchema);

module.exports= { HoldingsModel };