import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Box,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

import dayOfWeek from "../../utilities/dayOfWeek";
import { setDayofWeek } from "../../actions";

const DateSelect = ({ setDayofWeek }) => {
  const [day, setDay] = useState("");

  useEffect(() => {
    setDayofWeek(day);
  }, [day, setDayofWeek]);

  const handleChange = (event) => {
    setDay(event.target.value);
  };
  return (
    <Box style={{ margin: 20, textAlign: "center" }}>
      <FormControl>
        <InputLabel id="serials">Day of the week serials</InputLabel>
        <Select
          labelId="serials"
          id="serials"
          value={day}
          onChange={handleChange}
          label="Serials"
          style={{ width: 250 }}
        >
          {dayOfWeek.map((item, index) => (
            <MenuItem key={index} value={item === "None" ? "" : item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

const mapDispatchToProps = { setDayofWeek };

DateSelect.propTypes = {
  setDayofWeek: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(DateSelect);
