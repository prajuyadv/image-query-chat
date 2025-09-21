import React from "react";

const ResponsesList = ({ files, previews, responses }) => {
  if (!files.length) {
    return (
      <div style={styles.emptyState}>
        <p>Upload images and ask a question to see batch answers here.</p>
      </div>
    );
  }

  return (
    <div style={styles.chatContainer}>
      {files.map((file, idx) => (
        <div key={idx} style={styles.messageGroup}>
          {/* User Message (Image) */}
          <div style={{ ...styles.chatRow, justifyContent: "flex-start" }}>
            <div style={{ ...styles.bubble, ...styles.userBubble }}>
              <img
                src={previews[idx]}
                alt={file.name}
                style={styles.image}
              />
              <div style={styles.fileName}>{file.name || `image-${idx + 1}`}</div>
            </div>
          </div>

          {/* AI Response */}
          <div style={{ ...styles.chatRow, justifyContent: "flex-end" }}>
            <div style={{ ...styles.bubble, ...styles.aiBubble }}>
              {responses[idx] ? (
                <p style={styles.responseText}>{responses[idx]}</p>
              ) : (
                <p style={styles.waitingText}>Analyzing image...</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponsesList;

const styles = {
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "16px",
    backgroundColor: "#0f1633",
    borderRadius: "12px",
    height: "100%",
    overflowY: "auto",
  },
  emptyState: {
    opacity: 0.7,
    textAlign: "center",
    marginTop: 40,
    color: "#aaa",
  },
  messageGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  chatRow: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
  },
  bubble: {
    maxWidth: "70%",
    padding: "12px",
    borderRadius: "16px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
    fontSize: "14px",
    wordWrap: "break-word",
  },
  userBubble: {
    backgroundColor: "#1e2a4d",
    color: "#fff",
    borderTopLeftRadius: "0px",
  },
  aiBubble: {
    backgroundColor: "#273065",
    color: "#fff",
    borderTopRightRadius: "0px",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "12px",
    objectFit: "cover",
    marginBottom: "8px",
    border: "1px solid #2c355c",
  },
  fileName: {
    fontSize: "12px",
    opacity: 0.7,
    textAlign: "center",
    marginTop: "4px",
  },
  responseText: {
    whiteSpace: "pre-wrap",
    margin: 0,
    color: "#fff",
    lineHeight: 1.4,
  },
  waitingText: {
    opacity: 0.6,
    margin: 0,
    color: "#bbb",
  },
};
