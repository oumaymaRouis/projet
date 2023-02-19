import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "../styles/price.css";

function valuetext(value) {
  return `${value} TND`;
}

export default function Price() {
  const [value, setValue] = React.useState([500, 3850]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="slide">
      <Box sx={{ width: 390 }}>
        <Slider
          getAriaLabel={() => "Small steps"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          getAriaValueText={valuetext}
          min={500}
          max={3850}
        />
      </Box>
      <div className="value">
        {valuetext(value[0])} - {valuetext(value[1])}
      </div>
    </div>
  );
}
