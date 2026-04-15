from flask import Blueprint, request, jsonify
from model import db, Watch

watches_bp = Blueprint("watches", __name__)


# View all watches
@watches_bp.route("/", methods=["GET"])
def get_watches():
    watches = Watch.query.order_by(Watch.created_at.desc()).all()
    return jsonify([w.to_dict() for w in watches])


# View a single watch
@watches_bp.route("/<int:watch_id>", methods=["GET"])
def get_watch(watch_id):
    watch = Watch.query.get_or_404(watch_id)
    return jsonify(watch.to_dict())


# Add a new watch
@watches_bp.route("/", methods=["POST"])
def add_watch():
    data   = request.get_json() or {}
    errors = {}

    if not data.get("brand"):
        errors["brand"] = "Brand is required"
    if not data.get("model"):
        errors["model"] = "Model is required"
    if not data.get("price"):
        errors["price"] = "Price is required"

    if errors:
        return jsonify({"errors": errors}), 400

    watch = Watch(
        brand       = data["brand"],
        model       = data["model"],
        price       = float(data["price"]),
        image_url   = data.get("image_url"),
        description = data.get("description"),
    )
    db.session.add(watch)
    db.session.commit()

    return jsonify(watch.to_dict()), 201