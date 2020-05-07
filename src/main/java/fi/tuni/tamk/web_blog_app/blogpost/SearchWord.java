package fi.tuni.tamk.web_blog_app.blogpost;

/**
 * Represents HTTP body when searching with a keyword.
 */
public class SearchWord {

    /**
     * Keyword for searching.
     */
    private String searchWord;

    public String getSearchWord() {
        return searchWord;
    }

    public void setSearchWord(String searchWord) {
        this.searchWord = searchWord;
    }
}
