const jBolt = require('../models/customer');
const fs = require('fs')
var moment = require("moment");
var _ = require("lodash");


exports.addCustomer = (req, res) => {
  const {firstName, middleName, lastName, Address, mobileNumber, landlineNumber, lastFourDigitCC} = req.body;
  let DateCreated = moment().format('l');
  let status = 'Unverified';
  let completeId = new jBolt({ firstName, middleName, lastName, Address, mobileNumber, landlineNumber, lastFourDigitCC, status, DateCreated});
  

  completeId.save((err, data) => {
      if (err) {
          console.log(err)
          return res.status(400).json({
              error: err.errmsg
           
          });
      }

      res.json('Success : Added jBolt '); // dont do this res.json({ tag: data });
  });
};

exports.getPaginatedSearchCustomer = (req, res) => {
  const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;
  const page = req.query.page ? parseInt(req.query.page) : 1;

  const Name = req.query.Name;
  const Code = req.query.Code;
  if (Name) {
    jBolt.count({}).exec((err, total) => {
        jBolt.find({ $or: [{ FirstName: { $regex: Name, $options: 'i' } }] }).skip((page - 1) * pagination).limit(pagination).sort({ "Name": 1 }).exec((err, tag) => {
                if (err) {
                  return res.status(400).json({
                      error: 'jBolt not found'
                  });
              }

              res.json({
                  "identifier": "get all jBolt list", tag,
                  pagination, page, total
              });

          });
      });
  } else if (Code) {
    jBolt.count({}).exec((err, total) => {
        jBolt.find({
              $or: [
                  { IdNumber: { $regex: Code, $options: 'i' } }
              ]
          }).skip((page - 1) * pagination).limit(pagination).exec((err, tag) => {
              if (err) {
                  return res.status(400).json({
                      error: 'jBolt not found'
                  });
              }
              res.json({
                  "identifier": "get all jBolt list", tag,
                  pagination, page, total
              });
          });
      });

  } else {

    jBolt.count({}).exec((err, total) => {

        jBolt.find({}).skip((page - 1) * pagination).limit(pagination).exec((err, tag) => {
              if (err) {
                  return res.status(400).json({
                      error: 'Dynabolt not found'
                  });
              }
              for (let val of tag) {
                  let TypeID = (val.TypeID);
                  jBolt.find({ _id: TypeID }).exec((err, tag) => {
        
                  });
              }
              res.json({ "identifier": "get all jBolt list", tag, pagination, page, total });

          });
      });
  }
};

exports.getCustomer = (req, res) => {
  

    jBolt.find({}).exec((err, allUser) => {
      if (err) {
          return res.status(400).json({
              error: 'turnBuckle not found'
          });
      }
      res.json({
          "identifier": "get ALL jBolt", allUser
      });
});
};

exports.getOneJbolt = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  jBolt.findOne({ _id: slug }).exec((err, allUser) => {
      if (err) {
          return res.status(400).json({
              error: 'jBolt not found'
          });
      }
      res.json({
          "identifier": "get One jBolt", allUser
      });
});
};


exports.updateCustomer = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  var myquery = { _id: slug }
  var newV = req.body;
  jBolt.updateOne(myquery, newV).exec((err, tag) => {
      if (err) {
          return res.status(400).json({
              error: 'cant update client'
          });
      }
      res.json( {"identifier" : "updated jBolt"});
  });
};