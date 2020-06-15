This project is about a simple setup that allows communication from the Unity to the browser, and back

## Setup

Currently using the [React-Unity-WebGL](https://www.npmjs.com/package/react-unity-webgl) package to handle the comms, so be sure to install that first.  Then make sure you create your plugin below.

### `Unity Plugin: Unity -> React`

Inside the `pluginFiles` folder, you will see 2 files, `UnityInteractions.cs` and `UnityWebCommPlugin.jslib`

#### `.jslib`
The  file needs to go inside of your Unity Project folder, `Assets/Plugins/WebGL` and contains the skeleton framework to allow Unity to communicate to the external browser.  Add as many methods as you need


#### `.cs`
The `.cs` file can go inside of your Unity Scripts folder as per the usual.  This script has the required code that imports the above plugin, and sets up the public methods that can be called to invoke the external communication.

### `React -> Unity`

In order to have your react app communicate with Unity game objects, you simply need to send a message like this:

`const sendMessage = (value) => { unityContent.send( "GameIbject1", "UpdateColor", value ); }`
Where the first parameter of the send method is the actual name of the game object you want to communicate with, the second parameter is the name of the public method you want to call, and the third parameter is the value to pass

#### Note
As of right now, I recommend keeping all values going in and out of Unity as integers, as this is only format that doesn't get encoded.
