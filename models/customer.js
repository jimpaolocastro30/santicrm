const mongoose = require('mongoose');
const crypto = require('crypto');

const customerSchema = new mongoose.Schema(
    { 
      firstName: {
      type: String,
    },
      middleName: {
      type: String,
    },
      lastName: {
      type: String,
    },
      Address: {
      type: String,
    },
      mobileNumber: {
      type: String,
    },
      landlineNumber: {
      type: String,
    },
      lastFourDigitCC: {
      type: String,
    },
      status: {
      type: String,
    
    },
     invitationCode: {
      type: String,
    },
      DateCreated:{
      type:Date
    },
    },
    { timestamp: true }
);

module.exports = mongoose.model('customer', customerSchema);
