package fi.tuni.tamk.web_blog_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MyController {
    @Autowired
    BlogPostRepository blogPostRepository;

    @CrossOrigin
    @GetMapping("/blogposts")
    List<BlogPost> all() {
        return blogPostRepository.findAll();
    }

    @CrossOrigin
    @PostMapping("/blogposts")
    void save(@RequestBody BlogPostRequestModel blogPostRequestModel) {
        blogPostRepository.save(new BlogPost(blogPostRequestModel.getTitle(),
                blogPostRequestModel.getDate(),
                blogPostRequestModel.getDescription(),
                blogPostRequestModel.getLikes(),
                blogPostRequestModel.getDislikes(),
                blogPostRequestModel.getLiked(),
                blogPostRequestModel.getDisliked(),
                blogPostRequestModel.getContent()));
    }
    

}
