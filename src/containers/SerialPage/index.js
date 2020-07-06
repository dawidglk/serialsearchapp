import React, { useState } from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import { ListItemText, ListItem, List, Divider, AppBar, Toolbar, IconButton, Container} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close";
import Skeleton from '@material-ui/lab/Skeleton';

import Title from "../../components/Title";
import Error from "../../components/Error"


const SerialPage = ({ serial }) => {
    const [open, setOpen] = useState(false)
    const serialItem = serial[0];


    const handleClose = () => {
        setOpen(!open);
    };


    return (
        <div>
        {serial.length !== 0 ? (
            <>
            <AppBar position="relative">
              <Toolbar>
                <Link to={"/"}>
                  <IconButton
                    color="default"
                    onClick={handleClose}
                    aria-label="Close"
                  >
                    <CloseIcon style={{color:"#fff"}}/>
                  </IconButton>
                </Link>
                <Title color="inherit">
                  {serialItem.show.name}
                </Title>
              </Toolbar>
            </AppBar>

            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Container>
                <List>
                    <ListItem>
                    {serialItem.show.image ? (
                        <img src={serialItem.show.image.medium} alt="show"/>
                    ): ( <Skeleton variant="rect" width={210} height={295} /> )}
                    </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="NAME"
                      secondary={serialItem.show.name ? serialItem.show.name : "---"}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="RATING"
                      secondary={serialItem.show.rating.average ? serialItem.show.rating.average : "---"}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    {`${serialItem.show.summary ? serialItem.show.summary.replace(/(<([^>]+)>)/ig,"") : "---"}`}
                  </ListItem>
                </List>
              </Container>
            </div>
         </>
        ): (<Error/>)}
    
      </div>  
    )
}

const mapStateToProps = (state, ownProps ) => ({ serial: (state.serials || []).filter(({ show }) => show.id === Number(ownProps.match.params.id)) })

SerialPage.propTypes = { 
    serials:PropTypes.arrayOf(PropTypes.shape({})),
}

export default connect(mapStateToProps, null)(SerialPage)