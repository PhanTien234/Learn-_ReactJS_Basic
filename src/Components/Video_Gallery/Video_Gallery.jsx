import React from "react";
import "./Video_Gallery.css"
import Image from "../../Base/Image";
import VideoItem from "./VideoItem";
import ViewMore from "../../Components/Necessary/ViewMore";
export default class Video_Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isDisplayAll: false,
            videoItems:[
                {screenvideo: Image.video},
                {screenvideo: Image.video_1},
                {screenvideo: Image.video_2},
                {screenvideo: Image.video_3},
                {screenvideo: Image.image_gallery}
            ]
        }
    }

    ViewMoreClickHandler(){
        this.setState((prevState)=>({
            isDisplayAll:!prevState.isDisplayAll
        }))
    }
    render(){
        return(
            <div className="video_gallery_container">
                <h2>Video Gallery</h2>
                <div className="videos">
                    {
                    this.state.videoItems.slice(0,this.state.isDisplayAll?this.state.videoItems.length:4).map((video) => {  
                        return(
                                <VideoItem screenvideo={video.screenvideo}/>
                            )
                        })
                    }
                </div>
                {
                    this.state.videoItems.length>4&&
                    <div onClick={()=>{this.ViewMoreClickHandler()}}>
                        <ViewMore isDisplayAll={this.state.isDisplayAll}/>
                    </div>

                 }
            </div>
        )
    }
}