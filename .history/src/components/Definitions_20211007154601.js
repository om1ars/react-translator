import React from "react";
import "./Definitions.css";

export const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings">

        {
            meanings[0] && word && category==='en' && (
                <audio src={meanings[0].phonetices[0] && } style={{backgroundColor: '#fff', borderRadius: 10}}>
                    Sizning Borcseringiz audio uqiy olmaydi
                </audio>
            )
        }
      {word === "" ? (
        <span className="subtitle">So'zni kiriting <br /> "Faqat inglizchada!!!"</span>
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
                         <b>Synonyms: {def.synonyms.map((s) => `${s},  `)}</b>
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
