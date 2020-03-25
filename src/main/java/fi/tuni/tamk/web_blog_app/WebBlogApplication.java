package fi.tuni.tamk.web_blog_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebBlogApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebBlogApplication.class, args);
		System.out.println("Team Flammenspitze");
		System.out.println("Lassi Markkinen, Samu Willman");
		System.out.println("Curl get all blogposts: curl -X GET http://localhost:8080/blogposts/");
		System.out.println("Curl post one blogpost: curl -X POST -H \"Content-type: application/json\" -d \"{\"title\": \"test\"," +
				"\"date\": \"2020.01.01\"," +
				"\"description\": \"test\"," +
				"\"likes\": 0," +
				"\"dislikes\": 0," +
				"\"liked\": false," +
				"\"disliked\": false," +
				"\"content\": \"test\",}\" http://localhost:8080/blogposts/");

	}

}
