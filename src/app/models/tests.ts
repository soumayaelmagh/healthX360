import mongoose, { Schema } from "mongoose";

const testSchema = new Schema({
  questions: Array,
  answers: Array,
  scoring: Array,
  title: String,
  introduction: String,
  article: String,
});

const Test = mongoose.models.Test || mongoose.model("Test", testSchema);

export default Test;
