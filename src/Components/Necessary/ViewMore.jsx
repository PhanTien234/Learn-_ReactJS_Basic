import React from "react";
import "./ViewMore.css";
import Image from "../../Base/Image.jsx"
export default class Announcement extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className = "view-more">
                <span className="text-item">{this.props.isDisplayAll?"View less":"View more"}</span>                
                 <span className="icon">
                    <img src={Image.arrowicon} alt="Image" />
                 </span>
            </div>                          
        )
    }
}
