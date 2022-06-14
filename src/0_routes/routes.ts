
import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { SuccessCode } from '../3_models/SuccessCode';
import { Resource } from '../3_models/Resource';

import { DB } from '../2_sessions/DB';
import {Api} from '../2_sessions/Api';
import { server } from 'typescript';
import { IPlant, Plant } from '../3_models/Plant';
import { IDatalogger, Datalogger } from '../3_models/Datalogger';
dotenv.config({ path: 'config/middleware.env' });

const routes = express();


routes.use(cors());
routes.use(bodyParser.json());
routes.use(express.static('public'));
const urlencode = bodyParser.urlencoded({ extended: true });

DB.connect();

/*   CRUD on Plants */

// #1
routes.get('/api/plants', async (req,res) => {
   try{
      const plants:Promise<IPlant[]> = await Api.getAllPlants();
      return res.status(200).json(plants);
   }catch(e){
      console.error('routes readAllPlants, '+e);
   }
});


// #2
routes.get('/api/plants/:uid', async (req,res) => {
   try{
      const plant:Promise<IPlant> = await Api.getPlant(req.params.uid);
      return res.status(200).json(plant);
   }catch(e){
      console.error('routes read one plant, '+e);
   }
});

// #3
routes.post('/api/plants', async (req,res) => {
   try{
       const plant = req.body;
       Api.insertPlant(plant.PlantNo,plant.Name,plant.Price,plant.Certificate);
       return res.status(201).json(plant);
   } catch(e){
      console.error('routes insert plant, '+e);
   }
});

// #4
routes.put('/api/plants/:uid', async (req,res) => {
   try{
       const plant = req.body;
       Api.updatePlant(req.params.uid,plant.Name,plant.Price, plant.Certificate);
       console.log("updating plant no " + req.params.uid)
       return res.status(201).json(plant);
   } catch(e){
      console.error('routes update plant, '+e);
   }
});

// #5
routes.delete('/api/plants/:uid', async (req,res) => {
   try{
      await Api.deletePlant(req.params.uid);
      console.log("deleting plant no "+ req.params.uid );
      return res.status(200).json("delete plant");
   } catch(e){
      console.error('routes, delete, '+e);
   }
});

// #1 get all datalogger
routes.get('/api/datalogger', async (req,res) => {
   try{
      const datalogger:Promise<IDatalogger[]> = await Api.getAllDatalogger();
      return res.status(200).json(datalogger);
   }catch(e){
      console.error('routes readAllPlants, '+e);
   }
});



// The default (all other not valid routes)
routes.get('*', (req,res) =>{
     return res.status(404).send('no such route');
});

export {routes}

