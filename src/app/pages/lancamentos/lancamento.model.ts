export class Lancamento {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: string,
    public amount?: string,
    public date?: string,
    public paid?: boolean,
    public categoryName?: string
  ){ }

  get paidText(): string {
    return this.paid ? 'Pago' : 'Pedente';
  }

  get paidClass(): string {
    return this.paid ? 'success' : 'warning';
  }
}
