import React from "react";
import "./Document_Gallery.css";
// import Image from "../../Base/Image.jsx"
import Section from "./DocumentSection"
import Data from "./Data"
// import ViewMore from "../Common/ViewMore"
export default class Document_Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sections: Data.sections
        }
    }
    
    render() {
        return (
            <div className="document-gallery-container">
                <h2>Document Gallery</h2>
                <div className = "sections">
                    {
                        this.state.sections.map((section) => {
                            return (
                                <Section title = {section.title}
                                        documents = {section.documents} />
                            )
                        })
                    }
                </div>
            </div>                          
        )
    }
}
