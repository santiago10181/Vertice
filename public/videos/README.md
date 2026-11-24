# Videos para la portada

- `hero.mp4`: video principal de 10 segundos incluido, extraído del archivo que compartiste y sin audio.
- `hero-outro.mp4`: opcional, agrega el cierre de 5 segundos con la V blanca.

Para activar el cierre agrega `outroMp4: '/videos/hero-outro.mp4'` al objeto `site.hero.video` en `src/config/site.js`. Desde V19, el clip principal y el cierre opcional se reproducen una sola vez por carga del documento. Para repetir dos minutos después del final, configura `replayAfterMs: 120_000`. Si reemplazas el video o agregas el cierre, actualiza también `public/images/hero-final.webp` con el fotograma final.

Formato recomendado: H.264 / MP4, 1920x1080, sin audio.
