/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar, Stack, Typography } from "@mui/material";
import { Face, AlternateEmail, CalendarMonth } from "@mui/icons-material";
import moment from "moment";
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 140,
          height: 140,
          objectFit: "contain",
          marginBottom: "0.2rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"without struggle not success come"} />
      <ProfileCard
        heading={"Username"}
        text={"thesawankumar"}
        Icon={<AlternateEmail />}
      />
      <ProfileCard heading={"Name"} text={"Sawan Kumar"} Icon={<Face />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2024-03-28T00:00:00.000Z").fromNow()}
        Icon={<CalendarMonth />}
      />
    </Stack>
  );
};
const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"0.5rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
