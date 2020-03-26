import React from "react";
class HTTPFetch extends React.Component {



    constructor(props) {
        super(props);
    }

    fetchDataFromBackend() {
        const apiUrl = `http://localhost:8080/blogposts`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
}

export default HTTPFetch;