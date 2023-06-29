import React from "react";
import "./DocumentItem.css";
import Image from "../../Base/Image.jsx"
export default class DocumentItem extends React.Component {
    constructor(props) {
        super(props)
        const document = props.document;
        const icon = document.type == "word"
        ?Image.word:document.type == "ppt"
        ?Image.powerpoint:Image.vsdx;
        this.state = {
            icon: icon
        }
    }
    
    render() {
        return (
            <div className = "document-item">
                <span className="iconDocument"><img src={this.state.icon} alt="" /></span>
                <span className="title-document">{this.props.document.title}</span>
            </div>                          
        )
    }
}
