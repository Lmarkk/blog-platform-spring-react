package fi.tuni.tamk.web_blog_app.userdata;
import fi.tuni.tamk.web_blog_app.userdata.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDataRepository extends JpaRepository<UserData, Long> {

}