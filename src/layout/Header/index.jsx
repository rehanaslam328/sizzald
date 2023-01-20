import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Button,
  Stack,
  Avatar,
} from "@mui/material";

import * as style from "./style/style";

import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/More";
import Message from "@mui/icons-material/Message";
import logo from "../../assets/sizzld-logo.png";
import avator from "../../assets/avator.png";
import bitcoin from "../../assets/bitcoin.png";
import wallet from "../../assets/wallet.png";
import arrowDown from "../../assets/arrow-down.png";
import vector from "../../assets/vector.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar({ handleDrawer }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [anchorElD, setAnchorElD] = React.useState(null);
  const open = Boolean(anchorElD);
  const handleClick = (event) => {
    setAnchorElD(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElD(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigate('/');
  }
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <EmailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={style.containerNav}>
      <AppBar sx={{ backgroundColor: "#202447" }} position="fixed">
        <Toolbar sx={style.Toolbar}>
          <IconButton size="large" color="inherit" onClick={handleDrawer}>
            <img src={vector} alt="hamburger"/>
          </IconButton>
          <Stack sx={style.headerLogo}>
            <img src={logo} alt="logo" />
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={style.headerRadioButton}>
            <div
              className="grid  grid-cols-2  rounded-xl !bg-clwhite p-1"
              x-data="app"
            >
              <div>
                <input
                  type="radio"
                  name="option"
                  id="1"
                  className="peer hidden"
                  defaultChecked
                />
                <label
                  htmlFor="1"
                  className="px-5 py-2 block cursor-pointer select-none rounded-xl   text-center peer-checked:bg-clSky peer-checked:font-bold peer-checked:clLightPurple"
                >
                  Casino
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="option"
                  id="2"
                  className="peer hidden"
                />
                <label
                  htmlFor="2"
                  className="px-5 py-2 block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-clSky peer-checked:font-bold peer-checked:clLightPurple"
                >
                  Sport
                </label>
              </div>
            </div>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={style.headerFlex}>
            <Search sx={style.headerBorderRadius}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                sx={style.headerInputHeight}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 3 }} />
          <Box sx={style.headerFlexCenter}>
            <Stack sx={style.headerFlexResponsive}>
              <IconButton
                className="!bg-clwhite "
                sx={style.headerIcons}
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <EmailIcon />
                </Badge>
              </IconButton>
              <IconButton
                className="!bg-clwhite "
                sx={style.headerIcons}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                className="!bg-clwhite"
                sx={style.headerIcons}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <Message />
                </Badge>
              </IconButton>
              <Button
                className="!bg-clwhite"
                sx={style.headerButton}
                variant="contained"
                startIcon={
                  <img
                    sx={style.headerButtonIcon}
                    src={bitcoin}
                    alt="bitcoin"
                  />
                }
                endIcon={
                  <img
                    sx={style.headerButtonIcon}
                    src={arrowDown}
                    alt="dropdown"
                  />
                }
              >
                BTC
              </Button>
              <Button
                className="!bg-clwhite"
                sx={style.headerButton}
                variant="contained"
                startIcon={
                  <img src={wallet} sx={{ width: "20px" }} alt="bitcoin" />
                }
              >
                Wallet
              </Button>
            </Stack>
            <Avatar sx={style.avator} alt="avator" src={avator} />
            <IconButton
              className="!text-white "
              aria-label="avator-arrow"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img src={arrowDown} alt="" />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorElD}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Reset Password</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
          <Box sx={style.headerDNone}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
