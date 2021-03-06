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

        fetch(apiUrl, conf)
            .then(response => response.json())
    }

    deleteBlogDataFromBackend(id) {
        const apiUrl = `http://localhost:8080/blogposts/${id}`;
        const conf = {method: 'DELETE'};

        fetch(apiUrl, conf).then(response => response.json());
    }

    login(username, password) {
        const apiUrl = `http://localhost:8080/login`;
        const conf = {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })};


        fetch(apiUrl, conf)
            .then(response => response.json()).then(data => {
                if(data === true) {
                    sessionStorage.setItem("login", "true")
                } else {
                    sessionStorage.setItem("login", "false")
                }
            }
        )
    }
}

export default HTTPPost;