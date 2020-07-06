import React from "react"

import { Button, Box} from "@material-ui/core"
import Header from "../../components/Header";
import Title from "../../components/Title";

const Error = () => (
    <>
        <Header/>
        <Box style={{margin:50, textAlign:"center"}}>
            <Title>Please Back</Title>
            <Button variant="contained" color="primary" href="/">
                Back main page
            </Button>
        </Box>
    </>
)

export default Error;