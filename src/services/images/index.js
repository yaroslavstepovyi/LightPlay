import Dota2 from '../../assets/images/Games/Dota2.png'
import GalacticWarfare from '../../assets/images/Games/GalacticWarfare.jpg'
import DragonsLair from '../../assets/images/Games/DragonsLair.jpg'
import Fifa from '../../assets/images/Games/fifa.png'
import GTA from '../../assets/images/Games/gta.png'
import BattleField from '../../assets/images/Games/battlefield.png'
import CallOfDuty from '../../assets/images/Games/callofduty.png'
import Doom from '../../assets/images/Games/doom.png'
import Fallout from '../../assets/images/Games/fallout.png'
import HalfLife from '../../assets/images/Games/half-life.png'
import Heroes from '../../assets/images/Games/heroes.png'
import Minecraft from '../../assets/images/Games/minecraft.png'
import MortalKombat from '../../assets/images/Games/mortal-kombat.png'
import Stalker from '../../assets/images/Games/stalker.png'
import Warcraft from '../../assets/images/Games/warcraft.png'
import ArrowLeft from '../../assets/icons/arrowLeft.svg'
import ArrowRight from '../../assets/icons/arrowRight.svg'

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
  