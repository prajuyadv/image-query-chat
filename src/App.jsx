import React, { useState, useMemo } from "react";
import ImageUploader from "./components/ImageUploader";
import QuestionInput from "./components/QuestionInput";
import ErrorMessages from "./components/ErrorMessages";
import ResponsesList from "./components/ResponsesList";
import { fileToObjectURL } from "./utils/fileUtils";
import { mockBatchAnalyze } from "./services/mockLLM";

export default function App() {
  const [files, setFiles] = useState([]);
  const [question, setQuestion] = useState("");
  const [responses, setResponses] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const previews = useMemo(
    () => files.map((f) => f.preview || (f.preview = fileToObjectURL(f))),
    [files]
  );

  const clearErrors = () => setErrors([]);
  const pushError = (msg) => setErrors((prev) => [...prev, msg]);

  const onPick = (e) => {
    clearErrors();
    const selected = Array.from(e.target.files || []);
    if (!selected.length) return;

    if (files.length + selected.length > 4) {
      pushError("You can upload up to 4 images only.");
      return;
    }
    setFiles([...files, ...selected]);
  };

  const onRemove = (idx) => {
    const updated = files.filter((_, i) => i !== idx);
    setFiles(updated);
    setResponses(responses.filter((_, i) => i !== idx));
  };

  const onAsk = async () => {
    clearErrors();
    if (!question.trim()) return pushError("Please enter a question.");
    if (!files.length) return pushError("Please upload at least one image.");

    setIsLoading(true);
    try {
      const answers = await mockBatchAnalyze(question, files);
      setResponses(answers);
    } catch (error) {
      pushError("Error analyzing images.",error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 16, padding: 20 }}>
      <section>
        <ImageUploader files={files} onPick={onPick} onRemove={onRemove} previews={previews} />
        <QuestionInput
          question={question}
          setQuestion={setQuestion}
          onAsk={onAsk}
          isLoading={isLoading}
        />
        <ErrorMessages errors={errors} />
      </section>
      <section>
        <ResponsesList files={files} previews={previews} responses={responses} />
      </section>
    </div>
  );
}
