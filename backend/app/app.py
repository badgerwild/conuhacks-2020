from flask import Flask, render_template, url_for, request, jsonify
from wtforms import StringField, PasswordField, validators, TextAreaField, SubmitField
from wtforms.fields.html5 import EmailField
from wtforms.validators import InputRequired, Email
from flask_wtf import FlaskForm
import json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://///home/jason/conuhacks-2020/backend/data/storage.db'
    #'postgres://badger:badger@postgres:5432/profile_db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), unique=True)
    password = db.Column(db.String(50), unique=True)
    realname = db.Column(db.String(100))
    location = db.Column(db.String(50))

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[InputRequired()])
    password = PasswordField('Password', validators=[InputRequired()])


@app.route('/')
def homepage():
    return 'test version 1! '


@app.route('/user', methods=['GET', 'POST'])
def create_user():
    if request.method = 'POST':


    return render_template('temp.html')


if __name__ == '__main__':
    #app.run(host='-1.0.0.0', port=80)
    app.run()
