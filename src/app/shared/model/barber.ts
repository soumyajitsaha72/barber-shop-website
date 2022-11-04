export class Barber {
    id: number;
    name: string;
    img: string
    specialityImgUrl: string;
    description: string;

    constructor(id: number, name: string, img: string, specialityImgUrl: string, description: string) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.specialityImgUrl = specialityImgUrl;
        this.description = description;
    }
}