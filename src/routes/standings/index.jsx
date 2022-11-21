import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import { getStandings } from "../../api";
import { Card, CardTitle, CardWrapper, Container, TeamName, Wrapper } from "./styled";

export default function Standings() {
  const [standings, setStandings] = React.useState([]);

  useEffect(() => {
    (async () => {
      const data = await getStandings();
      setStandings(data);
    })();
  }, []);

  return (
    <Container>
      <Wrapper>
        {standings?.standings?.map((prop) => (
          <Card key={prop?.group}>
            <CardTitle>{prop?.group?.replace("_", " ")}</CardTitle>
            <CardWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>PTS</th>
                  </tr>
                </thead>
                <tbody>
                  {prop?.table?.map((table) => (
                    <tr key={table?.team?.id}>
                      <TeamName>
                        <Avatar
                          sx={{
                            width: 25,
                            height: 25,
                          }}
                          src={table?.team?.crest}
                          alt={table?.team?.name}
                        />{" "}
                        {table?.team?.name}
                      </TeamName>
                      <td>{table?.playedGames}</td>
                      <td>{table?.won}</td>
                      <td>{table?.draw}</td>
                      <td>{table?.lost}</td>
                      <td>{table?.goalsFor}</td>
                      <td>{table?.goalsAgainst}</td>
                      <td>{table?.goalDifference}</td>
                      <td>{table?.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardWrapper>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
}
