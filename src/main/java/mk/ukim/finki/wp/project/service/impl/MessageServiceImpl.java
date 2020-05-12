package mk.ukim.finki.wp.project.service.impl;

import mk.ukim.finki.wp.project.model.Message;
import mk.ukim.finki.wp.project.repository.MessageRepository;
import mk.ukim.finki.wp.project.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {

    private final MessageRepository messageRepository;

    public MessageServiceImpl(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @Override
    public List<Message> findAll() {
        return this.messageRepository.findAll();
    }

    @Override
    public Message save(Message message) {
        return this.messageRepository.save(message);
    }
}
