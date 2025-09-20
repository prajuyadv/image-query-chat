import React from "react";

const ResponsesList = ({ files, previews, responses }) => {
  if (!files.length) {
    return (
      <div style={{ opacity: 0.7, textAlign: "center", marginTop: 40 }}>
        <p>Upload images and ask a question to see batch answers here.</p>
      </div>
    );
  }

  return files.map((file, idx) => (
    <div
      key={idx}
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: 12,
        background: "#0f1633",
        border: "1px solid #1a2140",
        borderRadius: 16,
        padding: 12,
      }}
    >
      <img
        src={previews[idx]}
        alt={file.name}
        style={{
          width: 120,
          height: 120,
          objectFit: "cover",
          borderRadius: 12,
          border: "1px solid #232a4a",
        }}
      />
      <div>
        <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>
          {file.name || `image-${idx + 1}`}
        </div>
        {responses[idx] ? (
          <div
            style={{
              background: "#1a2246",
              border: "1px solid #273065",
              borderRadius: 12,
              padding: 12,
              whiteSpace: "pre-wrap",
            }}
          >
            {responses[idx]}
          </div>
        ) : (
          <div style={{ opacity: 0.6 }}>Awaiting answer…</div>
        )}
      </div>
    </div>
  ));
};

export default ResponsesList;
