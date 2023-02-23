//Default
import React from 'react';

//Group
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';

import Card from '../../components/Card/Card.js';
import CardBody from '../../components/Card/CardBody.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#333333',
    color: theme.palette.common.white,
    fontSize: 18,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 600,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function createData(name, address, link) {
  return { name, address, link };
}

const rows = [
  createData(
    'Token Factory CreateManage: ',
    '0xa25e5394bc021c91f49ebb5ac7da8faed25a78ed',

    <a target={'_blank'} href="https://explorer.testnet.mantle.xyz/address/0xa25E5394Bc021C91F49ebb5AC7dA8faED25a78eD">
      {' '}
      Explore
    </a>
  ),
  createData(
    'Token Lock: ',
    '0x2839a137ea0b4c29df7e77fc5bed40637eb397f0',
    <a target={'_blank'} href="https://explorer.testnet.mantle.xyz/address/0x2839a137ea0b4c29df7e77fc5bed40637eb397f0">
      {' '}
      Explore
    </a>
  ),
  createData(
    'Liquidity Lock: ',
    '0xbc1cf48bcdbd1cf73ee6aace59fcb1a50379b0a7',
    <a target={'_blank'} href="https://explorer.testnet.mantle.xyz/address/0xbc1cf48bcdbd1cf73ee6aace59fcb1a50379b0a7">
      {' '}
      Explore
    </a>
  ),
  createData(
    'Presale Manage: ',
    '0x74c9edbe1f78de461f78957cefecb210849b38ba',
    <a target={'_blank'} href="https://explorer.testnet.mantle.xyz/address/0x74c9edbe1f78de461f78957cefecb210849b38ba">
      {' '}
      Explore
    </a>
  ),
  createData(
    'Lending PoolFactory: ',
    '0xf34c6e22267bc7ddde109a9758450eda62c9d60c',
    <a target={'_blank'} href="https://explorer.testnet.mantle.xyz/address/0xf34c6e22267bc7ddde109a9758450eda62c9d60c">
      {' '}
      Explore
    </a>
  ),
  createData(
    'Staking PoolFactory: ',
    '0xca6980d554cdf28e7be92e1d39627357e4bbc15a',
    <a target={'_blank'} href="https://explorer.testnet.mantle.xyz/address/0xca6980d554cdf28e7be92e1d39627357e4bbc15a">
      {' '}
      Explore
    </a>
  ),
  createData(
    'MSwap Factory:  ',
    '0xad2456e1074a607712ac27b1793625f80ccb96f5',
    <a target={'_blank'} href="https://explorer.testnet.mantle.xyz/address/0xad2456e1074a607712ac27b1793625f80ccb96f5">
      {' '}
      Explore
    </a>
  ),
];

function Contracts(props) {
  const { classes } = props;

  return (
    <>
      {/* <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody></CardBody>
          </Card>
        </GridItem>
      </GridContainer> */}

      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Contract Name</CustomTableCell>
              <CustomTableCell align="Left">
                <b>Address</b>
              </CustomTableCell>
              <CustomTableCell align="Left">Explore</CustomTableCell>
              {/* <CustomTableCell align="right">Fat (g)</CustomTableCell>
              <CustomTableCell align="right">Carbs (g)</CustomTableCell>
              <CustomTableCell align="right">Protein (g)</CustomTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell width={300} component="th" scope="row">
                  <b> {row.name}</b>
                </CustomTableCell>
                <CustomTableCell width={600} align="left">
                  <b>{row.address}</b>
                </CustomTableCell>
                <CustomTableCell align="left">
                  <b style={{ color: 'pink' }}>{row.link}</b>
                </CustomTableCell>
                {/* <CustomTableCell align="right">{row.fat}</CustomTableCell>
                <CustomTableCell align="right">{row.carbs}</CustomTableCell>
                <CustomTableCell align="right">{row.protein}</CustomTableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

Contracts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contracts);
