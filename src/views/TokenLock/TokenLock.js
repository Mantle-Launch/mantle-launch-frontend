//Default
import React from 'react';
import { useState, useEffect } from 'react';

//Style
import CircularProgress from '@mui/material/CircularProgress';

//Group
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';

import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardBody from '../../components/Card/CardBody.js';
import CardFooter from '../../components/Card/CardFooter.js';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import Box from '@mui/material/Box';

//Icon
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import CardIcon from '../../components/Card/CardIcon.js';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';

//Input
import TextField from '@mui/material/TextField';
import { Label } from 'reactstrap';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import Button from '../../components/CustomButtons/Button.js';

//Color
import Danger from '../../components/Typography/Danger.js';
import Primary from '../../components/Typography/Primary.js';

//Web3 Interface
import { useWeb3React } from '@web3-react/core';
import { Contract, ethers } from 'ethers';
import coinAddressValidator from 'coin-address-validator';

import { getDefaultProvider } from '../../components/WalletConnector.js';

//Constant
import { TOKENLOCK_ADDRESS } from '../../Config/config.js';
import { STANDARD_TOKEN_ABI } from '../../Config/config.js';
import { TOKEN_LOCK_ABI } from '../../Config/config.js';


let contractAddr = TOKENLOCK_ADDRESS.mantleTestnet; //Metamask
// const contractAddr = '0xE6D2B6D7AD8956AF24e4d890574F1F42ebcfC4f9';//BSC

let erctokenaddr;
let decimals, balance, available, accountbalance;

export default function TokenLock() {
  const [tokenbalance, setTokenBalance] = useState('0');
  const [lockallowance, setLockallowance] = useState('0');
  const [tokenlockedamount, setLockedAmount] = useState('0');
  const [progressflag, setProgressFlag] = useState(false);
  const [transactiveflag, setTransActiveFlag] = useState(false);
  const [erroflag, setErroShow] = useState(false);
  const [tokenstaddr, setTokenStAddr] = useState('');
  const [errlabel, setErrLabel] = useState('Error! Some problems happend. You should fix error.');

  const [opendis, setDigOpen] = React.useState(false);

  const [price, setPrice] = React.useState('0');
  const [penalfee, setPenalFee] = React.useState('0');
  const [symbol, setSymbol] = React.useState('');
  const [name, setName] = React.useState('');
  const [unlocktime, setUnlockTime] = useState('0');

  const [approve_flag, setApproveFlag] = useState(true);
  const [lock_flag, setLockFlag] = useState(true);
  const [unlock_flag, setUnlockFlag] = useState(true);

  // let erctokencontract, tokenlockcontract;

  const { account, library } = useWeb3React();

  useEffect(() => {
    if (account !== undefined) {
      // setAccount("Connected");
      return;
    }
    getPrice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, library]);

  useEffect(() => {
    getPrice();
  });

  const addrChange = (addr) => {
    // console.log(addr);
    erctokenaddr = addr;
    setTokenStAddr(erctokenaddr);
    getStandardTokenBalance(erctokenaddr);
  };

  const handledlgClose = (value) => {
    setDigOpen(false);
  };

  function PanicWithdrawDlg(props) {
    const { onClose, open } = props;

    const handleClose = () => {
      onClose();
    };

    const handleok = () => {
      withdraw_remove_fee(erctokenaddr);
      onClose();
    };

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Force unlock</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you agree to unlock tokens by removing penalty fee?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleok} color="primary">
            OK
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  const checkvalidate = (amount) => {
    let tokenbalance = ethers.utils.formatUnits(balance, decimals);
    let accountbal = ethers.utils.formatUnits(accountbalance, decimals);

    if (!amount) {
      setErrLabel('Please input amount');
      setProgressFlag(false);
      setErroShow(true);
      return false;
    }

    if (parseFloat(amount) > parseFloat(tokenbalance)) {
      setErrLabel('Please input correct amount');
      setProgressFlag(false);
      setErroShow(true);
      return false;
    }

    if (parseFloat(price) > parseFloat(accountbal)) {
      setErrLabel('Your balance is in sufficient');
      setProgressFlag(false);
      setErroShow(true);
      return false;
    }

    return true;
  };

  const connectContract = (tokenabi, tokenaddr) => {
    let provider = getDefaultProvider();
    let tempcontract;

    // console.log(provider);

    // contractAddr =
    // console.log("chainid");
    // console.log(library._network.chainId);
    if (!library) {
      return;
    }

    if (!library._network) {
      return;
    }

    //Ropsten
    if (library._network.chainId === 3) {
      // console.log("ethereum chain id")
      contractAddr = TOKENLOCK_ADDRESS.eth;
    } else if (library._network.chainId === 97) {
      // console.log("bsc chain id")
      contractAddr = TOKENLOCK_ADDRESS.bsc;
    } else if (library._network.chainId === 28) {
      // console.log("bsc chain id")
      contractAddr = TOKENLOCK_ADDRESS.mantleTestnet;
    }

    // const isBtcAddress  = coinAddressValidator.validate('1Gz3SRHzmzV8NwhUe5LQkTy5ysH1aqevAP', 'btc', 'prod');
    const isEthAddress = coinAddressValidator.validate(tokenaddr, 'eth', 'prod');

    if (!isEthAddress) {
      // console.log("Wallet address is invalid");
      setErrLabel('Token address is invalied');
      return null;
    }

    try {
      tempcontract = new Contract(tokenaddr, tokenabi, provider);
    } catch (error) {
      setErrLabel('Contract connect error');
      return null;
    }

    return tempcontract;
  };

  const createStandardContract = (addr) => {
    let tokenContract;

    if (!library || !account) {
      return null;
    }

    // if(library._network.chainId == 3) {
    //   tokenContract = connectContract(STANDARD_TOKEN_ABI.eth, addr);
    // } else if(library._network.chainId == 97) {
    tokenContract = connectContract(STANDARD_TOKEN_ABI, addr);
    // }

    if (!tokenContract) {
      return null;
    }

    let signer = library.getSigner();

    if (signer) {
      try {
        tokenContract = tokenContract.connect(signer);
      } catch (error) {
        // console.log("token lock connect error")
        setErrLabel('Contract connect error');
      }
    } else {
      return null;
    }

    return tokenContract;
  };

  const CreateLockContract = () => {
    let tokenContract;

    if (!library || !account) {
      return null;
    }

    tokenContract = connectContract(TOKEN_LOCK_ABI, contractAddr);

    if (!tokenContract) {
      return null;
    }

    let signer = library.getSigner();

    if (signer) {
      try {
        tokenContract = tokenContract.connect(signer);
      } catch (error) {
        // console.log("token lock connect error")
        setErrLabel('Contract connect error');
      }
    } else {
      return null;
    }

    return tokenContract;
  };

  const getPrice = async () => {
    let lock;
    if (!account) {
      return;
    }

    lock = CreateLockContract();

    if (!lock) {
      // setProgressFlag(false)
      // setErroShow(true)
      return;
    }

    let tpenaltyfee, tprice;

    try {
      tpenaltyfee = await lock.penaltyfee();
      tprice = await lock.price();
    } catch (error) {
      return;
    }

    setPenalFee(tpenaltyfee.toString());
    setPrice(ethers.utils.formatUnits(tprice, 18));
  };

  const getStandardTokenBalance = async (address) => {
    // let web3 = new Web3(window.web3.currentProvider);

    setProgressFlag(true);
    setTransActiveFlag(false);
    setErroShow(false);

    let erc, lock;
    let res;

    if (!account) {
      setErrLabel('Wallet is unconnected');
      setProgressFlag(false);
      setErroShow(true);
      return;
    }

    try {
      accountbalance = await library.getBalance(account);
    } catch (error) {
      setErrLabel('Check account status');
      // console.log(error);
      setProgressFlag(false);
      setErroShow(true);
      return;
    }

    try {
      res = await library.getCode(address);
    } catch (error) {
      res = '';
      // console.log("token address invalid");
      setErrLabel('token address invalid');
      // console.log(error);
      setProgressFlag(false);
      setErroShow(true);
      return;
    }

    // console.log("bytecode")
    // console.log(res)

    if (res !== '0x') {
      // console.log("token address valid");
      // setErrLabel("token address invalid");
    } else {
      // console.log("token address invalid");
      setErrLabel('token address invalid');

      setProgressFlag(false);
      setErroShow(false);
    }

    erc = createStandardContract(address);

    if (!erc) {
      setProgressFlag(false);
      setErroShow(true);
      return;
    }

    // console.log("next");

    lock = CreateLockContract();

    if (!lock) {
      setProgressFlag(false);
      setErroShow(true);
      return;
    }

    let tsymbol, tname, tunlocktime;
    let calc_lockallow, calc_balance, calc_lockedamount, lockedamount;
    console.log('---------erc', erc);
    try {
      decimals = await erc.decimals();
      console.log('---------0');

      balance = await erc.balanceOf(account);
      console.log('---------0.1', lock);

      available = await erc.allowance(account, contractAddr);
      lockedamount = await lock.GetBalance(address);
      console.log('---------1', lock);

      tsymbol = await erc.symbol();
      tname = await erc.name();
      tunlocktime = await lock.GetUnlockTime(address);

      setSymbol(tsymbol);
      setName(tname);
      console.log('-----tunlocktime----2', tunlocktime.toNumber());
      if (tunlocktime.toNumber() > 0) {
        const date = new Date(tunlocktime.toNumber() * 1000);
        console.log('------date---2', date);

        setUnlockTime(date.toLocaleString('en-GB'));
      }

      calc_balance = ethers.utils.formatUnits(balance, decimals);
      calc_lockallow = ethers.utils.formatUnits(available, decimals);
      calc_lockedamount = ethers.utils.formatUnits(lockedamount, decimals);
      console.log('---------3');

      setTokenBalance(calc_balance);
      setLockallowance(calc_lockallow);
      setLockedAmount(calc_lockedamount);
      console.log('---------4');

      if (parseFloat(calc_balance) > 0.0) {
        setApproveFlag(false);
      } else {
        setApproveFlag(true);
      }

      if (parseFloat(calc_lockallow) > 0.0) {
        setLockFlag(false);
      } else {
        setLockFlag(true);
      }

      if (parseFloat(calc_lockedamount) > 0.0) {
        setUnlockFlag(false);
      } else {
        setUnlockFlag(true);
      }

      setProgressFlag(false);
      setTransActiveFlag(true);
    } catch (error) {
      // console.log('Get Information Error');
      setErrLabel('Get Information Error');
      // console.log(error);
      setProgressFlag(false);
      setTransActiveFlag(false);
      setErroShow(true);
      return;
    }
  };

  const approveToken = async () => {

    setProgressFlag(true);
    setErroShow(false);

    let amount = document.getElementById('idamount').value;
    // console.log(amount.toString());
    let erc;

    if (!checkvalidate(amount)) {
      return;
    }

    erc = createStandardContract(erctokenaddr);

    if (!erc) {
      setProgressFlag(false);
      setErroShow(true);
      setErrLabel('Connect Error');
      return;
    }

    try {
      await erc.approve(contractAddr, ethers.utils.parseUnits('1000000000000000000', decimals));
      await erc.on('Approval', (address1, address2, num) => {
        setProgressFlag(false);
        getStandardTokenBalance(erctokenaddr);
      });
    } catch (err) {
      // console.log('Approve Error');
      setErrLabel('Approve Error');
      setProgressFlag(false);
      setErroShow(true);
      // console.log(err)
      return;
    }

    // Notice this is an array of topic-sets and is identical to
    // using a filter with no address (i.e. match any address)
  };

  const locktoken = async () => {
    setProgressFlag(true);
    setErroShow(false);

    let lock;

    let amount = document.getElementById('idamount').value;
    // let penaltyfee = document.getElementById("idpenaltyfee").value;
    let locktime = document.getElementById('idlocktime').value;

    if (!checkvalidate(amount)) {
      return;
    }

    lock = CreateLockContract();

    if (!lock) {
      setErrLabel('Connect Error');
      setProgressFlag(false);
      setErroShow(true);
      return;
    }

    let overrides = {
      // gasLimit: 1000000,
      value: ethers.utils.parseUnits(price, 18),
    };

    try {
      await lock.tokenLock(
        erctokenaddr,
        ethers.utils.parseUnits(amount, decimals),
        Date.parse(locktime) / 1000,
        account,
        overrides
      );
      await lock.on('Hold', (address1, address2, num, a, b) => {
        setProgressFlag(false);
        getStandardTokenBalance(erctokenaddr);
      });
    } catch (err) {
      // console.log('Lock token error');
      setErrLabel('Lock token error');
      // console.log(err)
      setProgressFlag(false);
      setErroShow(true);
      return;
      // console.log(err);
    }
  };

  const withdraw = async () => {
    setProgressFlag(true);
    setErroShow(false);

    let lock;

    lock = CreateLockContract();

    if (!lock) {
      setProgressFlag(false);
      setErroShow(true);
      return;
    }

    try {
      await lock.withdraw(erctokenaddr);
      await lock.on('Withdrawal', (address1, address2, num) => {
        setProgressFlag(false);
        getStandardTokenBalance(erctokenaddr);
      });
      // await lock.withdraw(erctokenaddr);
    } catch (err) {
      // console.log('Withdraw token error');
      setErrLabel('Withdraw token error');
      // console.log(err);
      if (err.data) {
        if (err.data.message.toString().includes('Unlock time')) {
          setDigOpen(true);
        }
      }

      // console.log(typeof(err))
      // console.log(err.toString().includes("Unlock time"))
      if (err.toString().includes('Unlock time')) {
        setDigOpen(true);
      }

      // console.log(err)
      setProgressFlag(false);
      setErroShow(true);
      return;
      // console.log(err);
    }
  };

  const withdraw_remove_fee = async (address) => {
    setProgressFlag(true);
    setErroShow(false);

    let lock;

    lock = CreateLockContract();

    if (!lock) {
      setProgressFlag(false);
      setErroShow(true);
      return;
    }

    try {
      await lock.panicWithdraw(erctokenaddr);
      await lock.on('PanicWithdraw', (address1, address2, num, num2) => {
        setProgressFlag(false);
        getStandardTokenBalance(erctokenaddr);
      });
      // await lock.withdraw(erctokenaddr);
    } catch (err) {
      setErrLabel('Withdraw token error');
      setProgressFlag(false);
      setErroShow(true);
      return;
    }
  };

  return (
    <GridContainer justifyContent="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          {/* <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Token Locker</h4>
            <p className={classes.cardCategoryWhite}>
            Token locks are allowing all ERC20 tokens including Rebasing and Deflationary mechanisms to be supported.{" "}</p>
          </CardHeader> */}
          <CardBody>
            {/* <GridContainer> */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <ForwardToInboxIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                id="input-with-sx"
                value={tokenstaddr}
                onChange={(e) => addrChange(e.target.value)}
                label="Input token address"
                variant="standard"
              />
            </Box>
            {progressflag && (
              <GridContainer justifyContent="center">
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress />
                </Box>
              </GridContainer>
            )}

            {erroflag && (
              <Danger>
                <ErrorIcon />
                {errlabel}
              </Danger>
            )}

            {transactiveflag && (
              <div>
                <GridContainer justifyContent="center">
                  <GridItem xs={10} sm={10} md={4}>
                    <p>Token Balance:</p>
                    <Danger>
                      <h3>{tokenbalance}</h3>
                    </Danger>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <p>Possible Amount:</p>
                    <Danger>
                      <h3>{lockallowance}</h3>
                    </Danger>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <p>Locked Amount:</p>
                    <Danger>
                      <h3>{tokenlockedamount}</h3>
                    </Danger>
                  </GridItem>
                </GridContainer>
                <GridContainer justifyContent="center">
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Amount"
                      id="idamount"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Label>Input time</Label>
                    <TextField
                      id="idlocktime"
                      // label="Unlock time"
                      disabled={lock_flag}
                      type="datetime-local"
                      defaultValue={new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
                        .toISOString()
                        .slice(0, 16)}
                      // sx={{ width: 215 }}
                      InputLabelProps={{
                        shrink: true,
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={6} sm={6} md={4}></GridItem>

                  <GridItem xs={12} sm={12} md={2}>
                    {/* <CustomInput
                    labelText="Penalty Fee : 50"
                    id = "idpenaltyfee"
                    formControlProps={{
                      fullWidth: true,
                      disabled:true
                    }}
                  /> */}
                  </GridItem>
                </GridContainer>
              </div>
            )}
          </CardBody>
          {transactiveflag && (
            <CardFooter>
              <Button
                disabled={approve_flag}
                style={{ color: 'white' }}
                onClick={(e) => approveToken()}
                color="primary"
              >
                Approve
              </Button>
              <Button disabled={lock_flag} style={{ color: 'white' }} onClick={(e) => locktoken()} color="primary">
                Lock
              </Button>
              <Button disabled={unlock_flag} style={{ color: 'white' }} onClick={(e) => withdraw()} color="primary">
                unLock
              </Button>
            </CardFooter>
          )}
        </Card>
      </GridItem>
      {/* {transactiveflag && ( */}
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="primary" stats icon>
            <CardIcon color="info">
              {/* <Icon>content_copy</Icon> */}
              <AddAlarmIcon />
            </CardIcon>
          </CardHeader>
          <CardBody>
            <Primary>
              <small>Token:</small>
            </Primary>
            <Primary>
              {name}({symbol})
            </Primary>
            <br />
            <Primary>
              <small>Fee:</small>
            </Primary>
            <Primary>{price} coin</Primary>
            <br />
            <Primary>
              <small>PFee:</small>
            </Primary>
            <Primary>{penalfee}</Primary>
            <br />
            <Primary>
              <small>Unlock time:</small>
            </Primary>
            <Primary>{unlocktime}</Primary>
          </CardBody>
          {/* <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter> */}
        </Card>
      </GridItem>
      {/* )} */}
      <PanicWithdrawDlg open={opendis} onClose={handledlgClose} />
    </GridContainer>
  );
}
