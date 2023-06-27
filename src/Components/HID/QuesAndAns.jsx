import React from "react";
import Image from "../../Base/Image";
import "./QuesAndAns.css";
export default class Question extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    render() {
        if(this.props.selectedIndex == this.props.index){
            return (
                <div className="question-tab">
                    <div className="question active">
                        <img src={Image.expand} alt="" />
                        <span>{this.props.question}</span>
                    </div>
                    <div className="answer">
                        <span>A:</span>
                        <span className="A">{this.props.answer}</span>
                    </div>
                </div>                          
            )
        }
        else{
            return (
                <div className="question-tab">
                    <div className="question inactive">
                        <img src={Image.collapse} alt="" />
                        <span>{this.props.question}</span>
                    </div>
                    <div className="answer inactive">
                        <span>A:</span>
                        <p>{this.props.answer}</p>
                    </div>
                </div>                          
            )
        }
        
    }
}
