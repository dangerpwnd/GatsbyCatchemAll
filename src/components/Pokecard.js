import React from "react";
import { jsx } from "@emotion/react";
import { StaticQuery, graphql } from "gatsby";

const Pokecard = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allPokemons {
            nodes {
              name
              id
              total
              hp
              sp_def
              sp_atk
              defense
              attack
              type
              speed
              national_number
              sprites {
                normal
                large
              }
            }
          }
        }
      `}
      render={(data) =>
        data.allPokemons.nodes.map((pokemon, i) => {
          return (
            <div
              css={{
                border: "1px solid black",
                display: "grid",
                margin: "1rem 2rem",
                padding: "1rem",
                gridTemplateColumns: "1fr 1fr",
              }}
              key={i}
            >
              <div>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.large} alt={pokemon.name} />
              </div>
              <div>
                <h3>HP: {pokemon.hp}</h3>
                <p>Attack: {pokemon.attack}</p>
                <p>Defense: {pokemon.defense}</p>
                <p>Sp Attack: {pokemon.sp_atk}</p>
                <p>Sp Defense: {pokemon.sp_def}</p>
                <p>Speed: {pokemon.speed}</p>
              </div>
            </div>
          );
        })
      }
    />
  );
};

export default Pokecard;
