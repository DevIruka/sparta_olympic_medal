import React from 'react'

export const ClassificationTable = () => {
    return (
        <thead
            style={{
                border: "solid 2px black",
            }}
        >
            <tr style={{ border: "solid 2px black" }}>
                <th
                    style={{
                        border: "solid 2px black",
                    }}
                >
                    국가명
                </th>
                <th
                    style={{
                        border: "solid 2px black",
                    }}
                >
                    금메달
                </th>
                <th
                    style={{
                        border: "solid 2px black",
                    }}
                >
                    은메달
                </th>
                <th
                    style={{
                        border: "solid 2px black",
                    }}
                >
                    동메달
                </th>
                <th
                    style={{
                        border: "solid 2px black",
                    }}
                >
                    액션
                </th>
            </tr>
        </thead>
    );
};
