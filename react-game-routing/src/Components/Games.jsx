import { Link } from 'react-router-dom'

const games = [
  {
    id: 1,
    name: 'Teamfight Tactics',
    description: 'An auto battler game developed and published by Riot Games. The game is a spinoff of League of Legends and is based on Dota Auto Chess, where players compete online against seven other opponents by building a team to be the last one standing. The game released as a League of Legends game mode for Windows and macOS in June 2019 and as a standalone game for Android and iOS in March 2020, featuring cross-platform play between them.',
    publisher: 'Riot Games',
    author: 'Riot Games Studio',
    reviews: [
      'Great game for strategy lovers!',
      'I enjoy playing this with friends.',
      'Balanced updates keep it fresh.'
    ]
  },
  {
    id: 2,
    name: 'Valorant',
    description: 'A 2020 first-person tactical hero shooter video game developed and published by Riot Games. A free-to-play game, Valorant takes inspiration from the Counter-Strike series, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving. Development started in 2014 and was teased under the codename Project A in 2019; the game was released on June 2, 2020 for Windows. It was ported to the Xbox Series X/S and PlayStation 5 in June 2024, albeit without crossplay between PC and console clients.',
    publisher: 'Riot Games',
    author: 'Riot Games Studio',
    reviews: [
      'The agents bring unique gameplay styles.',
      'Competitive and thrilling!',
      'Needs better matchmaking but fun overall.'
    ]
  },
  {
    id: 3,
    name: '2XKO',
    description: 'An upcoming free-to-play fighting game developed and published by Riot Games in collaboration with Radiant Entertainment. The game features characters from League of Legends. It is scheduled to be released for PlayStation 5, Windows, and Xbox Series X/S in 2025.',
    publisher: 'Indie Dev Studio',
    author: 'Game Dev Duo',
    reviews: [
      'The animations look promising!',
      'Great concept, excited to see more.',
      'Beta test was very smooth.'
    ]
  },
  {
    id: 4,
    name: 'Pokémon',
    description: 'A Japanese series of video games developed by Game Freak and published by Nintendo and The Pokémon Company under the Pokémon franchise. It was created by Satoshi Tajiri with assistance from Ken Sugimori. The first games, Pocket Monsters Red and Green, were released in 1996 in Japan for the Game Boy, later released outside of Japan as Pokémon Red Version and Blue Version. The main series of role-playing video games (RPGs), referred as the "core series" by their developers,',
    publisher: 'Nintendo',
    author: 'Game Freak',
    reviews: [
      'A timeless classic.',
      'I love how the games evolve over time.',
      'Catching them all never gets old.'
    ]
  },
  {
    id: 5,
    name: 'Minecraft',
    description: 'A 2011 sandbox game developed and published by Swedish video game developer Mojang Studios. Originally created by Markus "Notch" Persson using the Java programming language, the first public build was released on 17 May 2009. The game would be continuously developed from then on, receiving a full release on 18 November 2011. Afterwards, Persson left Mojang and gave Jens "Jeb" Bergensten control over the games development.  In the years since its release, it has been ported to several platforms, including smartphones, tablets, and various video game consoles. In 2014, Mojang and the Minecraft intellectual property were purchased by Microsoft for US$2.5 billion. Minecraft has since become the best-selling video game of all-time, with over 300 million copies sold and nearly 170 million monthly active players as of 2024.',
    publisher: 'Mojang Studios',
    author: 'Markus Persson',
    reviews: [
      'I could play this forever!',
      'Best game for creative freedom.',
      'Redstone mechanics are amazing.'
    ]
  }
]

export default function Games() {
    return (
      <div className="centered-container">
        <h1>Games:</h1>
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <Link to={`/games/${game.id}`} state={{ game }}>
              <button className="game-button">{game.name.toUpperCase()}</button>
            </Link>
            <p className="game-description">{game.description}</p>
          </div>
        ))}
      </div>
    )
  }
