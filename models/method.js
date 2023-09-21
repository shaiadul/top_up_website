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
  steps: {
    type: String,
    required: [true, "steps is required."],
  },
});

const Method = models.Method || model("Method", MethodSchema);
export default Method;
