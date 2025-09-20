import React from "react";

const ErrorMessages = ({ errors }) => {
  if (!errors.length) return null;

  return (
    <div
      style={{
        marginTop: 12,
        background: "#2a1533",
        border: "1px solid #5b2b6b",
        color: "#ffd6ff",
        padding: 12,
        borderRadius: 12,
      }}
    >
      <strong>Issues:</strong>
      <ul style={{ marginTop: 6, paddingLeft: 18 }}>
        {errors.map((err, i) => (
          <li key={i}>{err}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorMessages;
