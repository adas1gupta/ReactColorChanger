function ColorPicker ({handleColorPicker}) {
    return (
        <div>
            <label htmlFor="colorPicker">Choose a color:</label>
            <input id="colorPicker" type="color" onChange={(e) => handleColorPicker(e.target.value)}/> {/* returns a hexstring (#FFFFFF)*/}
        </div>
    )
}

export default ColorPicker