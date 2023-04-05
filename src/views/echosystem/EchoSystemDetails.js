/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projects from './data';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
//icons
//import DiscordIcon from '@mui/icons-material/Discord';
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import Share from '@material-ui/icons/ShareRounded';
import Close from '@material-ui/icons/CloseRounded';
import PublicIcon from '@mui/icons-material/Public';
import TelegramIcon from '@mui/icons-material/Telegram';

//toggle
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

//comments impotrs
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css';

//modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'white',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
  height: '500px',
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#EEEEEE',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const EchoSystemDetails = () => {
  //comments data
  const data = [
    {
      userId: '01a',
      comId: '012',
      fullName: 'Riya Negi',
      avatarUrl: 'https://ui-avatars.com/api/name=Riya&background=random',
      userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
      text: 'Hey, Loved your blog! ',
      replies: [
        {
          userId: '02a',
          comId: '013',
          userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
          fullName: 'Adam Scott',
          avatarUrl: 'https://ui-avatars.com/api/name=Adam&background=random',
          text: 'Thanks! It took me 1 month to finish this project but I am glad it helped out someone!🥰',
        },
        {
          userId: '01a',
          comId: '014',
          userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
          fullName: 'Riya Negi',
          avatarUrl: 'https://ui-avatars.com/api/name=Riya&background=random',
          text: 'thanks!😊',
        },
      ],
    },
    {
      userId: '02b',
      comId: '017',
      fullName: 'Lily',
      userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
      text: 'I have a doubt about the 4th point🤔',
      avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
      replies: [],
    },
  ];

  const { name } = useParams();
  const [thisData, setThisData] = useState('');

  useEffect(() => {
    const currentProject = projects.find((elem) => elem.name === name);
    console.log(currentProject, 'daoData');
    //

    setThisData(currentProject);
    // console.log(thisData.decription);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);

  // for tabs
  const [value, setValue] = useState('1');

  //model open close
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //toggle
  const [alignment, setAlignment] = useState('0.1%');

  const handleChangeToggle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box sx={{ flexGrow: 0, border: 0 }}>
      <Grid container sx={{ border: 0 }} spcing={3}>
        <Grid item xs={{ border: 0 }}>
          <Item>
            <div>
              <img
                style={{ borderRadius: '10%', objectFit: 'contain', borderStyle: 'solid', padding: '10px' }}
                src={thisData.picture}
                alt=""
                height="250px"
                width="250px"
              ></img>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Grid style={{ border: '0' }} container spacing={1} columns={16}>
              <Grid item xs={8}>
                <Item style={{ marginTop: '-42px', width: 'auto' }}>
                  <h1 style={{ color: 'black' }}>{thisData.name}</h1>
                </Item>
                <Item>
                  <ul className="socialIconsUl">
                    <li className="socialIconsLI">
                      <a className="socialIconsA" href="" target="_blank">
                        <i className="fa-brands fa-discord" aria-hidden="true">
                          <a href={thisData.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter />
                          </a>
                        </i>
                      </a>
                    </li>
                    <li className="socialIconsLI">
                      <a className="socialIconsA" href="" target="_BLANK">
                        <i className="fa-brands fa-discord" aria-hidden="true">
                          <a href={thisData.twitter} target="_blank" rel="noopener noreferrer">
                            <Facebook />
                          </a>
                        </i>
                      </a>
                    </li>
                    <li className="socialIconsLI">
                      <a className="socialIconsA" href="" target="_blank">
                        <i className="fa-brands fa-discord" aria-hidden="true">
                          <a href={thisData.telegram} target="_blank" rel="noopener noreferrer">
                            <TelegramIcon />
                          </a>
                        </i>
                      </a>
                    </li>
                    <li className="socialIconsLI">
                      <a className="socialIconsA" href="" target="_blank">
                        <i className="fa-brands fa-discord" aria-hidden="true">
                          <a href={thisData.website} target="_blank" rel="noopener noreferrer">
                            <PublicIcon />
                          </a>
                        </i>
                      </a>
                    </li>
                    <li className="socialIconsLI">
                      <a
                        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                        className="socialIconsA"
                        data-show-count="false"
                        target="_blank"
                        rel="noreferrer" 
                      >
                        <i className="fa-brands fa-discord" aria-hidden="true">
                          <Share />
                        </i>
                      </a>
                    </li>
                  </ul>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item>
                  <span style={{ 'margin-left': '-40px' }}>
                    {/* <Button
                      style={{
                        width: '70px',
                        textAlign: 'center',
                        backgroundColor: '#000',
                        padding: '-20px',
                        'margin-right': '-50px',
                        borderRadius: '20px',
                      }}
                      variant="contained"
                    >
                      $1inch
                    </Button> */}
                  </span>
                </Item>
              </Grid>
            </Grid>
          </Item>
          <Item>
            <div style={{ 'margin-top': '-25px', padding: '10px' }}>
              <Button
                style={{ width: '200px', textAlign: 'center', backgroundColor: '#000', marginRight: '10px' }}
                variant="contained"
              >
                Score
              </Button>
              <Button
                style={{
                  width: '200px',
                  textAlign: 'center',
                  color: 'black',
                  backgroundColor: '#65B3AE',
                }}
                onClick={handleOpen}
              >
                Buy
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                    style={{ textAlign: 'left', borderBottom: 'black', color: 'black' }}
                  >
                    Purchase Details
                    <Button
                      onClick={handleClose}
                      style={{ float: 'right', color: 'white', backgroundColor: 'black', width: '40px' }}
                    >
                      <Close onClick={handleClose} />
                    </Button>
                  </Typography>

                  <hr class="solid"></hr>
                  <div style={{ margin: '30px', marginLeft: '60px' }}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <h4 style={{ marginBottom: '3px', paddingLeft: '2px' }}>Enter Amount</h4>
                      {/* <span
                      style={{
                        position: 'absolute',
                        'margin-left': '7px',
                        'margin-top': '3px',
                        fontSize: '23px',
                        color: '#757575',
                      }}
                    >
                      $
                    </span> */}
                      <input
                        type="number"
                        placeholder="200"
                        style={{
                          borderStyle: 'none',
                          backgroundColor: '#F2F4F7',
                          width: '91%',
                          height: '70px',
                          borderRadius: '5px',
                          fontSize: '40px',
                          paddingRight: '10px',
                          textIndent: '20px',
                        }}
                      />

                      <Grid container sx={{ border: 0, 'MuiPaper-elevation1': 1 }} spacing={3}>
                        <Grid item xs={{ border: 0 }} style={{ width: '100%', height: '180px' }}>
                          <Item
                            style={{
                              width: '90%',
                              height: '150px',
                              marginTop: '15px',
                              border: '1px solid #EAECF0',
                              background: 'white',
                              'flex-wrap': 'wrap',
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  margin: '20px',
                                  alignItems: 'center',
                                  display: 'flex',
                                }}
                              >
                                <span>BUY:</span>
                                <span style={{ fontSize: '20px', marginLeft: '50px' }}>550.8091</span>

                                <img
                                  style={{ marginLeft: '10px' }}
                                  src="https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/sHGUQ_0F_400x400.jpg"
                                  height={'20px'}
                                  width={'20px'}
                                  alt="img"
                                ></img>
                                <span style={{ marginLeft: '5px' }}>$0x</span>
                              </div>
                              <hr></hr>
                              <div
                                style={{
                                  margin: '20px',
                                  'justify-content': 'space-between',
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <span>Slippage</span>
                                <div>
                                  <ToggleButtonGroup
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleChangeToggle}
                                  >
                                    <ToggleButton className="toggle" value="0.1">
                                      0.1%
                                    </ToggleButton>
                                    <ToggleButton className="toggle" value="0.5">
                                      0.5%
                                    </ToggleButton>
                                    <ToggleButton className="toggle" value="1.0">
                                      1.0%
                                    </ToggleButton>
                                    <input
                                      value={alignment}
                                      className="toggle"
                                      type={'number'}
                                      style={{
                                        borderStyle: 'none',
                                        backgroundColor: '#F2F4F7',
                                        width: '70px',
                                        height: '37px',
                                        borderRadius: '5px',
                                        fontSize: '15px',
                                        marginLeft: '5px',
                                        textAlign: 'center',
                                      }}
                                    />
                                  </ToggleButtonGroup>
                                </div>
                              </div>
                            </div>
                          </Item>
                          <div style={{ margin: '10px', display: 'flex' }}>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                data-v-11d8ebcd=""
                              >
                                <path
                                  d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5Z"
                                  fill="#FEE4E2"
                                ></path>
                                <path
                                  d="M12 10.5V12.5M12 14.5H12.005M17 12.5C17 15.2614 14.7614 17.5 12 17.5C9.23858 17.5 7 15.2614 7 12.5C7 9.73858 9.23858 7.5 12 7.5C14.7614 7.5 17 9.73858 17 12.5Z"
                                  stroke="#D92D20"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </span>
                            <span style={{ marginLeft: '20px' }}>
                              {' '}
                              You have 0.0000 in ETH, but you need total of 0.1198 ETH.
                            </span>
                            <br />
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <Button
                              style={{
                                width: '400px',
                                height: '50px',
                                textAlign: 'center',
                                backgroundColor: '#000',
                              }}
                              variant="contained"
                            >
                              Continue
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </Typography>
                  </div>
                </Box>
              </Modal>
              <p style={{ textAlign: 'justify', color: 'black' }}>{thisData.decription}</p>
            </div>
          </Item>
        </Grid>
        <Grid style={{ display: 'flex', textAlign: 'center' }} item xs>
          <Item>
            <Button style={{ width: '200px', textAlign: 'center', backgroundColor: '#000' }} variant="contained">
              {' '}
              Upvote
            </Button>
            <br />
            <Button
              style={{
                width: '200px',
                textAlign: 'center',
                marginTop: '10px',
                color: 'black',
                backgroundColor: '#65B3AE',
              }}
            >
              <a href={thisData.website} target="_blank" rel="noopener noreferrer">
                Try it
              </a>
            </Button>
          </Item>
        </Grid>
      </Grid>

      {/* Comment section */}

      <Grid container sx={{ border: 0 }} spacing={3}>
        <Grid item xs={{ border: 0 }}>
          <Item>
            <Box sx={{ width: '100%', typography: 'body1', color: 'black' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'black', color: 'black' }}>
                  <TabList
                    onChange={handleChange}
                    textColor="white"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: '#000',
                      },
                    }}
                    // style={{ backgroundColor: 'black', color: 'white' }}
                    centered
                  >
                    <Tab label="Comments" value="1" />
                    <Tab label="Details" value="2" />
                    <Tab label="Other" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <a
                    style={{ color: 'black', cursor: 'pointer' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/RiyaNegi/react-comments-section/blob/main/example/src/components/DefaultComponent.tsx"
                  ></a>
                  <CommentSection
                    currentUser={{
                      currentUserId: '01a',
                      currentUserImg: 'https://ui-avatars.com/api/name=Riya&background=random',
                      currentUserProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
                      currentUserFullName: 'Riya Negi',
                    }}
                    commentData={data}
                    logIn={{
                      loginLink: 'http://localhost:3001/',
                      signupLink: 'http://localhost:3001/',
                    }}
                    onSubmitAction={(data) => console.log('check submit, ', data)}
                  />
                </TabPanel>
                <TabPanel value="2">
                  The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and
                  rotected operations in the DeFi space. The 1inch Network unites decentralized protocols whose synergy
                  enables the most lucrative, fastest and rotected operations in the DeFi space.
                </TabPanel>
                <TabPanel value="3">
                  The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and
                  rotected operations in the DeFi space. The 1inch Network unites decentralized protocols whose synergy
                  enables the most lucrative, fastest and rotected operations in the DeFi space.
                </TabPanel>
              </TabContext>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EchoSystemDetails;
