from fastapi import FastAPI
from fastapi.responses import FileResponse
from jinja2 import Environment, FileSystemLoader
import json, subprocess
from pathlib import Path

from backend.core.dependencies import *

router = APIRouter()

TEMPLATE_DIR = Path(__file__).parent.parent / "templates"

@router.get("/cv/{lang}")
def generar_cv(lang: str):

    try:
        with open(data_path, "r", encoding="utf-8") as f:
            data = json.load(f)

        def escape_latex(text):
            """Escapa caracteres especiales de LaTeX"""
            replacements = {
                '&': r'\&',
                '%': r'\%',
                '$': r'\$',
                '#': r'\#',
                '_': r'\_',
                '{': r'\{',
                '}': r'\}',
                '~': r'\textasciitilde{}',
                '^': r'\^{}',
                '<': r'\textless{}',
                '>': r'\textgreater{}',
            }
            for key, value in replacements.items():
                text = str(text).replace(key, value)
            return text

        env = Environment(loader=FileSystemLoader(TEMPLATE_DIR))
        env.filters['escape_latex'] = escape_latex
        template = env.get_template("plantilla_cv.tex")

        # Escoger idioma
        cv_lang = data[lang]  # "es" o "en"

        tex_content = template.render(
            name=data["name"],
            email=data["email"],
            phone=data["phone"],
            location=data["location"],
            github=data["github"],
            website=data["website"],
            linkedin=data["linkedin"],
            lang=cv_lang,
            skills_data=data["skills_data"][lang]
        )

        tex_file = TEMPLATE_DIR / "cv_temp.tex"
        pdf_file = TEMPLATE_DIR / f"cv_{lang}.pdf"

        tex_file.write_text(tex_content, encoding="utf-8")

        # Compilar LaTeX
        subprocess.run([
            "pdflatex",
            "-interaction=nonstopmode",
            "-output-directory", str(TEMPLATE_DIR.resolve()),
            str(tex_file.resolve())
        ])

        # Ruta del PDF generado
        pdf_file = TEMPLATE_DIR / f"{tex_file.stem}.pdf"

    except Exception:
        print("Error generating CV PDF")
        pdf_file = TEMPLATE_DIR / f"cv_{lang}.pdf"

    return FileResponse(
        path=str(pdf_file),
        media_type="application/pdf",
        filename=f"cv_{lang}.pdf"
    )
