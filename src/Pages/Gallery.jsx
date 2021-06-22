import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Gallery() {
    const location = useLocation();
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
            .then((response) => response.json())
            .then((images) => setImages(images));
    }, []);

    document.querySelector("html").style.overflowY = "scroll";
    return (
        <div className="w-100 bg-gray-100">
            <header className="w-100 h-14 bg-white border-b px-20 flex items-center mb-5">
                <Link to="/">Home</Link>
            </header>
            <div className="container bg-white mx-auto rounded p-10">
                <h1>Gallery Images</h1>
                <div className="grid grid-cols-6 gap-5 mt-5">
                    {images ? (
                        images.map(img => (
                            <Link key={img.id} to={{
                                pathname: `/img/${img.id}`,
                                state: {background: location}
                            }}>
                                <div className="p-3">
                                    <img
                                        src={img.url}
                                        alt={img.title}
                                        className="w-100 h-100"
                                    />
                                    <p>{img.title}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <h1>Loading Gallery images ...</h1>
                    )}
                </div>
            </div>
        </div>
    );
}
