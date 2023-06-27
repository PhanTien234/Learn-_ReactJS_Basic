import React from "react";
import "./VideoItem.css";
import Image from "../../Base/Image";



export default class VideoItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="video-container">
                <img className="video-picture" src={this.props.screenvideo} alt="" />
                <img className="play-item"src={Image.circle_play} alt="" />
            </div>
        )

    }
}