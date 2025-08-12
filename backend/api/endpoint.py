from fastapi import FastAPI
from fastapi.responses import FileResponse
from jinja2 import Environment, FileSystemLoader
import json, subprocess
from pathlib import Path

from backend.core.dependencies import *

router = APIRouter()

TEMPLATE_DIR = Path(__file__).parent / "../templates"

@router.get("/cv/{lang}")
def generar_cv(lang: str):

        try:
            with open(data_path, "r", encoding="utf-8") as f:
                data = json.load(f)

            env = Environment(loader=FileSystemLoader(TEMPLATE_DIR))
            template = env.get_template("plantilla_cv.tex")

            # Escoger idioma
            cv_lang = data[lang]  # "es" o "en"

            tex_content = template.render(
                name=data["name"],
                email=data["email"],
                phone=data["phone"],
                location=data["location"],
                website=data["website"],
                linkedin=data["linkedin"],
                lang=cv_lang
            )

            tex_file = TEMPLATE_DIR / "cv_temp.tex"
            pdf_file = TEMPLATE_DIR / f"cv_{lang}.pdf"

            tex_file.write_text(tex_content, encoding="utf-8")

            # Compilar LaTeX
            subprocess.run([
                "pdflatex",
                "-interaction=nonstopmode",
                "-output-directory", str(TEMPLATE_DIR),
                str(tex_file)
            ])

            # Ruta del PDF generado
            pdf_file = TEMPLATE_DIR / f"{tex_file.stem}.pdf"

        except Exception:
            pdf_file = TEMPLATE_DIR / f"cv_{lang}.pdf"
        
        return FileResponse(
            path=str(pdf_file),
            media_type="application/pdf",
            filename=f"cv_{lang}.pdf"
        )