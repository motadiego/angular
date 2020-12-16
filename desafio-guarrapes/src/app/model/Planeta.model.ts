export class Planeta {
  constructor(
      public name: string,
      // tslint:disable-next-line: variable-name
      public rotation_period: string,
      // tslint:disable-next-line: variable-name
      public orbital_period: string,
      public diameter: string,
      public climate: string,
      public gravity: string,
      public terrain: string,
      // tslint:disable-next-line: variable-name
      public surface_water: string,
      public population: string,
      public residents: string[],
      public films: string[],
      public created: string,
      public edited: string,
      public url: string,
  ) {}
}
