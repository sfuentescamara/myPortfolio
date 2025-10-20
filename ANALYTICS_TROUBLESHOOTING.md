# 🔍 Troubleshooting: Eventos de Google Analytics No Aparecen

## Tu Configuración Actual
- ✅ **ID de medición**: `G-9QS31XCYVC`
- ✅ **Script instalado**: Correcto en `index.html`
- ✅ **Eventos implementados**: `download_cv`, `contact_click`, `language_change`
- ✅ **Debug mode activado**: Para ver logs en consola

---

## 🧪 Prueba 1: Verifica que Google Analytics se está cargando

### En tu sitio en producción:
1. Abre **https://myprofolio-mwfs.onrender.com**
2. Presiona **F12** para abrir la consola del navegador
3. Ve a la pestaña **Console**
4. Escribe esto y presiona Enter:
```javascript
typeof window.gtag
```

**Resultado esperado**: Debe mostrar `"function"`
**Si muestra** `"undefined"`: El script no se cargó (ver soluciones abajo)

---

## 🧪 Prueba 2: Verifica en Google Analytics Tiempo Real

### Opción A: Ver usuarios en tiempo real
1. Ve a tu **Google Analytics** → https://analytics.google.com/
2. Selecciona tu propiedad **"Portfolio Personal"**
3. En el menú lateral: **Informes** → **Tiempo real** → **Descripción general**
4. Abre tu portfolio en otra pestaña
5. **Deberías ver**: "1 usuario activo ahora mismo"

### Opción B: Ver eventos en tiempo real
1. En Google Analytics: **Informes** → **Tiempo real** → **Vista de eventos**
2. En tu portfolio, descarga el CV
3. **Deberías ver**: Evento `download_cv` aparecer en la lista

---

## 🧪 Prueba 3: Usa DebugView de Google Analytics

**DebugView** es la herramienta oficial de Google para ver eventos en tiempo real con detalles:

1. En Google Analytics: **Configurar** → **DebugView**
2. Añade `?debug_mode=true` a tu URL:
   ```
   https://myprofolio-mwfs.onrender.com?debug_mode=true
   ```
3. Navega por el portfolio
4. En DebugView verás **todos los eventos** con detalles completos

**⚠️ Importante**: Los eventos en DebugView aparecen **inmediatamente**, mientras que en reportes normales pueden tardar 24-48 horas.

---

## 🧪 Prueba 4: Instala Google Analytics Debugger

Esta extensión de Chrome te muestra todos los eventos en la consola:

1. **Instala**: https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna
2. **Activa** la extensión (icono debe estar azul)
3. **Abre** la consola (F12)
4. **Navega** por tu portfolio
5. **Verás logs** detallados de cada evento

---

## 🛠️ Soluciones a Problemas Comunes

### ❌ Problema: `window.gtag` es undefined

**Causa**: El script de Google Analytics no se cargó.

**Soluciones**:

1. **Bloqueadores de anuncios**:
   - uBlock Origin, AdBlock, Brave Shield bloquean Google Analytics
   - **Solución temporal**: Desactívalos para testing
   - **Para usuarios normales**: Es esperado que 10-30% los usen

2. **Extensiones de privacidad**:
   - Privacy Badger, DuckDuckGo Privacy Essentials
   - **Solución**: Prueba en navegación de incógnito

3. **Script no desplegado**:
   - Verifica que hiciste `git push` del código actualizado
   - Render debe haber rebuildeado el sitio
   - Comprueba en: https://dashboard.render.com

4. **Caché del navegador**:
   - Haz **Ctrl + Shift + R** (hard refresh)
   - O abre en incógnito

---

### ❌ Problema: Los eventos no aparecen en Tiempo Real

**Si `window.gtag` existe pero los eventos no aparecen**:

1. **Espera 5-10 segundos**:
   - Los eventos pueden tardar unos segundos en procesarse

2. **Verifica la consola del navegador**:
   - Con el debug mode activado, deberías ver:
   ```
   📊 Analytics Event: download_cv {language: 'es', file_format: 'pdf'}
   ```
   - Si ves este log, el evento se envió correctamente

3. **Prueba manualmente**:
   En la consola, ejecuta:
   ```javascript
   window.gtag('event', 'test_manual', {test: 'hello'});
   ```
   Este evento debería aparecer en Tiempo Real como `test_manual`

4. **Verifica que estás en la propiedad correcta**:
   - En Google Analytics, asegúrate de estar viendo la propiedad **"Portfolio Personal"**
   - El selector está arriba a la izquierda

---

### ❌ Problema: Los eventos aparecen en DebugView pero no en Reportes

**Esto es NORMAL**:
- **DebugView**: Eventos instantáneos (debug mode activado)
- **Tiempo Real**: Eventos en ~10 segundos
- **Reportes estándar**: Eventos en 24-48 horas

**Solución**: Usa DebugView o Tiempo Real para testing, no reportes normales.

---

## ✅ Checklist de Verificación Rápida

Ejecuta estos pasos en orden:

1. [ ] Abre https://myprofolio-mwfs.onrender.com
2. [ ] F12 → Console → Escribe `typeof window.gtag` → Debe ser `"function"`
3. [ ] Ve a Google Analytics → Tiempo Real
4. [ ] Actualiza tu portfolio → Debe aparecer "1 usuario activo"
5. [ ] Descarga el CV en tu portfolio
6. [ ] En la consola del navegador debe aparecer: `📊 Analytics Event: download_cv`
7. [ ] En Google Analytics Tiempo Real → Vista de eventos → Debe aparecer `download_cv`

---

## 🔧 Configuración en Google Analytics (IMPORTANTE)

### ¿Necesitas activar algo en Google Analytics?

**NO** necesitas configurar nada especial para que los eventos aparezcan, PERO:

### Para ver eventos personalizados en reportes:

1. **Ve a Configurar → Eventos** en Google Analytics
2. Después de enviar un evento (ej: `download_cv`), aparecerá automáticamente en la lista
3. Puede tardar **24-48 horas** en aparecer

### Para marcar eventos como conversiones (RECOMENDADO):

1. **Ve a Configurar → Conversiones**
2. Haz clic en **"Nuevo evento de conversión"**
3. Escribe el nombre del evento: `download_cv`
4. Haz clic en **"Guardar"**

Esto marcará las descargas de CV como una conversión (objetivo conseguido).

---

## 📊 Cómo Ver Tus Eventos

### Opción 1: Tiempo Real (instantáneo)
```
Google Analytics → Informes → Tiempo real → Vista de eventos
```

### Opción 2: DebugView (instantáneo + detalles)
```
Google Analytics → Configurar → DebugView
(Añade ?debug_mode=true a tu URL)
```

### Opción 3: Reportes de Eventos (24-48h de retraso)
```
Google Analytics → Informes → Participación → Eventos
```

### Opción 4: Exploración Personalizada
```
Google Analytics → Explorar → Crear nueva exploración
- Dimensión: Nombre del evento
- Métrica: Recuento de eventos
```

---

## 🎯 Eventos que Deberías Ver

Cuando navegues por tu portfolio con la consola abierta:

| Acción | Evento | Log en Consola |
|--------|--------|----------------|
| Cargar página | `page_view` | (Automático de GA4) |
| Descargar CV | `download_cv` | 📊 Analytics Event: download_cv {language: 'es', file_format: 'pdf'} |
| Click GitHub | `contact_click` | 📊 Analytics Event: contact_click {contact_method: 'github'} |
| Click LinkedIn | `contact_click` | 📊 Analytics Event: contact_click {contact_method: 'linkedin'} |
| Click Email | `contact_click` | 📊 Analytics Event: contact_click {contact_method: 'email'} |
| Cambiar idioma | `language_change` | 📊 Analytics Event: language_change {language: 'en'} |

---

## 🚨 Si Nada Funciona

### Última verificación:

1. **Verifica el ID en el código**:
   ```bash
   cat frontend/public/index.html | grep "G-9QS31XCYVC"
   ```
   Debe aparecer 2 veces (líneas 33 y 39).

2. **Verifica que el build está actualizado**:
   - En Render dashboard, ve a tu servicio
   - Verifica que el último deploy fue después de añadir el ID
   - Si no, haz un manual deploy

3. **Prueba en local**:
   ```bash
   cd frontend
   npm start
   ```
   Abre http://localhost:3000 y verifica si `window.gtag` existe.

4. **Comparte el error**:
   - Copia el mensaje de error de la consola
   - Toma captura de Google Analytics → Tiempo Real
   - Envíame los detalles y te ayudo

---

## 📞 ¿Necesitas Ayuda?

Si después de seguir todos estos pasos aún no funciona:

1. **Toma capturas de**:
   - Consola del navegador (F12)
   - Google Analytics → Tiempo Real
   - Resultado de `typeof window.gtag`

2. **Comparte**:
   - ¿Ves el log `📊 Analytics Event` en la consola?
   - ¿Ves usuarios activos en Tiempo Real?
   - ¿Qué navegador y extensiones usas?

3. **Avísame** y revisamos juntos el problema.

---

## ✅ Verificación Final

Cuando todo funcione, deberías ver:

```
✓ window.gtag es "function"
✓ Usuarios activos en Tiempo Real: 1
✓ Eventos en consola: 📊 Analytics Event: download_cv
✓ Eventos en Tiempo Real → Vista de eventos
✓ Eventos en DebugView (con ?debug_mode=true)
```

**⏱️ Tiempo de aparición**:
- **DebugView**: Inmediato
- **Tiempo Real**: 5-10 segundos
- **Reportes**: 24-48 horas

¡Buena suerte! 🚀
