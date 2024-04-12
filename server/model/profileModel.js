import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    Id: {
        type: String,
        required: true,
        validate: {
            validator: value => /^\d+$/.test(value), // Check if value is a number
            message: 'ID must contain only numbers'
        }
    },
    Name: {
        type: String,
        required: true,
        validate: {
            validator: value => /^[a-zA-Z\s.]+$/.test(value), // Check if value contains only letters and dots
            message: 'Name must contain only letters and dots'
        }
    },
    Email_address: {
        type: String,
        required: true,
        unique: true, // Ensure Email_address is unique
        validate: {
            validator: async function(value) {
                // Check if there's a document with the same Email_address
                const existingProfile = await this.constructor.findOne({ Email_address: value });
                return !existingProfile; // Return false if there's a profile with the same Email_address
            },
            message: 'Email address must be unique'
        }
    },
    Contact_No: {
        type: String,
        required: true,
        validate: {
            validator: value => /^\d+$/.test(value), // Check if value is a number
            message: 'Contact number must contain only numbers'
        }
    },
    NIC_number: {
        type: String,
        required: true,
        validate: {
            validator: value => /^\d+$/.test(value), // Check if value is a number
            message: 'NIC number must contain only numbers'
        }
    }
});

const profileAdd = mongoose.model('ProfileSchema', ProfileSchema);

export default profileAdd;
