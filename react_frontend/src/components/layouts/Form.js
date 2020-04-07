import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import HTTPPost from '../../HTTPPost';

const httpPost = new HTTPPost();
const today = new Date();
const todayDate = today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();

export class Form extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('The title is ' + this.titleInput.value);
        httpPost.postDataToBackend(this.titleInput.value, todayDate, this.descriptionInput.value, this.contentInput.value);
        event.preventDefault();
    }

    componentDidMount() {
        console.log("Mounted");
    }

    componentWillUnmount() {
        console.log("Unmounted");
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div style={{maxWidth: 1500, paddingTop: 10, marginTop: 40, marginLeft: 35, marginRight: 35}}>
                <Card>
                    <input
                        name="title"
                        type="text"
                        ref={(titleInput) => this.titleInput = titleInput} />
                    <CardHeader style={{textAlign: 'center'}}
                               // subheader={todayDate}
                    />
                    <CardContent>
                        <input
                            name="description"
                            type="text"
                            ref={(descriptionInput) => this.descriptionInput = descriptionInput} />
                    </CardContent>
                        <CardContent>
                            <input
                                name="content"
                                type="text"
                                ref={(contentInput) => this.contentInput = contentInput} />

                            <input type="submit" value="Submit" />
                        </CardContent>
                </Card>
            </div>
            </form>
        )
    }
}