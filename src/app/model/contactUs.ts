import mongoose, { Schema, Document } from "mongoose";

export interface ContactUs extends Document {
  name: string;
  email: string;
  message: string;
  subject: string; // Changed to string
  
}

const ContactUsSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  subject: { type: String, required: true }, // Changed to string
  
});

// Check if the model already exists to avoid OverwriteModelError
const ContactUsModel =
  mongoose.models.ContactUs ||
  mongoose.model<ContactUs>("ContactUs", ContactUsSchema);

export default ContactUsModel;
