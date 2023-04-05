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

export default function SHCap(props) {

    //Props
    const { softcap, hardcap, nextstep, prevstep, changestepvalue } = props;

    //State Variable
    const [softcapnum, setPresaleSoftCap] = useState(0);
    const [hardcapnum, setPresaleHardCap] = useState(0);
    const [erroflag,  setErrorFlag] = useState(false);
    const [errlabel, setErrorLabel] = useState("Error");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=> {
        setPresaleSoftCap(softcap);
        setPresaleHardCap(hardcap);
    })

    const errorShow = (flag, label) => {
        setErrorFlag(flag);
        setErrorLabel(label);
    } 

    const softCapChange = async (val) => {
        changestepvalue('shcap', {softcap:val, hardcap:hardcap});
        errorShow(false, "");
    }

    const hardCapChange = async (val) => {
        changestepvalue('shcap', {softcap:softcap, hardcap:val});
        errorShow(false, "");
    }

    const NextButtonClick = () => {
        if(validate(softcap, hardcap))
            nextstep('contributionlimits');
    }

    const PrevButtonClick = () => {
        prevstep('presale_rate');
    }

    const validate = (softcap, hardcap) => {
        if( parseFloat(softcap) <= 0 || parseFloat(hardcap) <= 0) {
            errorShow(true, "The number should be greater than zero");
            return false;
        } else if(parseFloat(softcap) >= parseFloat(hardcap)) {
            errorShow(true, "Hardcap should be greater than Softcap");
            return false;
        }
        errorShow(false, "");
        return true;
    }

    return (
        <div>
            <GridContainer justifyContent="center">
                <h4>Enter presale caps: (Must be whole numbers with no decimal places) Softcap must be &gt;= Hardcap!</h4>
                <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                    <Label>SoftCap:
                    <TextField fullWidth type="number" id="input-with-sx" value = {softcapnum} onChange={(e) => softCapChange(e.target.value)} label="" variant="outlined" />
                    </Label>
                    
                    <Label>HardCap:
                    <TextField fullWidth type="number" id="input-with-sx" value = {hardcapnum} onChange={(e) => hardCapChange(e.target.value)} label="" variant="outlined" />
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