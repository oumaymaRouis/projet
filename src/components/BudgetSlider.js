import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "../styles/budgetSlider.css";

function valuetext(value) {
  return `${value} DT`;
}

export default function Price({ value, onPriceChange }) {
  return (
    <div className="slide">
      <div className="value">
        {valuetext(value[0])} - {valuetext(value[1])}
      </div>
      <Box sx={{ width: 390 }}>
        <Slider
          getAriaLabel={() => "Small steps"}
          value={value}
          onChange={onPriceChange}
          valueLabelDisplay="off"
          getAriaValueText={valuetext}
          min={0}
          max={10000}
          step={100}
        />
      </Box>
    </div>
  );
}
