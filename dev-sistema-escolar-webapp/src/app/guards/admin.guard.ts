import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { FacadeService } from '../services/facade.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private facadeService: FacadeService,
    private router: Router
  ) { }

  canActivate(): boolean {
    // 1. Preguntamos al servicio qué rol tiene el usuario
    const rol = this.facadeService.getUserGroup();

    // 2. Si es Administrador, lo dejamos pasar (Return True)
    if (rol === 'administrador') {
      return true;
    }

    // 3. Si NO es admin, lo pateamos al home y devolvemos False
    console.warn('Alerta de Seguridad: Usuario no autorizado intentó entrar a registro.');
    this.router.navigate(['/home']);
    return false;
  }
}
