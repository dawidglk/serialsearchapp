import React from "react";
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

import Title from "../Title";
import DatePicker from "../DatePicker";

const SerialList = ({ serials, loading }) => {
  console.log(serials, loading);

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
          maxWidth={false}
          style={{
            borderRadius: 4,
            borderColor: "#3f51b5",
            borderWidth: 1,
            borderStyle: "solid",
            marginTop: 20,
            paddingBlock: 10,
            overflow: "scroll",
          }}
        >
          <Title>{`Found ${serials.length} serials`}</Title>
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
  serials: state.serials,
  loading: state.loading,
});

export default connect(mapStateToProps, null)(SerialList);
