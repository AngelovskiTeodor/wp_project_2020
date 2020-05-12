import React from 'react';

class ChatRoom extends Component {
    chatPage = document.querySelector('#chat-page');
    messageForm = document.querySelector('#messageForm');
    messageInput = document.querySelector('#message');
    messageArea = document.querySelector('#messageArea');
    connectingElement = document.querySelector('.connecting');

    sendMessage = function(event) {
        var messageContent = messageInput.value.trim();
        if(messageContent && stompClient) {
            var chatMessage = {
                sender: username,
                content: messageInput.value,
                type: 'CHAT'
            };
            stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
            messageInput.value = '';
        }
        event.preventDefault();
    }

    onMessageReceived = function(payload) {
        var message = JSON.parse(payload.body);
    
        var messageElement = document.createElement('li');
    
        if(message.type === 'JOIN') {
            messageElement.classList.add('event-message');
            message.content = message.sender + ' joined!';
        } else if (message.type === 'LEAVE') {
            messageElement.classList.add('event-message');
            message.content = message.sender + ' left!';
        } else {
            messageElement.classList.add('chat-message');
    
            var avatarElement = document.createElement('i');
            var avatarText = document.createTextNode(message.sender[0]);
            avatarElement.appendChild(avatarText);
            avatarElement.style['background-color'] = getAvatarColor(message.sender);
    
            messageElement.appendChild(avatarElement);
    
            var usernameElement = document.createElement('span');
            var usernameText = document.createTextNode(message.sender);
            usernameElement.appendChild(usernameText);
            messageElement.appendChild(usernameElement);
        }
    
        var textElement = document.createElement('p');
        var messageText = document.createTextNode(message.content);
        textElement.appendChild(messageText);
    
        messageElement.appendChild(textElement);
    
        messageArea.appendChild(messageElement);
        messageArea.scrollTop = messageArea.scrollHeight;
    }

    getAvatarColor = function(messageSender) {
        var hash = 0;
        for (var i = 0; i < messageSender.length; i++) {
            hash = 31 * hash + messageSender.charCodeAt(i);
        }
        var index = Math.abs(hash % colors.length);
        return colors[index];
    }

    componentDidMount() {
        messageForm.addEventListener('submit', sendMessage, true)
    }

    render () {
        return (
            <div id="chat-page" class="hidden">
                <div class="chat-container">
                    <div class="chat-header">
                        <h2>Spring WebSocket Chat Demo</h2>
                    </div>
                    <div class="connecting">
                        Connecting...
                    </div>
                    <ul id="messageArea">

                    </ul>
                    <form id="messageForm" name="messageForm">
                        <div class="form-group">
                            <div class="input-group clearfix">
                                <input type="text" id="message" placeholder="Type a message..." autocomplete="off" class="form-control"/>
                                <button type="submit" class="primary">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ChatRoom;