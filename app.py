import flask class

app = Flask(__name__)

app.config['DEBUG'] = True

if __name__ == '__main__':
    app.run()

@app.route('/')
def index():
    return 'My Flask App!'