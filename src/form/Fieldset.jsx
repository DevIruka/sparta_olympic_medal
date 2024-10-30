import React from "react";

const fieldsetStyle = {
    margin: "10px",
    border: "none",
};

const legendStyle = {
    fontFamily: "Pretendard",
    fontWeight: "800",
    fontStyle: "normal",
    textAlign: "center",
};

const Fieldset = ({ formData, cellName, onChangeHandler }) => {
    let fieidsetName = "";
    let inputValue;
    if (cellName === "국가명") {
        fieidsetName = "country";
        inputValue = formData.country;
    }
    if (cellName === "금메달") {
        fieidsetName = "goldMedal";
        inputValue = formData.goldMedal;
    }
    if (cellName === "은메달") {
        fieidsetName = "silverMedal";
        inputValue = formData.silverMedal;
    }
    if (cellName === "동메달") {
        fieidsetName = "copperMedal";
        inputValue = formData.copperMedal;
    }

    return (
        <fieldset style={fieldsetStyle}>
            <legend style={legendStyle}>{cellName}</legend>
            <input
                type="text"
                name={fieidsetName}
                id={fieidsetName}
                onChange={onChangeHandler}
                value={inputValue}
            />
        </fieldset>
    );
};

export default Fieldset;
