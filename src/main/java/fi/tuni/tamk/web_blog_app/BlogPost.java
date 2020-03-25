package fi.tuni.tamk.web_blog_app;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
@Component
public class BlogPost {
    private @Id @GeneratedValue Long id;
    private String title;
    private String content;

    BlogPost() {}

    BlogPost(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
