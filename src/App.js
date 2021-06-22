import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import ImageViewPage from "./Pages/ImageViewPage";
import Modal from "./Components/Modal";

//NOTE: https://jsonplaceholder.typicode.com/photos --- a fake rest api

export default function ModalGalleryExample() {
    return (
        <Router>
            <ModalSwitch />
        </Router>
    );
}

function ModalSwitch() {
    let location = useLocation();
    let background = location.state && location.state.background;

    return (
        <div>
            <Switch location={background || location}>
                <Route exact path="/" children={<Home />} />
                <Route path="/gallery" children={<Gallery />} />
                <Route path="/img/:id" children={<ImageViewPage />} />
            </Switch>

            {/* Show the modal when a background page is set */}
            {background && <Route path="/img/:id" children={<Modal />} />}
        </div>
    );
}
