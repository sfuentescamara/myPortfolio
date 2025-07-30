from fastapi.staticfiles import StaticFiles

from app.core.dependencies import *
from app.core.config import configs

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

        self.app.mount("/static", StaticFiles(directory="app/api/static"))


app = myFastAPI()
app = app.app