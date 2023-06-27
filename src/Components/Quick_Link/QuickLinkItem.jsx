import React from "react";
import Image from "../../Base/Image";

export default class QuickLinkItem extends React.Component{
    render(){
        return(
            <div>
                <img className="quicklink-icon" src={this.props.image} alt="Image" />
                <p className="quicklinks-text">{this.props.title}</p>
            </div>
        )
    }
}