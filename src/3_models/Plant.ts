import {model, Schema, Model, Document} from 'mongoose';

interface IPlant extends Document {
    PlantNo:string;
    Name: string;
    Price: number;
    Certificate: string;
}

const PlantSchema: Schema = new Schema({
  PlantNo: { type: String, required: true },
  Name: { type: String, required: true },
  Price: { type: Number, required: true },
  Certificate: { type: String, required: true },
});

const Plant: Model<IPlant> = model('Plant', PlantSchema);

export {Plant,IPlant}