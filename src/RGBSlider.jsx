function RGBSlider({ stringColor, sliderColor, handleColorSlider }) {
    return (
        <div>
            <label htmlFor={`${sliderColor}Slider`}>Adjust {stringColor}:</label>
            <input
                id={`${sliderColor}Slider`}
                type="range"
                min="0"
                max="255"
                value={sliderColor}
                onChange={(e) => handleColorSlider(e.target.value, stringColor)}
            />
        </div>
    );
}

export default RGBSlider