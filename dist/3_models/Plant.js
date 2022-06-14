"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plant = void 0;
const mongoose_1 = require("mongoose");
const PlantSchema = new mongoose_1.Schema({
    PlantNo: { type: String, required: true },
    Name: { type: String, required: true },
    Price: { type: Number, required: true },
    Certificate: { type: String, required: true },
});
const Plant = (0, mongoose_1.model)('Plant', PlantSchema);
exports.Plant = Plant;
//# sourceMappingURL=Plant.js.map