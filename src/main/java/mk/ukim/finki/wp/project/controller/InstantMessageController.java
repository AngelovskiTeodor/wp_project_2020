package mk.ukim.finki.wp.project.controller;

import mk.ukim.finki.wp.project.model.Message;
import mk.ukim.finki.wp.project.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class InstantMessageController {
    @Autowired
    private final MessageService messageService;

    public InstantMessageController(MessageService messageService) {
        this.messageService = messageService;
    }


    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/chatRoom")
    public Message sendMessage (@Payload Message message) {
        return this.messageService.save(message);
    }

    @MessageMapping("/chat.registerUser")
    @SendTo("/topic/chatRoom")
    public Message registerUser(@Payload Message message, SimpMessageHeaderAccessor simpMessageHeaderAccessor) {
        simpMessageHeaderAccessor.getSessionAttributes().put("username", message.getSender());
        return message;
    }
}