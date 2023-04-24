//Default
import React from "react";
import { useState, useEffect } from 'react';

//Group
import GridItem from "../../Grid/GridItem.js";
import GridContainer from "../../Grid/GridContainer.js";

import Box from '@mui/material/Box';

//Input
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Label } from 'reactstrap';

//Color
import Danger from "../../Typography/Danger.js";

//Icon
import ErrorIcon from '@material-ui/icons/Error';


export default function MinMaxCap(props) {


    //Props
    const { mincap, maxcap, nextstep, prevstep, changestepvalue } = props;

    //State Variable
    const [mincapnum, setPresaleMinCap] = useState(0);
    const [maxcapnum, setPresaleMaxCap] = useState(0);
    const [erroflag,  setErrorFlag] = useState(false);
    const [errlabel, setErrorLabel] = useState("Error");

    useEffect(()=> {
        setPresaleMinCap(mincap);
        setPresaleMaxCap(maxcap);
    },[maxcap, mincap])

    const errorShow = (flag, label) => {
        setErrorFlag(flag);
        setErrorLabel(label);
    } 

    const minCapChange = async (val) => {
        changestepvalue('contributionlimits', {mincap:val, maxcap:maxcap});
        errorShow(false, "");
    }

    const maxCapChange = async (val) => {
        changestepvalue('contributionlimits', {mincap:mincap, maxcap:val});
        errorShow(false, "");
    }

    const NextButtonClick = () => {
        if(validate(mincap, maxcap))
            nextstep('liquiditypercent');
    }

    const PrevButtonClick = () => {
        prevstep('shcap');
    }

    const validate = (mincap, maxcap) => {
        if( parseFloat(mincap) <= 0 || parseFloat(maxcap) <= 0) {
            errorShow(true, "The number should be greater than zero");
            return false;
        } else if(parseFloat(mincap) >= parseFloat(maxcap)) {
            errorShow(true, "Maxcap should be greater than Mincap");
            return false;
        }
        errorShow(false, "");
        return true;
    }

    return (
        <div>
            <GridContainer justifyContent="center">
                <h4>Enter the minimum and maximum amounts each wallet can contribute: (min,max)</h4>
                <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                    <Label>Minimum Contribution Limit:
                    <TextField fullWidth type="number" id="input-with-sx" value = {mincapnum} onChange={(e) => minCapChange(e.target.value)} label="" variant="outlined" />
                    </Label>
                    
                    <Label>Maximum Contribution Limit:
                    <TextField fullWidth type="number" id="input-with-sx" value = {maxcapnum} onChange={(e) => maxCapChange(e.target.value)} label="" variant="outlined" />
                    </Label>
                </Box>
                {erroflag && (
                <Danger>
                    <ErrorIcon />
                    {errlabel}
                </Danger>
                )}
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                    <Button color="secondary" variant="outlined" onClick={(e) => PrevButtonClick()}>
                    Prev
                </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                <Button color="secondary" variant="outlined" onClick={(e) => NextButtonClick()}>
                    Next
                </Button>
                </GridItem>
            </GridContainer>
        </div>
    );
}