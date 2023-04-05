/* eslint-disable jsx-a11y/anchor-is-valid */
//Default
import React from 'react';

//Group
import Card from '../Card/Card.js';
import CardHeader from '../Card/CardHeader.js';
import CardBody from '../Card/CardBody.js';

// import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';

//Color
import Primary from '../Typography/Primary.js';

//Icon
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import CardIcon from '../../components/Card/CardIcon.js';



export default function TokenItem(props) {
  // console.log("token item test");
  const { itemcolor, name, symbol, balance, address, state, supply, type } = props;

  // console.log(name, symbol, balance, address, decimal, state, supply, type);

  return (
    <Card>
      <CardHeader color={itemcolor} stats icon>
        <CardIcon color={itemcolor}>
          {/* <Icon>content_copy</Icon> */}
          <AddModeratorIcon />
        </CardIcon>
        <Primary>&nbsp;</Primary>
        <Primary>
          <h5>{name}</h5>
        </Primary>
        <Primary>
          <h3>{symbol}</h3>
        </Primary>
      </CardHeader>
      <CardBody>
        <h5>
          Total Supply: <a>{supply}</a>
        </h5>
        <h5>
          Your Balance: <a> {balance}</a>
        </h5>
        <h5>Address:</h5>
        <p>{address}</p>
        {/* <Info>Pause Fee:</Info><Danger>{feeInfo.pause}</Danger>
                <Info>Blacklist Fee:</Info><Danger>{feeInfo.blacklist}</Danger>
                <Info>Deflation Fee:</Info><Danger>{feeInfo.deflation}</Danger> */}
        <p />
        <Divider textAlign="center"></Divider>
        <p />
        <h5> Type : {type}</h5>

        <a>{state}</a>
      </CardBody>
    </Card>
  );
}
