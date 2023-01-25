import { Spell } from "./Spell";

export class CharacterRace {
    public name: string;
    public description: string;
    public RacialSpell: Spell[];

    constructor(props: CharacterRace) {
        this.name = props.name
        this.description = props.description
        this.RacialSpell = props.RacialSpell
    }
}
