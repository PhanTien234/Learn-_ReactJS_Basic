import React from "react";
import "./anounceStyle.css";
import Image from "../../Base/Image.jsx";
import AnounItems from "../Necessary/AnounItems"
import ViewMore from "../Necessary/ViewMore";
export default class Announcement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplayAll: false,
            MenuAnnouncements: [
                {
                    picture: Image.image_gallery,
                    title: "New Learning System Is Live",
                    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eligendi ratione quae odit optio minima ullam tempore veniam, saepe corporis, voluptatibus exercitationem repellat fuga aliquid? Ex similique vitae earum doloribus.",
                    date: "05/Jan/2021",
                    department: "Human Resource"
                },
                {
                    picture: Image.image_gallery_1,
                    title: "IT Maintenance",
                    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eligendi ratione quae odit optio minima ullam tempore veniam, saepe corporis, voluptatibus exercitationem repellat fuga aliquid? Ex similique vitae earum doloribus.",
                    date: "02/Jan/2021",
                    department: "Human Resource"
                },
                {
                    picture: Image.image_gallery_2,
                    title: "IT Maintenance",
                    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    date: "02/Jan/2021",
                    department: "Human Resource"
                },
                {
                    picture: Image.image_gallery_3,
                    title: "IT Maintenance",
                    summary: "Consectetur adipisicing elit. Reprehenderit eligendi ratione quae odit optio minima ullam tempore veniam, saepe corporis, voluptatibus exercitationem repellat fuga aliquid? Ex similique vitae earum doloribus.",
                    date: "02/Jan/2021",
                    department: "Human Resource"
                },
                {
                    picture: Image.markgroup_1,
                    title: "IT Maintenance",
                    summary: "Consectetur adipisicing elit. Reprehenderit eligendi ratione quae odit optio minima ullam tempore veniam, saepe corporis, voluptatibus exercitationem repellat fuga aliquid? Ex similique vitae earum doloribus.",
                    date: "02/Jan/2021",
                    department: "Human Resource"
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
            <div className="announcements">
                <h2 className="title">Announcement</h2>
                    {
                        this.state.MenuAnnouncements.slice(0,this.state.isDisplayAll?this.state.MenuAnnouncements.length:4).map((announcement) => {
                            return (
                                <AnounItems picture={announcement.picture} 
                                    title={announcement.title} 
                                    summary={announcement.summary} 
                                    date={announcement.date} 
                                    isAnnouncement={true} 
                                    department={announcement.department} />
                            )
                        })
                    }
                {
                    this.state.MenuAnnouncements.length>4&&
                    <div onClick={()=>{this.ViewMoreClickHandler()}}>
                        <ViewMore isDisplayAll={this.state.isDisplayAll}/>
                    </div>
       
                }

            </div>
        )
    }
}
