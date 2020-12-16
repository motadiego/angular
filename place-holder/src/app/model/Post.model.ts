import { Address } from './Address.model';
import { Company } from './Company.model';

export class Post {
    constructor(
      public userId: string,
      public id: string,
      public title: string,
      public body: string
     ) {}

}
