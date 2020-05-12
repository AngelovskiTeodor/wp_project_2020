package mk.ukim.finki.wp.project.service;

import mk.ukim.finki.wp.project.model.Message;

import java.util.List;

public interface MessageService {
    public List<Message> findAll();
    public Message save(Message message);
}
