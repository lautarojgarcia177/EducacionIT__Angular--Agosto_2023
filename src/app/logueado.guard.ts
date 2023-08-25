import { CanActivateFn, Router } from '@angular/router';
import { LOCALSTORAGE_ENTRY__USUARIO_LOGUEADO } from './login/login.component';
import { inject } from '@angular/core';

export const logueadoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const logueado = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_ENTRY__USUARIO_LOGUEADO)!
  );
  if (logueado) {
    return true;
  }
  return router.parseUrl('/debe-loguearse');
};
