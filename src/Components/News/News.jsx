import React from "react";
import "./news.css";
import Image from "../../Base/Image.jsx"
import AnounItems from "../Necessary/AnounItems";
import ViewMore from "../Necessary/ViewMore";
export default class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplayAll: false,
            news:[
                {
                    picture:Image.markgroup2,
                    title: "Tomorrow Healthy Check",
                    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eligendi ratione quae odit optio minima ullam tempore veniam, saepe corporis, voluptatibus exercitationem repellat fuga aliquid? Ex similique vitae earum doloribus.",
                    date: "05/Jan/2021"
                },
                {
                    picture:Image.markgroup_1,
                    title: "Air-conditioning is broken",
                    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eligendi ratione quae odit optio minima ullam tempore veniam, saepe corporis, voluptatibus exercitationem repellat fuga aliquid? Ex similique vitae earum doloribus.",
                    date: "02/Jan/2021"
                },
                {
                    picture:Image.markgroup_2,
                    title: "Keep Running",
                    summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    date: "02/Jan/2021"
                },
                {
                    picture:Image.markgroup_3,
                    title: "Temperature above 37.3℃ need to report",
                    summary: "Consectetur adipisicing elit. Reprehenderit eligendi ratione quae odit optio minima ullam tempore veniam, saepe corporis, voluptatibus exercitationem repellat fuga aliquid? Ex similique vitae earum doloribus.",
                    date: "02/Jan/2021"
                },
                {
                    picture: Image.markgroup_6,
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
            <div className="news">
                <h2 className="title">News</h2>
                    {
                        this.state.news.slice(0,this.state.isDisplayAll?this.state.news.length:4).map((newItem) => {
                            return (
                                <AnounItems 
                                picture={newItem.picture} 
                                title={newItem.title} 
                                summary={newItem.summary} 
                                date={newItem.date} 
                                isAnnouncement={false}/>
                            )
                        })
                    }
                {
                    this.state.news.length>4&&
                    <div onClick={()=>{this.ViewMoreClickHandler()}}>
                        <ViewMore isDisplayAll={this.state.isDisplayAll}/>
                    </div>
                }

            </div>                          
        )
    }
}
