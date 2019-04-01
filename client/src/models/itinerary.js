import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;
const ItinerySchema = new Schema({
    title: {
        type: String
    },
    profilePic: {
        type: String
    },
    rating: {
        type: Number
    },
    duration: {
        type: Number
    },
    price: {
        type: Number
    },
    hashtag: {
        type: Array
    }
});

export default Itinerary = model("itinerary", ItinerySchema);