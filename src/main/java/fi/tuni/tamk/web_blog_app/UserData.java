package fi.tuni.tamk.web_blog_app;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.Arrays;

@Data
@Entity
@Component
public class UserData {
    private @Id @GeneratedValue Long id;
    private String userName;
    private String passWord;
    private ArrayList<Long> likedBlogPostIds = new ArrayList<>();
    private ArrayList<Long> dislikedBlogPostIds = new ArrayList<>();

    UserData() {}

    UserData(String userName,
             String passWord) {
        this.userName = userName;
        this.passWord = passWord;

        // this.likedBlogPostIds.addAll(Arrays.asList(likedPosts));
        // this.dislikedBlogPostIds.addAll(Arrays.asList(dislikedPosts));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public ArrayList<Long> getLikedBlogPostIds() {
        return likedBlogPostIds;
    }

    public void setLikedBlogPostIds(ArrayList<Long> likedBlogPostIds) {
        this.likedBlogPostIds = likedBlogPostIds;
    }

    public ArrayList<Long> getDislikedBlogPostIds() {
        return dislikedBlogPostIds;
    }

    public void setDislikedBlogPostIds(ArrayList<Long> dislikedBlogPostIds) {
        this.dislikedBlogPostIds = dislikedBlogPostIds;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }
}