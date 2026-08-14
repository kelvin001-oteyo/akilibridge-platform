const Joi = require('joi');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join('.'),
        message: detail.message,
      }));
      
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors,
      });
    }
    
    next();
  };
};

const schemas = {
  login: Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Please enter a valid email address',
      'any.required': 'Email is required',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': 'Password must be at least 6 characters',
      'any.required': 'Password is required',
    }),
  }),

  mentorCreate: Joi.object({
    name: Joi.string().required().min(2).max(100),
    title: Joi.string().required().min(2).max(100),
    bio: Joi.string().required().min(10).max(1000),
    imageUrl: Joi.string().uri().allow('', null),
    expertise: Joi.array().items(Joi.string()).min(1),
  }),

  mentorUpdate: Joi.object({
    name: Joi.string().min(2).max(100),
    title: Joi.string().min(2).max(100),
    bio: Joi.string().min(10).max(1000),
    imageUrl: Joi.string().uri().allow('', null),
    expertise: Joi.array().items(Joi.string()),
  }),

  trackCreate: Joi.object({
    name: Joi.string().required().min(2).max(100),
    description: Joi.string().required().min(10).max(500),
    icon: Joi.string().allow('', null),
    color: Joi.string().pattern(/^#[0-9a-fA-F]{6}$/).allow('', null),
  }),

  trackUpdate: Joi.object({
    name: Joi.string().min(2).max(100),
    description: Joi.string().min(10).max(500),
    icon: Joi.string().allow('', null),
    color: Joi.string().pattern(/^#[0-9a-fA-F]{6}$/).allow('', null),
  }),

  faqCreate: Joi.object({
    question: Joi.string().required().min(5).max(500),
    answer: Joi.string().required().min(10).max(2000),
    category: Joi.string().valid('Eligibility', 'Process', 'Logistics', 'After').required(),
    order: Joi.number().integer().min(0).default(0),
  }),

  faqUpdate: Joi.object({
    question: Joi.string().min(5).max(500),
    answer: Joi.string().min(10).max(2000),
    category: Joi.string().valid('Eligibility', 'Process', 'Logistics', 'After'),
    order: Joi.number().integer().min(0),
  }),
};

module.exports = {
  validateRequest,
  schemas,
};