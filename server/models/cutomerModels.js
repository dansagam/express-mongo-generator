import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema(
   {
      first_name: {
         type: String,
         required: true
      },
      middle_name: {
         type: String,
      },
      last_name: {
         type: String,
         required: true,
      },
      mobile_number: {
         type: String,
         required: true
      },
      additional_phone_number: {
         type: Number
      },
      age: {
         type: String,
         required: true
      },
      dob: {
         type: Date
      }
   },
   {
      timestamps: true
   }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer