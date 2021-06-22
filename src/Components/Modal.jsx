import { useLayoutEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function Modal() {
    const history = useHistory();
    const { id } = useParams();
    const [image, setImage] = useState([]);

    useLayoutEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
            .then((response) => response.json())
            .then((image) => setImage(image));
    }, [id]);

    const back = (e) => {
        e.stopPropagation();
        history.goBack();
    };

    
    document.querySelector("html").style.overflowY = "hidden";
    return (
        <div
            onClick={back}
            className="flex justify-center"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.4)",
            }}
        >
            <div
                className="modal border rounded w-96"
                style={{
                    position: "relative",
                    background: "#fff",
                    top: 25,
                    height: "550px",
                    padding: 15,
                }}
            >
                {image.length > 0 ? (
                    <>
                        <img src={image[0].url} alt={image[0].title} className="w-96 h-96 rounded" />
                        <h1>{image[0].title}</h1>
                    </>
                ) : (
                    <h1>Loading Image</h1>
                )}
                <button type="button" className="absolute bottom-5 border px-3 rounded" onClick={back}>
                    Close
                </button>
            </div>
        </div>
    );
}
