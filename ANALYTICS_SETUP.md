# 📊 Guía de Configuración de Google Analytics

## ✅ Estado Actual
- ✓ Script de Google Analytics integrado en `index.html`
- ✓ Utilidades de tracking creadas en `src/utils/analytics.js`
- ✓ Eventos implementados en componentes clave

## 🚀 Paso 1: Crear Cuenta de Google Analytics

1. Ve a **https://analytics.google.com**
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Empezar a medir"** o **"Admin"** (engranaje abajo a la izquierda)
4. Crear nueva cuenta:
   - **Nombre de la cuenta**: `Portfolio Sergio Fuentes`
   - Deja las opciones de compartir datos por defecto
5. Crear nueva propiedad:
   - **Nombre de la propiedad**: `Portfolio Personal`
   - **Zona horaria**: `(GMT+01:00) Madrid`
   - **Moneda**: `EUR - Euro`
6. Información sobre la empresa (opcional):
   - Categoría: `Tecnología`
   - Tamaño: `Pequeña`
   - Selecciona tus objetivos (ej: "Generar clientes potenciales")

## 🔧 Paso 2: Configurar Flujo de Datos Web

1. Selecciona **plataforma Web**
2. Configuración del flujo:
   - **URL del sitio web**: `https://myprofolio-mwfs.onrender.com`
   - **Nombre del flujo**: `Portfolio Web`
3. **¡IMPORTANTE!**: Copia el **ID de medición** que aparece (formato: `G-XXXXXXXXXX`)

## 📝 Paso 3: Actualizar el Código

Reemplaza `G-XXXXXXXXXX` en el archivo `frontend/public/index.html` (líneas 33 y 38):

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU_ID_AQUI"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU_ID_AQUI');
</script>
```

**Ejemplo:**
Si tu ID es `G-ABC123XYZ`, reemplaza ambas instancias de `G-XXXXXXXXXX` por `G-ABC123XYZ`.

## 🎯 Eventos Implementados

Los siguientes eventos ya están configurados y funcionarán automáticamente:

### 1. **Descarga de CV** (`download_cv`)
- **Cuándo**: Usuario hace clic en "Descargar CV"
- **Parámetros**:
  - `language`: Idioma del CV descargado (`es` o `en`)
  - `file_format`: `pdf`
- **Ubicación**: `Hero.jsx`

### 2. **Clicks en Contacto** (`contact_click`)
- **Cuándo**: Usuario hace clic en GitHub, LinkedIn o Email
- **Parámetros**:
  - `contact_method`: `github`, `linkedin`, o `email`
- **Ubicación**: `Hero.jsx`

### 3. **Cambio de Idioma** (`language_change`)
- **Cuándo**: Usuario cambia entre español e inglés
- **Parámetros**:
  - `language`: Idioma seleccionado (`es` o `en`)
- **Ubicación**: `Portfolio.jsx`

### 4. **Eventos Disponibles (no implementados aún)**
Puedes añadir estos eventos a otros componentes usando las funciones en `analytics.js`:

- `trackProjectClick(projectName, projectId)` - Para clicks en proyectos
- `trackDemoClick(projectName, demoType)` - Para ver demos
- `trackCertificateClick(certName)` - Para clicks en certificados
- `trackSectionView(sectionName)` - Para navegación entre secciones

## 🧪 Paso 4: Verificar que Funciona

### Opción A: En Tiempo Real (inmediato)
1. Despliega tu código actualizado a Render
2. En Google Analytics, ve a **Informes → Tiempo real**
3. Abre tu portfolio en otra pestaña: `https://myprofolio-mwfs.onrender.com`
4. Deberías ver **1 usuario activo** en el reporte de tiempo real
5. Prueba descargar el CV o cambiar idioma
6. Verifica que los eventos aparecen en **Eventos en tiempo real**

### Opción B: Extensión Debug (recomendado para desarrollo)
1. Instala la extensión **Google Analytics Debugger** en Chrome
2. Activa la extensión (icono debe estar azul)
3. Abre la consola del navegador (F12)
4. Navega por tu portfolio
5. Verás logs detallados de todos los eventos enviados

### Opción C: DebugView de GA4
1. En Google Analytics, ve a **Admin → DebugView**
2. Añade `?debug_mode=true` a tu URL: `https://myprofolio-mwfs.onrender.com?debug_mode=true`
3. Navega y verás eventos en tiempo real con detalles completos

## 📈 Métricas Importantes a Revisar

Después de 24-48 horas con el sitio en vivo, revisa:

### Métricas Básicas
- **Usuarios**: Cuántas personas únicas visitan
- **Sesiones**: Número total de visitas
- **Tasa de rebote**: % de usuarios que salen sin interactuar
- **Duración promedio**: Tiempo que pasan en el sitio

### Eventos Personalizados
Ve a **Informes → Participación → Eventos**:
- `download_cv`: Cuántos descargan tu CV (🎯 **Métrica crítica**)
- `contact_click`: Qué método de contacto prefieren
- `language_change`: Cuántos visitan en inglés vs español

### Dimensiones Útiles
- **País**: De dónde vienen tus visitantes
- **Dispositivo**: Desktop vs Mobile
- **Fuente/medio**: Cómo llegan (LinkedIn, búsqueda, directo)

## 🔗 Configuración Avanzada (Opcional)

### Conversión: "Descarga de CV"
Marca `download_cv` como conversión (objetivo):
1. Ve a **Admin → Eventos**
2. Busca `download_cv`
3. Activa **"Marcar como conversión"**
4. Ahora aparecerá en informes de conversiones

### Segmentos Personalizados
Crea segmentos para análisis detallado:
- Usuarios que descargaron CV
- Visitantes que cambiaron idioma
- Usuarios de LinkedIn vs Google

### Integración con Google Search Console
1. Ve a **Admin → Vínculos de Search Console**
2. Conecta tu propiedad
3. Verás qué búsquedas en Google llevan a tu portfolio

## 🛠️ Troubleshooting

### No veo datos en tiempo real
- ✓ Verifica que reemplazaste `G-XXXXXXXXXX` en AMBOS lugares
- ✓ Asegúrate de haber desplegado el código a Render
- ✓ Desactiva bloqueadores de anuncios
- ✓ Usa navegación de incógnito para probar

### Los eventos no aparecen
- ✓ Abre consola (F12) y busca errores
- ✓ Verifica que `window.gtag` existe escribiendo en consola: `typeof window.gtag`
- ✓ Los eventos pueden tardar 5-10 segundos en aparecer en tiempo real

### Bloqueadores de anuncios
Algunas extensiones (uBlock, AdBlock) bloquean Google Analytics:
- Para testing, desactívalas temporalmente
- En producción, esto es normal (10-30% de usuarios los usan)

## 📊 Dashboard Recomendado

Crea un dashboard personalizado con estas métricas:

| Métrica | Objetivo |
|---------|----------|
| Usuarios (mes) | 100+ |
| Descargas CV | 5-10% de usuarios |
| Clicks contacto | 15-20% de usuarios |
| Duración promedio | 2+ minutos |
| Páginas/sesión | 3+ |

## 🎓 Recursos Adicionales

- **Documentación GA4**: https://support.google.com/analytics/
- **Academia de Analytics**: https://analytics.google.com/analytics/academy/
- **Eventos personalizados**: https://developers.google.com/analytics/devguides/collection/ga4/events

---

## ✅ Checklist Final

Antes de completar la configuración:

- [ ] Cuenta de Google Analytics creada
- [ ] Propiedad web configurada
- [ ] ID de medición copiado (formato `G-XXXXXXXXXX`)
- [ ] ID reemplazado en `index.html` (ambas líneas)
- [ ] Código desplegado a Render
- [ ] Verificado en "Tiempo Real" que funciona
- [ ] Evento `download_cv` marcado como conversión
- [ ] Probados los eventos (CV, contacto, idioma)

---

**¿Necesitas ayuda?**
- Si tienes problemas, avísame y te ayudo a debuggear
- Comparte el ID que te dio Google Analytics y verifico que esté bien integrado
