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
    private String date;
    private String description;
    private int likes;
    private int dislikes;
    private String content;

    BlogPost() {}

    BlogPost(String title,
             String date,
             String description,
             int likes,
             int dislikes,
             String content) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.likes = likes;
        this.dislikes = dislikes;
        this.content = content;
    }
}
