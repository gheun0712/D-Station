import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import { Interval, LinkBox, TagBox } from "./QuestionCard.style";

const QuestionCard = ({ Tag, Title, theDate, Nickname, Uid }) => {
  return (
    <Interval>
      <Card sx={{ minWidth: 250, marginRight: 3 }}>
        <CardContent>
          <TagBox>
            <Typography
              sx={{ fontWeight: "bold", fontSize: 14, color: "hotpink" }}
              color="text.secondary"
              gutterBottom
            >
              {Tag}
            </Typography>
          </TagBox>
          <Typography component="div" sx={{ fontSize: 20, mt: 2 }}>
            {Title}
          </Typography>
          <Typography sx={{ mb: 1.5, mt: 5 }} color="text.secondary">
            {Nickname}
          </Typography>
          <Typography variant="body2">{theDate}</Typography>
        </CardContent>
        <LinkBox>
          <Link
            to="/questiondetail"
            state={{ id: { Uid } }}
            style={{ display: "flex", textAlign: "end", color: "red" }}
          >
            🔎Detail
          </Link>
        </LinkBox>
      </Card>
    </Interval>
  );
};

export default QuestionCard;
