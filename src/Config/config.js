import { StandardTokenABI } from './ABI/StandardToken/Token.js';
import { TokenLockABI } from './ABI/TokenLock/tokenlock.js';
import { LptokenLockABI } from './ABI/LiquidityLock/lptokenlocker.js';
import { LptokenABI } from './ABI/LiquidityLock/lptoken.js';
import { PresaleManageABI } from './ABI/Presale/PresaleManage.js';
import { PresaleSettingABI } from './ABI/Presale/PresaleSetting.js';
import { PresaleABI } from './ABI/Presale/Presale.js';
// import {PresaleABI} from "./ABI/Presale/Presale_Temp.js";
import { LockForwarderABI } from './ABI/Presale/PresaleLockForwarder.js';
import { manageCreateTokenABI } from './ABI/CreateToken/CreateManage.js';
import { standardTokenCreateABI } from './ABI/CreateToken/StandardToken.js';
import { liquidityTokenCreateABI } from './ABI/CreateToken/LiquidityToken.js';

export const TOKENLOCK_ADDRESS = {
  eth: '0x98106b29701B693AF00F002679FdbeF47Ef43E17',
  bsc: '0x0715d13eCa068f3707CC27A246FF2A85f99F5714',
  mantleTestnet: '0x2839A137EA0B4c29DF7E77Fc5Bed40637eb397f0',
};

export const LIQUIDITYLOCK_ADDRESS = {
  eth: '0x78b06B8096A471CABfCF189beFb24A134FE2E88C',
  bsc: '0xdb78C45F1C11382962a95e6e27d306015634Aa5b',
  mantleTestnet: '0xbC1cf48BCDbd1cF73eE6aAce59FCB1A50379B0a7',
};

// old working and submitted final project
// reusing "StandardTokenFactory" at 0x521757C0C82004f04Aa504e8bbEe6a34436cfea4
// reusing "LiquidityTokenFactory" at 0x80C5B26AAbd6549D01DB391281987E2c438C2540
// deploying "CreateManage" (tx: 0xe68759bc26edf0b6caaebb94b46350713657fbc297a907033bef2e11318683f7)...: depl
// oyed at 0xa25E5394Bc021C91F49ebb5AC7dA8faED25a78eD with 1203580 gas
// reusing "LPLocker" at 0xbC1cf48BCDbd1cF73eE6aAce59FCB1A50379B0a7
// reusing "PresaleFactory" at 0x201c1035E9698BB9C778119CCD22db3E416a7943
// reusing "PresaleManage" at 0x74c9edBe1f78De461F78957ceFeCb210849b38BA
// reusing "TokenLocker" at 0x2839A137EA0B4c29DF7E77Fc5Bed40637eb397f0

// new contract addresses with Mswap

// chain id is 5001
// reusing "StandardTokenFactory" at 0x63C0c35c09cFf513166cA2Faf79d8cf94AcC9633
// reusing "LendingPoolFactory" at 0xF34C6E22267BC7dddE109a9758450EDA62C9d60c
// deploying "StakingPoolFactory" at 0xCa6980D554CDf28e7be92e1d39627357E4BBC15A
// deploying "MSwapFactory" at 0xAD2456e1074A607712Ac27b1793625f80cCB96f5
// reusing "LiquidityTokenFactory" at 0x46EeE5C3555f2d904760B9fB490b05a5D0C31611
// reusing "CreateManage" at 0x13Dd70098b241Cf3d0672Bb0889c4BEb609Df032
// deploying "LPLocker"  at 0xa8A2EaBf89E80FB181fF6C7f9a982d4Cc1eAa406
// deploying "PresaleFactory" at 0xD6F4AE28C7ed31B67759113337F8694a1Ca1A36a
// deploying "PresaleManage" at 0xccC6cF0AFAF96599Ccf75E974691871897520557
// deploying "TokenLocker" at 0x5be4F9bB095b4363232d9976da37c1d6C0382345

export const PRESALE_MANAGE_ADDRESS = {
  eth: '0x3b09f46D4716bB7d6a08315C91158aFE27618830',
  bsc: '0x1376C5b77a8Bbf757De61F5B72F528BaE5B5eF32',
  mantleTestnet: '0x74c9edBe1f78De461F78957ceFeCb210849b38BA',
};

export const CREATE_TOKEN_MANAGE_ADDRESS = {
  eth: '0xC19A09597C4D313fb01Df54fCb1D8B329cDEB379',
  bsc: '0x1c9C08c84074f4957EF0D9F3360d623460a7B22B',
  mantleTestnet: '0xa25E5394Bc021C91F49ebb5AC7dA8faED25a78eD',
};

////////////////////////////////////////////////////////////////////////////////////////////

export const STANDARD_TOKEN_ABI = StandardTokenABI;

export const TOKEN_LOCK_ABI = TokenLockABI;

export const LIQUIDITY_LOCK_ABI = {
  lock: LptokenLockABI,
  token: LptokenABI,
};

export const PRESALE_ABI = {
  manage: PresaleManageABI,
  setting: PresaleSettingABI,
  presale: PresaleABI,
  lockforwarder: LockForwarderABI,
};

export const CREATE_TOKEN_ABI = {
  manage: manageCreateTokenABI,
  standard: standardTokenCreateABI,
  liquidity: liquidityTokenCreateABI,
};

export const GetCoinPriceURL = {
  eth: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR',
  bsc: 'https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=BTC,USD,EUR',
  boba: 'https://min-api.cryptocompare.com/data/price?fsym=BOBA&tsyms=BTC,USD,EUR',
};

export const CRYPTCOMPARE_API_KEY = 'a77e4e82d09267dd87bb3041c0379574ac267a20bc80a16e175b3ba39cedc40b';
