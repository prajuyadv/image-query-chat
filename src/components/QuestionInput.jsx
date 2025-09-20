import React from "react";

const QuestionInput = ({ question, setQuestion, onAsk, isLoading }) => (
  <div>
    <textarea
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      placeholder="e.g., Are there any visible defects or guideline issues?"
      rows={4}
      style={{
        width: "100%",
        resize: "vertical",
        borderRadius: 12,
        border: "1px solid #232a4a",
        padding: 12,
        background: "#0e1430",
        color: "#e6e9f5",
        outline: "none",
      }}
    />
    <button
      onClick={onAsk}
      disabled={isLoading}
      style={{
        marginTop: 12,
        width: "100%",
        padding: "10px 14px",
        borderRadius: 12,
        border: 0,
        cursor: "pointer",
        background: isLoading ? "#33406e" : "#5865f2",
        color: "white",
        fontWeight: 700,
      }}
    >
      {isLoading ? "Analyzing…" : "Ask about images"}
    </button>
  </div>
);

export default QuestionInput;
