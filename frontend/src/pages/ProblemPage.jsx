import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { PROBLEMS } from "../data/problems";

function ProblemPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [currentProblemId, setCurrentProblemId] = useState("two-sum");
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCode.javascript);
    const [output, setOutput] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const currentProblem = PROBLEMS[currentProblemId];

    useEffect(() => {
        if (id && PROBLEMS[id]) {
            setCurrentProblemId(id);
            setCode(PROBLEMS[id].starterCode[selectedLanguage]);
            setOutput(null);
        }
    }, [id, selectedLanguage]);

    const handleLanguageChange = (e) => {};

    const handleProblemChange = (e) => {};

    const triggerConfetti = () => {};

    const checkIfTestsPassed = () => {};

  return (
    <div>ProblemPage</div>
  )
}

export default ProblemPage