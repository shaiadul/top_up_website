import { Schema, model, models } from "mongoose";

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
  Offers: {
    type: String,
    required: [true, "offers is required."],
  },
});

const Offers = models.Offers || model("Offers", OffersSchema);
export default Offers;