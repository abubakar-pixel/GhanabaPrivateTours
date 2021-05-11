const Joi = require('joi')

const registerValidator = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } 
        .required(),

    password: Joi.string()
        .alphanum()
        .min(8)
        .required(),

    nationality: Joi.string()
        .required()
        .country(),

    idType: Joi.string()
        .required(),

    idNumber: Joi.string()
        .required(),

    nameOnID: Joi.string()
        .required(),

    address: Joi.string()
        .required(),

    licenseNumber: Joi.string()
        .required()
        .unique()
})