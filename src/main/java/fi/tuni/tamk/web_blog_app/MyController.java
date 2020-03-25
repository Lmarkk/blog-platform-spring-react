package fi.tuni.tamk.web_blog_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MyController {
    @Autowired
    BlogPostRepository blogPostRepository;

    @GetMapping("/blogposts")
    List<BlogPost> all() {
        return blogPostRepository.findAll();
    }

    @PostMapping("/blogposts")
    void save(@RequestBody BlogPostRequestModel blogPostRequestModel) {
        blogPostRepository.save(new BlogPost(blogPostRequestModel.getTitle(), blogPostRequestModel.getContent()));
    }
    

}
