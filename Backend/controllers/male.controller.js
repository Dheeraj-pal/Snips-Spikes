// --------------->>>>>>>> Male Service Model Location <<<<<<<<-------------------
const { MaleModel } = require("../model/male.model");



// --------->>>> GET <<<<<---------
const MaleGetData = async (req, res) => {
    try {
    const data = await MaleModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
}

// --->>>> GET <<<<<---  ||  --->>>> GetSingle Service <<<<<---
const getMaleSingleData = async (req, res) => {
try {
    const { id } = req.params;
    const data = await MaleModel.findById(id);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      error: "Data not found",
    });
  }
}


// --------->>>> POST <<<<<---------
const MalePostData = async (req, res) => {
  try {
    const payload = req.body;
    const data = new MaleModel(payload);
    await data.save();
    res.status(201).send({
      success: true,
      message: "Data saved successfully",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
}

// --------->>>> PATCH <<<<<---------
const MalePatchData = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    await MaleModel.findByIdAndUpdate(id, payload);
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
}

// --------->>>> DELETE <<<<<---------
const MaleDeleteData = async (req, res) => {
  try {
    const { id } = req.params;
    await MaleModel.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send({
      success: false,
      error: "Data not found",
    });
  }
}

module.exports = {  MaleGetData, getMaleSingleData,MalePostData, MalePatchData, MaleDeleteData }
