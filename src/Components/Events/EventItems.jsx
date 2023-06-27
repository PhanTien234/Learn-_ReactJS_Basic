import React from "react";
import Image from "../../Base/Image";
import "./Events.css";
export default class EventBar extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="event">
                <div className="dates">
                    <span className="day">{this.props.day}</span>
                    <span className="month">{this.props.month}</span>
                </div>
                <div className="event-info-container">
                    <div className="event-info">
                        <p className="title">
                            {this.props.title}
                        </p>
                        <div className="time">
                            <span className="clock"><img src={Image.clock} alt="" /></span>
                            <span className="hour">{this.props.hour}</span>
                        </div>
                    </div>
                </div>
                    
            </div>                          
        )
    }
}
