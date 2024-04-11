const joi = require('joi');
const { password } = require('../../../models/users-schema');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      password_confirm: joi
        .string()
        .min(6)
        .max(32)
        .required()
        .label('Password Confirmation'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changeUserPassword: {
    body: {
      oldPassword: joi.string().min(6).max(32).required().label('Old Password'),
      newPassword: joi.string().min(6).max(32).required().label('New Password'),
      confirmPassword: joi
        .string()
        .min(6)
        .max(32)
        .required()
        .label('Confirm Password'),
    },
  },
};
