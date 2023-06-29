import React from "react";

export default class QuickLinkItem extends React.Component{
    render(){
        return(
            <div>
                <img className="quicklink-icon" src={this.props.image} alt="png" />
                <p className="quicklinks-text">{this.props.title}</p>
            </div>
        )
    }
}