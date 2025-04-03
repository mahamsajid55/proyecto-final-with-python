from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    # Get the message from the frontend
    user_message = request.json['message']

    # Bot's response logic (example, can be customized)
    bot_response = "Hello! How can I assist you today? 😊"

    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run(debug=True)
