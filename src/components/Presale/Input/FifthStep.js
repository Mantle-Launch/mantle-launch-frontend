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

export default function LiqudityPercent(props) {


    //Props
    const { liqudity_percent, nextstep, prevstep, changestepvalue, chain} = props;

    //State Variable
    const [lq_percent, setLqPercent] = useState(0);
    const [erroflag,  setErrorFlag] = useState(false);
    const [errlabel, setErrorLabel] = useState("Error");
    const [swapstr, setSwapString] = useState("Uniswap");

    useEffect(()=> {
        setLqPercent(liqudity_percent);
        // console.log("chain", chain);
        if(chain === "ETH") {
            setSwapString("Uniswap");
        } else if(chain === "BNB") {
            setSwapString("PancakeSwap");
        }
    }, [chain, liqudity_percent])

    const errorShow = (flag, label) => {
        setErrorFlag(flag);
        setErrorLabel(label);
    } 

    const lqChange = async (lqpercent) => {
        changestepvalue('liquiditypercent', {liqudity_percent:lqpercent});
        errorShow(false, "");
    }

    const NextButtonClick = () => {
        if(validate(lq_percent))
            nextstep('listingrate');
    }

    const PrevButtonClick = () => {
        prevstep('contributionlimits');
    }

    const validate = (val) => {
        if( parseFloat(val) < 51 || parseFloat(val) > 100) {
            errorShow(true, "The number should be between 51% & 100%");
            return false;
        }
        errorShow(false, "");
        return true;
    }

    return (
        <div>
            <GridContainer>
            <h4>Enter the percentage of raised funds that should be allocated to Liquidity on {swapstr} (Min 51%, Max 100%, We recommend &gt; 70%)</h4>
            {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}> */}
                
                {/* <ForwardToInboxIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                <TextField fullWidth type="number" id="input-with-sx" value = {lq_percent} onChange={(e) => lqChange(e.target.value)} label="Input Liqudity Percent" variant="outlined" />
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