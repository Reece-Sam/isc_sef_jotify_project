from flask import Flask, request, jsonify
from flask_migrate import Migrate
from config import Config 
from models import db, Note
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)

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
    try:
        data = request.get_json()
        new_note = Note(title=data['title'], description=data['description'], priority=data['priority'], reminder_datetime=data['reminder_datetime'])
        db.session.add(new_note)
        db.session.commit()
    except Exception as e:
        return jsonify({"message":"error","error":f"{e}"})
    return jsonify(new_note.to_dict()), 201

#the third route gets all notes
@app.route('/api/notes', methods=['GET'])
def get_notes():
    all_notes = Note.query.all()
    return jsonify([note.to_dict() for note in all_notes]), 200 



#the fouth route a gets note based on id
@app.route('/api/notes/<int:id>', methods=['GET'])
def get_note(id):
    note = Note.query.get(id)
    if not note:
        return jsonify({"error": "note not found"}), 404
    return jsonify(note.to_dict()), 200



#this fifth route updates or edits note based on id
@app.route('/api/notes/<int:id>', methods=['PUT'])
def update_note(id):
    data = request.get_json()
    note = Note.query.get(id)
    if not note:
        return jsonify({"error": "note not found"}), 404
    note.title = data.get('title', note.title)
    note.description = data.get('description', note.description)
    note.reminder_datetime =data.get('reminder_datetime', note.reminder_datetime)
    note.priority=data.get('priority', note.priority)
    db.session.commit()
    return jsonify(note.to_dict()), 200



#this sixth route deletes a note based on id  
@app.route('/api/notes/<int:id>', methods=['DELETE'])
def delete_note(id):
    note = Note.query.get(id)
    if not note:
        return jsonify({"error": "note not found"}), 404
    db.session.delete(note)
    db.session.commit()
    return jsonify({"message": "note deleted successfully"})


#this seventh route deletes all notes
@app.route('/api/notes', methods=['DELETE'])
def delete_notes():
    db.session.query(Note).delete()
    db.session.commit()
    return jsonify({"message": "notes deleted successfully"})


#this eigth route search note based on title
@app.route('/api/notes/search', methods=['GET'])
def search_notes():
    search = request.args.get('title'.lower())
    search_notes = Note.query.filter(Note.title.like(f'%{search}%'))
    return jsonify([note.to_dict() for note in search_notes]), 200


#to run the code 
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)