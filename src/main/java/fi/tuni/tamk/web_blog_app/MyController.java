package fi.tuni.tamk.web_blog_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import fi.tuni.tamk.web_blog_app.blogpost.*;
import fi.tuni.tamk.web_blog_app.userdata.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Controller class for managing incoming HTTP requests from frontend
 */
@RestController
public class MyController {

    /**
     * Spring injected component
     */
    @Autowired
    BlogPostRepository blogPostRepository;

    /**
     * Spring injected component
     */
    @Autowired
    UserDataRepository userDataRepository;

    /**
     * Returns all blog posts to frontend
     *
     * @return all blogposts
     */
    @CrossOrigin
    @GetMapping("/blogposts")
    List<BlogPost> getAllBlogPosts() {
        return blogPostRepository.findAll();
    }

    /**
     * Finds a blogpost which matches the given searchWord given from frontend.
     *
     * @return Arraylist which may hold blogposts.
     */
    @CrossOrigin
    @PostMapping("/findblogposts")
    @ResponseStatus(HttpStatus.OK)
    List<BlogPost> findBlogPost(@RequestBody SearchWord searchWord) {
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



    /**
     * Saves a new blogposts into blogpostrepository and returns all blogposts to frontend
     */
    @CrossOrigin
    @PostMapping("/blogposts")
    @ResponseStatus(HttpStatus.OK)
    List<BlogPost> saveBlogPost(@RequestBody BlogPostRequestModel blogPostRequestModel) {
        blogPostRepository.save(new BlogPost(blogPostRequestModel.getTitle(),
                blogPostRequestModel.getDate(),
                blogPostRequestModel.getImageURL(),
                blogPostRequestModel.getDescription(),
                0,
                0,
                blogPostRequestModel.getContent()));

        return blogPostRepository.findAll();
    }

    /**
     * Deletes blogpost which matches the id given from frontend
     */
    @CrossOrigin
    @DeleteMapping("/blogposts/{id}")
    @ResponseStatus(HttpStatus.OK)
    List<BlogPost> deleteBlogPost(@PathVariable Long id) {
        System.out.println(blogPostRepository.getOne(id));
        blogPostRepository.delete(blogPostRepository.getOne(id));

        return blogPostRepository.findAll();
    }

    /**
     * Saves user into backend and returns all users
     */
    @CrossOrigin
    @PostMapping("/users")
    @ResponseStatus(HttpStatus.OK)
    List<UserData> saveUser(@RequestBody UserDataRequestModel userDataRequestModel) {
        userDataRepository.save(new UserData(userDataRequestModel.getUsername(),
               userDataRequestModel.getPassword()));

        return userDataRepository.findAll();
    }

    /**
     * Checks if given username and password are the same and returns true or false.
     */
    @CrossOrigin
    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    String login(@RequestBody UserDataRequestModel userDataRequestModel) {
        if (userDataRequestModel.getUsername().equals("admin") && userDataRequestModel.getPassword().equals("admin")) {
            return "true";
        } else {
            return "false";
        }
    }
}
