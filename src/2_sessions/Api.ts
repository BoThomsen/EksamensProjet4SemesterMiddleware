
import {IDatalogger,Datalogger} from '../3_models/Datalogger';
import { IPlant, Plant } from '../3_models/Plant';

class Api {

        // #1 getall meassurements
        static async getAllDatalogger():Promise<any>{
            try{
                const datalogger: IDatalogger[] = await Datalogger.find({},{_id:0,__v:0});

                return datalogger;
            }
            catch (e){
                console.error("Api getAllDatalogger(), "+e)
            }
        }

    // CRUD support to plants

    // #1 getall plants
    static async getAllPlants():Promise<any>{
        try{
            const plants: IPlant[] = await Plant.find({},{_id:0,__v:0});
            return plants;
        }
        catch (e){
            console.error("Api getAllPlants(), "+e)
        }
    }

        // #2 get one plant
        static async getPlant(PlantNo:string):Promise<any>{
            try{
                const plant: IPlant = await Plant.findOne({},{_id:0,__v:0});
                return plant;
            }
            catch (e){
                console.error("Api getPlant(), "+e)
            }
        }


        // #3 insert
        static async insertPlant(PlantNo:string,
            Name: string,
            Certificate: string,
            Price:number):Promise<boolean>{
            try{
                const plant: IPlant = new Plant({
                    PlantNo: "4",
                    Name: "PlantName",
                    Price: 0,
                    Certificate: "false"
                });
                await plant.save();
                return true;
            }
            catch(e){
                console.error("Api insertPlant(), "+e);
                return false;
            }
        }

        // #4 update
        static async updatePlant(id:string, Name: string, Price: number,
            Certificate: string):Promise<any>{
            try{
                console.log(id)
                const plant: IPlant = await Plant.findOne({'PlantNo':id});
                plant.Name = Name;
                plant.Price = Price;
                plant.Certificate = Certificate;
                plant.save();
            }
            catch (e){
                console.error("Api updatePlant(), "+e);
            }
        }

        // #5 delete
        static async deletePlant(id:string):Promise<any>{
            try{
                await Plant.deleteOne({'PlantNo':id})
                return true;
            }
            catch (e){
                console.error("Api deletePlant(), "+e)
            }
        }

        // Insert Data messurement into the database
    static async DataToDatabase(PlantNo:string, Humidity:number,
        Temperature: number, SoilMoisture: string, Date: Date):Promise<boolean>{
        try{
            const datalogger: IDatalogger = new Datalogger({
                PlantNo,
                Humidity,
                Temperature,
                SoilMoisture,
                Date

            });
            await datalogger.save();
            return true;
        }
        catch(e){
            console.error(e);
            return false;
        }
    }
}
export {Api}