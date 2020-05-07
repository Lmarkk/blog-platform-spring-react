import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import HTTPPost from '../../HTTPPost';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const httpPost = new HTTPPost();
const today = new Date();
const todayDate = today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();

export class Form extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        httpPost.postBlogDataToBackend(this.titleInput.value, todayDate, this.imageInput.value, this.descriptionInput.value, this.contentInput.value);
        event.preventDefault();
    }


    insertImage(){
        document.getElementById("titleImage").src = this.imageInput
    }

     dynamicUrl() {
         const url = this.imageInput;
         const img = document.createElement("titleImage");
         img.src = url;
         document.body.appendChild(img);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div style={{maxWidth: 1500, paddingTop: 10, marginTop: 40, marginLeft: 35, marginRight: 35}}>
                <Card >
                    <TextField
                        style={{marginLeft: 35, paddingRight: 80, marginTop: 10}}
                        name="title"
                        fullWidth={true}
                        InputLabelProps={{ shrink: true }}
                        maxLength="255"
                        inputProps={{maxLength: 255}}
                        label="Title"
                        type="text"
                        inputRef={(titleInput) => this.titleInput = titleInput} />

                        <TextField
                        style={{marginLeft: 35, paddingRight: 80, marginTop: 10}}
                        name="Image URL"
                        fullWidth={true}
                        InputLabelProps={{ shrink: true }}
                        multiline
                        maxLength="255"
                        inputProps={{maxLength: 255}}
                        label="Image URL"
                        type="text"
                        inputRef={(imageInput) => this.imageInput = imageInput} />

                    <img
                        id="titleImage"
                        style={{ height: '100%',
                            display: 'block',
                            paddingTop: 10,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%'}}
                    />

                    <CardHeader style={{textAlign: 'center'}}
                    />

                    <CardContent>
                        <TextField
                            style={{marginLeft: 20, paddingRight: 50}}
                            name="description"
                            fullWidth={true}
                            InputLabelProps={{ shrink: true }}
                            multiline
                            label="Description"
                            maxLength="255"
                            inputProps={{maxLength: 255}}
                            type="text"
                            inputRef={(descriptionInput) => this.descriptionInput = descriptionInput} />
                    </CardContent>
                        <CardContent>
                            <TextField
                                style={{marginLeft: 20, paddingRight: 50}}
                                name="content"
                                label="Content"
                                fullWidth={true}
                                InputLabelProps={{ shrink: true }}
                                multiline
                                type="text"
                                maxLength="255"
                                inputProps={{maxLength: 255}}
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