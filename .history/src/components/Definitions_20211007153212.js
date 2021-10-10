import React from "react";
import "./Definitions.css";

export const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subtitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) => mean.meanings.map((item) => item.definitions.map((def) => ())))
      )}
    </div>
  );
};
