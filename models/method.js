import { Schema, model, models } from "mongoose";


const MethodSchema = new Schema({
  image: {
    type: String,
    required: [true, "image is required."],
  },
  phone: {
    type: String,
    required: [true, "phone is required."],
  },
  step: {
    type: String,
    required: [true, "steps is required."],
  },
});

const Methods = models.Method || model("Method", MethodSchema);
export default Methods;
