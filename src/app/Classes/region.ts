import { Activite } from "./activite";
import { Langue } from "./langue";
import { Pays } from "./pays";

   export class Region {

    idRegion!:number;
    codeRegion! :string;
    nomRegion!: string;
    superficie!:string;
    imageregion! :string;
    langue!:Langue;
    pays!: Pays;
    activite!:Activite;
    description!:string;
}
