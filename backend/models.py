from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
db = SQLAlchemy()


class Note(db.Model):
    __tablename__ = 'notes'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    priority = db.Column(db.String, default="medium")
    date_created = db.Column(db.DateTime, default= datetime.now)
    reminder_datetime= db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "priority": self.priority,
            "date_created": self.date_created,
            "reminder_datetime": self.reminder_datetime
        }