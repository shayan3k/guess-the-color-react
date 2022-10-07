import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import ColorButton from "./components/ColorButton";
import MainBackground from "./components/MainBackground";

function App() {
  ///////////
  //define useRef
  ///////////
  const itemsRef = useRef([]);

  ///////////
  //define states
  ///////////

  const [colors, setColors] = useState(["#65c0b", "#6e0df3", "#afa888"]);
  const [background_color, setBackground_color] = useState("#efefef");

  ///////////////
  // define useEffects
  ///////////////
  useEffect(() => {
    colorGenerator();
  }, []);

  const colorGenerator = () => {
    // generate three random colors
    // 0 - 16777215
    const newColors = colors.map((item, index) => {
      return "#" + Math.trunc(Math.random() * 16777215).toString(16);
    });

    // store the three colors inside the state
    setColors([...newColors]);

    // assign one of thoes colors to the background color
    const randomEl = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    setBackground_color(newColors[randomEl]);

    // reset all refs
    itemsRef.current.forEach((item, index) => {
      item.classList.remove("btn-success");
      item.classList.remove("btn-danger");
      item.classList.add("btn-outline-dark");
    });
  };

  const chooseAnswer = (color, index) => {
    // check the answer
    if (color == background_color) {
      // if the answer is correct
      itemsRef.current[index].classList.remove("btn-outline-dark");
      itemsRef.current[index].classList.add("btn-success");

      // reset the colors and buttons
      colorGenerator();
    } else {
      // if the answer is not correct
      itemsRef.current[index].classList.remove("btn-outline-dark");
      itemsRef.current[index].classList.add("btn-danger");
    }
  };

  return (
    <div class="main-container">
      <MainBackground background_color={background_color} />
      <ColorButton
        colors={colors}
        chooseAnswer={chooseAnswer}
        itemsRef={itemsRef}
      />
    </div>
  );
}

export default App;
