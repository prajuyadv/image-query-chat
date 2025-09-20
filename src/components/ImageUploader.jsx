import React from "react";

const ImageUploader = ({ files, onPick, onRemove, previews }) => {
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={onPick}
        style={{ width: "100%", marginBottom: 12 }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {files.map((file, idx) => (
          <div key={idx} style={{ position: "relative" }}>
            <img
              src={previews[idx]}
              alt={file.name}
              style={{
                width: "100%",
                height: 120,
                objectFit: "cover",
                borderRadius: 12,
                border: "1px solid #232a4a",
              }}
            />
            <button
              onClick={() => onRemove(idx)}
              style={{
                position: "absolute",
                top: 6,
                right: 6,
                background: "#1f2a4d",
                color: "#c9d1ff",
                border: 0,
                borderRadius: 8,
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
