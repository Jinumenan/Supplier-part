import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    Card_Holder_Name: {
        type: String,
        required: true,
        validate: {
            validator: value => /^[a-zA-Z.]+$/.test(value), // Check if value contains only letters and dots
            message: 'Card holder name must contain only letters and dots'
        }
    },
    Name_of_Bank: {
        type: String,
        required: true,
        validate: {
            validator: value => /^[a-zA-Z.]+$/.test(value), // Check if value contains only letters and dots
            message: 'Name of bank must contain only letters and dots'
        }
    },
    Card_Number: {
        type: String,
        required: true,
        validate: {
            validator: value => /^[0-9]{16}$/.test(value), // Check if the value is a 16-digit number
            message: 'Card number must be a 16-digit number'
        }
    },
    cvc: {
        type: String,
        required: true,
        validate: {
            validator: value => /^[0-9]{3,4}$/.test(value), // Check if the value is a 3 or 4-digit number
            message: 'CVC must be a 3 or 4-digit number'
        }
    },
    Expiry_Month: {
        type: String,
        required: true
    },
    Expiry_Year: {
        type: String,
        required: true
    },
    Branch: {
        type: String,
        required: true,
        validate: {
            validator: value => /^[a-zA-Z.]+$/.test(value), // Check if value contains only letters and dots
            message: 'Branch must contain only letters and dots'
        }
    }
});

const paymentDetailsAdd = mongoose.model('PaymentSchema', PaymentSchema);

export default paymentDetailsAdd;
