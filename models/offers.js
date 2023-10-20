import { Schema, model, models } from "mongoose";

const packageSchema = new Schema({
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  sold: { type: Boolean, required: true },
});

const OffersSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required."],
  },
  image: {
    type: String,
    required: [true, "image is required."],
  },
  status: {
    type: String,
    required: [true, "status is required."],
  },
  packages: [packageSchema]
});

const Offers = models.Offers || model("Offers", OffersSchema);
export default Offers;