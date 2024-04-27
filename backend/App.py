#generic 
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import simplejson

#if you want a javascript web token password, uncomment thes parts and put @jwt_required() on any projected api calls
# from Security import check_password, load_secret_key
# from flask_jwt_extended import create_access_token
# from flask_jwt_extended import jwt_required
# from flask_jwt_extended import JWTManager

import AppApi as api

app = Flask(__name__)
CORS(app)

# app.config["JWT_SECRET_KEY"] = load_secret_key()
# app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=5)
# jwt = JWTManager(app)


def responsify(dictionary,convert=True):
    if isinstance(dictionary,str) or (not convert):
        djson = dictionary
    else:
        djson = simplejson.dumps(dictionary,default=api.np_converter,ignore_nan=True)
    resp = app.response_class(
        response=djson,
        mimetype='application/json',
        status=200
    )
    return resp

# @app.route('/login',methods=['GET','POST'])
# def login():
#     username = request.args.get('username',None)
#     password = request.args.get('password',None)
#     valid = check_password(username,password)
#     if not valid:
#         return jsonify({"msg": "Bad username or password"}), 401
#     access_token = create_access_token(identity=username)
#     return jsonify(access_token=access_token)

@app.route('/')
@cross_origin()
def test():
    return api.get_test()

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=5000, debug=True)