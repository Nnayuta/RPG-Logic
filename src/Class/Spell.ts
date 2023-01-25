import { Character } from "./Character";

export class Spell {
    public name: string;
    public description: string;
    public baseDamage: number;
    public castSpell({ caster, target }: { caster: Character, target: Character }) { }

    constructor(props: Spell) {
        this.name = props.name
        this.description = props.description
        this.baseDamage = props.baseDamage
        this.castSpell = props.castSpell
    }

}
