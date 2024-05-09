/* INSTALAR:
- npm i @vitejs/plugin-react -E
- npm i react react dom -E
- npm i standard -D
  -> y añadir en package.json:
     "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }

Testing con PLAYWRIGHT:
- npm init playwright@latest
*/
/* Renombrar la extensión del archivo main.js a main.jsx 
y referenciarlo correctamente en el index.html*/

/* Crear el archivo vite.config.js y añadir las siguientes líneas:*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
