import { RoleName, RoleRequired, User } from '../custom.js';

declare global {
  namespace Express {
    export interface Request {
      // For keeping the from token decrypted user obj in request
      user: User;

      // For tracking the needed roles for currently handled request
      areRolesRequired: RoleRequired;
      requiredRolesList: RoleName[];
    }
  }
}
