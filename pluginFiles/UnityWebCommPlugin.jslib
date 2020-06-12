// This file needs to be placed inside of
// Assets/Plugins/WebGL

mergeInto(LibraryManager.library, {

  // Create a new function with the same name as
  // the event listeners name and make sure the
  // parameters match as well.
  // Comma separated list

  Select: function(side) {
    ReactUnityWebGL.Select(side);
  },
  SendData: function(data) {
    ReactUnityWebGL.SendData(side);
  }
});