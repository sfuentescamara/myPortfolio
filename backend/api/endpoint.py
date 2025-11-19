from fastapi.responses import RedirectResponse

from backend.core.dependencies import *

router = APIRouter()

# URLs de Google Drive para los CVs (descarga directa)
CV_URLS = {
    'es': 'https://drive.google.com/uc?export=download&id=17j_GPVw7XQg_r8clzAzkClfQPT4V24-6',
    'en': 'https://drive.google.com/uc?export=download&id=16neGv19pf6Zrj75IjMq30iTtVh7jPfN-'
}

@router.get("/cv/{lang}")
def descargar_cv(lang: str):
    """
    Redirige a la URL de Google Drive según el idioma solicitado
    """
    # Obtener la URL correspondiente al idioma, default a español
    cv_url = CV_URLS.get(lang, CV_URLS['es'])

    # Redirigir a Google Drive
    return RedirectResponse(url=cv_url)
