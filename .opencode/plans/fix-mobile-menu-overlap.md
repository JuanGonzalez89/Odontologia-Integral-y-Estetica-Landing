# Fix: Panel mobile superpuesto al header cuando está cerrado

## Bug
El panel mobile usa `-translate-y-full` para ocultarse, pero como está posicionado en `absolute top-full` (debajo del nav), `-translate-y-full` lo sube solo ~179px, dejando los últimos 2 ítems ("Sobre nosotros" y "Contacto") visibles dentro del área del nav (0-64px) y robando eventos de pointer.

## Fix
En `src/components/Header.tsx`, línea 73-75:

Cambiar de:

```
menuAbierto ? "translate-y-0" : "-translate-y-full"
```

a:

```
menuAbierto ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2"
```

Y cambiar `transition-transform duration-200` a `transition-all duration-200`.

## Verificación
1. `npm run build` → 0 errores
2. Playwright test: abrir menú, confirmar que los 4 links aparecen completos
3. Cerrar menú → panel invisible, no intercepta clicks

## Resultado esperado
- Panel cerrado: invisible, no ocupa hit-test, animación sutil de 8px + fade
- Panel abierto: aparece debajo del nav con los 4 links completos y visibles
