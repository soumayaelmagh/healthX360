import mongoose, { Schema } from "mongoose";

const podcastSchema = new Schema({
  title: String,
  youtubeId: String,
});

const Podcast =
  mongoose.models.Podcast || mongoose.model("Podcast", podcastSchema);

export default Podcast;
