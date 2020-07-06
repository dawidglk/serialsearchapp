import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const Title = (props, { color = "inherit" }) => {
  return (
    <Typography
      component="h2"
      variant="h6"
      color={color}
      align="center"
      style={{ flex: 1, margin: "20px" }}
    >
      {props.children}
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
