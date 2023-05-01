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

export {
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

export const getImageUrl = (imageValue) => {
    switch (imageValue) {
      case "Fifa":
        return Fifa;
      case "GTA":
        return GTA;
      case "Battle Field":
        return BattleField;
      case "Call of Duty":
        return CallOfDuty;
      case "Doom":
        return Doom;
      case "Fallout":
        return Fallout;
      case "Half-life":
        return HalfLife;
      case "Heroes":
        return Heroes;
      case "Minecraft":
        return Minecraft;
      case "Mortal-kombat":
        return MortalKombat;
      case "Stalker":
        return Stalker;
      case "Warcraft":
        return Warcraft;
      default:
        return "";
    }
  };
  