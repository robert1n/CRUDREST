const db = require('../models');
const { Op } = require('sequelize');

const Person = db.Person;

exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Person.findAll();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPerson = async (req, res) => {

};

exports.getPersonByCPF = async (req, res) => {

};

exports.updatePerson = async (req, res) => {
  
};

exports.deletePerson = async (req, res) => {
  
};