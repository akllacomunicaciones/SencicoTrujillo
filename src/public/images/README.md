# Guía de Imágenes para SENCICO Trujillo

## 📸 Instrucciones para Descargar y Subir Imágenes

Para que las imágenes funcionen correctamente en GitHub y Render, necesitas descargar las imágenes desde Figma Make y colocarlas en esta carpeta (`/public/images/`).

---

## 📋 Lista Completa de Imágenes Necesarias

### 🏢 Logo (1 imagen)
- **Nombre del archivo:** `logo-sencico.png`
- **Ubicación original:** Figma Make
- **Dónde se usa:** Navigation, Footer, Home

---

### 👥 Personal Administrativo (4 personas)
- `ana-espinoza.png` - Ana Espinoza Cárdenas
- `luzdeni-velarde.png` - Luzdeni Velarde Burgos
- `nelson-vera.png` - Nelson Vera Escalante
- `alber-alvarez.png` - Alber Alvarez Bustamante

### 👔 Personal de Apoyo (5 personas)
- `angie-jara.png` - Angie Jara Vásquez
- `mariela-rojas.png` - Mariela Rojas Vazquez
- `andy-marcelo.png` - Andy Marcelo Díaz
- `liz-rios.png` - Liz Rios Varas
- `juan-castillo.png` - Juan Castillo (si hay foto disponible)
- `ronald-montoya.png` - Ronald Montoya (si hay foto disponible)

### 🎓 Docentes (7 personas)
- `jairo-flores.png` - Jairo Flores
- `docente-4.png` - Alberto Flores Guerrero
- `jesus-maldonado.png` - Jesús Maldonado
- `jorge-watanabe.png` - Jorge Wuatanabe Ibáñez
- `director-1.png` - Humberto Castillo Chávez
- `director-2.png` - Docente 2
- `director-3.png` - Docente 3
- `director-4.png` - Docente 4
- `docente-principal.png` - Docente principal

### 🌟 Embajadores (3 imágenes - OPCIONAL)
Si tienes fotos reales de embajadores:
- `embajador-1.png`
- `embajador-2.png`
- `embajador-3.png`

**Nota:** Las imágenes de embajadores actualmente usan placeholders de Unsplash y funcionan bien. Solo súbelas si tienes fotos reales.

---

## 🔧 Cómo Descargar las Imágenes desde Figma Make

### Método 1: Exportar desde Figma Make
1. Abre tu proyecto en Figma Make
2. Haz clic derecho en cada imagen
3. Selecciona "Exportar" o "Descargar imagen"
4. Guarda con el nombre exacto de la lista anterior
5. Coloca todas las imágenes en la carpeta `/public/images/`

### Método 2: Desde el Código Fuente
Si las imágenes ya están siendo usadas en Figma Make:
1. Inspecciona el elemento de la imagen en tu navegador
2. Copia la URL de la imagen
3. Abre la URL en una nueva pestaña
4. Guarda la imagen con el nombre correspondiente

---

## ✅ Verificación

Después de subir las imágenes, tu carpeta `/public/images/` debería verse así:

```
/public/images/
├── logo-sencico.png
├── ana-espinoza.png
├── luzdeni-velarde.png
├── nelson-vera.png
├── alber-alvarez.png
├── angie-jara.png
├── mariela-rojas.png
├── andy-marcelo.png
├── liz-rios.png
├── jairo-flores.png
├── docente-4.png
├── jesus-maldonado.png
├── jorge-watanabe.png
├── director-1.png
├── director-2.png
├── director-3.png
├── director-4.png
└── docente-principal.png
```

---

## 🚀 Después de Subir las Imágenes

1. **Commit y push a GitHub:**
   ```bash
   git add public/images/
   git commit -m "Agregar imágenes del equipo SENCICO"
   git push origin main
   ```

2. **Deploy en Render:**
   - Render detectará los cambios automáticamente
   - Las imágenes se cargarán correctamente

---

## ⚠️ Importante

- **Formato recomendado:** PNG o JPG
- **Tamaño recomendado:** No más de 500KB por imagen
- **Nombres exactos:** Usa los nombres EXACTOS de la lista (con guiones, minúsculas)
- **No eliminar este README:** Mantén este archivo para referencia futura

---

## 🆘 ¿Problemas?

Si alguna imagen no aparece después de subirla:
1. Verifica que el nombre del archivo sea EXACTAMENTE como se indica
2. Asegúrate de que esté en la carpeta `/public/images/`
3. Limpia la caché de tu navegador
4. Verifica que el archivo no esté corrupto

---

**Última actualización:** Diciembre 2024  
**Proyecto:** SENCICO Sede Trujillo  
**Desarrollado por:** Aklla Group
