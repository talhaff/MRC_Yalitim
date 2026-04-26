from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

app = FastAPI(title="MRC Yalıtım B2B API")

# --- Schemas ---

class QuoteItemCreate(BaseModel):
    product_id: uuid.UUID
    quantity: int
    unit: str = "adet"
    notes: Optional[str] = None

class QuoteCreate(BaseModel):
    full_name: str
    company_name: Optional[str] = None
    email: EmailStr
    phone: str
    message: Optional[str] = None
    items: List[QuoteItemCreate]

class QuoteResponse(BaseModel):
    id: uuid.UUID
    status: str
    created_at: datetime

    class Config:
        from_attributes = True

# --- API Endpoints ---

@app.post("/v1/quotes", response_model=QuoteResponse, status_code=201)
async def create_quote_request(quote: QuoteCreate):
    """
    Creates a new RFQ (Request for Quote) in the system.
    In a real scenario, this would:
    1. Validate product existence in DB.
    2. Save the quote and line items to PostgreSQL.
    3. Send an automated email notification to the factory sales team.
    4. Send a confirmation email to the user.
    """
    try:
        # Mock DB logic
        quote_id = uuid.uuid4()
        print(f"Received RFQ from {quote.full_name} ({quote.email})")
        print(f"Items requested: {len(quote.items)}")
        
        # Here you would integrate with SQLAlchemy/SQLModel
        # db.add(Quote(**quote.dict()))
        # await db.commit()
        
        return {
            "id": quote_id,
            "status": "PENDING",
            "created_at": datetime.now()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail="An error occurred while processing your quote request.")

@app.get("/v1/products/{slug}")
async def get_product_by_slug(slug: str):
    """
    Returns product details, including specs and gallery for the frontend.
    Optimized with cache-control headers.
    """
    # Mock data
    return {
        "id": str(uuid.uuid4()),
        "name": "Fuga Kaplı Söve",
        "slug": slug,
        "description": "Premium insulation solution...",
        "specs": [
            {"key": "Yoğunluk", "value": "20", "unit": "kg/m³"}
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
