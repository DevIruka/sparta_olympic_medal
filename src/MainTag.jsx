import React from "react";
import { Form } from "./form/form";
import { MedalTable } from "./medal_table/MedalTabel";

const wrapperStyle = {
    width: "100%",
    borderRadius: "10px",
    boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
};

export const MainTag = ({
    medalLists,
    setMedalList,
    formData,
    setFormData,
}) => {
    return (
        <main>
            <div className="wrapper" style={wrapperStyle}>
                <Form
                    medalLists={medalLists}
                    setMedalList={setMedalList}
                    formData={formData}
                    setFormData={setFormData}
                />
                <MedalTable
                    medalLists={medalLists}
                    setMedalList={setMedalList}
                />
            </div>
        </main>
    );
};
