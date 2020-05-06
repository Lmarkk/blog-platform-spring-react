package fi.tuni.tamk.web_blog_app.blogpost;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
@Component
public class BlogPost {
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    private String title;
    private String date;
    private String imageURL;
    private String description;
    private int likes;
    private int dislikes;
    private String content;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public int getDislikes() {
        return dislikes;
    }

    public void setDislikes(int dislikes) {
        this.dislikes = dislikes;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    BlogPost() {}

    public BlogPost(String title,
                    String date,
                    String imageURL,
                    String description,
                    int likes,
                    int dislikes,
                    String content) {
        this.title = title;
        this.date = date;
        this.imageURL = imageURL;
        this.description = description;
        this.likes = likes;
        this.dislikes = dislikes;
        this.content = content;
    }
}
