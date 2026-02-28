import { Eta } from "eta";
export const template = () => {
  const data = Deno.readTextFileSync("./data/pokemon_types.json");
  const { types } = JSON.parse(data);
  const eta = new Eta({ views: "./public/" });
  const page = eta.render("etaPage", { types });
  return page;
};
