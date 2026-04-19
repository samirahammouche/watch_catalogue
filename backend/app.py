from flask import Flask
from flask_cors import CORS
from model import db
from routes import watches_bp

def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///watches.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    CORS(app, origins="http://localhost:5173")
    db.init_app(app)

    app.register_blueprint(watches_bp, url_prefix="/api/watches")

    with app.app_context():
        db.create_all()

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, port=5000)