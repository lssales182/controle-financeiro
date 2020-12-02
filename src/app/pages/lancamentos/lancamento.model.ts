import { Categoria } from "../categorias/categoria.model";

export class Lancamento {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: string,
    public amount?: string,
    public date?: string,
    public paid?: boolean,
    public categoriaId?: number,
    public categoria?: Categoria
  ){ }


  static types = {
    expense: 'Despesa',
    revenue: 'Receita'
  };

  get paidText(): string {
    return this.paid ? 'Pago' : 'Pedente';
  }
}
