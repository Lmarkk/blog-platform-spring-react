import React from "react";
class HTTPPost extends React.Component {

    constructor(props) {
        super(props);
    }

    postBlogDataToBackend(title, date, imageURL, description, content) {
        const apiUrl = `http://localhost:8080/blogposts`;
        const conf = {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                date: date,
                imageURL: imageURL,
                description: description,
                content: content
            })};

        console.log(conf);

        fetch(apiUrl, conf)
            .then(response => response.json())
    }

    deleteBlogDataFromBackend(id) {
        const apiUrl = `http://localhost:8080/blogposts/${id}`;
        const conf = {method: 'DELETE'};

        fetch(apiUrl, conf).then(response => response.json());
    }

    postUserDataToBackend(username, password) {
        const apiUrl = `http://localhost:8080/users`;
        const conf = {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })};

        console.log(conf);

        fetch(apiUrl, conf)
            .then(response => response.json());
    }
}

export default HTTPPost;