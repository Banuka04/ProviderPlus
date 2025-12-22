from fastapi import FastAPI
from app.routes import chat_routes

app = FastAPI()

app.include_router(chat_routes.router, prefix="/api/ai-chat", tags=["AI Chat"])

@app.get("/")
def read_root():
    return {"message: Provider+ backend is running!"}
