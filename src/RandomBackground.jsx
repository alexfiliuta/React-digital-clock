import React, {useEffect, useState} from "react";
import img1 from "./resources/img1.jpg";
import img2 from "./resources/img2.jpg";
import img3 from "./resources/img3.jpg";
import img4 from "./resources/img4.jpg";
import img5 from "./resources/img5.jpg";
import img6 from "./resources/img6.jpg";
import img7 from "./resources/img7.jpg";

function RandomBackground() {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const images = [img1, img2, img3, img4, img5, img6, img7];
        setImageUrl(images[Math.floor(Math.random() * images.length)]);
    }, []);
    
    return <div style={{
        backgroundImage: `url(${imageUrl})`,
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: '0',
        left: '0',
    }}></div>;
}

export default RandomBackground;