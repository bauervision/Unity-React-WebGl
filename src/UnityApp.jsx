import React, { useState } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";


const unityContent = new UnityContent(
    "Build/build.json",
    "Build/UnityLoader.js"
);


const UnityApp = () => {
    const [selected, setSelected] = useState(null);
    const [hovered, setHovered] = useState(null);
    //const [fullscreen, setFullscreen] = useState(false);

    //unityContent.setFullscreen(true);

    const capabilities = {
        "1": "Left",
        "2": "Middle",
        "3": "Right"
    }

    unityContent.on("Select", side => {
        setSelected(capabilities[String(side)]);
    });

    unityContent.on("Hover", side => {
        setHovered(capabilities[String(side)]);
    });


    const sendMessage = (value) => {
        unityContent.send(
            "CenterSphere",
            "UpdateColor",
            value
        );
    }


    return (
        <>
            <Unity unityContent={unityContent} />
            <button onClick={() => sendMessage(1)}>Make Red</button>
            <button onClick={() => sendMessage(2)}>Make Green</button>
            <div
                style={{ color: 'orange', fontSize: 24, margin: '1em' }}>
                {`Currently Selecting Side: ${selected ? selected : 'None'}`}
            </div>

            <div
                style={{ color: 'orange', fontSize: 24, margin: '1em' }}>
                {`Currently Hovering Side: ${hovered ? hovered : 'None'}`}
            </div>

        </>
    )
}
export default UnityApp;