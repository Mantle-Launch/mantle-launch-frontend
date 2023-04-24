//Default
import React from 'react';

//Group
import GridContainer from '../../Grid/GridContainer.js';

import Card from '../../Card/Card.js';
import CardHeader from '../../Card/CardHeader.js';
import CardBody from '../../Card/CardBody.js';

//Input
// import Radio from '@mui/material/Radio';

//Component
import Button from '@mui/material/Button';

// import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import CircularProgressWithLabel from '../../Progress/CircleProgress.js';

//Color
import Danger from '../../Typography/Danger.js';
import Success from '../../Typography/Success.js';
import Primary from '../../Typography/Primary.js';
import Info from '../../Typography/Info.js';

export default function Thumbnail(props) {

  const {
    percent,
    raised,
    hardcap,
    mincap,
    maxcap,
    softcap,
    liquidity,
    flagstr,
    timestr,
    time,
    tokenname,
    tokensymbol,
    index,
    personalShow,
  } = props;

  const MoreInfo = () => {
    personalShow(index);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <Info>
            <b>{tokensymbol}</b>
          </Info>
          <Info>{tokenname}</Info>
        </CardHeader>
        <Divider textAlign="center"></Divider>
        <CardBody>
          <GridContainer justifyContent="center">
            <CircularProgressWithLabel color="info" size={140} thickness={3.5} value={percent} />
          </GridContainer>
          <Primary>&nbsp;</Primary>
          <GridContainer justifyContent="center">
            <Primary>
              <h5>
                Raised:&nbsp;{raised}/{hardcap}
              </h5>
            </Primary>
          </GridContainer>
          <GridContainer justifyContent="center">
            <Primary>
              <h5>Soft Cap:&nbsp;{softcap}</h5>
            </Primary>
          </GridContainer>
          <GridContainer justifyContent="center">
            <Success>
              Min:&nbsp;{mincap}/Max:&nbsp;{maxcap}
            </Success>
          </GridContainer>
          <GridContainer justifyContent="center">
            <Info>Liquidity:&nbsp;{liquidity}%</Info>
          </GridContainer>
          <GridContainer justifyContent="center">
            <Danger>
              <b>{flagstr}</b>
            </Danger>
          </GridContainer>
        </CardBody>
        <GridContainer justifyContent="center">
          <Button color="info" variant="contained" onClick={(e) => MoreInfo()}>
            More
          </Button>
          &nbsp;
        </GridContainer>
        <br />
        <Divider textAlign="center"></Divider>
        <GridContainer justifyContent="center">
          <Info>
            <p>
              <b>{timestr}</b>
            </p>
          </Info>
        </GridContainer>
        <GridContainer justifyContent="center">
          <Info>
            <b>{time}</b>
          </Info>
        </GridContainer>
      </Card>
    </div>
  );
}
