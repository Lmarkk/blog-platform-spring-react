package fi.tuni.tamk.web_blog_app;

public class BlogPostRequestModel {
    private String title;
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
}
