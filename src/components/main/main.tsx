import React ,{Component } from "react";
import Header from "../header/header";
import Content from "../content/content";

class Main extends  Component<any, any>{
    render() {
        return(
            <div className='h-100'>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default Main;