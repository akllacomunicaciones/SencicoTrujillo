# 🚀 Guía de Despliegue SENCICO Trujillo

## 📦 Preparación del Proyecto para GitHub y Render

Esta guía te ayudará a subir tu proyecto a GitHub y desplegarlo en Render correctamente.

---

## 1️⃣ Preparar las Imágenes

### ✅ Paso 1: Descargar Imágenes desde Figma Make

Necesitas descargar **25 imágenes** en total:

#### Logo (1 imagen)
- `logo-sencico.png` - Logo oficial de SENCICO

#### Personal (18 imágenes)
- `ana-espinoza.png`
- `luzdeni-velarde.png`
- `nelson-vera.png`
- `alber-alvarez.png`
- `angie-jara.png`
- `mariela-rojas.png`
- `andy-marcelo.png`
- `liz-rios.png`
- `cesar-palacios.png`
- `ronald-montoya.png`
- `jairo-flores.png`
- `docente-4.png`
- `jesus-maldonado.png`
- `jorge-watanabe.png`
- `director-1.png`
- `director-2.png`
- `director-3.png`
- `director-4.png`
- `docente-principal.png`

#### Embajadores (3 imágenes - OPCIONAL)
- `embajador-1.png`
- `embajador-2.png`
- `embajador-3.png`

### ✅ Paso 2: Guardar Imágenes

1. Coloca TODAS las imágenes en la carpeta `/public/images/`
2. Usa los nombres EXACTOS de la lista (minúsculas, con guiones)
3. Formato: PNG o JPG (preferible PNG)
4. Tamaño: Menos de 500KB por imagen

---

## 2️⃣ Subir a GitHub

### Opción A: Usando Git desde la Terminal

```bash
# 1. Inicializar repositorio (si no lo has hecho)
git init

# 2. Agregar archivos
git add .

# 3. Hacer commit
git commit -m "Proyecto SENCICO Trujillo completo con imágenes"

# 4. Conectar con GitHub (reemplaza con tu URL)
git remote add origin https://github.com/TU-USUARIO/sencico-trujillo.git

# 5. Subir a GitHub
git push -u origin main
```

### Opción B: Usando GitHub Desktop

1. Abre GitHub Desktop
2. Selecciona "Add Existing Repository"
3. Elige la carpeta de tu proyecto
4. Haz commit de todos los archivos
5. Click en "Publish repository"

---

## 3️⃣ Configurar Render

### ✅ Paso 1: Crear cuenta en Render

1. Ve a [https://render.com](https://render.com)
2. Regístrate con tu cuenta de GitHub
3. Autoriza a Render para acceder a tus repositorios

### ✅ Paso 2: Crear Web Service

1. Click en "New +" → "Web Service"
2. Conecta tu repositorio de GitHub
3. Selecciona el repositorio de SENCICO Trujillo

### ✅ Paso 3: Configuración de Render

Usa esta configuración EXACTA:

```
Name: sencico-trujillo (o el nombre que prefieras)
Region: Oregon (US West) o el más cercano
Branch: main
Root Directory: (dejar vacío)
Runtime: Node
Build Command: npm install && npm run build
Start Command: npm run start
```

### ✅ Paso 4: Configuración Avanzada

**Publish Directory:**
- Si usas Vite → `dist`
- Si usas Create React App → `build`
- Si no estás seguro → `dist`

**Auto-Deploy:** YES (habilitado)

**Environment Variables:** (Ninguna necesaria por ahora)

---

## 4️⃣ Solucionar Error "Publish directory dist does not exist"

Si ves este error, sigue estos pasos:

### Solución 1: Crear archivo `vite.config.js`

Crea un archivo en la raíz de tu proyecto llamado `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
```

### Solución 2: Actualizar `package.json`

Asegúrate de que tu `package.json` tenga estos scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Solución 3: Cambiar Publish Directory en Render

1. Ve a tu servicio en Render
2. Settings → Build & Deploy
3. Cambia "Publish Directory" de `dist` a:
   - Intenta: `build`
   - Si no funciona: `.` (punto, significa raíz)

---

## 5️⃣ Verificación Final

### ✅ Checklist Pre-Deploy

- [ ] Todas las imágenes están en `/public/images/`
- [ ] Los nombres de las imágenes coinciden EXACTAMENTE
- [ ] El código está subido a GitHub
- [ ] `package.json` tiene el script `build`
- [ ] Render está configurado correctamente

### ✅ Después del Deploy

1. **Espera 3-5 minutos** - El primer deploy toma tiempo
2. Revisa los **logs de build** en Render
3. Si hay errores, cópialos y busca la solución

---

## 🐛 Solución de Problemas Comunes

### Problema 1: Imágenes no aparecen
**Solución:**
- Verifica que estén en `/public/images/`
- Revisa que los nombres sean exactos (minúsculas, con guiones)
- Limpia la caché del navegador

### Problema 2: Build falla en Render
**Solución:**
- Revisa los logs de build en Render
- Asegúrate de que `npm install && npm run build` funcione localmente
- Verifica que no haya errores de TypeScript

### Problema 3: Página en blanco después del deploy
**Solución:**
- Revisa la consola del navegador (F12)
- Verifica que el "Publish Directory" sea correcto
- Asegúrate de que `/App.tsx` tenga `export default`

### Problema 4: Rutas no funcionan (404)
**Solución:**
Crea archivo `_redirects` en `/public/`:
```
/*    /index.html   200
```

---

## 📞 Contacto y Soporte

**Proyecto:** SENCICO Sede Trujillo  
**Desarrollado por:** Aklla Group  
**Linktree:** [https://linktr.ee/akllacomunicaciones](https://linktr.ee/akllacomunicaciones?fbclid=PAZXh0bgNhZW0CMTEAAaa4Wcz31SDy1m439EFraaEcRJRi41O39oX9LDBvyVEeN0ZXwEMe7t34Gdg_aem_N38EnUGBO2UH8erJM7iAsA)

---

## ✅ ¡Todo Listo!

Una vez completados todos los pasos, tu sitio estará en línea en:
```
https://tu-proyecto.onrender.com
```

Render te dará una URL automática. Puedes cambiarla o conectar un dominio personalizado en Settings.

---

**Última actualización:** Diciembre 2024