//Default
import React from "react";
import { useState, useEffect } from 'react';

//Group
import GridItem from "../../Grid/GridItem.js";
import GridContainer from "../../Grid/GridContainer.js";

//Input
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//Color
import Danger from "../../Typography/Danger.js";

//Icon
import ErrorIcon from '@material-ui/icons/Error';

export default function PresaleRate(props) {


    //Props
    const { presalerate, nextstep, prevstep, changestepvalue, chain } = props;

    //State Variable
    const [presale_rate, setPresaleRate] = useState(0);
    const [erroflag,  setErrorFlag] = useState(false);
    const [errlabel, setErrorLabel] = useState("Error");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=> {
        setPresaleRate(presalerate);
    })

    const errorShow = (flag, label) => {
        setErrorFlag(flag);
        setErrorLabel(label);
    } 

    const rateChange = async (rate) => {
        changestepvalue('presale_rate', {presale_rate:rate});
        errorShow(false, "");
    }

    const NextButtonClick = () => {
        if(validate(presale_rate))
            nextstep('shcap');
    }

    const PrevButtonClick = () => {
        prevstep('address');
    }

    const validate = (val) => {
        if( parseFloat(val) <= 0 ) {
            errorShow(true, "The number should be greater than zero");
            return false;
        }
        errorShow(false, "");
        return true;
    }

    return (
        <div>
            <GridContainer>
            <h4>Enter your presale price: (If I pay 1 {chain}, how many tokens do I get?)</h4>
            {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}> */}
                
                {/* <ForwardToInboxIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                <TextField fullWidth type="number" id="input-with-sx" value = {presale_rate} onChange={(e) => rateChange(e.target.value)} label="Input Presale Rate" variant="outlined" />
            {/* </Box> */}
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