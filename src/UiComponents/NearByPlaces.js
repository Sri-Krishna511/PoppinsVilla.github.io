import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";

const nearbyPlaces = [
  {
    name: "Mysore Palace",
    url: "https://www.google.com/search?q=mysore+palace&oq=Mysore+Palace&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyEAgBEC4YrwEYxwEYsQMYgAQyCggCEAAYsQMYgAQyBwgDEAAYgAQyBwgEEAAYgAQyCggFEAAYsQMYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQc5MTdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "Chamundi Hills",
    url: "https://www.google.com/search?q=chamundi+hills&oq=Chamundi+Hills&gs_lcrp=EgZjaHJvbWUqEggAEAAYQxjjAhixAxiABBiKBTISCAAQABhDGOMCGLEDGIAEGIoFMg8IARAuGEMYsQMYgAQYigUyDAgCEAAYFBiHAhiABDIHCAMQABiABDIMCAQQABhDGIAEGIoFMgcIBRAAGIAEMgwIBhAAGEMYgAQYigUyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgxNDAzajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
  },
  {
    name: "St. Philomena's Church",
    url: "https://www.google.com/search?q=st.+philomena%27s+church+mysore&sca_esv=31bc3a22d96d9e0a&sxsrf=ADLYWIKsxuOFgEkhyMnLW4YKeA4_7LZ-jA%3A1731699114046&ei=qqE3Z8zHAtSVseMP9KWR-AI&gs_ssp=eJzj4tLP1TcwKrIoL8kzYLRSNagwTkpMMzcwS01OSjY2SjO1tDKosEi1NDBIskxOMjcxSDU2SvGSLS7RUyjIyMzJz03NS1QvVkjOKC1KzlDIrSzOL0oFAOnlGcw&oq=St.+Philomena%27s+Church&gs_lp=Egxnd3Mtd2l6LXNlcnAiFlN0LiBQaGlsb21lbmEncyBDaHVyY2gqAggAMhAQLhiABBgUGIcCGMcBGK8BMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIfEC4YgAQYFBiHAhjHARivARiXBRjcBBjeBBjgBNgBAUjgE1CaB1iaB3ADeAGQAQCYAZwCoAGcAqoBAzItMbgBAcgBAPgBAvgBAZgCBaAC6g7CAgoQABiwAxjWBBhHwgINEAAYsAMY1gQYRxjJA8ICDhAAGIAEGLADGJIDGIoFwgINEAAYgAQYsAMYQxiKBcICExAuGIAEGLADGEMYyAMYigXYAQHCAhkQLhiABBiwAxhDGMcBGMgDGIoFGK8B2AEBwgIcEC4YgAQYsAMYQxjHARjIAxiKBRiOBRivAdgBAcICDhAAGLADGOQCGNYE2AEBmAMAiAYBkAYTugYGCAEQARgIkgcJMy4zLTEuNy0xoAeDCw&sclient=gws-wiz-serp",
  },
  {
    name: "Mysore Zoo",
    url: "https://www.google.com/search?q=sri+chamarajendra+zoological+gardens&sca_esv=31bc3a22d96d9e0a&ei=yqI3Z6WiNeqbnesP05akmAY&gs_ssp=eJwFwUsKgCAQAFBa1ilc1NohNckjdItx_BWVoBHS6Xtv6PnFQao3PdCZCZqwGDTMAiR4rVdloHlUWghJZBeygew21rIzSnhhwcPfriD7cj5z3AlPFrE4f9cfexYcbw&oq=Sri+Chamarajendra+Zoological+Gardens&gs_lp=Egxnd3Mtd2l6LXNlcnAiJFNyaSBDaGFtYXJhamVuZHJhIFpvb2xvZ2ljYWwgR2FyZGVucyoCCAAyEBAuGIAEGEMYxwEYigUYrwEyBRAAGIAEMgUQABiABDIOEC4YgAQYxwEYjgUYrwEyBRAAGIAEMgUQABiABDIFEAAYgAQyHxAuGIAEGEMYxwEYigUYrwEYlwUY3AQY3gQY4ATYAQFI2xdQogdYogdwA3gBkAEAmAHpAaAB6QGqAQMyLTG4AQHIAQD4AQL4AQGYAgWgAuwQwgIKEAAYsAMY1gQYR8ICDRAAGLADGNYEGEcYyQPCAg4QABiABBiwAxiSAxiKBcICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICGRAuGIAEGLADGEMYxwEYyAMYigUYrwHYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AEBmAMAiAYBkAYTugYGCAEQARgJkgcJMy4wLjEuNy0xoAeRDA&sclient=gws-wiz-serp",
  },
  {
    name: "Brindavan Gardens",
    url: "https://www.google.com/search?q=brindavan+gardens&sca_esv=31bc3a22d96d9e0a&sxsrf=ADLYWIJhaEGrG5nbSBiX3LvH5NLD63qlSw%3A1731699177478&ei=6aE3Z9f9HPn5seMP9IngwAE&gs_ssp=eJzj4tLP1TcwKjAttjA1YLRSNagwTkpMM7dINTSwTEtNTjRNsTKosDQ0TUtKNE9NNUg1SzJLMvISTCrKzEtJLEvMU0hPLEpJzSsGAMY-Fac&oq=Brindavan+Gardens&gs_lp=Egxnd3Mtd2l6LXNlcnAiEUJyaW5kYXZhbiBHYXJkZW5zKgIIADITEC4YgAQYsQMYQxjHARiKBRivATIKEAAYgAQYQxiKBTIKEAAYgAQYFBiHAjIFEAAYgAQyBRAAGIAEMgUQABiABDIUEC4YgAQYxwEYmAUYmQUYngUYrwEyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyIhAuGIAEGLEDGEMYxwEYigUYrwEYlwUY3AQY3gQY4ATYAQFI_ERQzBZYzBZwB3gBkAEAmAH_AaAB_wGqAQMyLTG4AQHIAQD4AQL4AQGYAgmgAtQOwgIKEAAYsAMY1gQYR8ICDRAAGLADGNYEGEcYyQPCAg4QABiABBiwAxiSAxiKBcICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICGRAuGIAEGLADGEMYxwEYyAMYigUYrwHYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIfEC4YgAQYsAMYQxjHARiYBRjIAxiZBRiKBRivAdgBAZgDAIgGAZAGE7oGBggBEAEYCZIHCTcuMC4xLjctMaAHww8&sclient=gws-wiz-serp",
  },
  {
    name: "Karanji Lake",
    url: "https://www.google.com/search?q=karanji+lake&sca_esv=31bc3a22d96d9e0a&sxsrf=ADLYWIICIi334gS-ZVhaW_bRQgVDyuDdbA%3A1731699217245&ei=EaI3Z9PYDvCUseMP6v3ywAk&gs_ssp=eJzj4tLP1TcwKjIpzqgyYPTiyU4sSszLylTIScxOBQBqSwhh&oq=Karanji+Lake&gs_lp=Egxnd3Mtd2l6LXNlcnAiDEthcmFuamkgTGFrZSoCCAAyDRAuGIAEGLEDGEMYigUyChAAGIAEGBQYhwIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIcEC4YgAQYsQMYQxiKBRiXBRjcBBjeBBjgBNgBAUjdJVDlB1jlB3ADeAGQAQCYAYcCoAGHAqoBAzItMbgBAcgBAPgBAvgBAZgCBqAC7RXCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAh8QLhiABBiwAxhDGMcBGJgFGMgDGJkFGIoFGK8B2AEBmAMAiAYBkAYTugYGCAEQARgJkgcNMy4wLjEuNS0xLjAuMaAH3wc&sclient=gws-wiz-serp",
  },
  {
    name: "Rail Museum",
    url: "https://www.google.com/search?q=rail+museum+mysore&sca_esv=31bc3a22d96d9e0a&sxsrf=ADLYWILhRI6i0wiADgriCINu82gDcwUZpg%3A1731699248398&ei=MKI3Z4CEGJyXseMPptGv8Qo&gs_ssp=eJzj4tLP1TcwMs8qrsg2YLRSNagwTkpMMzcwN000TUkxTk4xtgIKGSYnmSalmlgYphokm5gkegkVJWbmKOSWFqeW5irkVhbnF6UCAObJFg8&oq=Rail+Museum&gs_lp=Egxnd3Mtd2l6LXNlcnAiC1JhaWwgTXVzZXVtKgIIADIQEC4YgAQYQxjHARiKBRivATIFEAAYgAQyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyDhAuGIAEGLEDGMcBGK8BMgsQLhiABBjHARivATIOEC4YgAQYxwEYjgUYrwEyDhAuGIAEGMcBGI4FGK8BMgsQLhiABBjHARivATIfEC4YgAQYQxjHARiKBRivARiXBRjcBBjeBBjgBNgBAUijGVCqBliqBnADeAGQAQCYAYkCoAGJAqoBAzItMbgBAcgBAPgBAvgBAZgCBaAC5w7CAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICGRAuGIAEGLADGEMYxwEYyAMYigUYrwHYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIfEC4YgAQYsAMYQxjHARiYBRjIAxiZBRiKBRivAdgBAZgDAIgGAZAGFLoGBggBEAEYCJIHCTMuMC4xLjctMaAHzxY&sclient=gws-wiz-serp",
  },
  {
    name: "Jaganmohan Palace",
    url: "https://www.google.com/search?q=jaganmohan+palace&sca_esv=31bc3a22d96d9e0a&sxsrf=ADLYWIJFT4a0Lu7L-7KAtk0suX6O23vPYw%3A1731699269289&ei=RaI3Z4m3EeejnesP-7iz0QQ&gs_ssp=eJzj4tTP1TdIqUg3TjdgtFI1qDBOSkwzNzBINTNMM02zNEuxMqhIMzVONDFJNDcyMjAwTUtO9hLMSkxPzMvNz0jMUyhIzElMTgUAsNcU4g&oq=Jaganmohan+Palace&gs_lp=Egxnd3Mtd2l6LXNlcnAiEUphZ2FubW9oYW4gUGFsYWNlKgIIADITEC4YgAQYsQMYQxjHARiKBRivATIFEAAYgAQyChAAGIAEGEMYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMiIQLhiABBixAxhDGMcBGIoFGK8BGJcFGNwEGN4EGOAE2AEBSPA4UJUHWJUHcAN4AZABAJgB3AGgAdwBqgEDMi0xuAEByAEA-AEC-AEBmAIFoAKzDcICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhkQLhiABBiwAxhDGMcBGMgDGIoFGK8B2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAZgDAIgGAZAGE7oGBggBEAEYCZIHCTMuMC4xLjctMaAHpgo&sclient=gws-wiz-serp",
  },
];

function NearByPlaces() {
  return (
    <Box sx={{ padding: "20px" }} id="nearByPlaces">
      <Typography
        variant="h3"
        sx={{ color: "#00796b", textAlign: "center", mb: 4 }}
      >
        Nearby Places
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#004d40",
          textAlign: "center",
          mb: 4,
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        Explore the beautiful attractions near our location. Click on any place
        name to get directions.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <List
          sx={{
            maxWidth: "600px",
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: 1,
            height: "300px", // Fixed height
            overflowY: "auto", // Scrollable content
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#00796b",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          {nearbyPlaces.map((place, index) => (
            <ListItem key={index} sx={{ borderBottom: "1px solid #e0e0e0" }}>
              <ListItemText>
                <Link
                  href={place.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: "none",
                    color: "#00796b",
                    fontWeight: "bold",
                    "&:hover": {
                      textDecoration: "underline",
                      color: "#004d40",
                    },
                  }}
                >
                  {place.name}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default NearByPlaces;
