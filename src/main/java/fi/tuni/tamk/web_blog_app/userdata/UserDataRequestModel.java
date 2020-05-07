package fi.tuni.tamk.web_blog_app.userdata;

/**
 * Class which represents body of the http request when a new blogpost is created.
 */
public class UserDataRequestModel {
    /**
     * UserData username String
     */
    private String username;
    /**
     * UserData password String
     */
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}