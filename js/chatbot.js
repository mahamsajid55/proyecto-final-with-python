const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.classList.add(sender);  // Add class for 'user' or 'bot'

    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageElement.appendChild(messageText);
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;  // Don't send empty messages

    // Display the user's message
    displayMessage(message, 'user');
    userInput.value = '';  // Clear the input field

    // Send the message to the Flask server
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })  // Send message as JSON
    })
    .then(response => response.json())
    .then(data => {
        // Display the bot's response
        displayMessage(data.response, 'bot');
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

window.onload = function() {
    userInput.focus();
};
