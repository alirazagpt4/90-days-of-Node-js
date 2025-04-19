#!/usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import gradient from "gradient-string";

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));


const printFiveMoves = async (pokemonName)=>{
    
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
        console.log(chalk.red(`Error: Pokémon "${pokemonName}" not found!`));
        return;
    }


    const pokemon  = await response.json();
    const moves = pokemon.moves.map(( { move }) => move.name);

    // console.log(pokemonName ,`: Attacks : ${moves.slice(0, 5)}`);
    const firstFiveMoves = moves.slice(0, 5).join(", ");

    const animation = chalkAnimation.pulse(`${pokemonName} is preparing its moves...`);
    await sleep(2000); // Let the animation run for a bit
    animation.stop();

    console.log(gradient.pastel(`${pokemonName.toUpperCase()} → Top 5 Moves:`));
    console.log(chalk.greenBright(firstFiveMoves));
}

const pokemonName = process.argv[2];
if(!pokemonName){
    console.log(chalk.yellow("Please provide a Pokémon name."));
    process.exit(1);
}
printFiveMoves(pokemonName); // prints the first 5 moves of charizard