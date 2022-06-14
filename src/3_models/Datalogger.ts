import {model, Schema, Model, Document} from 'mongoose';

interface IDatalogger extends Document {
    PlantNo: string;
    Humidity:number;
    Temperature: number;
    SoilMoisture: string;
    Date: Date;
}

const DataSchema: Schema = new Schema({
  PlantNo: { type: String, required: true },
  Humidity: { type: Number, required: true },
  Temperature: { type: Number, required: true },
  SoilMoisture: { type: String, required: true },
  Date: {type: Date, required: true}
});

const Datalogger: Model<IDatalogger> = model('Data', DataSchema);

export {Datalogger,IDatalogger}