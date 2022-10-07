import React from "react";

export default function ColorButton({ colors, chooseAnswer, itemsRef }) {
  return (
    <div class="btn-wrapper mt-3">
      {colors.map((item, index) => (
        <button
          class="btn btn-outline-dark mx-1"
          onClick={(e) => chooseAnswer(item, index)}
          ref={(el) => (itemsRef.current[index] = el)}
        >
          {item}{" "}
        </button>
      ))}
    </div>
  );
}
