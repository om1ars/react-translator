import React from "react";
import "./Definitions.css";

export const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subtitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                    <span>
                        <b>Example: {def.example}</b>
                    </span>

                )}
                    {def.synonyms && (
                         <span>
                         <b>Synonyms: {def.synonyms.map((s) => `${s,}`)}</b>
                     </span>
                    )}

              </div>
            ))
          )
        )
      )}
    </div>
  );
};
