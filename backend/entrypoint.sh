#!/bin/bash

# Instalar dependencias si falta la carpeta vendor
if [ ! -d "vendor" ]; then
    composer install --no-interaction --optimize-autoloader
fi

# Generar clave si no existe
if [ -z "$APP_KEY" ]; then
    php artisan key:generate --force
fi

# Instalar API si es necesario (Laravel 11+)
php artisan install:api --no-interaction

# Limpiar caches
php artisan config:cache
php artisan route:cache

# Iniciar PHP-FPM
php-fpm
