import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import HTTPPost from '../../HTTPPost';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const httpPost = new HTTPPost();
const today = new Date();
const todayDate = today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();

const useStyles = makeStyles(theme => ({
    textArea: {
        width: 100,
        height: 150,
        padding: 1
    }
}));

export class Form extends React.Component {


    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('The title is ' + this.titleInput.value);
        httpPost.postBlogDataToBackend(this.titleInput.value, todayDate, this.descriptionInput.value, this.contentInput.value);
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
                <Card >
                    <TextField
                        id="standard-multiline-flexible"
                        style={{marginLeft: 35, paddingRight: 80}}
                        name="title"
                        fullWidth={true}
                        multiline
                        label="Title"
                        type="text"
                        inputRef={(titleInput) => this.titleInput = titleInput} />

                        <TextField
                        id="standard-multiline-flexible"
                        style={{marginLeft: 35, paddingRight: 80}}
                        name="Image URL"
                        fullWidth={true}
                        multiline
                        label="Image URL"
                        type="text"
                        inputRef={(descriptionInput) => this.descriptionInput = descriptionInput} />

                    <CardHeader style={{textAlign: 'center'}}
                    />

                    <CardContent>
                        <TextField
                            id="standard-multiline-flexible"
                            style={{marginLeft: 20, paddingRight: 50}}
                            name="description"
                            fullWidth={true}
                            multiline
                            label="Description"
                            type="text"
                            inputRef={(descriptionInput) => this.descriptionInput = descriptionInput} />
                    </CardContent>
                        <CardContent>
                            <TextField
                                id="standard-multiline-flexible"
                                style={{marginLeft: 20, paddingRight: 50}}
                                name="content"
                                label="Content"
                                fullWidth={true}
                                multiline
                                type="text"
                                inputRef={(contentInput) => this.contentInput = contentInput} />
                            <div style={{textAlign: 'center', marginTop: 30}}>
                            <Button type="submit" value="submit" variant="contained">Submit</Button>
                            </div>
                        </CardContent>
                </Card>
            </div>
            </form>
        )
    }
}