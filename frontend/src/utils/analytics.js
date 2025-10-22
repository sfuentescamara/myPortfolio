// Google Analytics utility functions using react-ga4
import ReactGA from 'react-ga4';

// Inicializar Google Analytics
export const initGA = () => {
  const measurementId = 'G-GE1HXQCSH6';

  ReactGA.initialize(measurementId, {
    gaOptions: {
      debug_mode: true,
    },
    gtagOptions: {
      send_page_view: true,
    }
  });

  console.log('✅ Google Analytics inicializado con react-ga4');
  console.log('📊 ID de medición:', measurementId);
};

/**
 * Envía un evento personalizado a Google Analytics
 * @param {string} eventName - Nombre del evento (ej: 'download_cv', 'click_project')
 * @param {object} eventParams - Parámetros adicionales del evento
 */
export const trackEvent = (eventName, eventParams = {}) => {
  try {
    ReactGA.event(eventName, eventParams);
    console.log('📊 Analytics Event:', eventName, eventParams);
  } catch (error) {
    console.warn('⚠️ Error enviando evento a Google Analytics:', error);
  }
};

/**
 * Trackea una vista de página
 * @param {string} path - Ruta de la página
 */
export const trackPageView = (path) => {
  try {
    ReactGA.send({ hitType: 'pageview', page: path });
    console.log('📄 Page View:', path);
  } catch (error) {
    console.warn('⚠️ Error enviando page view:', error);
  }
};

/**
 * Trackea clicks en proyectos
 * @param {string} projectName - Nombre del proyecto
 * @param {string} projectId - ID del proyecto
 */
export const trackProjectClick = (projectName, projectId) => {
  trackEvent('view_project', {
    project_name: projectName,
    project_id: projectId,
  });
};

/**
 * Trackea descarga del CV
 * @param {string} language - Idioma del CV descargado ('es' o 'en')
 */
export const trackCVDownload = (language) => {
  trackEvent('download_cv', {
    language: language,
    file_format: 'pdf',
  });
};

/**
 * Trackea clicks en enlaces de contacto
 * @param {string} method - Método de contacto ('email', 'linkedin', 'github')
 */
export const trackContactClick = (method) => {
  trackEvent('contact_click', {
    contact_method: method,
  });
};

/**
 * Trackea navegación entre secciones
 * @param {string} sectionName - Nombre de la sección
 */
export const trackSectionView = (sectionName) => {
  trackEvent('view_section', {
    section_name: sectionName,
  });
};

/**
 * Trackea cambio de idioma
 * @param {string} language - Idioma seleccionado ('es' o 'en')
 */
export const trackLanguageChange = (language) => {
  trackEvent('language_change', {
    language: language,
  });
};

/**
 * Trackea clicks en certificados
 * @param {string} certName - Nombre del certificado
 */
export const trackCertificateClick = (certName) => {
  trackEvent('view_certificate', {
    certificate_name: certName,
  });
};

/**
 * Trackea clicks en demostraciones de proyectos
 * @param {string} projectName - Nombre del proyecto
 * @param {string} demoType - Tipo de demo ('youtube', 'github', 'live')
 */
export const trackDemoClick = (projectName, demoType) => {
  trackEvent('view_demo', {
    project_name: projectName,
    demo_type: demoType,
  });
};
