// --------------->>>>>>>> Female Service Model Location <<<<<<<<-------------------
const { FemaleModel } = require("../model/female.model");


// --------->>>> GET <<<<<---------
const femaleGetData = async (req, res) => {
  try {
    const data = await FemaleModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
};


// --------->>>> POST <<<<<---------
const femalePostData = async (req, res) => {
  try {
    const payload = req.body;
    const data = new FemaleModel(payload);
    await data.save();
    res.status(201).send({
      success: true,
      message: "Data saved successfully",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "Bad request",
    });
  }
};

// --------->>>> PATCH <<<<<---------
const femalePatchData = async (req, res) => {
  try {
    const { ID } = req.params;
    const payload = req.body;
    await FemaleModel.findByIdAndUpdate({ _id: ID }, payload);
    res.status(200).send({
      success: true,
      message: "Data successfully modified",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "Bad request",
    });
  }
};

// --->>>> GET <<<<<---  ||  --->>>> GetSingle Service <<<<<---
const GetFemaleSingleData = async (req, res) => {
    try {
        const ID = req.params.id;
        const data = await FemaleModel.findById({ _id: ID })
        res.status(200).send({
           success: true,
           data,
        });
    }
    catch (error) {
      res.status(404).send({
      success: false,
      error: "Data not found",
    });
    }
}

// --------->>>> DELETE <<<<<---------
const FemaleDeleteData = async (req, res) => {
    try {
        const ID = req.params.id;
        await FemaleModel.findByIdAndDelete({ _id: ID })
        res.status(204).send({
            success: true,
            message: "Data successfully deleted",
        });
    }
    catch (error) {
      res.status(404).send({
        success: false,
        error: "Data not found",
      });
    }
}

module.exports = { FemaleGetData , GetFemaleSingleData , FemalePostData , FemalePatchData, FemaleDeleteData }

