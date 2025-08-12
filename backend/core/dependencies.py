from datetime import datetime
from fastapi import FastAPI, APIRouter
from fastapi import HTTPException
from fastapi import WebSocket
import time
from typing import Union, List, Any, Dict

from .config import *

router = APIRouter()

data_path = r"./frontend/public/static/data.json"