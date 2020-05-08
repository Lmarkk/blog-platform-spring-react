import React from 'react'
import HTTPFetch from "../../HTTPFetch";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import Card from "@material-ui/core/Card";
import HTTPPost from "../../HTTPPost";


class BlogpostCreator extends React.Component {

    index = 0;
    likes = 0;
    dislikes = 0;
    imageURL;

    constructor(props) {
        super(props);

        this.state = {
            blogPostData: null,
        };

        this.expand = {
            expanded: false,
            setExpanded: false
        };

        this.httpFetch = new HTTPFetch();
        this.httpPost = new HTTPPost();

        this.loginData = sessionStorage.getItem("login");
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (window.x === undefined || window.x.length === 0|| window.x === null || typeof(window.x) === "undefined" || window.x === []) {
                this.httpFetch.fetchBlogDataFromBackend((data) => {
                    this.index = data.length - 1;
                    this.setState({ blogPostData: data });
                })
            } else {
                this.setState({blogPostData: window.x})
            }
        }, 3000);
    }


    deletePost(id) {
        this.httpPost.deleteBlogDataFromBackend(id);
    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    changeGreen() {
        let x = document.getElementById("thumbUp");
        x.style.color = 'green';
    };

    changeRed() {
        let x = document.getElementById("thumbDown");
        x.style.color = 'red';
    };

    isDisabled() {
        if (this.loginData === "true") {
            return false;
        } else {
            return true;
        }
    }


    render() {
        const { blogPostData } = this.state;

        if (this.state.blogPostData === null || Object.keys(this.state.blogPostData).length === 0 ||  blogPostData === null || typeof(blogPostData[this.props.arrayIndex]) === "undefined") {
            return null
        } else {
            return (
                <div className='root'>
                        <Card>
                            <IconButton className='addIcon' disabled={this.isDisabled()} onClick={() => this.deletePost(blogPostData[this.props.arrayIndex].id)}>
                                <DeleteIcon/>
                            </IconButton>
                            <CardHeader className='cardHeader'
                                        title={blogPostData[this.props.arrayIndex].title}
                                        subheader={blogPostData[this.props.arrayIndex].date}
                            />
                            <img
                                id="inputImage"
                                className='media'
                                src={blogPostData[this.props.arrayIndex].imageURL}
                            />
                            <CardContent>
                                <Typography variant='body1' color='textSecondary'>
                                    {blogPostData[this.props.arrayIndex].description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>

                                <IconButton id={"thumbUp"} onClick={this.changeGreen}>
                                    <ThumbUp/>
                                </IconButton>

                                <Typography>
                                    {this.likes}
                                </Typography>

                                <IconButton id={"thumbDown"} onClick={this.changeRed}>
                                    <ThumbDown />
                                </IconButton>

                                <Typography>
                                    {this.dislikes}
                                </Typography>

                            </CardActions>
                                <CardContent>
                                    <Typography style={{ wordWrap: "break-word" }}>
                                        {blogPostData[this.props.arrayIndex].content}
                                    </Typography>
                                </CardContent>
                        </Card>
                </div>
            );
        }
    }
}

export default BlogpostCreator;