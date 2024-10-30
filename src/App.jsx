import { useState } from "react";
import "./App.css";
import { HeaderTag } from "./HeaderTag";
import { MainTag } from "./MainTag";

function App() {
    const [medalLists, setMedalList] = useState([]);

    const [formData, setFormData] = useState({
        country: "",
        goldMedal: "",
        silverMedal: "",
        copperMedal: "",
    });

    return (
        <>
            <HeaderTag />
            <MainTag />
        </>
    );
}

export default App;
