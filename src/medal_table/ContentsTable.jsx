import React from "react";

const tdStyle = {
    fontFamily: "Pretendard",
    fontWeight: "800",
    fontStyle: "normal",
    textAlign: "center",
};

const btntdStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const deleteBtnStyle = {
    height: "30px",
    width: "50px",
    backgroundColor: "red",
    fontFamily: "Pretendard",
    fontWeight: "800",
    fontStyle: "normal",
    textAlign: "center",
    border: "solid 2px transparent",
    borderRadius: "7px",
};

const DeleteBtn = (index, medalLists, setMedalList) => {
    setMedalList(
        medalLists.filter((l, i) => {
            return i != index;
        })
    );
};

const ContentsTable = ({ medalLists, setMedalList }) => {
    return (
        <tbody>
            {medalLists.map((medalList, index) => {
                return (
                    <tr key={index}>
                        <td style={tdStyle}>{medalList.country}</td>
                        <td style={tdStyle}>{medalList.goldMedal}</td>
                        <td style={tdStyle}>{medalList.silverMedal}</td>
                        <td style={tdStyle}>{medalList.copperMedal}</td>
                        <td style={btntdStyle}>
                            <button
                                onClick={() => {
                                    DeleteBtn(index, medalLists, setMedalList);
                                }}
                                style={deleteBtnStyle}
                            >
                                삭제
                            </button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
};

export { ContentsTable };
