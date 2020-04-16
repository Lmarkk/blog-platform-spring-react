package fi.tuni.tamk.web_blog_app.blogpost;
import fi.tuni.tamk.web_blog_app.blogpost.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {

}
