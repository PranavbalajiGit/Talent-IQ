import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { PROBLEMS } from "../data/problems";

import Navbar from "../components/Navbar.jsx";
import ProblemDescription from "../components/ProblemDescription.jsx";
import OutputPanel from "../components/OutputPanel.jsx";
import CodeEditorPanel from "../components/CodeEditorPanel.jsx";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

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

    const handleProblemChange = (newProblemId) => navigate(`/problem/${newProblemId}`);

    const triggerConfetti = () => {};

    const checkIfTestsPassed = () => {};

  return (
    <div className="h-screen bg-base-100 flex flex-col">
        <Navbar />

        <div className="flex-1">
            <PanelGroup direction="horizontal">

                {/* LEFT PANEL for PROBLEM DESCRIPTION */}
                <Panel defaultSize={40} minSize={30}>
                    <ProblemDescription 
                        problem={currentProblem}
                        currentProblemId={currentProblemId}
                        onProblemChange={handleProblemChange}
                        allProblems={Object.values(PROBLEMS)}
                    />
                </Panel>

                {/* RESIZEABLE PANEL IN BETWEEN FOR PROBLEM DESCRIPTION AND CODE EDITOR */}
                <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

                {/* RIGHT PANEL for CODE EDITOR and OUTPUT */}
                <Panel defaultSize={60} minSize={30}>
                    <PanelGroup direction="vertical">

                        {/* TOP PANEL FOR Code Editor */}
                        <Panel defaultSize={70} minSize={30}>
                            <CodeEditorPanel />
                        </Panel>

                        <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

                        {/* BOTTOM PANEL FOR Output */}
                        <Panel defaultSize={30} minSize={30}>
                            <OutputPanel />
                        </Panel>

                    </PanelGroup>
                </Panel>

            </PanelGroup>
        </div>
    </div>
  )
}

export default ProblemPage