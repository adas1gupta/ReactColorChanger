import React from "react";
import { createRoot } from "react-dom/client";
import RGBSlider from "./RGBSlider";
import { useState } from "react";
import ColorPicker from "./ColorPicker";
import DisplayBox from "./DisplayBox";

function App () {
    const [redColor, setRed] = useState(0)
    const [greenColor, setGreen] = useState(0)
    const [blueColor, setBlue] = useState(0)

    function handleColorPicker(value) {
        setRed(parseInt(value.substring(1, 3), 16))
        setGreen(parseInt(value.substring(3, 5), 16))
        setBlue(parseInt(value.substring(5, 7), 16))
    }

    function handleColorSlider(value, color) {
        value = parseInt(value, 10)

        if (color === "red") {
            setRed(value);
        } else if (color === "green") {
            setGreen(value);
        } else if (color === "blue") {
            setBlue(value);
        }

    }

    return (
        <div>
            <DisplayBox redColor={redColor} greenColor={greenColor} blueColor={blueColor} />
            <ColorPicker handleColorPicker={handleColorPicker}/>
            <RGBSlider stringColor={"red"} sliderColor={redColor} handleColorSlider={handleColorSlider}/>
            <RGBSlider stringColor={"green"} sliderColor={greenColor} handleColorSlider={handleColorSlider}/>
            <RGBSlider stringColor={"blue"} sliderColor={blueColor} handleColorSlider={handleColorSlider}/>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)