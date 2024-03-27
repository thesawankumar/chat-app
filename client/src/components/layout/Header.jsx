/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Backdrop,
} from "@mui/material";
import { orange } from "../../constants/color";
import {
  Add,
  Group,
  Logout,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const HandleMobile = () => {
    console.log("moole");
    setMobile((prev) => !prev);
  };
  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };
  const navigateGroup = () => {
    navigate("/groups");
  };
  const logoutHandler = () => {};

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              chat
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={HandleMobile}>
                <Menu />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<Search />}
                onClick={openSearch}
              />
              <IconBtn
                title={"New Group"}
                icon={<Add />}
                onClick={openNewGroup}
              />
              <IconBtn
                title={"Manage Groups"}
                icon={<Group />}
                onClick={navigateGroup}
              />
              <IconBtn
                title={"Notifications"}
                icon={<Notifications />}
                onClick={openNotification}
              />

              <IconBtn
                title={"Logout"}
                icon={<Logout />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>{<SearchDialog />}</Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          {<NotificationDialog />}
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>{<NewGroupDialog />}</Suspense>
      )}
    </>
  );
};
const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
