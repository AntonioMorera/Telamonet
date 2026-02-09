FROM node:20-alpine
WORKDIR /app

# Instalar dependencias del sistema
RUN apk add --no-cache python3 make g++

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer puerto de Vite
EXPOSE 5173

# Comando de inicio para desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
