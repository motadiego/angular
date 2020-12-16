export class Nave {
    constructor(
        public name: string,
        public model: string,
        public manufacturer: string,
        // tslint:disable-next-line: variable-name
        public cost_in_credits: string,
        public length: string,
        // tslint:disable-next-line: variable-name
        public max_atmosphering_speed: string,
        public crew: string,
        public passengers: string,
        // tslint:disable-next-line: variable-name
        public cargo_capacity: string,
        public consumables: string,
        // tslint:disable-next-line: variable-name
        public hyperdrive_rating: string,
        public MGLT: string,
        // tslint:disable-next-line: variable-name
        public starship_class: string,
        public pilots: string[],
        public films: string[],
        public created: string,
        public edited: string,
        public url: string,
    ) {}
}
