package fi.tuni.tamk.web_blog_app;

import java.util.ArrayList;
import java.util.Arrays;

public class ModUserData {
    private Long id;
    private String userName;
    private ArrayList<Long> likedBlogPostIds = new ArrayList<>();
    private ArrayList<Long> dislikedBlogPostIds = new ArrayList<>();

    ModUserData() {}

    ModUserData(
             Long id,
             String userName,
             ArrayList<Long> likedPosts,
             ArrayList<Long> dislikedPosts) {
        this.id = id;
        this.userName = userName;

        this.likedBlogPostIds = likedPosts;
        this.dislikedBlogPostIds = dislikedPosts;
    }
}