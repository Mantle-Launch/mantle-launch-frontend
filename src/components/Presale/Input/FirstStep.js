//Default
import React from "react";
import { useState, useEffect } from 'react';

//Style
import CircularProgress from '@mui/material/CircularProgress';

//Group
import GridItem from "../../Grid/GridItem.js";
import GridContainer from "../../Grid/GridContainer.js";

import Box from '@mui/material/Box';

//Input
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//Color
import Danger from "../../Typography/Danger.js";

//Icon
import ErrorIcon from '@material-ui/icons/Error';

export default function TokenInput(props) {


    //Props
    const { tokenaddress, progressflag, erroflag, errlabel, nextactive, getInfo, tokeninfo, nextstep, changestepvalue } = props;

    //State Variable
    const [tokenstaddr, setTokenStAddr] = useState('');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=> {
        setTokenStAddr(tokenaddress);
    })

    const addrChange = async (address) => {
        getInfo(address);
        changestepvalue('address', {tokenaddress:address});
        setTokenStAddr(address);
    }

    const NextButtonClick = () => {
        nextstep('presale_rate');
    }

    return (
        <div>
            <h4>Enter your token address</h4>
            {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}> */}
                
                {/* <ForwardToInboxIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                <TextField fullWidth id="input-with-sx" value = {tokenstaddr} onChange={(e) => addrChange(e.target.value)} label="Input token address" variant="outlined" />
            {/* </Box> */}
            { progressflag && <GridContainer justifyContent="center">
                <Box sx={{ display: 'flex' }}>
                <CircularProgress />
                </Box>
            </GridContainer>}

            {erroflag && (
            <Danger>
                <ErrorIcon />
                {errlabel}
            </Danger>
            )}

            <div>
                <p>Token Name.......................................{tokeninfo.name}</p>
                <p>Token Symbol.....................................{tokeninfo.symbol}</p>
                <p>Token Decimal....................................{tokeninfo.decimal}</p>
                <p>Token Balance....................................{tokeninfo.balance}</p>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={10}>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                    <Button color="secondary" variant="outlined" onClick={(e) => NextButtonClick()} disabled={nextactive}>
                        Next
                    </Button>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}