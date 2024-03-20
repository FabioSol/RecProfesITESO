from flask import Flask, render_template
import json

with open('mock-json/user_dashboard_response.json', 'r') as file:
    dashboard_data = json.load(file)
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html',data=dashboard_data)

if __name__ == '__main__':
    app.run()