import { Typography, Box, IconButton, Grid, Button } from "@mui/material";
import CustomCard from "../ui-components/CustomCard";
import { useRef } from "react";
import CustomCarousal from "../ui-components/CustomCarousal";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomCardTwo from "../ui-components/CustomCardTwo";
import customCardTwo from ".././assets/customCardTwo.png";
import customCardThree from ".././assets/customCardThree.png";
import customCardFour from ".././assets/customCardFour.png";
import customCardFive from ".././assets/customCardFive.png";
import Lobby from "../ui-components/Lobby";
import customCard1 from ".././assets/customCard1.png";
import customCard2 from ".././assets/customCard2.png";
import customCard3 from ".././assets/customCard3.png";
import customCardd1 from ".././assets/customcardd1.png";
import customCardd2 from ".././assets/customCardd2.png";
import customCardd3 from ".././assets/customCardd3.png";
import customCardd4 from ".././assets/customCardd4.png";
import customCardd5 from ".././assets/customCardd5.png";
import customCardd6 from ".././assets/customCardd6.png";
import customCardd7 from ".././assets/customCardd7.png";
import customCardd8 from ".././assets/customCardd8.png";
import customCardd9 from ".././assets/customCardd9.png";
import lastPart from "../assets/last-part-sizzald.png";
import tabPart from "../assets/tabs-part.png";

export default function Dashboard() {
  const slider = React.useRef(null);
  const sliderTwo = React.useRef(null);
  const sliderThree = React.useRef(null);
  const sliderFour = React.useRef(null);

  var settingCardOne = {
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  var settingCardTwo = {
    slidesToShow: 4,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  var settingCardThree = {
    slidesToShow: 4,
    rows: 2,
    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  var settingCardFour = {
    slidesToShow: 4,
    rows: 2,
    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="!bg-clBlueContainer ">
      <Box
        sx={{
          textAlign: "right",
          paddingRight: "25px",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
          }}
        >
          PROMOTIONS
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{ color: "white", marginRight: "8px", background: "#FFFFFF33" }}
            onClick={() => slider?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white", background: "#FFFFFF33" }}
            onClick={() => slider?.current?.slickNext()}
          >
            <ArrowRightAltIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal carousalRef={slider} settingCard={settingCardOne}>
        <CustomCard img={customCard1} />
        <CustomCard img={customCard2} />
        <CustomCard img={customCard3} />
        <CustomCard img={customCard1} />
        <CustomCard img={customCard2} />
        <CustomCard img={customCard3} />
      </CustomCarousal>
      <Box
        sx={{
          textAlign: "right",
          // paddingRight: "25px",
          // padding: "25px 0px 30px 30px",
          paddingTop: "20px",
          paddingBottom: "0px",
          paddingLeft: "20px",
          paddingRight: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
          }}
        >
          RECENT BIG WINS
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{ color: "white", marginRight: "8px", background: "#FFFFFF33" }}
            onClick={() => sliderTwo?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white", background: "#FFFFFF33" }}
            onClick={() => sliderTwo?.current?.slickNext()}
          >
            <ArrowRightAltIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal
        sx={{ padding: "0px 40px" }}
        carousalRef={sliderTwo}
        settingCard={settingCardTwo}
      >
        <CustomCardTwo img={customCardd7} />
        <CustomCardTwo img={customCardd8} />
        <CustomCardTwo img={customCardd9} />
        <CustomCardTwo img={customCardd6} />
        <CustomCardTwo img={customCardd7} />
        <CustomCardTwo img={customCardd8} />
        <CustomCardTwo img={customCardd1} />
        <CustomCardTwo img={customCardd2} />
      </CustomCarousal>
      <Grid spacing={2}>
        <Grid item xs={8}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "40px",
              letterSpacing: "1px",
              color: "white",
              paddingLeft: "19px",
              paddingTop: "20px",
            }}
          >
            CASINO
          </Typography>
        </Grid>
      </Grid>
      <img src={tabPart} width="100%" alt="atbs part" />
      <Box
        sx={{
          textAlign: "right",
          paddingRight: "25px",
          // padding: "60px 30px 20px 20px",
          paddingTop: "20px",
          paddingBottom: "0px",
          paddingLeft: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
          }}
        >
          BC Original
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{ color: "white", marginRight: "8px", background: "#FFFFFF33" }}
            onClick={() => sliderThree?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography
            sx={{
              color: "rgba(240, 75, 43, 1)",
              textDecoration: "underline",
              paddingRight: "6px",
            }}
            variant="span"
          >
            Show all 24{" "}
            <Typography
              sx={{
                color: "white",
                textDecoration: "underline",
                textTransform: "uppercase",
              }}
              variant="span"
            >
              Games
            </Typography>
          </Typography>
          <IconButton
            sx={{ color: "white", background: "#FFFFFF33" }}
            onClick={() => sliderThree?.current?.slickNext()}
          >
            <ArrowRightAltIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal carousalRef={sliderThree} settingCard={settingCardThree}>
        <CustomCardTwo img={customCardd5} />
        <CustomCardTwo img={customCardd6} />
        <CustomCardTwo img={customCardd7} />
        <CustomCardTwo img={customCardd8} />
        <CustomCardTwo img={customCardd1} />
        <CustomCardTwo img={customCardd2} />
        <CustomCardTwo img={customCardd3} />
        <CustomCardTwo img={customCardd4} />
      </CustomCarousal>
      <Box
        sx={{
          textAlign: "right",
          paddingRight: "25px",
          // padding: "60px 30px 20px 20px",
          paddingTop: "20px",
          paddingBottom: "0px",
          paddingLeft: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "40px",
            letterSpacing: "1px",
            textAlign: "left",
            color: "white",
          }}
        >
          Slot
        </Typography>
        <Box>
          <IconButton
            hover={{ background: "#FFFFFF33" }}
            sx={{ color: "white", marginRight: "8px", background: "#FFFFFF33" }}
            onClick={() => sliderFour?.current?.slickPrev()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography
            sx={{
              color: "rgba(240, 75, 43, 1)",
              textDecoration: "underline",
              paddingRight: "6px",
            }}
            variant="span"
          >
            Show all 24{" "}
            <Typography
              sx={{
                color: "white",
                textDecoration: "underline",
                textTransform: "uppercase",
              }}
              variant="span"
            >
              Games
            </Typography>
          </Typography>
          <IconButton
            sx={{ color: "white", background: "#FFFFFF33" }}
            onClick={() => sliderFour?.current?.slickNext()}
          >
            <ArrowRightAltIcon />
          </IconButton>
        </Box>
      </Box>
      <CustomCarousal carousalRef={sliderFour} settingCard={settingCardFour}>
        <CustomCardTwo img={customCardd1} />
        <CustomCardTwo img={customCardd2} />
        <CustomCardTwo img={customCardd3} />
        <CustomCardTwo img={customCardd4} />
        <CustomCardTwo img={customCardd5} />
        <CustomCardTwo img={customCardd6} />
        <CustomCardTwo img={customCardd7} />
        <CustomCardTwo img={customCardd8} />
      </CustomCarousal>
      <Lobby />
      <img src={lastPart} width="100%" alt="Last part" />
    </section>
  );
}
