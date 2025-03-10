import { RoleName, RoleRequired, User } from '../custom.js';

declare global {
  namespace Express {
    export interface Request {
      // This is the second part/extension of interface Request,
      // the main part is imported from library 'express'.

      // For keeping the from token decrypted user obj in request
      user: User;

      // For tracking the needed roles for currently handled request
      areRolesRequired: RoleRequired;
      requiredRolesList: RoleName[];
    }
  }
}
