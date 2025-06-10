/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Habilita el modo estático (obligatorio para GitHub Pages)
  basePath: process.env.NODE_ENV === "production" ? "/unilink" : "", // Cambia "nombre-repositorio" por el nombre de tu repo
  assetPrefix: process.env.NODE_ENV === "production" ? "/unilink/" : "", // Para assets (CSS/JS/imágenes)
};

module.exports = nextConfig;