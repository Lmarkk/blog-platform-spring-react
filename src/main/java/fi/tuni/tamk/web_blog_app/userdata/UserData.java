package fi.tuni.tamk.web_blog_app.userdata;

import lombok.Data;
import org.springframework.stereotype.Component;
import javax.persistence.*;
import java.util.ArrayList;

@Data
@Entity
@Component
public class UserData {
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    private String username;
    private String password;
    private ArrayList<Long> likedBlogPostIds = new ArrayList<>();
    private ArrayList<Long> dislikedBlogPostIds = new ArrayList<>();

    UserData() {}

    public UserData(String username,
                    String password) {
        this.username = username;
        this.password = password;

        // this.likedBlogPostIds.addAll(Arrays.asList(likedPosts));
        // this.dislikedBlogPostIds.addAll(Arrays.asList(dislikedPosts));
    }
}