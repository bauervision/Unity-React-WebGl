import React, { useState } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";


const unityContent = new UnityContent(
    "Build/build.json",
    "Build/UnityLoader.js"
);


const UnityApp = () => {
    const [side, setSide] = useState(null);
    //const [fullscreen, setFullscreen] = useState(false);

    //unityContent.setFullscreen(true);

    const capabilities = {
        "1": "Left",
        "2": "Middle",
        "3": "Right"
    }

    unityContent.on("Select", side => {
        setSide(capabilities[String(side)]);
    });


    return (
        <>
            <Unity unityContent={unityContent} />
            <div
                style={{ color: 'orange', fontSize: 24, margin: '5em' }}>
                {`Currently Selecting Side: ${side ? side : 'None'}`}
            </div>
        </>
    )
}
export default UnityApp;