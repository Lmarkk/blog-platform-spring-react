import React from "react";

class HTTPFetch extends React.Component {

    constructor(props) {
        super(props);
    }

    fetchBlogDataFromBackend(f) {
        const apiUrl = `https://onedolah.herokuapp.com/blogposts`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => f(data))
            .catch(err => console.log(err));
    }

    fetchUserDataFromBackend() {
        const apiUrl = `https://onedolah.herokuapp.com/users`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    fetchTest() {
        const apiUrl = `https://onedolah.herokuapp.com/test`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

}

export default HTTPFetch;