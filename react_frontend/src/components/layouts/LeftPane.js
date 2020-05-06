import React, {Suspense, useState} from 'react'
import HTTPFetch from "../../HTTPFetch";
import HTTPPost from "../../HTTPPost";
import {Form} from './Form';
import BlogpostCreator from "./BlogpostCreator";


export default class BlogCards extends React.Component {

    constructor(props) {
        super(props);


        this.httpPost = new HTTPPost();
        this.httpFetch = new HTTPFetch();
        this.stateClass = new Form();
        this.element = null;
        this.today = new Date();
        this.todayDate = this.today.getDate() + "/" + parseInt(this.today.getMonth() + 1) + "/" + this.today.getFullYear();
        this.index = 0;
        this.data = 0;

        this.state = {
            blogPostData: null,
        };
    }

    componentDidMount() {
        const interval = setInterval(() => {
            this.httpFetch.fetchBlogDataFromBackend((data) => {
                this.data = data;
                this.index = data.length;
                this.setState({blogPostData: data});
            })
        }, 5000);
    }

    render() {
        if (this.data === null || Object.keys(this.data).length === 0) {
            return (
                <div>
                    <Form/>
                </div>
            )
        } else {
            return (
                <div>
                    <Form/>
                    <Suspense fallback={<h1> Loading...</h1>}>
                        <div>
                            {
                                [...Array(this.index)].map((x, i) =>
                                    <div>
                                        <BlogpostCreator key={i} arrayIndex={this.index - i - 1}/>
                                    </div>
                                )
                            }
                        </div>
                    </Suspense>
                </div>
            )
        }
    }
}
