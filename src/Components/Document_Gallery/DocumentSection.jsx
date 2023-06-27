import React from "react";
import "./DocumentSection.css";
import Item from "./DocumentItem"
import ViewMore from "../Necessary/ViewMore"
export default class DocumentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            isDisplayAll: false
        }
    }
    ViewMoreClickHandler(){
        this.setState((prevState)=>({
            isDisplayAll:!prevState.isDisplayAll
        }))
    }
    render() {
        return (
            <div className = "document-section">
                <h3>{this.props.title}</h3>
                {
                    this.props.documents.slice(0,this.state.isDisplayAll?this.props.documents.length:4).map((docu) => {  
                        return(
                        <Item document = {docu}></Item>
                    )                 
                })}
                            
                {
                    this.props.documents.length>4&&
                    <div onClick={()=>{this.ViewMoreClickHandler()}}>
                        <ViewMore isDisplayAll={this.state.isDisplayAll}/>
                    </div>
                }

            </div>                          
        )
    }
}
