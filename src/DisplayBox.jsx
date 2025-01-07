function DisplayBox({ redColor, greenColor, blueColor }) {
    return (
        <div
            style={{
                backgroundColor: `rgb(${redColor},${greenColor},${blueColor})`,
                width: "200px",
                height: "200px",
                border: "1px solid black",
                marginBottom: "20px",
            }}
        ></div>
    );
}

export default DisplayBox;