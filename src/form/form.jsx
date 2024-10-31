import React from "react";
import Fieldset from "./Fieldset";
import { SubmitBtn } from "./Buttons";

const formStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
};

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

export const Form = ({ formData, setFormData, medalLists, setMedalList }) => {
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((oldData) => {
            return { ...oldData, [name]: value };
        });
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (Object.values(formData).includes("")) {
            alert("존재하지 않는 국가입니다.");
            return;
        }

        for (const data of medalLists) {
            const { country } = data;
            if (country === formData.country) {
                alert(
                    "메달 리스트에 이미 존재하는 국가입니다. 업데이트 기능을 사용해주세요."
                );
                return;
            }
        }

        setMedalList((medalLists) => {
            return [...medalLists, formData];
        });

        const getItem = JSON.parse(localStorage.getItem("medalLists"));
        getItem.push(formData);
        localStorage.setItem("medalLists", JSON.stringify(getItem));

        setFormData({
            country: "",
            goldMedal: "",
            silverMedal: "",
            copperMedal: "",
        });
    };

    const updateBtn = (e) => {
        if (Object.values(formData).includes("")) {
            alert("업데이트할 데이터를 입력해주세요.");
            return;
        }
        const revisedList = medalLists.map((list) => {
            if (list.country === formData.country) {
                return {
                    country: formData.country,
                    goldMedal: formData.goldMedal,
                    silverMedal: formData.silverMedal,
                    copperMedal: formData.copperMedal,
                };
            }
            return list;
        });

        setMedalList(revisedList);
        localStorage.setItem("medalLists", JSON.stringify(revisedList));
        alert("업데이트 성공!");

        setFormData({
            country: "",
            goldMedal: "",
            silverMedal: "",
            copperMedal: "",
        });
    };

    return (
        <form style={formStyle} onSubmit={onSubmitForm}>
            <Fieldset
                formData={formData}
                onChangeHandler={onChangeHandler}
                cellName="국가명"
            />

            <Fieldset
                formData={formData}
                onChangeHandler={onChangeHandler}
                cellName="금메달"
            />

            <Fieldset
                formData={formData}
                onChangeHandler={onChangeHandler}
                cellName="은메달"
            />

            <Fieldset
                formData={formData}
                onChangeHandler={onChangeHandler}
                cellName="동메달"
            />
            <SubmitBtn />
            <button
                style={btnStyle}
                onClick={() => {
                    updateBtn();
                }}
                type="button"
            >
                업데이트
            </button>
        </form>
    );
};
