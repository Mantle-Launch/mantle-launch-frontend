//Default
import React from 'react';
import Card from '../Card/Card.js';
import CardHeader from '../Card/CardHeader.js';
import CardBody from '../Card/CardBody.js';

//Input
import IconButton from '@mui/material/IconButton';


// import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';

//Color
import Primary from '../Typography/Primary.js';
import Info from '../Typography/Info.js';


//Icon
import GetAppIcon from '@mui/icons-material/GetApp';

export default function FeeInfo(props) {

  const { fee, cur_coin, getFeeInfo } = props;

  const getFeeButtonClick = () => {
    getFeeInfo();
  };

  return (
    <Card>
      <CardHeader stats icon>
        {/* <CardIcon color="primary">
              
                <AttachMoneyIcon />
            </CardIcon> */}
        <Info>
          <Primary>
            <br />
          </Primary>
          <Primary>Withdraw</Primary>
        </Info>
        <Primary>
          <h3>{cur_coin}</h3>
        </Primary>
      </CardHeader>
      <IconButton color="primary" onClick={(e) => getFeeButtonClick()} aria-label="add an alarm">
        <GetAppIcon />
        {'Click'}
      </IconButton>
      <CardBody>
        <Primary>Normal Fee:</Primary>
        <Primary>{fee.normal}</Primary>
        <Primary>Mint Fee:</Primary>
        <Primary>{fee.mint}</Primary>
        <Primary>Burn Fee:</Primary>
        <Primary>{fee.burn}</Primary>
        <Primary>Pause Fee:</Primary>
        <Primary>{fee.pause}</Primary>
        <Primary>Blacklist Fee:</Primary>
        <Primary>{fee.blacklist}</Primary>
        <Primary>Reflection Fee:</Primary>
        <Primary>{fee.deflation}</Primary>
        <p />
        <Divider textAlign="center"></Divider>
        <p />
        <Primary>Current Fee:</Primary>
        <Primary>{fee.curfee}</Primary>
      </CardBody>
    </Card>
  );
}
