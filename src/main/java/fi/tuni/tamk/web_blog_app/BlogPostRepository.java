package fi.tuni.tamk.web_blog_app;
import org.springframework.data.jpa.repository.JpaRepository;

interface BlogPostRepository extends JpaRepository<BlogPost, Long> {

}
