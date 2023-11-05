
import { body } from 'express-validator';


const signupValidationRules = () => {
    
    const passwordValidation = body('password')
      .isString()
      .not()
      .isEmpty()
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters')
      .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      .withMessage('Password must contain at least one letter, one number, and one special character');
  
    const firstnameValidation = body('firstname')
      .isString()
      .not()
      .isEmpty()
      .withMessage('First name is required');
  
    const lastnameValidation = body('lastname')
      .isString()
      .not()
      .isEmpty()
      .withMessage('Last name is required');
  
    const usernameValidation = body('username')
      .isString()
      .not()
      .isEmpty()
      .withMessage('Username is required')
      .isLength({ min: 8 })
      .withMessage('username must be at least 8 characters')
      
  
    const emailValidation = body('email')
      .trim()
      .isString()
      .not()
      .isEmpty()
      .isEmail()
      .withMessage('Valid email is required');
  
    return [
      firstnameValidation,
      lastnameValidation,
      usernameValidation,
      emailValidation,
      passwordValidation,
    ];
};

export default signupValidationRules;