import { useLocation, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import ImageViewPage from "./Pages/ImageViewPage";
import Modal from "./Components/Modal";

export default function Container() {
    let location = useLocation();
    const background = location.state && location.state.background;

    return (
        <div className="App">
            <Switch location={background || location}>
                <Route exact path="/" children={Home} />
                <Route exact path="/gallery" children={Gallery} />
                <Route exact path="/img/:id" children={ImageViewPage} />
            </Switch>

            {background && <Route path="/img/:id" children={Modal} />}
        </div>
    );
}
