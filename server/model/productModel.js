import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    Id: {
        type: String,
        required: true,
        unique: true, // Ensure Id is unique
        validate: {
            validator: value => /^\d+$/.test(value), // Check if value is a number
            message: 'ID must contain only numbers'
        }
    },
    name: {
        type: String,
        required: true,
        validate: {
            validator: value => /^[a-zA-Z\s.]+$/.test(value), // Check if value contains only letters and dots
            message: 'Name must contain only letters and dots'
        }
    },
    qty: {
        type: Number, 
        required: true,
        validate: {
            validator: Number.isInteger, 
            message: "Quantity must be an integer"
        }
    },
    netweight: {
        type: String,
        required: true,
        validate: {
            validator: value => /^[0-9]*(\.[0-9]+)?$/.test(value), 
            message: "Netweight must be a number or decimal"
        }
    },
    unitprice: {
        type: Number, 
        required: true,
        validate: {
            validator: value => /^[0-9]*(\.[0-9]+)?$/.test(value), 
            message: "Unit price must be a number or decimal"
        }
    },
    totalprice: {
        type: Number,
        required: true,
        validate: {
            validator: value => /^[0-9]*(\.[0-9]+)?$/.test(value), 
            message: "Total price must be a number or decimal"
        }
    }
});

// Custom validation for ensuring unique name for each Id
SupplierSchema.path('name').validate(async function(value) {
    // Check if there's a document with the same Id but a different name
    const existingProduct = await this.constructor.findOne({ Id: this.Id, name: { $ne: value } });
    return !existingProduct; // Return false if there's a product with the same Id but different name
}, 'A product with the same ID but a different name already exists');

const itemAdd = mongoose.model("SupplierSchema", SupplierSchema);
export default itemAdd;
