import { CharacterClass } from "./CharacterClass";
import { CharacterRace } from "./CharacterRace";

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
        if (!this.experienceNeededToLevelUp) this.experienceNeededToLevelUp = this.level * 40 * 3
    }
}
