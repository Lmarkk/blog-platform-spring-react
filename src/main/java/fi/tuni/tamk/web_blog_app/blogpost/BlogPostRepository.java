package fi.tuni.tamk.web_blog_app.blogpost;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Custom repository for storing blogpost data.
 */
public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
}
