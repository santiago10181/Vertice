# Fotografías del equipo

Añade las tres fotografías reales en esta carpeta: `felipe-marino.webp`, `santiago-marino.webp` y `vivian-forero.webp`.
Recomendado: retratos verticales 4:5 (800 × 1000 px o superior), encuadre similar, fondo neutro y buena iluminación. No incluyas texto en las fotos.
En `src/config/about.js`, reemplaza `image: null` de cada integrante por, por ejemplo:

```js
image: {
  src: '/images/team/felipe-marino.webp',
  alt: 'Retrato de Felipe Mariño',
  width: 800,
  height: 1000,
  position: '50% 35%',
},
```

Hasta que haya retratos, el componente muestra iniciales y una indicación explícita de fotografía pendiente. No uses la imagen conceptual de colaboración como si fuese una foto de los integrantes.
