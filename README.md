# BeastMode App - Frontend Mobile Login

Aplicación móvil de BeastModeApp

---

## Requisitos previos

- Node.js (v16+)
- npm
- Expo CLI 
- Backend: PostgreSQL configurado y corriendo
- Conexión en red entre móvil/emulador y backend (IP accesible)
- Editor de código (VSCode recomendado)

---

## 1. Correr el backend

Metete aquí y sigue los pasos.

[Repositorio Backend](https://github.com/antoniocmizv/BeastMode-App.git)

## 2. Para correr la interfaz

Copiate el Respositorio.

[Repositorio Movil](https://github.com/Mariortega83/loginBeastv.1.git)
y ejecuta lo siguiente:
```bash
git clone https://github.com/Mariortega83/loginBeastv.1.git

cd loginBeastv.1

npm install
```
## 3. Con las dependencias instaladas 

Crea un .env en la raíz del proyecto con la URL de la API, no pongas localhost. (Saltaros esto, leer abajo)

   ```env
     API_URL='http://tuIP:3000'
   ```

Nada no hagais caso de esto, me las he dado de listo y usar el dotenv el solo para el back con node, abrir el proyecto en el VS CODE id a AuthContext.tsx y cambiar la API_URL con vuestra IP sin usar el localhost eeee ya lo digo. En android va bien, hay que añadir verificación de campos y si queremos añadir usuarios desde ahí otro formulario con el nombre, que es lo que pide el POST.

## 4. Correr la interfaz

Depende de lo que tengas se hará de una forma u otra, de momento con un emulador de android se hace así:

```bash
npx expo start
```

Cuando este arrancado en la terminal, le damos a la ' a ', para que detecte el emulador, si no escanea el QR anda. Si no funciona contacta conmigo.

## Stay Tunned comming soon...

