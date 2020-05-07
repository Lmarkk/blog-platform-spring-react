package fi.tuni.tamk.web_blog_app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Required to get Redirect controller working.
 */
@Controller
public class RedirectController {

    @RequestMapping("/**/{path:[^\\.]+}")
    public String forward() {
        return "forward:/";
    }
}
