from flask import Blueprint, jsonify, request

authentication = Blueprint('login', __name__)

@authentication.route("/login",methods=['POST'])
def login():
    if request.method=='POST':
        username = request.form['username']
        password = request.form['password']
        return jsonify(f"The username submitted was {username} and the password was {password}")
    else:
        return path('/api/home')

