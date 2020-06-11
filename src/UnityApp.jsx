import React, { useState } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";


const unityContent = new UnityContent(
    "Build/Web.json",
    "Build/UnityLoader.js"
);


const UnityApp = () => {

    //const [fullscreen, setFullscreen] = useState(false);

    //unityContent.setFullscreen(true);

    // unityContent.on("GameOver", score => {
    //     this.setState({
    //         gameOver: true,
    //         score: score
    //     });
    // });

    return (
        <>
            <Unity unityContent={unityContent} height="1280" width="720" />

        </>
    )
}
export default UnityApp;