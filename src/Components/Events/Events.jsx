import React from "react";
import "./Events.css";
import EventItem from "../Events/EventItems";
import ViewMore from "../Necessary/ViewMore";

export default class Events extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplayAll: false,
            eventLists: [
                {
                    day: "01",
                    month: "Jan",
                    title: "Register Portal",
                    time: "09:00 AM - 09:30 AM"
                },
                {
                    day: "02",
                    month: "Jan",
                    title: "IT Maintenance",
                    time: "09:00 AM - 09:30 AM"
                },
                {
                    day: "03",
                    month: "Jan",
                    title: "IT Maintenance",
                    time: "09:00 AM - 09:30 AM"
                },
                {
                    day: "04",
                    month: "Jan",
                    title: "IT Maintenance",
                    time: "09:00 AM - 09:30 AM"
                },
                {
                    day: "05",
                    month: "Jan",
                    title: "IT Maintenance",
                    time: "09:00 AM - 09:30 AM"
                }
        
            ]
        }
    }
    
    ViewMoreClickHandler(){
        this.setState((prevState)=>({
            isDisplayAll:!prevState.isDisplayAll
        }))
    }

    render() {
        return (
            <div className="event-container">
                <h2>Events</h2>
                <div className = "events">
                    {
                        this.state.eventLists.slice(0,this.state.isDisplayAll?this.state.eventLists.length:4).map((event)=>{
                            return <EventItem day = {event.day}
                                        month = {event.month}
                                        title = {event.title}
                                        hour = {event.time}/>
                        })
                    }
                </div>

                {
                    this.state.eventLists.length>4&&
                    <div onClick={()=>{this.ViewMoreClickHandler()}}>
                        <ViewMore isDisplayAll={this.state.isDisplayAll}/>
                    </div>
                }
            </div>                          
        )
    }
}
