from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from api.routers import task, done

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(task.router)
app.include_router(done.router)