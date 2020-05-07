package fi.tuni.tamk.web_blog_app;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

/**
 * Spring boot main class.
 */
@SpringBootApplication
public class WebBlogApplication {
	/**
	 * Server URL.
	 */
	public static String SERVER = "http://localhost:8080/";
	/**
	 * URL for posting and getting blogpost data.
	 */
	public static String URL = "blogposts/";

	/**
	 * Main method.
	 */
	public static void main(String[] args) {
		SpringApplication.run(WebBlogApplication.class, args);
	}
	@Bean
	/**
	 * Instructions.
	 */
	public CommandLineRunner instructions() {
		return (String... args) -> {
			Log logger = LogFactory.getLog(WebBlogApplication.class);
			logger.info("TEAM FLAMMENSPITZE: Lassi Markkinen, Samu Willman");
			logger.info("------------");
			logger.info("INSTRUCTIONS");
			logger.info("------------");
			logger.info("GET all blogposts");
			logger.info("    curl -X GET " + SERVER + URL);
			logger.info("POST one blogpost");
			logger.info("    curl -X POST -H \"Content-type: application/json\" -d \"{\"title\": \"test\"," +
					"\"date\": \"2020.01.01\"," +
					"\"description\": \"test\"," +
					"\"likes\": 0," +
					"\"dislikes\": 0," +
					"\"liked\": false," +
					"\"disliked\": false," +
					"\"content\": \"test\",}\"" + SERVER + URL);
		};
	}


}
