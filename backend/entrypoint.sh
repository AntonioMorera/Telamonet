#!/bin/bash

# 1. Asegurar archivo .env
if [ ! -f ".env" ]; then
    cp .env.example .env
fi

# 2. Instalar dependencias de PHP solo si falta la carpeta vendor
if [ ! -d "vendor" ]; then
    echo "Instalando dependencias de PHP (composer)..."
    composer install --no-interaction --optimize-autoloader
fi

# 3. Generar clave si no existe
if ! grep -q "APP_KEY=base64" .env; then
    php artisan key:generate --force
fi

# 4. Instalar API solo si no existe el archivo de rutas
if [ ! -f "routes/api.php" ]; then
    echo "Configurando API de Laravel..."
    php artisan install:api --no-interaction
fi

# 5. Instalar dependencias de Node solo si falta node_modules
if [ ! -d "node_modules" ]; then
    echo "Instalando dependencias de Node..."
    npm install
fi

# 6. Construir assets solo si no existe la carpeta build
if [ ! -d "public/build" ]; then
    echo "Compilando assets por primera vez..."
    npm run build
fi

# 7. Limpiar caches para desarrollo (rápido y evita errores)
php artisan config:clear
php artisan route:clear

# Iniciar PHP-FPM
echo "Backend listo para recibir conexiones."
php-fpm
