import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [state, setState] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
            .then((response) => response.json())
            .then((data) => setState(data));
    }, []);

    return (
        <div className="w-100 h-screen bg-gray-100">
            <div className="bg-white w-100 h-14 border-b px-20 flex items-center mb-12">
                <Link to="/gallery" className="text-black">
                    <h1>Visit Gallery</h1>
                </Link>
            </div>
            <div className="container bg-white mx-auto rounded p-10 shadow-sm">
                <h1>Featured Images</h1>
                <div className="grid grid-cols-4 gap-5 mt-5">
                    {state ? (
                        <>
                            <Link to={`/img/${state[0].id}`} key={state[0].id}>
                                <div className="p-3">
                                    <img
                                        src={state[0].url}
                                        alt={state[0].title}
                                        className="w-100 h-100"
                                    />
                                    <p>{state[0].title}</p>
                                </div>
                            </Link>

                            <Link to={`/img/${state[1].id}`} key={state[1].id}>
                                <div className="p-3">
                                    <img
                                        src={state[1].url}
                                        alt={state[1].title}
                                        className="w-100 h-100"
                                    />
                                    <p>{state[1].title}</p>
                                </div>
                            </Link>

                            <Link to={`/img/${state[2].id}`} key={state[2].id}>
                                <div className="p-3">
                                    <img
                                        src={state[2].url}
                                        alt={state[2].title}
                                        className="w-100 h-100"
                                    />
                                    <p>{state[2].title}</p>
                                </div>
                            </Link>

                            <Link to={"/gallery"}>
                                <div key={state[2].id} className="p-3">
                                    <div className="w-100 h-80 bg-gray-200" />
                                    <p>Show More ..</p>
                                </div>
                            </Link>
                        </>
                    ) : (
                        <h1>Loading fetch Data ...</h1>
                    )}
                </div>
            </div>
        </div>
    );
}
