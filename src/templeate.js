import { Eta } from "eta";
export const template = (type) => {
  const data = Deno.readTextFileSync("./data/pokemon_types.json");
  const jsonData = Deno.readTextFileSync("./data/pokemon_data.json");
  const { types } = JSON.parse(data);
  types.unshift("all");
  const pokemonData = (JSON.parse(jsonData))
    .filter(({ types }) => types.includes(type) || type === "all");
  const eta = new Eta({ views: "./public/" });
  const page = eta.render("etaPage", { types, pokemonData });
  return page;
};
