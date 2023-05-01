import {
  Dota2,
  GalacticWarfare,
  DragonsLair,
} from './images'

export const defaultGames = [{
  id: 1,
  name: "Dota 2",
  description: "Dota 2 is a multiplayer online battle arena (MOBA) video game in which two teams of five players",
  review: "This is really a good game, where I spend my time being free after school playing with my mates!!!",
  img: Dota2,
  date: Date.now(),
},
{
  id: 2,
  name: "Galactic Warfare",
  description: "Galactic Warfare is an epic space-themed multiplayer online battle arena (MOBA) game in which two teams of five players fight to control the galaxy.",
  review: "I love Galactic Warfare! It's so much fun to strategize with my team and take down the enemy. The graphics are amazing and the gameplay is addictive.",
  img: GalacticWarfare,
  date: Date.now(),
},
{
  id: 3,
  name: "Dragon's Lair",
  description: "Dragon's Lair is a fantasy-themed single player action-adventure game in which the player takes on the role of a brave knight on a quest to slay a fierce dragon and rescue the princess.",
  review: "Dragon's Lair is one of the best games I've ever played! The graphics are stunning, the gameplay is challenging and fun, and the storyline is captivating. I highly recommend it to anyone who loves adventure games.",
  img: DragonsLair,
  date: Date.now(),
},
]

const getDeafultGames = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (defaultGames) {
        resolve(defaultGames);
      } else {
        reject(new Error('Error fetching users'))
      }
    }, 1500);
  });
};

export default getDeafultGames;