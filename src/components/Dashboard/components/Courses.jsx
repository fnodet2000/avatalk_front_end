import React, { useState, useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import ImgMediaCard from "components/homePage/components/card";
import GridRenderer from "./GridRenderer";
import http from "services/httpService";
import "animate.css";

const styles = {
  btn: {
    background: "#1976d2",
    textAlign: "center",
    borderRadius: " 0px 10px 0px 10px  ",
    ml: "3px",
    p: 0,
    width: "120px",
    "&:hover": {
      color: "#adc3f7",
      backgroundColor: "#fc5d5d",
      borderRadius: " 10px 0px 10px 0px ",
      transform: "scale(1.2)",
      opacity: 0.5,
    },
  },
};

const Courses = () => {
  const [cards, setCards] = useState([]);

  useEffect(async () => {
    const cardsData = await http.get("http://localhost:3900/api/cards");
    setCards(cardsData.data);
  }, [cards]);
  if (cards.length === 0) return null;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        m: "8px",
        p: "3px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box>
          <Button
            className="animate__animated animate__lightSpeedInLeft animate__delay-1s"
            variant="contained"
            sx={styles.btn}
          >
            Courses
          </Button>
        </Box>
        <Box>
          <Button
            className="animate__animated animate__lightSpeedInRight animate__delay-1s"
            href="/addcourse"
            variant="contained"
            sx={styles.btn}
          >
            <Add label="Chip 1" color="#000" />
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        sx={{
          flex: 1,
          justifyContent: "center",
          mt: 1,
          alignItems: "stretch",
        }}
      >
        <Grid container spacing={0.25}>
          {cards.map((card) =>
            GridRenderer(
              <ImgMediaCard
                className="animate__animated animate__backInDown animate__delay-1s"
                key={card.name}
                id={card._id}
                cardName={card.name}
                cardImage={card.cardImage}
                cardDescription={card.description}
              />,
              4,
              4
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Courses;
