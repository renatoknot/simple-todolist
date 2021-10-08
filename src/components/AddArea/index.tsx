import React, { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
  onEnter: (taskname: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  const handleAddButton = () => {
    if (inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <C.Container>
      <div
        style={{ cursor: "pointer" }}
        className="image"
        onClick={handleAddButton}
      >
        ➕
      </div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};
