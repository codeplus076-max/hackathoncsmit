from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import time

from api.routes import router as api_router

app = FastAPI(
    title="AI Rural Health Triage Assistant",
    description="Multilingual Medical Triage Assistant API",
    version="1.0.0"
)

# Enable CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Middleware for logging response time
@app.middleware("http")
async def add_process_time_header(request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    print(f"Request: {request.method} {request.url.path} - Processing Time: {process_time:.4f}s")
    return response

app.include_router(api_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
