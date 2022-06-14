"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const DB_1 = require("../2_sessions/DB");
const Api_1 = require("../2_sessions/Api");
dotenv.config({ path: 'config/middleware.env' });
const routes = (0, express_1.default)();
exports.routes = routes;
routes.use((0, cors_1.default)());
routes.use(bodyParser.json());
routes.use(express_1.default.static('public'));
const urlencode = bodyParser.urlencoded({ extended: true });
DB_1.DB.connect();
/*   CRUD on Plants */
// #1
routes.get('/api/plants', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plants = yield Api_1.Api.getAllPlants();
        return res.status(200).json(plants);
    }
    catch (e) {
        console.error('routes readAllPlants, ' + e);
    }
}));
// #2
routes.get('/api/plants/:uid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plant = yield Api_1.Api.getPlant(req.params.uid);
        return res.status(200).json(plant);
    }
    catch (e) {
        console.error('routes read one plant, ' + e);
    }
}));
// #3
routes.post('/api/plants', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plant = req.body;
        Api_1.Api.insertPlant(plant.PlantNo, plant.Name, plant.Price, plant.Certificate);
        return res.status(201).json(plant);
    }
    catch (e) {
        console.error('routes insert plant, ' + e);
    }
}));
// #4
routes.put('/api/plants/:uid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plant = req.body;
        Api_1.Api.updatePlant(req.params.uid, plant.Name, plant.Price, plant.Certificate);
        console.log("updating plant no " + req.params.uid);
        return res.status(201).json(plant);
    }
    catch (e) {
        console.error('routes update plant, ' + e);
    }
}));
// #5
routes.delete('/api/plants/:uid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Api_1.Api.deletePlant(req.params.uid);
        console.log("deleting plant no " + req.params.uid);
        return res.status(200).json("delete plant");
    }
    catch (e) {
        console.error('routes, delete, ' + e);
    }
}));
// #1 get all datalogger
routes.get('/api/datalogger', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const datalogger = yield Api_1.Api.getAllDatalogger();
        return res.status(200).json(datalogger);
    }
    catch (e) {
        console.error('routes readAllPlants, ' + e);
    }
}));
// The default (all other not valid routes)
routes.get('*', (req, res) => {
    return res.status(404).send('no such route');
});
//# sourceMappingURL=routes.js.map