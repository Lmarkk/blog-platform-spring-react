import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import HTTPPost from '../../HTTPPost';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import HTTPFetch from "../../HTTPFetch";

const httpFetch = new HTTPFetch();
const httpPost = new HTTPPost();

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        httpPost.login(this.usernameInput.value, this.passwordInput.value);
    }

    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <form onSubmit={this.handleSubmit}>
                <div style={{maxWidth: 500, paddingTop: 10, marginTop: 40, marginLeft: 35, marginRight: 35}}>
                    <Card >
                        <TextField
                            id="standard-multiline-flexible"
                            style={{marginLeft: 35, paddingRight: 50, justifyItems: "center", justifyContent: "center", display: "flex", marginTop: 30}}
                            name="Username"
                            size={"medium"}
                            label="Username"
                            type="text"
                            inputRef={(usernameInput) => this.usernameInput = usernameInput} />

                        <TextField
                            id="standard-password-input"
                            style={{marginLeft: 35, paddingRight: 50, justifyItems: "center", justifyContent: "center", display: "flex", marginTop: 30}}
                            name="Password"
                            size={"medium"}
                            label="Password"
                            type="password"
                            inputRef={(passwordInput) => this.passwordInput = passwordInput} />

                        <CardHeader style={{textAlign: 'center'}}
                        />
                        <CardContent>
                            <div style={{textAlign: 'center', marginTop: 30}}>
                                <Button type="submit" value="submit" onClick={httpFetch.fetchBlogDataFromBackend} variant="contained">Login</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </form>
            </div>
        )
    }
}