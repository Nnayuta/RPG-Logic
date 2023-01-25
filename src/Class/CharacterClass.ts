import { Spell } from "./Spell";

export class CharacterClass {
    public name: string;
    public description: string;
    public spellBook: Spell[];

    constructor(props: {
        name: string
        description: string
    }) {
        this.name = props.name
        this.description = props.description

        this.spellBook = []
    }

    public learnSpell({ spell }: { spell: Spell }) {
        if (!spell) return console.log('Você precisa informar a Spell que deseja aprender!')
        this.spellBook.push(spell)
    }

    public unLearnSpell({ spellToUnlearn }: { spellToUnlearn: Spell }) {
        this.spellBook = this.spellBook.filter(spell => spell.name !== spellToUnlearn.name)
    }
}
