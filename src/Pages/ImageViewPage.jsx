import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ImageView() {
    const { id } = useParams();
    const [image, setImage] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
            .then((response) => response.json())
            .then((image) => {
                setImage(image);
                console.log(image);
            });
    }, [id]);

    return (
        <div className="bg-gray-100 w-100 h-screen flex justify-center pt-10">
            <>
                <Link to="/">Back</Link>
                {image ? (
                    <div className="bg-white p-5 rounded">
                        <img className="mb-5 rounded" src={image[0].url} alt={image[0].title} />
                        <h1>{image[0].title}</h1>
                    </div>
                ) : (
                    <h1>Loading Image ...</h1>
                )}
            </>
        </div>
    );
}
