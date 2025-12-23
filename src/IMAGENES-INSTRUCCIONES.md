# 📸 INSTRUCCIONES RÁPIDAS - IMÁGENES SENCICO TRUJILLO

## 🎯 RESUMEN EJECUTIVO

**Problema:** Las imágenes no aparecen en GitHub/Render porque usan `figma:asset/` que solo funciona en Figma Make.

**Solución:** Descargar las imágenes y guardarlas en `/public/images/` con nombres específicos.

---

## ✅ LISTA DE 25 IMÁGENES NECESARIAS

### 📥 PASO 1: Descargar estas imágenes

Copia esta lista y marca cada una cuando la descargues:

**Logo:**
- [ ] `logo-sencico.png` - Logo oficial SENCICO

**Personal Administrativo (9 personas):**
- [ ] `ana-espinoza.png` - Ana Espinoza Cárdenas
- [ ] `luzdeni-velarde.png` - Luzdeni Velarde Burgos
- [ ] `nelson-vera.png` - Nelson Vera Escalante
- [ ] `alber-alvarez.png` - Alber Alvarez Bustamante
- [ ] `angie-jara.png` - Angie Jara Vásquez
- [ ] `mariela-rojas.png` - Mariela Rojas Vazquez
- [ ] `andy-marcelo.png` - Andy Marcelo Díaz
- [ ] `liz-rios.png` - Liz Rios Varas
- [ ] `juan-castillo.png` - Juan Castillo (si disponible)

**Docentes (10 personas):**
- [ ] `ronald-montoya.png` - Ronald Montoya
- [ ] `jairo-flores.png` - Jairo Flores
- [ ] `docente-4.png` - Alberto Flores Guerrero
- [ ] `jesus-maldonado.png` - Jesús Maldonado
- [ ] `jorge-watanabe.png` - Jorge Wuatanabe Ibáñez
- [ ] `director-1.png` - Humberto Castillo Chávez
- [ ] `director-2.png` - Jhony Castillo
- [ ] `director-3.png` - Juan Guillén
- [ ] `director-4.png` - Jackeline Machuca / Alex Arribasplata
- [ ] `docente-principal.png` - Docente principal

**Embajadores (3 imágenes - OPCIONAL):**
- [ ] `embajador-1.png` (opcional - ya usa placeholder)
- [ ] `embajador-2.png` (opcional - ya usa placeholder)
- [ ] `embajador-3.png` (opcional - ya usa placeholder)

---

## 📂 PASO 2: Dónde Guardar

```
tu-proyecto/
└── public/
    └── images/          ← AQUÍ van TODAS las imágenes
        ├── logo-sencico.png
        ├── ana-espinoza.png
        ├── luzdeni-velarde.png
        └── ... (todas las demás)
```

---

## 🔧 PASO 3: Formato y Tamaño

✅ **Formato:** PNG o JPG (preferible PNG)  
✅ **Tamaño máximo:** 500KB por imagen  
✅ **Nombres:** EXACTAMENTE como en la lista (minúsculas, con guiones)  
✅ **Dimensiones recomendadas:** 
   - Logo: 400x400px
   - Personas: 800x800px o más

---

## 🚀 PASO 4: Subir a GitHub

```bash
# Agregar las imágenes
git add public/images/

# Commit
git commit -m "Agregar imágenes del equipo SENCICO"

# Push
git push origin main
```

---

## 🌐 PASO 5: Deploy en Render

### Configuración en Render:

1. **Build Command:**  
   ```
   npm install && npm run build
   ```

2. **Publish Directory:**  
   ```
   dist
   ```
   
   Si no funciona, prueba: `build` o `.`

3. **Auto-Deploy:** ✅ Activado

---

## ⚠️ NOMBRES EXACTOS - IMPORTANTE

| ❌ MAL | ✅ BIEN |
|---------|----------|
| `Ana Espinoza.png` | `ana-espinoza.png` |
| `Logo SENCICO.PNG` | `logo-sencico.png` |
| `Director_1.jpg` | `director-1.png` |
| `ronald montoya.png` | `ronald-montoya.png` |

---

## 🔍 VERIFICACIÓN

Después de subir las imágenes, verifica:

1. ✅ Están en `/public/images/`
2. ✅ Los nombres son exactos (minúsculas, guiones)
3. ✅ El logo aparece en la navegación
4. ✅ Las fotos del equipo se ven en "Nuestro Equipo"
5. ✅ No hay errores 404 en la consola del navegador (F12)

---

## 🆘 SOLUCIÓN RÁPIDA SI NO FUNCIONAN

### Si las imágenes no aparecen:

1. **Limpia la caché:**
   - Chrome/Edge: Ctrl + Shift + Delete
   - Firefox: Ctrl + Shift + Del
   - Safari: Cmd + Option + E

2. **Verifica la ruta:**
   - En el navegador, intenta acceder: `https://tu-sitio.com/images/logo-sencico.png`
   - Si da 404, la imagen no está donde debería

3. **Revisa los nombres:**
   - Deben ser EXACTAMENTE: `ana-espinoza.png` (no `Ana-Espinoza.PNG`)

---

## 📞 ARCHIVOS DE AYUDA

- `/public/images/README.md` - Guía detallada de imágenes
- `/DEPLOYMENT-GUIDE.md` - Guía completa de despliegue
- Este archivo - Instrucciones rápidas

---

## ✅ CHECKLIST FINAL

Antes de hacer deploy:

- [ ] 25 imágenes descargadas
- [ ] Guardadas en `/public/images/`
- [ ] Nombres verificados (exactos, minúsculas)
- [ ] Commit y push a GitHub completado
- [ ] Render configurado con `dist` como Publish Directory
- [ ] Build command correcto: `npm install && npm run build`

---

## 🎉 ¡LISTO!

Una vez completados todos los pasos, tu sitio estará 100% funcional en Render con todas las imágenes cargadas correctamente.

**Tiempo estimado:** 15-30 minutos  
**Dificultad:** Fácil  
**Resultado:** Sitio completamente funcional 🚀

---

**Proyecto:** SENCICO Sede Trujillo  
**Desarrollado por:** Aklla Group  
**Fecha:** Diciembre 2024
