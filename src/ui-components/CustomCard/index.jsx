import { Box, Typography, IconButton } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import * as style from "./Style";

const CustomCard = ({ img }) => {
  return (
    <Box>
      <Box
        sx={{
          // maxWidth: "420px",
          borderRadius: "12px",
          margin: "0 20px",
          background: `linear-gradient(357.95deg, rgba(0, 0, 0, 0.4) 32.88%, rgba(0, 0, 0, 0) 98.27%, rgba(0, 0, 0, 0) 98.27%),url(${img}) center/cover`,
          position: "relative",
          padding: "0px 0px",
          display: "flex",
          justifyContent: "space-around",
          alignContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Box sx={style.cardContent}>
          <Typography sx={style.cardContentText} variant="h6" component="div">
            RED BULL
            <Typography
              variant="h6"
              component="span"
              sx={style.cardContentTextVS}
            >
              VS
            </Typography>
            GREEN BULL
          </Typography>
          <Typography
            sx={style.cardContentTextWar}
            variant="h6"
            component="div"
          >
            WAR IS ON
          </Typography>
        </Box>
        <Box>
          <IconButton
            className="!bg-clIconBackground"
            sx={style.cardContentIcon}
          >
            <NorthEastIcon sx={style.cardContentIconSize} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCard;
