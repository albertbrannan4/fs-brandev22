from flask import Blueprint, jsonify, request
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

authentication = Blueprint('login', __name__)

@authentication.route("/login",methods=['POST'])
def login():
    if request.method=='POST':
        username = request.form['username']
        password = request.form['password']
        return jsonify(f"The username submitted was {username} and the password was {password}")
    else:
        return path('/api/home')



@authentication.route("/email",methods=["POST"])
def send_email():
    if request.method=='POST':
        subject = request.form['subject']
        body = request.form['body']
        return jsonify(f"Subject {subject}: {body}")
    else:
        return path('/api/home')