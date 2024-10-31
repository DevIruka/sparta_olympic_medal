import { useState } from "react";
import "./App.css";
import { HeaderTag } from "./HeaderTag";
import { MainTag } from "./MainTag";

function App() {
    const [medalLists, setMedalList] = useState(() => {
        const savedMedalLists = localStorage.getItem("medalLists");
        return savedMedalLists ? JSON.parse(savedMedalLists) : [];
    });

    const [formData, setFormData] = useState({
        country: "",
        goldMedal: "",
        silverMedal: "",
        copperMedal: "",
    });

    return (
        <>
            <HeaderTag />
            <MainTag
                medalLists={medalLists}
                setMedalList={setMedalList}
                formData={formData}
                setFormData={setFormData}
            />
        </>
    );
}

export default App;
