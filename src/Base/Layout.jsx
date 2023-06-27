import React from "react";
import "./layout.css";
import Navigation from "../Components/Navigation/Navigation";
import Announcement from "../Components/Anouncement/Anouncement";
import News from "../Components/News/News";
import Image_Gallery from "../Components/Image Gallery/Image_Gallery";
import Video_Gallery from "../Components/Video_Gallery/Video_Gallery";
import Document_Gallery from "../Components/Document_Gallery/Document_Gallery";
import Quick_Link from "../Components/Quick_Link/Quick_Link";
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
                    <div className="content">
                        <div id="announcement">
                            <Announcement></Announcement>
                        </div>
                        <div id="news">
                            <News></News>
                        </div>
                        <div id="image-gallery">
                            <Image_Gallery></Image_Gallery>
                        </div>
                        <div id="video-gallery">
                            <Video_Gallery></Video_Gallery>
                        </div>
                        <div id="document-gallery">
                            <Document_Gallery></Document_Gallery>
                        </div>
                        <div id="quick-links">
                            <Quick_Link></Quick_Link>
                        </div>
                        <div id="events">
                            <Events></Events>
                        </div>
                        <div id="how-do-i">
                            <HowDoI></HowDoI>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}