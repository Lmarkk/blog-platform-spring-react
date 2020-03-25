import React from "react";
import {Header, Detail, Footer} from './components';
class HTTPPost extends React.component {

    constructor(props) {
        super(props);
    }

    postDataToBackend() {
        const apiUrl = `localhost:3000/blogposts`;
        const conf = {method: 'POST', headers: {'Content-type': 'application/json'}, body: JSON.stringify({title: 'My first blogpost!', content: 'Hello from Finland!'})};
        fetch(apiUrl, conf)
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
                <Header user={this.state.user}/>
                <Detail user={this.state.user}/>
                <Footer/>
            </div>
        );
    }
}

export default HTTPPost;