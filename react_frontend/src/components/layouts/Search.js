/*
import {Component} from "react";

export default class Search extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        query: '',
        data: [],
        searchString: []
    }

    handleInputChange = (event) => {
        this.setState({
            query: event.target.value
        }, () => {
            this.filterArray();
        })

    }

    getData = () => {
        fetch(`http://localhost:8080/findblogposts`)
            .then(response => response.json())
            .then(responseData => {
                // console.log(responseData)
                this.setState({
                    data: responseData,
                    searchString: responseData
                })
            })
    }

    filterArray = () => {
        let searchString = this.state.query;
        let responseData = this.state.data;


        if (searchString.length > 0) {
            // console.log(responseData[i].name);
            responseData = responseData.filter(searchString);
            this.setState({
                responseData
            })
        }

    }

    componentWillMount() {
        this.getData();
    }
}

 */