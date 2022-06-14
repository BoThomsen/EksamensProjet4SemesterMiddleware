"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datalogger = void 0;
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    PlantNo: { type: String, required: true },
    Humidity: { type: Number, required: true },
    Temperature: { type: Number, required: true },
    SoilMoisture: { type: String, required: true },
    Date: { type: Date, required: true }
});
const Datalogger = (0, mongoose_1.model)('Data', DataSchema);
exports.Datalogger = Datalogger;
//# sourceMappingURL=Datalogger.js.map