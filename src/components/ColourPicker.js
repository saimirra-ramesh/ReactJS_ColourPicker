import {useState} from "react";
import "./ColourPicker.css";


const ColourPicker = ({ Colours }) => {
  const [isColourListVisible, setColourListVisible] = useState(false);
  const [selectedColour, setSelectedColour] = useState("#ffc0cb");

  const handleColourButtonClick = () => {
    setColourListVisible(!isColourListVisible);
  };

  const handleColourClick = (Colour) => {
    setSelectedColour(Colour);
    setColourListVisible(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="board" style={{ backgroundColor: selectedColour }}>
        {isColourListVisible && (
          <ul>
            {Colours.map((Colour, index) => (
              <li key={index} onClick={() => handleColourClick(Colour)}>
                <div
                  style={{
                    backgroundColor: Colour,
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                  }}
                ></div>
              </li>
            ))}
          </ul>
        )}

        <button onClick={handleColourButtonClick}>Pick a Colour</button>
      </div>
    </div>
  );
};

export default ColourPicker;
