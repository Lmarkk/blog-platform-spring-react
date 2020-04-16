package fi.tuni.tamk.web_blog_app;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import fi.tuni.tamk.web_blog_app.blogpost.*;
import fi.tuni.tamk.web_blog_app.userdata.*;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@RestController
public class MyController {

    //BCryptPasswordEncoder encoder =  new BCryptPasswordEncoder();

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
    List<UserData> getAllUsers() {
        List<ModUserData> returnValue = new ArrayList<>();
        /*
        for(UserData user: userDataRepository.findAll()) {
            returnValue.add(new ModUserData(user.getId(),
                    user.getUserName(),
                    user.getLikedBlogPostIds(),
                    user.getDislikedBlogPostIds()));
        }
         */
        return userDataRepository.findAll();
    }


    @CrossOrigin
    @GetMapping("/findblogposts")
    List<BlogPost> getPassWord(@RequestBody SearchWord searchWord) {
        ArrayList<BlogPost> searchList = (ArrayList<BlogPost>) blogPostRepository.findAll();
        ArrayList<BlogPost> returnValue = new ArrayList<>();
        searchList.forEach((BlogPost blogPost) -> {
           if (blogPost.getTitle().contains(searchWord.getSearchWord()) ||
                   blogPost.getContent().contains(searchWord.getSearchWord()) ||
                   blogPost.getDescription().contains(searchWord.getSearchWord()) ||
                   blogPost.getDate().contains(searchWord.getSearchWord()))
            {
               returnValue.add(blogPost);
           }
        });
        return returnValue;
    }




    @CrossOrigin
    @PostMapping("/blogposts")
    @ResponseStatus(HttpStatus.OK)
    List<BlogPost> saveBlogPost(@RequestBody BlogPostRequestModel blogPostRequestModel) {
        blogPostRepository.save(new BlogPost(blogPostRequestModel.getTitle(),
                blogPostRequestModel.getDate(),
                blogPostRequestModel.getDescription(),
                0,
                0,
                blogPostRequestModel.getContent()));

        return blogPostRepository.findAll();
    }


    @CrossOrigin
    @PostMapping("/users")
    @ResponseStatus(HttpStatus.OK)
    List<UserData> saveUser(@RequestBody UserDataRequestModel userDataRequestModel) {
        userDataRepository.save(new UserData(userDataRequestModel.getUsername(),
               userDataRequestModel.getPassword()));

        return userDataRepository.findAll();
    }


}
