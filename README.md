# AI Multilingual Rural Health Triage Assistant

A production-ready AI-powered triage assistant designed for rural and low-health-literate communities. It helps users understand symptoms, assesses risk levels, and provides actionable guidance.

## Architecture

*   **Frontend**: Next.js 14 (App Router), React, TypeScript, TailwindCSS, shadcn/ui.
*   **Backend**: FastAPI (Python), loading an offline Scikit-Learn/XGBoost `.pkl` model.
*   **Machine Learning**: Disease prediction with engineered synthetic dataset to mimic 500 diseases.

## Features

1.  **Multilingual Chatbot**: Intake symptoms in English, Hindi, and Spanish.
2.  **AI Disease Prediction**: Predicts top 3 possible diseases with confidence percentages.
3.  **Risk Stratification Engine**: Determines if the patient is at Low, Moderate, High, or Emergency risk.
4.  **Emergency Override**: Rule-based detection of critical symptoms (e.g., chest pain) overrides the ML model to immediately flag an emergency.
5.  **Explainability**: Provides understandable reasons for the prediction and actionable first-aid steps.

## Local Setup

### Prerequisites
*   Node.js (v18+)
*   Python 3.11+
*   Docker (Optional, for containerized run)

### 1. Setup ML Model (If not using pre-trained)
```bash
cd data
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python generate_model.py
```
This generates the `disease_classifier.pkl` inside `backend/models`.

### 2. Run Backend (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
API runs on `http://localhost:8000`.

### 3. Run Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
UI runs on `http://localhost:3000`.

### Run via Docker
```bash
docker-compose up --build
```

## API Documentation

### GET `/health`
Check if the backend is running and the ML model is loaded.

### POST `/predict`
**Request:**
```json
{
  "age": 45,
  "gender": 1,
  "duration_days": 3,
  "symptoms": {
    "fever": 1,
    "cough": 1,
    "chest_pain": 0
  },
  "language": "en"
}
```

**Response:**
```json
{
  "predictions": [
    { "disease": "Common Cold", "probability": 0.85 },
    { "disease": "Influenza", "probability": 0.12 }
  ],
  "risk_level": "Low",
  "urgency": "Self Care",
  "first_aid": ["Rest", "Drink plenty of fluids"],
  "explanation": ["Symptoms are consistent with a mild viral upper respiratory infection."],
  "emergency": false
}
```

## Deployment Notes

*   **Frontend (Vercel)**: Connect the GitHub repository directly to Vercel. Ensure `NEXT_PUBLIC_API_URL` is set to the deployed backend URL in the Vercel dashboard.
*   **Backend (Render/Railway)**: Use the included `Dockerfile`. Set the root directory to `backend`. Ensure the generated `.pkl` models are committed to the repository so the cloud service can load them on startup.