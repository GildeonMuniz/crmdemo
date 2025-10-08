import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { FeatureService } from '../services/feature.service';

/**
 * Guard para proteger rotas que podem estar desabilitadas
 */
export const featureGuard: CanActivateFn = (route, state) => {
  const featureService = inject(FeatureService);
  const router = inject(Router);

  // Extrai o nome da feature da rota
  let routePath = route.routeConfig?.path;

  if (!routePath) {
    return true;
  }

  // Mapeia rotas com parâmetros para suas features correspondentes
  if (routePath.includes(':id')) {
    routePath = 'leadDetail';
  }

  // Verifica se a rota está habilitada
  const isEnabled = featureService.isRouteEnabled(routePath as any);

  if (!isEnabled) {
    console.warn(`Tentativa de acesso a rota desabilitada: ${routePath}`);
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
