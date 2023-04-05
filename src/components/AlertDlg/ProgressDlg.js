//Default
import React from "react";

//Dialog
import Dialog from "@material-ui/core/Dialog";
import DialogContent from '@material-ui/core/DialogContent';

//Typography
import Primary from "../Typography/Primary.js";

//Group
import GridContainer from "../Grid/GridContainer.js";

import Box from '@mui/material/Box';

//Component
import CircularProgress from '@mui/material/CircularProgress';

export default function ProgressDlg(props) {
  const { open, alerttext} = props;

  return (
    <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title"></DialogTitle> */}
        <DialogContent>
            <GridContainer justifyContent="center">
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            </GridContainer>
            <GridContainer justifyContent="center">
                <Primary><p>{alerttext}</p></Primary>
            </GridContainer>
        </DialogContent>
      </Dialog>
  );
}