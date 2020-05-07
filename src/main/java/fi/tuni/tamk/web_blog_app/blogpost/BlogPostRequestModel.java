package fi.tuni.tamk.web_blog_app.blogpost;

/**
 * Class which represents body of the http request when a new blogpost is created.
 */

public class BlogPostRequestModel {

    /**
     * Blogpost title String
     */
    private String title;
    /**
     * Blogpost date String
     */
    private String date;
    /**
     * Blogpost imageURL String
     */
    private String imageURL;
    /**
     * Blogpost description String
     */
    private String description;
    /**
     * Blogpost content String
     */
    private String content;


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
