import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "../styles/budgetSlider.css";

function valuetext(value) {
  return `${value} DT`;
}

export default function Price() {
  const [value, setValue] = React.useState([3100, 4000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="slide">
      <div className="value">
        {valuetext(value[0])} - {valuetext(value[1])}
      </div>
      <Box sx={{ width: 390 }}>
        <Slider
          getAriaLabel={() => "Small steps"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          getAriaValueText={valuetext}
          min={3100}
          max={4000}
        />
      </Box>
    </div>
  );
}
