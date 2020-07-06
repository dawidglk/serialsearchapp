import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  CircularProgress,
  Box,
  Container,
  TableBody,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";

import Title from "../Title";
import DatePicker from "../DatePicker";
import dayOfWeekSort from "../../utilities/dayOfWeekSort";

const SerialList = ({ serials, loading, day }) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" marginTop="20px">
        <CircularProgress disableShrink />
      </Box>
    );
  }

  return (
    <>
      {serials !== undefined ? (
        <Container
          style={{
            borderRadius: 4,
            borderColor: "#3f51b5",
            borderWidth: 1,
            borderStyle: "solid",
            marginTop: 20,
            paddingBlock: 10,
            overflow: "scroll",
            maxHeight: 500,
            overflowY: "scroll",
            margin: "20px auto",
            maxWidth: 1400,
          }}
        >
          {day !== undefined && day !== "" ? (
            <Title>{`Found ${serials.length} that you can see in ${day}`}</Title>
          ) : (
            <Title>{`Found ${serials.length} serials`}</Title>
          )}
          <DatePicker />
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Score</strong>
                </TableCell>
                <TableCell>
                  <strong>Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Genres</strong>
                </TableCell>
                <TableCell>
                  <strong>Premiered</strong>
                </TableCell>
                <TableCell>
                  <strong>More info</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {serials.map(({ score, show }) => (
                <TableRow key={show.id}>
                  <TableCell>{score ? score : "-"}</TableCell>
                  <TableCell>{show.name ? show.name : "-"}</TableCell>
                  <TableCell>
                    {show.genres.length ? show.genres.join(",") : "-"}
                  </TableCell>
                  <TableCell>{show.premiered ? show.premiered : "-"}</TableCell>
                  <TableCell>
                    <Link to={`/serial/${show.id}`} style={{ color: "#000" }}>
                      <DescriptionTwoToneIcon />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  serials: dayOfWeekSort(state.day, state.serials),
  loading: state.loading,
  day: state.day,
});

SerialList.propTypes = {
  serials: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
  day: PropTypes.string,
};

export default connect(mapStateToProps, null)(SerialList);
