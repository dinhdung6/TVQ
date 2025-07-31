from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import uvicorn

app = FastAPI(
    title="Tâm Việt Quang API",
    description="Backend API for Tâm Việt Quang website",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://tamvietquang.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: str
    subject: Optional[str] = None
    message: str

class NewsletterSubscription(BaseModel):
    email: EmailStr

class ConsultationRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    service_type: str
    message: Optional[str] = None

# Routes
@app.get("/")
async def root():
    return {"message": "Tâm Việt Quang API is running"}

@app.post("/api/contact")
async def submit_contact_form(contact: ContactForm):
    """Submit contact form"""
    try:
        # Here you would typically save to database or send email
        print(f"Contact form submitted: {contact.dict()}")
        
        # Simulate processing
        return {
            "success": True,
            "message": "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
            "data": contact.dict()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail="Có lỗi xảy ra khi gửi form")

@app.post("/api/newsletter")
async def subscribe_newsletter(subscription: NewsletterSubscription):
    """Subscribe to newsletter"""
    try:
        # Here you would typically save to database
        print(f"Newsletter subscription: {subscription.email}")
        
        return {
            "success": True,
            "message": "Đăng ký nhận tin thành công!",
            "email": subscription.email
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail="Có lỗi xảy ra khi đăng ký")

@app.post("/api/consultation")
async def request_consultation(consultation: ConsultationRequest):
    """Request free consultation"""
    try:
        # Here you would typically save to database or send email
        print(f"Consultation request: {consultation.dict()}")
        
        return {
            "success": True,
            "message": "Yêu cầu tư vấn đã được gửi! Chúng tôi sẽ liên hệ với bạn sớm nhất.",
            "data": consultation.dict()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail="Có lỗi xảy ra khi gửi yêu cầu tư vấn")

@app.get("/api/services")
async def get_services():
    """Get list of services"""
    services = [
        {
            "id": 1,
            "name": "Eduverse - Giáo dục STEAM",
            "description": "Chương trình giáo dục STEAM cho trẻ em",
            "category": "education"
        },
        {
            "id": 2,
            "name": "Phát triển Website",
            "description": "Thiết kế và phát triển website chuyên nghiệp",
            "category": "technology"
        },
        {
            "id": 3,
            "name": "Ứng dụng Mobile",
            "description": "Phát triển ứng dụng di động đa nền tảng",
            "category": "technology"
        },
        {
            "id": 4,
            "name": "Hệ thống quản lý",
            "description": "Xây dựng hệ thống quản lý doanh nghiệp",
            "category": "technology"
        }
    ]
    
    return {
        "success": True,
        "data": services
    }

@app.get("/api/news")
async def get_news():
    """Get latest news and articles"""
    news = [
        {
            "id": 1,
            "title": "TVQ khai giảng khóa học STEAM mùa xuân 2024",
            "description": "Chương trình học mới với nhiều hoạt động thú vị, giúp trẻ khám phá thế giới khoa học...",
            "date": "2024-03-15",
            "category": "education"
        },
        {
            "id": 2,
            "title": "Xu hướng công nghệ giáo dục 2024",
            "description": "Những xu hướng mới trong lĩnh vực công nghệ giáo dục và ảnh hưởng đến tương lai...",
            "date": "2024-03-10",
            "category": "technology"
        },
        {
            "id": 3,
            "title": "Chuyển đổi số trong giáo dục",
            "description": "Tầm quan trọng của chuyển đổi số trong ngành giáo dục và cách thực hiện hiệu quả...",
            "date": "2024-03-05",
            "category": "education"
        }
    ]
    
    return {
        "success": True,
        "data": news
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
