import React, { Component } from "react";
import QuickLinkItem from "./QuickLinkItem";
import Image from "../../Base/Image";
import "./Quick_Link.css"

export default class Quick_Link extends Component{
    constructor(props){
        super(props)
        this.state =
        {
            quickLinkItems:[
                {
                    image:Image.icon,
                    title: "Training"
                },
                {
                    image:Image.icon_1,
                    title: "Organization"
                },
                {
                    image:Image.icon_2,
                    title: "Task"
                },
                {
                    image:Image.icon_3,
                    title: "Global Sales"
                },
                {
                    image:Image.icon_4,
                    title: "Birthday"
                },
                {
                    image:Image.icon_5,
                    title: "Health"
                },
                {
                    image:Image.icon_6,
                    title: "Service Desk"
                },
                {
                    image:Image.icon_7,
                    title: "Truck"
                },
        
                {
                    image: Image.icon_8,
                    title: "Idea"
                }
        
            ]
        }
    }
    render(){
        return(
            <div>
                <h2>Quick Links</h2>
                <div className="quicklink-container">
                    {this.state.quickLinkItems.map((item, index) =>
                        <QuickLinkItem key={index} image={item.image} title={item.title}/>
                    )}
                </div>
            </div>

        )
    }
}