export class Barber {
    constructor(
        public id: number,
        public name: string,
        public img: string,
        public speciality: string,
        public specialityImgUrl: string,
        public description: string,
        public nickname: string = "NA",
        public age: number | "NA" = "NA",
        public mobileNumber: number | "NA" = "NA",
        public address: string = "NA"
    ) { }
}
