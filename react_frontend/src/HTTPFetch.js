import React from "react";


class HTTPFetch extends React.Component {

    constructor(props) {
        super(props);
    }

    fetchBlogDataFromBackend() {
        const apiUrl = `http://localhost:8080/blogposts`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    fetchUserDataFromBackend() {
        const apiUrl = `http://localhost:8080/users`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    fetchTest() {
        const apiUrl = `http://localhost:8080/test`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
}

export default HTTPFetch;