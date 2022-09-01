import { ReactElement, useEffect, useState } from "react";

interface Character {
  name: string;
}

async function getCharacters(): Promise<Character[]> {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=200"
  );
  const data = await response.json();

  return data.results;
}

export default function Pokemon(): ReactElement {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacters().then((characters) => setCharacters(characters));
  }, []);

  return (
    <div>
      {characters.map((character) => (
        <div key={character.name}>{character.name}</div>
      ))}
    </div>
  );
}
