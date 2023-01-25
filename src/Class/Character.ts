import { CharacterClass } from "./CharacterClass";
import { CharacterRace } from "./CharacterRace";

const DEFAULT_EXPERIENCE_MULTIPLY: number = 40

export class Character {
    public name: string;
    public level: number;

    public currentExperience: number;
    public experienceNeededToLevelUp: number;

    public Race: CharacterRace;
    public Class: CharacterClass;

    constructor(props: { name: string, Race: CharacterRace, Class: CharacterClass }) {
        this.name = props.name
        this.Race = props.Race
        this.Class = props.Class

        if (!this.level) this.level = 1
        if (!this.currentExperience) this.currentExperience = 0
        if (!this.experienceNeededToLevelUp) this.experienceNeededToLevelUp = this.level * DEFAULT_EXPERIENCE_MULTIPLY * 3
    }

    giveXp({ value }: { value: number }) {
        this.currentExperience += value

        while (this.currentExperience >= this.experienceNeededToLevelUp) {
            this.levelUp()
            this.currentExperience = this.currentExperience - this.experienceNeededToLevelUp
            this.experienceNeededToLevelUp = this.level * DEFAULT_EXPERIENCE_MULTIPLY * 3
        }
    }

    levelUp() {
        this.level++
    }

    setLevel({ value }: { value: number }) {
        this.level = value
    }

    Profile() {
        console.log('CHARACTER PROFILE')
        console.log(
            `
        ================================
            Name: ${this.name}
            Level: ${this.level}
            Experience: ${this.currentExperience}/${this.experienceNeededToLevelUp}

            Race: ${this.Race.name}
            Class: ${this.Class.name}
        ================================
        `)
    }
}
