from backend.core.dependencies import *

from backend.api.endpoint import router as endpoint_router

routers = APIRouter()
router_list = [endpoint_router]

for router in router_list:
    routers.include_router(router)