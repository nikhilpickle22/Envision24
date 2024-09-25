// Establish a socket connection
const socket = io('http://localhost:5500');

// DOM elements
const messageInput = document.getElementById('message-input');
const chatBox = document.getElementById('chat-box');
const sendBtn = document.getElementById('send-btn');

// Handle sending a message
sendBtn.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        socket.emit('chat message', message); // Send the message to the server
        messageInput.value = ''; // Clear input field
    }
});

// Display received messages
socket.on('chat message', (msg) => {
    const msgElement = document.createElement('div');
    msgElement.textContent = msg;
    chatBox.appendChild(msgElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
});