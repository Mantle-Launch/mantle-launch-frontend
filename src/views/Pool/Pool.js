//Default
import React from 'react';

//Group
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import Card from '../../components/Card/Card.js';
import CardBody from '../../components/Card/CardBody.js';
import ComingSoon from '../../assets/img/coming-soon.png';

function Pool() {
  return (
    <>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody style={{ color: 'black' }} justifyContent="center">
              <image src={ComingSoon}></image>
              <h2>Coming Soon</h2>

              <h5>
                Try MSwap Factory Contract : &nbsp;
                <a href="https://explorer.testnet.mantle.xyz/address/0x74c9edBe1f78De461F78957ceFeCb210849b38BA">
                  0xAD2456e1074A607712Ac27b1793625f80cCB96f5
                </a>
              </h5>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}

export default Pool;
