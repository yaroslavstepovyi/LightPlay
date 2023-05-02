import Dota2 from '../../assets/images/games/Dota2.png'
import GalacticWarfare from '../../assets/images/games/GalacticWarfare.jpg'
import DragonsLair from '../../assets/images/games/DragonsLair.jpg'
import Fifa from '../../assets/images/games/fifa.png'
import GTA from '../../assets/images/games/gta.png'
import BattleField from '../../assets/images/games/battlefield.png'
import CallOfDuty from '../../assets/images/games/callofduty.png'
import Doom from '../../assets/images/games/doom.png'
import Fallout from '../../assets/images/games/fallout.png'
import HalfLife from '../../assets/images/games/half-life.png'
import Heroes from '../../assets/images/games/heroes.png'
import Minecraft from '../../assets/images/games/minecraft.png'
import MortalKombat from '../../assets/images/games/mortal-kombat.png'
import Stalker from '../../assets/images/games/stalker.png'
import Warcraft from '../../assets/images/games/warcraft.png'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import Reset from '../../assets/images/reset.png'

const imageUrls = {
  'Fifa': Fifa,
  'GTA': GTA,
  'Battle Field': BattleField,
  'Call of Duty': CallOfDuty,
  'Doom': Doom,
  'Fallout': Fallout,
  'Half-life': HalfLife,
  'Heroes': Heroes,
  'Minecraft': Minecraft,
  'Mortal-kombat': MortalKombat,
  'Stalker': Stalker,
  'Warcraft': Warcraft,
}

const getImageUrl = (imageValue) => {
  return imageUrls[imageValue];
}

export {
  getImageUrl,
  Dota2,
  GalacticWarfare,
  DragonsLair,
  Fifa,
  GTA,
  BattleField,
  CallOfDuty,
  Doom,
  Fallout,
  HalfLife,
  Heroes,
  Minecraft,
  MortalKombat,
  Stalker,
  Warcraft,
  ArrowLeft,
  ArrowRight,
  Reset,
}
