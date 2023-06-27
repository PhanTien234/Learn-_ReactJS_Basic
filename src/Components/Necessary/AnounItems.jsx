import React from "react";
import "./AnounItems.css";
import Image from "../../Base/Image.jsx"
export default class AnounItems extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="anounItem">
                <div className="anounItem-container">
                    <img className="anounItem-picture" src={this.props.picture} alt='logo' />
                    <div className="anounItem-content">
                        <h3 className="anounItem-title">{this.props.title}</h3>
                        <p className="anounItem-summary">{this.props.summary}</p>
                        <div className="additional-info">
                            <div className="calendar">
                                <img className="calDate" src={Image.date} alt="error" />
                                <span>{this.props.date}</span>
                            </div>
                            {
                                this.props.isAnnouncement &&
                                <span>
                                    {this.props.department}
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
