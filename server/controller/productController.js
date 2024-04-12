import supplierProduct from "../model/productModel.js";


//Data Create
export const CreateProductDetails = async (req, res) => {
    const {Id,name,qty,netweight,unitprice,totalprice} = req.body;
  
    try{
      const newDetails = new supplierProduct({
        Id,name,qty,netweight,unitprice,totalprice
      })
      await newDetails.save();
      res.status(201).json({ message: "Product details created successfully", data: newDetails });

    }
   catch  (error){
    console.error("Error creating product details:", error);
    res.status(500).json({ message: "Failed to create product details" });
}

};

//Read details by id
export const getAllProductDetails = async (req, res) => {
    try {
        const allDetails = await supplierProduct.find();
        if (!allDetails || allDetails.length === 0) {
            return res.status(404).json({ message: "No details found" });
        }
        res.json({ message: "Details found", data: allDetails });
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ message: "Failed to fetch details" });
        }
    };

//Read details by id
export const getOneProductDetail = async (req, res) => {
    try {
        const oneDetails = await supplierProduct.findById(req.params.id);
        if (!oneDetails) {
            return res.status(404).json({ message: "No details found" });
        }
        res.json({ message: "Details found", data: oneDetails });
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ message: "Failed to fetch details" });
        }
    };

// Update details by ID
export const updateProductDetailsById = async (req, res) => {
    const { id } = req.params;
    const {Id,name,qty,netweight,unitprice,totalprice} = req.body;

    try {
        const updatedDetails = await supplierProduct.findByIdAndUpdate(id, {
            Id,name,qty,netweight,unitprice,totalprice
        }, { new: true });

        if (!updatedDetails) {
            return res.status(404).json({ message: "Details not found" });
        }
        res.json({ message: "Details updated successfully", data: updatedDetails });
    } catch (error) {
        console.error("Error updating details:", error);
        res.status(500).json({ message: "Failed to update details" });
}
};

// Delete details by ID
export const deleteProductDetailsById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedDetails = await supplierProduct.findByIdAndDelete(id);
        if (!deletedDetails) {
            return res.status(404).json({ message: "Details not found" });
        }
        res.json({ message: "Details deleted successfully", data: deletedDetails });
    } catch (error) {
        console.error("Error deleting details:", error);
        res.status(500).json({ message: "Failed to delete details" });
        }
    };






