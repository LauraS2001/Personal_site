import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.LoggedIn()) {
    return true; // Allow the access to authenticated users
  } else {
    router.navigate(['/Login']); // Navigate to Login
    return false; // Deny the navigation to the route
  }
};
