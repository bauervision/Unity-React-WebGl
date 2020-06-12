using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class Interactions : MonoBehaviour
{

    // Import the JSLib as following. Make sure the
    // names match with the JSLib file we've just created.

    [DllImport("__Internal")]
    private static extern void Select(int side);

    [DllImport("__Internal")]
    private static extern void SendData(int side);

    // Then create a function that is going to trigger
    // the imported function from our JSLib.

    public void SelectLeft()
    {
        print("Selecting Left");
        Select(1);
    }


    public void SelectMiddle()
    {
        print("Selecting Middle");
        Select(2);
    }


    public void SelectRight()
    {
        print("Selecting Right");
        Select(3);
    }


}
