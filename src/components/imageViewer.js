import React from "react";
import "../App.css";

const ImageViewer = (props) => {
    const { data } = props;
    return (
        <div>
            <h1 class="baslik">{data.title}</h1>
            <img src={data.hdurl} alt={data.title} />
            <p className="açıklama">{data.explanation}</p>
            <p>Copyright from {data.copyright}</p>
        </div>
    );
};

export default ImageViewer;