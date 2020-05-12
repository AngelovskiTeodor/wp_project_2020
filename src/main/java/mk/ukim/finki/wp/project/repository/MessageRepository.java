package mk.ukim.finki.wp.project.repository;

import mk.ukim.finki.wp.project.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {

}
