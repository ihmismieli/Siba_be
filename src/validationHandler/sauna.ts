import {
  createBoolValidatorChain,
  createDateValidatorChain,
  createIdValidatorChain,
  createMultiBoolValidatorChain,
  createMultiNumberValidatorChain,
  createNameValidatorChain,
  createNumberCountNonZeroIntegerValidatorChain,
  createNumberValidatorChain,
  validateDescription,
  validateIdObl,
  validateMultiDescription,
  validateMultiNameObl,
  validateNameObl,
} from './index.js';

export const validateSaunaPost = [
  ...validateNameObl,
  ...createNumberValidatorChain('temperature'),
  ...createBoolValidatorChain('isPublic'),
  ...createDateValidatorChain('opened'),
];
