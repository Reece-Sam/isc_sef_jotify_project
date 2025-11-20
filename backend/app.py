from flask import Flask, request, jsonify
from flask_migrate import Migrate
from config import Config 
from models import db, Note

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
migrate = Migrate(app, db)

from models import Note

# the first route shows welcome to jotify
@app.route("/", methods=["GET"])
def index():
    return ("Welcome to Jotify!")


#the second route creates a new note
@app.route('/api/notes', methods=['POST'])
def add_note():
    data = request.get_json()
    new_note = Note(title=data['title'], description=data['description'], priority=data['priority'], reminder_datetime=data['reminder_datetime'])
    db.session.add(new_note)
    db.session.commit()
    return jsonify(new_note.to_dict()), 201

#the third route gets all notes
@app.route('/api/notes', methods=['GET'])
def get_notes():
    all_notes = Note.query.all()
    return jsonify([note.to_dict() for note in all_notes]), 200








if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)