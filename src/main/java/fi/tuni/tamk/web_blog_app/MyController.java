package fi.tuni.tamk.web_blog_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MyController {

    BCryptPasswordEncoder encoder =  new BCryptPasswordEncoder();

    @Autowired
    BlogPostRepository blogPostRepository;

    @Autowired
    UserDataRepository userDataRepository;

    @CrossOrigin
    @GetMapping("/blogposts")
    List<BlogPost> getAllBlogPosts() {
        return blogPostRepository.findAll();
    }

    @CrossOrigin
    @GetMapping("/users")
    List<ModUserData> getAllUsers() {
        List<ModUserData> returnValue = new ArrayList<>();
        for(UserData user: userDataRepository.findAll()) {
            returnValue.add(new ModUserData(user.getId(),
                    user.getUserName(),
                    user.getLikedBlogPostIds(),
                    user.getDislikedBlogPostIds()));
        }
        return returnValue;
    }

    @CrossOrigin
    @GetMapping("/test")
    List<String> getPassWord() {
        List<String> returnValue = new ArrayList<>();
        for(UserData user: userDataRepository.findAll()) {
            returnValue.add(user.getPassWord());
        }
        return returnValue;
    }

    @CrossOrigin
    @PostMapping("/blogposts")
    void saveBlogPost(@RequestBody BlogPostRequestModel blogPostRequestModel) {
        blogPostRepository.save(new BlogPost(blogPostRequestModel.getTitle(),
                blogPostRequestModel.getDate(),
                blogPostRequestModel.getDescription(),
                0,
                0,
                blogPostRequestModel.getContent()));
    }

    @CrossOrigin
    @PostMapping("/users")
    void saveUser(@RequestBody UserDataRequestModel userDataRequestModel) {
        userDataRepository.save(new UserData(userDataRequestModel.getUserName(),
                encoder.encode(userDataRequestModel.getPassWord())));
    }


}
