package mk.ukim.finki.wp.project.controller.rest;

import mk.ukim.finki.wp.project.model.Message;
import mk.ukim.finki.wp.project.service.MessageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class InstantMessageRestController {
    private final MessageService messageService;

    public InstantMessageRestController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping("/messages")
    public List<Message> messages() {
        return this.messageService.findAll();
    }
}
