import os

from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from .core.dependencies import *
from .core.config import configs

class myFastAPI():
    def __init__(self) -> None:
        self.app = FastAPI(
            title=configs.PROJECT_NAME,
            openapi_url=f"{configs.API}/openapi.json",
            version="0.0.1",
        )

        # set routes
        @self.app.get("/hello")
        def root():
            return "service is working"

        # Ruta al frontend compilado
        frontend_path = os.path.join(os.path.dirname(__file__), "..", "frontend", "build")
        self.app.mount("/static", StaticFiles(directory=os.path.join(frontend_path, "static")), name="static")

        self.app.mount("/static", StaticFiles(directory="backend/api/static"))

        @self.app.get("/")
        def serve_react_app():
            return FileResponse(os.path.join(frontend_path, "index.html"))

app = myFastAPI()
app = app.app