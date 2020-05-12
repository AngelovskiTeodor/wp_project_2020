import React from 'react';

class Login extends Component {
    usernamePage = document.querySelector('#username-page');
    usernameForm = document.querySelector('#usernameForm');

    connect = function (event) {
        username = document.querySelector('#name').value.trim();
    
        if(username) {
            var socket = new SockJS('/instant-messaging');
            stompClient = Stomp.over(socket);
    
            stompClient.connect({}, onConnected, onError);
        }
        event.preventDefault();
    }

    onConnected = function () {
        stompClient.subscribe('/topic/chatRoom', onMessageReceived);
    
        stompClient.send("/app/chat.registerUser",
            {},
            JSON.stringify({sender: username, type: 'JOIN'})
        )
    
        this.props.history.push('/chatRoom')
    }
    
    onError = function (error) {
        connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
        connectingElement.style.color = 'red';
    }

    componentDidMount () {
        usernameForm.addEventListener('submit', connect, true)
    }

    render() {
        return (
            <div id="username-page">
                <div class="username-page-container">
                    <h1 class="title">Type your username</h1>
                    <form id="usernameForm" name="usernameForm">
                        <div class="form-group">
                            <input type="text" id="name" placeholder="Username" autocomplete="off" class="form-control" />
                        </div>
                        <div class="form-group">
                            <button type="submit" class="accent username-submit">Start Chatting</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;