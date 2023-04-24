/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../../components/CustomButtons/Button.js';
import WalletConnectLogo from '../../assets/img/walletconnect.png';
import MetaMaskImg from '../../assets/img/MetaMaskImg.png';
import mantleIMG from '../../assets/img/mantleIMG.png';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import { useWalletConnector, setNet } from '../WalletConnector.js';
import { useWeb3React } from '@web3-react/core';


const wallets = ['MetaMask', 'Wallet Connect'];
const netlists = ['MantleTestnet'];


function DisconDialog(props) {
  const { logoutWalletConnector } = useWalletConnector();
  const { account } = useWeb3React();
  const { onClose, open, setAccount } = props;

  const handleClose = () => {
    if (account === undefined) {
      setAccount('Wallet');
    }
    onClose();
  };

  const handleDiscon = () => {
    logoutWalletConnector();
    setAccount('Disconnect Wallet');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-title">{'Account Address'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{account}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDiscon} color="warning">
          Disconnect
        </Button>
        <Button onClick={handleClose} color="warning" autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function WalletSelect(props) {

  const { onClose, open, setWallet } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    setWallet(value);
    onClose();
  };
  return (
    <Dialog fullWidth={true} onClose={handleClose} aria-labelledby="select-dialog-title" open={open}>
      <DialogTitle id="select-dialog-title">Connect Wallet</DialogTitle>
      <List>
        {wallets.map((dwallet) => (
          <ListItem button onClick={() => handleListItemClick(dwallet)} key={dwallet}>
            <ListItemAvatar>
              <img src={dwallet === 'MetaMask' ? MetaMaskImg : WalletConnectLogo} alt="logo" style={{ width: '45px' }} />
            </ListItemAvatar>

            <ListItemText primary={dwallet} />
          </ListItem>
        ))}
        {/* <div style={{ display: 'block', marginRight: 'auto', marginLeft: '7px' }}>
          <sw-auth use-dev="true" partner-key="811160bd8ba37de5ea05ab74b69f899d4186b4e8"></sw-auth>
        </div> */}
      </List>
    </Dialog>
  );
}

function NetSelect(props) {
  const { loginMetamask, loginWalletConnect, loginBSC } = useWalletConnector();
  const { account } = useWeb3React();
  // console.log("child", account)
  const { onClose, open, setAccount, wallet } = props;

  useEffect(() => {
    if (account !== undefined) {
      setAccount('Connected');
    }
  }, [account]);

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    console.log('---------------------value', value);
    if (value === 'Ethereum') {
      setNet(0);
      console.log(value);
    } else if (value === 'MantleTestnet') {
      setNet(2);
      console.log(value);
    }

    if (wallet === 'MetaMask') loginMetamask();
    else if (wallet === 'BSCWallet') loginBSC();
    else if (wallet === 'Wallet Connect') loginWalletConnect();
    onClose();
  };

  return (
    <Dialog fullWidth={true} onClose={handleClose} aria-labelledby="select-dialog-title" open={open}>
      <DialogTitle id="select-dialog-title">Network Select</DialogTitle>
      <List>
        {netlists.map((netitem) => (
          <ListItem button onClick={() => handleListItemClick(netitem)} key={netitem}>
            <ListItemAvatar>
              <img src={mantleIMG} alt="logo" style={{ width: '45px' }} />
            </ListItemAvatar>
            <ListItemText primary={netitem} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

const buttonuseStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function AdminNFavbarLinks() {
  const [open, setOpen] = React.useState(false);
  const [netopen, setNetOpen] = React.useState(false);
  const [opendis, setDisOpen] = React.useState(false);
  const [accountAddr, setAccountAddr] = React.useState('Wallet');
  const buttonstyle = buttonuseStyles();
  const [selwallet, setSelWallet] = React.useState('');

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', (chainId) => {
        console.log('Chain Id changed!');
      });

      window.ethereum.on('accountsChanged', (accountad) => {
        console.log('account changed!');
      });
    }
  }, [window.ethereum]);

  // useEffect(() => {

  // }, [accountAddr]);

  const handleClickOpen = () => {
    if (accountAddr === 'Wallet') {
      setDisOpen(false);
      setOpen(true);
    } else {
      setDisOpen(true);
      setOpen(false);
    }
  };

  const handleClose = (value) => {
    setOpen(false);
    setNetOpen(true);
  };

  const handleDisconClose = () => {
    setDisOpen(false);
  };

  const handleNetClose = (value) => {
    setNetOpen(false);
  };

  const setWallet = (value) => {
    setSelWallet(value);
  };

  // useEffect(() => {
  //   console.log("parent", account)
  //   if( account!= undefined){
  //     setAccountAddr('Connected');
  //   }
  // }, [account])
  // console.log(accountAddr)
  return (
    <div>
      {/* <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: classes.margin + ' ' + classes.search,
          }}
          inputProps={{
            placeholder: 'Search',
            inputProps: {
              'aria-label': 'Search',
            },
          }}
        />
        <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button>
      </div> */}

      <Button variant="contained" color="info" className={buttonstyle.margin} onClick={handleClickOpen}>
        {accountAddr}
      </Button>

      <WalletSelect open={open} onClose={handleClose} setWallet={setWallet} />
      <NetSelect open={netopen} wallet={selwallet} setAccount={setAccountAddr} onClose={handleNetClose} />
      <DisconDialog open={opendis} onClose={handleDisconClose} setAccount={setAccountAddr} />
    </div>
  );
}
