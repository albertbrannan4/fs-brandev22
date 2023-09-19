from flask import Blueprint, jsonify

authentication = Blueprint('login', __name__)

@authentication.route("/login",methods=['GET'])
def login():
    return jsonify({
        "message":"User is not logged in"
    })

