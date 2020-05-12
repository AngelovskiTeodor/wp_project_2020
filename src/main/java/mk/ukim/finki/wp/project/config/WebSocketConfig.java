package mk.ukim.finki.wp.project.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry stompEndpointRegistry) {
        stompEndpointRegistry.addEndpoint("/instant-messaging").withSockJS();
    }

    @Override
    public void configureMessageBroker (MessageBrokerRegistry messageBrokerRegistry) {
        messageBrokerRegistry.setApplicationDestinationPrefixes("/app");
        messageBrokerRegistry.enableSimpleBroker("/topic");
    }
}
