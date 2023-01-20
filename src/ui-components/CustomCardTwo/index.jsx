import Card from "@mui/material/Card";
import * as style from "./style";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomCardTwoImg from "../../assets/customCardTwo.png";
import { Avatar } from "@mui/material";
import avator from "../../assets/avator.png";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import IconButton from "@mui/material/IconButton";

export default function CustomCardTwo({ img }) {
  return (
    <Card
      sx={{
        marginTop: "10px",
        width: "90%",
        background: "rgba(43, 45, 80, 1)",
        marginLeft: "20px",
        // paddingLeft:'20'
      }}
    >
      <CardMedia
        sx={{
          height: 260,
          background: `url(${img}) center/cover`,
          borderRadius: "6px",
        }}
        title="green iguana"
      />
      <CardContent sx={style.cardFlex}>
        <Box sx={style.cardFlexTwo}>
          <Avatar sx={style.cardAvatar} alt="Cindy Baker" src={avator} />
          <Box>
            <Typography sx={style.cardTextName} component="div">
              MR SCHEMER
            </Typography>
            <Typography sx={style.cardTextPrice} component="div">
              $ 64.34534
            </Typography>
          </Box>
        </Box>
        <Box>
          <IconButton sx={{ background: "rgba(255, 255, 255, 0.3)" }}>
            <NorthEastIcon sx={style.cardContentIconSize} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
