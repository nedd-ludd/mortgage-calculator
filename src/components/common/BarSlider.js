import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
function valuetext(value) {
  return `${value}°C`;
}

export default function BarSlider({ vars, setData }) {
  const handleChange = (event) => {
    setData(vars.key, event.target.value);
  };

  return (
    <>
      <Box sx={{ width: 300, height: 100 }}>
        <Typography
          style={{ marginBottom: "40px" }}
          id={vars.name}
          gutterBottom
        >
          {vars.name}
        </Typography>
        <Slider
          onChange={(e) => {
            handleChange(e);
          }}
          aria-label="Property Value"
          defaultValue={0}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          step={vars.step}
          marks
          min={0}
          max={vars.max}
          name={"nathan"}
        />
      </Box>
    </>
  );
}
