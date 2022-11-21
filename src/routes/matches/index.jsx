import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import { getMatches } from "../../api";
import {
  Container,
  Wrapper,
  CardWrapper,
  Card,
  Team,
  Name,
  Score,
  Title,
} from "./styled";

export default function Matches() {
  const [matches, setMatches] = React.useState([]);
  useEffect(() => {
    (async () => {
      const data = await getMatches();
      setMatches(data.matches);
    })();
  }, []);

  const winner = (name, match) => {
    if (name === match?.score?.winner) return "Winner";
    else if (match?.score?.winner === "DRAW") return "Draw";
    else if (!match?.score?.winner) return "Not Played";
    else return "Loser";
  };

  return (
    <Container>
      <Wrapper>
        {matches?.map((match, index) => (
          <Card
            key={index}
            whileInView={{ opacity: [0, 0, 1], y: [100, 50, 0] }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: .5 }}
          >
            <Title>
              <h2>{match?.group?.replace("_", " ")}</h2>
              <span>{new Date(match?.utcDate).toUTCString()}</span>
            </Title>
            <CardWrapper>
              <Team>
                <Name>
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                    }}
                    src={match?.homeTeam?.crest}
                    alt={match?.homeTeam?.name}
                  />
                  <h2>{match?.homeTeam?.name}</h2>
                </Name>
                <Score>
                  <span>{winner("HOME_TEAM", match)}</span>
                  <h2>{match?.score?.fullTime?.home}</h2>
                </Score>
              </Team>
              <Team>
                <Score>
                  <h2>{match?.score?.fullTime?.away}</h2>
                  <span>{winner("AWAY_TEAM", match)}</span>
                </Score>
                <Name>
                  <h2>{match?.awayTeam?.name}</h2>
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                    }}
                    src={match?.awayTeam?.crest}
                    alt={match?.awayTeam?.name}
                  />
                </Name>
              </Team>
            </CardWrapper>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
}
