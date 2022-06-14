"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const Datalogger_1 = require("../3_models/Datalogger");
const Plant_1 = require("../3_models/Plant");
class Api {
    // #1 getall meassurements
    static getAllDatalogger() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const datalogger = yield Datalogger_1.Datalogger.find({}, { _id: 0, __v: 0 });
                return datalogger;
            }
            catch (e) {
                console.error("Api getAllDatalogger(), " + e);
            }
        });
    }
    // CRUD support to plants
    // #1 getall plants
    static getAllPlants() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const plants = yield Plant_1.Plant.find({}, { _id: 0, __v: 0 });
                return plants;
            }
            catch (e) {
                console.error("Api getAllPlants(), " + e);
            }
        });
    }
    // #2 get one plant
    static getPlant(PlantNo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const plant = yield Plant_1.Plant.findOne({}, { _id: 0, __v: 0 });
                return plant;
            }
            catch (e) {
                console.error("Api getPlant(), " + e);
            }
        });
    }
    // #3 insert
    static insertPlant(PlantNo, Name, Certificate, Price) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const plant = new Plant_1.Plant({
                    PlantNo: "4",
                    Name: "PlantName",
                    Price: 0,
                    Certificate: "false"
                });
                yield plant.save();
                return true;
            }
            catch (e) {
                console.error("Api insertPlant(), " + e);
                return false;
            }
        });
    }
    // #4 update
    static updatePlant(id, Name, Price, Certificate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id);
                const plant = yield Plant_1.Plant.findOne({ 'PlantNo': id });
                plant.Name = Name;
                plant.Price = Price;
                plant.Certificate = Certificate;
                plant.save();
            }
            catch (e) {
                console.error("Api updatePlant(), " + e);
            }
        });
    }
    // #5 delete
    static deletePlant(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Plant_1.Plant.deleteOne({ 'PlantNo': id });
                return true;
            }
            catch (e) {
                console.error("Api deletePlant(), " + e);
            }
        });
    }
    // Insert Data messurement into the database
    static DataToDatabase(PlantNo, Humidity, Temperature, SoilMoisture, Date) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const datalogger = new Datalogger_1.Datalogger({
                    PlantNo,
                    Humidity,
                    Temperature,
                    SoilMoisture,
                    Date
                });
                yield datalogger.save();
                return true;
            }
            catch (e) {
                console.error(e);
                return false;
            }
        });
    }
}
exports.Api = Api;
//# sourceMappingURL=Api.js.map