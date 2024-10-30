import React from "react";

const btnStyle = {
    height: "35px",
    width: "80px",
    border: "solid 2px transparent",
    borderRadius: "7px",
    backgroundColor: "aqua",
    color: "black",
    fontSize: "15px",
    fontFamily: "Pretendard",
    fontWeight: "800",
    fontStyle: "normal",
    margin: "10px",
};

const SubmitBtn = () => {
    return (
        <button style={btnStyle} type="submit">
            국가 추가
        </button>
    );
};


export { SubmitBtn };
