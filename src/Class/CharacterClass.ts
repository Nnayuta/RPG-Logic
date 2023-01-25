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
        console.log(`Nova Spell Aprendida: ${spell.name}`)
    }

    public unLearnSpell({ spellToUnlearn }: { spellToUnlearn: Spell }) {
        this.spellBook = this.spellBook.filter(spell => spell.name !== spellToUnlearn.name)
        console.log(`Spell Desaprendida: ${spellToUnlearn.name}`)
    }

    public ShowSpelllBook() {
        console.log("SPELL BOOK")
        for (let spell of this.spellBook) {
            console.log(
                `
            ================================
                   Name: ${spell.name}
            ================================
            `)
        }
    }
}
