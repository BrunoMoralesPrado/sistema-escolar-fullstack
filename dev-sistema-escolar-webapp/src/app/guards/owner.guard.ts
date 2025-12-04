import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { FacadeService } from '../services/facade.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {

  constructor(
    private facadeService: FacadeService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // 1. Obtenemos el rol y el ID del usuario logueado
    const rolUsuario = this.facadeService.getUserGroup();
    const idUsuario = Number(this.facadeService.getUserId());

    // 2. Obtenemos el ID que intentan visitar en la URL (ej: .../5)
    const idUrl = Number(route.paramMap.get('id'));

    // REGLA 1: Si es Administrador, tiene llave maestra. Pasa.
    if (rolUsuario === 'administrador') {
      return true;
    }

    // REGLA 2: Si no es admin, el ID de la URL debe coincidir con SU ID.
    if (idUrl === idUsuario) {
      return true; // Es su propio perfil, pasa.
    }

    // Si llega aquí, es un Alumno/Maestro queriendo ver el perfil de otro.
    console.warn("Intento de acceso no autorizado a perfil ajeno.");
    this.router.navigate(['/home']); // Lo pateamos al inicio
    return false;
  }
}
