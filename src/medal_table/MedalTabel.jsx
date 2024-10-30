import React from "react";
import { ClassificationTable } from "./ClassficationTable";
import { ContentsTable } from "./contentsTable";

const tableWrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
};

export const MedalTable = ({ medalLists, setMedalList }) => {
    return (
        <div style={tableWrapper} id="tableWrapper">
            <table
                style={{
                    border: "solid 2px black",
                    width: "70%",
                }}
            >
                <ClassificationTable />
                <ContentsTable medalLists={medalLists} setMedalList={setMedalList} />
            </table>
        </div>
    );
};
