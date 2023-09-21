import { Schema } from "mongoose";

const methodSchema = new Schema({
  image: {
    type: String,
    required: [true, "image is required."],
  },
  Number: {
    type: String,
    required: [true, "Number is required."],
  },
  steps: {
    type: String,
    required: [true, "steps is required."],
  },
});

const methods = model.methods || model("methods", methodSchema);
export default methods;
