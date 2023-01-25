import { Character } from "./Class/Character";
import { CharacterClass } from "./Class/CharacterClass";
import { CharacterRace } from "./Class/CharacterRace";
import { Spell } from "./Class/Spell";

const cuteBall = new Spell({
    name: 'Bola Fofa',
    description: 'Joga uma bola fofa nos inimigos que causa dano',
    baseDamage: 12,
    castSpell({ caster, target }) {
        console.log(`${caster.name} Lançou uma ${this.name} em ${target.name} que causou ${this.baseDamage * caster.level * 3} de dano`)
    }
})

const evilShovel = new Spell({
    name: 'Pa do Mal',
    description: 'Você bate com uma Pá no seu inimigo',
    baseDamage: 12,
    castSpell({ caster, target }) {
        console.log(`${caster.name} bate com uma ${this.name} em ${target.name} que causou ${this.baseDamage * caster.level * 3} de dano`)
    }
})

const Elf = new CharacterRace({
    name: 'Elfo da Floresta',
    description: 'Uma raça que vive na floresta vivendo do que a natureza tem a oferecer',
    RacialSpell: []
})

const Sorcerer = new CharacterClass({
    name: 'Sorcerer',
    description: 'Uma classe magica poderosa que pode acabar com todos os seus inimigos rapidamente'
})

const Player1 = new Character({ name: 'Nayuta', Class: Sorcerer, Race: Elf })
const Player2 = new Character({ name: 'Firulinha', Class: Sorcerer, Race: Elf })

try {
    Player1.Class.learnSpell({ spell: cuteBall })
    Player1.Class.learnSpell({ spell: evilShovel })
    console.log(Player1.Class.spellBook)
    Player1.Class.spellBook[0].castSpell({ caster: Player1, target: Player2 })
    Player1.Class.unLearnSpell({ spellToUnlearn: cuteBall })
    console.log(Player1.Class.spellBook)
} catch (error) {
    console.log(error)
}
