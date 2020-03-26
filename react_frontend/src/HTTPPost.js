import React from "react";
class HTTPPost extends React.Component {

    constructor(props) {
        super(props);
    }

    postDataToBackend() {
        const apiUrl = `http://localhost:8080/blogposts`;
        const conf = {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: 'My first blogpost!',
                content: 'Hello from Finland!'})};

        console.log(conf);
        fetch(apiUrl, conf)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
}

export default HTTPPost;