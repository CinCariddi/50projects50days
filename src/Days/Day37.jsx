import React, { useEffect, useState } from "react";
import "./Day37.css";

export default function Day37() {
    const [pokemon, setPokemon] = useState([]);
    const colors = {
        fire: "#FDDFDF",
        grass: "#DEFDE0",
        electric: "#FCF7DE",
        water: "#DEF3FD",
        ground: "#f4e7da",
        rock: "#d5d5d4",
        fairy: "#fceaff",
        poison: "#98d7a5",
        bug: "#f8d5a3",
        dragon: "#97b3e6",
        psychic: "#eaeda1",
        flying: "#F5F5F5",
        fighting: "#E6E0D4",
        normal: "#F5F5F5"
    };
    const main_types = Object.keys(colors);
    useEffect(() => {
        const fetchPokemons = async () => {
            const cacheData = []
            for (let i = 1; i <= 150; i++) {
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const res = await fetch(url);
                const data = await res.json();
                const slicedName = data.name.split('')
                slicedName[0] = slicedName[0].toUpperCase()
                data.name = slicedName.join('')
                cacheData.push(data)
            }
            setPokemon(cacheData);
        };
        fetchPokemons();
    }, []);

    return (
        <div className="contenedorDia37">
            <h1>Pokedex</h1>
            <div class="poke-container" id="poke-container">
                {
                pokemon?.map((poke) => (
                    <div class="pokemon" style={{backgroundColor: colors[poke.types[0].type.name]}}>
                        <div className="img-container">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} alt={poke.name} />
                        </div>
                        <div className="info">
                            <span className="number">#{poke.id.toString().padStart(3, '0')}</span>
                            <h3 className="name">{poke.name}</h3>
                            <small className="type">Type: <span>{main_types.find(type => poke.types[0].type.name === type)}</span> </small>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
}