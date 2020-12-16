import { Address } from './Address.model';
import { Company } from './Company.model';

export class User {
    constructor(
      public id: string,
      public name: string,
      public username: string,
      public email: string,
      public address: Address,
      public phone: string,
      public website: string,
      public company: Company
    ) {}

}
