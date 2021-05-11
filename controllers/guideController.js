const Guide = require("../models/guide");

getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.find();
    res.status(200).json({ guides });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleGuide = async (req, res) => {
  try {
    const { id } = req.params;
    const guide = await Guide.findById();
    res.status(500).json({ error: error.message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateGuide = async (req, res) => {
    try {
        const {id} = req.params;
        const guide = await Guide.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ guide })
    } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteGuide = async (req, res) => {
    try {
        const { id } = req.params;
        await Guide.findByIdAndDelete(id);
        res.status(200).json({ message: "guide deleted successfully!"})
    } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
    getAllGuides,
    getSingleGuide,
    updateGuide,
    deleteGuide,
};
