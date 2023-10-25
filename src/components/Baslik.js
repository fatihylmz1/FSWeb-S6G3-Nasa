
import React from "react";


const Baslik = (props) => {

    const { resim } = props;

    return (
        <div className="post-border">

            <div className="post-image-wrapper">
                <img
                    alt="post thumbnail"

                    src={resim.imageUrl}
                />
            </div>

        </div>
    );
};

export default Baslik;