# Usa una imagen oficial de Node.js como base
FROM node:16

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia todo el código fuente de la aplicación
COPY . .

# Expone el puerto en el que la aplicación escucha
EXPOSE 8004

# Inicia la aplicación
CMD ["npm" , "start"]