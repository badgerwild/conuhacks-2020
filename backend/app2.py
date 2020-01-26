from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASEURI'] = 'postgres://badger:badger@postgres:5432/profile_db'
db = SQLAlchemy(app)


class User(db.Model):
    __tablename__ = 'players'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), unique=True)
    password = db.Column(db.String(50), unique=True)
    realname = db.Column(db.String(100))
    location = db.Column(db.String(50))


@app.route('/')
def hello_world():
    return 'test version 1!'


@app.route('/user')
def create_user():
    db.create_all()
    db.session.commit()
    user = User.query.first()
    if not user:
        u = User(username='test1', password='cat', location='mtl')
        db.session.add(u)
        db.session.commit()
    user = User.query.first()
    return "User '{} {}' is from database".format(user.username, user.location)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
