export class Service {

    img: string;
    name: string;
    price: number;
    tag: string;
    description: string;

    constructor(img: string, name: string, price: number, tag: string, description: string) {
        this.img = img;
        this.name = name;
        this.price = price;
        this.tag = tag;
        this.description = description;
    }
}