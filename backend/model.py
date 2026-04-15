from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Watch(db.Model):
    __tablename__ = "watches"

    id          = db.Column(db.Integer, primary_key=True)
    brand       = db.Column(db.String(100), nullable=False)
    model       = db.Column(db.String(150), nullable=False)
    price       = db.Column(db.Float, nullable=False)
    image_url   = db.Column(db.String(500))
    description = db.Column(db.Text)
    created_at  = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id":          self.id,
            "brand":       self.brand,
            "model":       self.model,
            "price":       self.price,
            "image_url":   self.image_url,
            "description": self.description,
            "created_at":  self.created_at.isoformat() if self.created_at else None,
        }