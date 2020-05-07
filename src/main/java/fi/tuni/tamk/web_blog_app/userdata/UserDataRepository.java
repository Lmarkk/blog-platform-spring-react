package fi.tuni.tamk.web_blog_app.userdata;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Custom repository for storing blogpost data.
 */
public interface UserDataRepository extends JpaRepository<UserData, Long> {

}