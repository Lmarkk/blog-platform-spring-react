import React from "react";
class HTTPFetch extends React.component {

    constructor(props) {
        super(props);
    }



    getDataFromBackend() {
        const apiUrl = `localhost:3000/blogposts`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getDataFromBackend();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default HTTPFetch;