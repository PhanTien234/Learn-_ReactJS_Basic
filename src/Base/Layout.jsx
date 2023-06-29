import React from "react";
import "./layout.css";
import Navigation from "../Components/Navigation/Navigation";
import Announcement from "../Components/Anouncement/Anouncement";
import News from "../Components/News/News";
import ImageGallery from "../Components/Image Gallery/Image_Gallery";
import VideoGallery from "../Components/Video_Gallery/Video_Gallery";
import DocumentGallery from "../Components/Document_Gallery/Document_Gallery";
import QuickLink from "../Components/Quick_Link/Quick_Link";
import Events from "../Components/Events/Events";
import HowDoI from "../Components/HID/HowDoI";

export default class Layout extends React.Component {
    render() {
        return (
            <div className="portal-homepage">
                <div className="wrap">
                    <div className="header">
                        <Navigation></Navigation>
                    </div>
                    <div id="content">
                        <div id="left-content">
                            <Announcement></Announcement>
                            <News></News>
                            <ImageGallery></ImageGallery>
                            <VideoGallery></VideoGallery>
                            <DocumentGallery></DocumentGallery>
                        </div>
                        <div id="right-content">
                            <QuickLink></QuickLink>
                            <Events></Events>
                            <HowDoI></HowDoI>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}