import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

interface CardWithContentProps {
  index: number;
  item: {
    title: string;
    points: string[];
  };
}

const CardWithContent = (props: CardWithContentProps): React.ReactElement => {
  const { title, points } = props.item;
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={props.index} className="card-with-content-root">
      <Card className={`gyno-card with-bg`}>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <ul>
            {points.map((point) => (
              <li key={point}>
                <Typography variant="body1">{point}</Typography>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardWithContent;
