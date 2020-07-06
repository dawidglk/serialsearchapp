import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSerials } from "../../actions";

import { TextField, Container } from "@material-ui/core";

const Search = ({ getSerials }) => {
  const [state, setState] = useState("");
  const [isFetch, setFetch] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    setState({ value: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = state;

    if (value !== undefined) {
      getSerials(value);
      setFetch(true);
    } else {
      setFetch(false);
    }
  };

  return (
    <Container maxWidth="lg" style={{ textAlign: "center" }}>
      <form onSubmit={onSubmit} autoComplete="off">
        <TextField
          id="search"
          label="Search serials"
          variant="outlined"
          defaultValue={state}
          margin="normal"
          style={{ width: 400 }}
          onChange={onChange}
          helperText={
            !isFetch
              ? "Please enter a serial name"
              : !isFetch
              ? "No serial found"
              : ""
          }
        />
      </form>
    </Container>
  );
};

const mapDispatchToProps = { getSerials: fetchSerials };

Search.propTypes = {
  getSerials: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Search);
