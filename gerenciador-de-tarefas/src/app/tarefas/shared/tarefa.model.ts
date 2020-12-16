export class Tarefa{

    // o ? significa que o atribuo nao é obrigatorio. Pode ser instanciado um obj da classe 
    // sem passar o valor do parâmetro no construtor
    constructor(
        public id?: number,
        public nome?: string,
        public concluida?: boolean
    ){}

}