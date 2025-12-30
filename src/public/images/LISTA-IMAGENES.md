# 📸 LISTA DE IMÁGENES - SENCICO TRUJILLO

## ✅ CHECKLIST DE ARCHIVOS NECESARIOS

Coloca estos archivos **EXACTAMENTE** con estos nombres en `/public/images/`

---

### **LOGO (1 imagen)**
```
[ ] logo-sencico.png
```

---

### **PERSONAL ADMINISTRATIVO (9 imágenes)**
```
[ ] ana-espinoza.png          (Ana Espinoza Cárdenas)
[ ] luzdeni-velarde.png       (Luzdeni Velarde Burgos)
[ ] nelson-vera.png           (Nelson Vera Escalante)
[ ] alber-alvarez.png         (Alber Alvarez Bustamante)
[ ] angie-jara.png            (Angie Jara Vásquez)
[ ] mariela-rojas.png         (Mariela Rojas Vazquez)
[ ] andy-marcelo.png          (Andy Marcelo Díaz)
[ ] liz-rios.png              (Liz Rios Varas)
[ ] juan-castillo.png         (Juan Castillo)
```

---

### **DOCENTES (10 imágenes)**
```
[ ] ronald-montoya.png        (Ronald Montoya - Arquitecto)
[ ] jairo-flores.png          (Jairo Flores - Topografía)
[ ] docente-4.png             (Alberto Flores Guerrero)
[ ] jesus-maldonado.png       (Jesús Maldonado)
[ ] jorge-watanabe.png        (Jorge Wuatanabe Ibáñez)
[ ] director-1.png            (Humberto Castillo Chávez)
[ ] director-2.png            (Jhony Castillo - Jefe Zonal)
[ ] director-3.png            (Juan Guillén - Promotor)
[ ] director-4.png            (Jackeline Machuca)
[ ] docente-principal.png     (Alex Arribasplata)
```

---

### **EMBAJADORES (4 imágenes)**
```
[ ] romano.png                (Romano - Edificaciones - Estudiante 4to ciclo)
[ ] gianela.png               (Gianela - Topografía - Estudiante 2do ciclo)
[ ] embajador-3.png           (Embajador - Diseño de Interiores - Recién Egresado)
[ ] gerald.png                (Gerald - Edificaciones - Recién Egresado)
```

---

### **CURSOS ESPECIALIZADOS (12 imágenes)**
```
[ ] autocad-2d.png                    (AutoCAD 2D - 60 horas)
[ ] autocad-3d.png                    (AutoCAD 3D - 40 horas)
[ ] autocad-civil-3d.png              (AutoCAD Civil 3D - 80 horas)
[ ] cimentaciones-losas-safe.png      (SAFE - 80 horas)
[ ] costos-presupuestos-s10.png       (S10 Costos y Presupuestos - 80 horas)
[ ] edificaciones-etabs.png           (ETABS - 80 horas)
[ ] estructuras-sap2000.png           (SAP 2000 - 100 horas)
[ ] modelado-sketchup.png             (Sketchup - 60 horas)
[ ] revit-architecture.png            (Revit Architecture - 100 horas)
[ ] revit-mep.png                     (Revit MEP - 40 horas)
[ ] revit-structure.png               (Revit Structure - 60 horas)
[ ] valorización-liquidación.png      (Valorización y Liquidación - 50 horas)
```

---

## 📂 UBICACIÓN:

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
  ├── juan-castillo.png
  ├── ronald-montoya.png
  ├── jairo-flores.png
  ├── docente-4.png
  ├── jesus-maldonado.png
  ├── jorge-watanabe.png
  ├── director-1.png
  ├── director-2.png
  ├── director-3.png
  ├── director-4.png
  ├── docente-principal.png
  ├── romano.png
  ├── gianela.png
  ├── embajador-3.png
  ├── gerald.png
  ├── autocad-2d.png
  ├── autocad-3d.png
  ├── autocad-civil-3d.png
  ├── cimentaciones-losas-safe.png
  ├── costos-presupuestos-s10.png
  ├── edificaciones-etabs.png
  ├── estructuras-sap2000.png
  ├── modelado-sketchup.png
  ├── revit-architecture.png
  ├── revit-mep.png
  ├── revit-structure.png
  └── valorización-liquidación.png
```

---

## ✅ CONEXIÓN EN EL CÓDIGO:

Todos los archivos ya están conectados correctamente en:

- `/components/Navigation.tsx` → `logo-sencico.png`
- `/components/Footer.tsx` → `logo-sencico.png`
- `/pages/Home.tsx` → `logo-sencico.png`
- `/components/NuestroEquipo.tsx` → Todas las fotos del personal y docentes
- `/components/Comunidad.tsx` → **EMBAJADORES CON FOTOS**
  - **romano.png** (primero)
  - **gianela.png** (segundo)
  - **embajador-3.png** (tercero)
  - **gerald.png** (cuarto)

---

## 🚨 IMPORTANTE:

1. **NO cambies los nombres de los archivos**
2. Los archivos deben estar en **PNG** (preferible) o JPG
3. La ruta completa es: `/public/images/nombre-archivo.png`
4. El código ya apunta a `/images/nombre-archivo.png` (sin `/public`)
5. **Las fotos de embajadores se muestran en orden**: Romano → Gianela → Embajador 3 → Gerald

---

## 🎯 SECCIÓN DE EMBAJADORES:

En la página de **Embajadores** (`/comunidad`) ahora hay:

1. **📸 Galería de Fotos de Embajadores** (4 tarjetas SIMPLES en grid)
   - Cada tarjeta muestra SOLO:
     - **Foto del embajador** (altura 72, 288px)
     - **Badge de nivel** (Estudiante / Recién Egresado)
     - **Nombre** (centrado)
     - **Carrera** (en rojo SENCICO)
     - **Semestre/Promoción** (pequeño, gris)
   
   **Diseño:** 4 columnas en desktop, super limpio y minimalista

2. **🎥 Historias de Éxito con Videos** (3 testimonios con videos de YouTube)

3. **🤝 Aliados Regionales** (instituciones colaboradoras)

4. **❤️ Proyectos e Iniciativas** (impacto social)

---

## 📥 CÓMO SUBIR:

### **En Figma Make:**
1. Panel izquierdo → Carpeta `public` → Carpeta `images`
2. Haz clic derecho → "Upload file"
3. Selecciona tus archivos PNG
4. ✅ Listo

### **En GitHub/VSCode:**
1. Abre tu repositorio
2. Navega a `public/images/`
3. Arrastra y suelta los archivos
4. Commit y push

---

**Total: 36 imágenes**
- ✅ 1 logo
- ✅ 9 administrativos
- ✅ 10 docentes/directivos
- ✅ 4 embajadores **(CON SECCIÓN DEDICADA DE FOTOS)**
- ✅ 12 cursos especializados