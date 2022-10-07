import React from "react";

export default function MainBackground({ background_color }) {
  return (
    <div
      class="main-background rounded"
      style={{ backgroundColor: background_color }}
    ></div>
  );
}
