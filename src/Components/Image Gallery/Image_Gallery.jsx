import React from "react";
import "./Image_Gallery.css"
import Image from "../../Base/Image";
import ViewMore from "../Necessary/ViewMore";

export default class Image_Gallery extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        isDisplayAll: false,
        imagelists: [
            Image.image_gallery,
            Image.image_gallery_1,
            Image.image_gallery_2,
            Image.image_gallery_3,
            Image.markgroup_3,
            Image.markgroup_4
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
        <div className="Image_Gallery-container">
            <h2>Image Gallery</h2>
            <div className="Image-item">
                {
                    this.state.imagelists.slice(0,this.state.isDisplayAll?this.state.imagelists.length:4).map((imageitem) => {  
                        return (
                            <img src={imageitem} alt="Image" />
                        )
                    })
                }
            </div>
            {
                this.state.imagelists.length>4&&
                <div onClick={()=>{this.ViewMoreClickHandler()}}>
                    <ViewMore isDisplayAll={this.state.isDisplayAll}/>
                </div>

            }
        </div>

    )
  }

}


