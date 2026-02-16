#!/bin/sh
set -e

# Install PHP dependencies if vendor folder is missing
if [ ! -d "vendor" ]; then
    echo "Installing Composer dependencies..."
    composer install --no-interaction --optimize-autoloader
fi

# Wait for database (simple sleep, ideally use wait-for-it)
echo "Waiting for database..."
sleep 10

# Run migrations
echo "Running migrations..."
php artisan migrate --force

# Start php-fpm
echo "Starting PHP-FPM..."
docker-php-entrypoint php-fpm