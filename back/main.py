from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import pythonosc

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/fukai")
def fukai():
    print("fukai")
    return {"message": "fukai"}
