import mongoose, { Schema } from "mongoose";

const articleSchema = new Schema({
  name: String,
  link: String,
});

const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;
