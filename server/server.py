from flask import Flask, jsonify
from flask_cors import CORS
from authentication import authentication


#app instance
app = Flask(__name__)
CORS(app)


app.register_blueprint(authentication, url_prefix='/api/auth')

@app.route("/api/home",methods=['GET'])
def return_home():
    return jsonify({
        "message":"Hello World"
    })
    




if __name__=="__main__":
    app.run(debug=True)