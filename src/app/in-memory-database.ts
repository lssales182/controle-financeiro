import { InMemoryDbService } from "angular-in-memory-web-api";

import { Categoria } from "./pages/categorias/categoria.model";
import { Lancamento } from "./pages/lancamentos/lancamento.model";

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categorias: Categoria[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
      { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
      { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
      { id: 4, name: 'Salário', description: 'Recebimento de Salário'},
      { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
    ];

    const lancamentos: Lancamento[] = [
      { id: 1, name: 'Gás de Cozinha', categoryName: 'Moradia', paid: true, date: "14/10/2020", amount: "70,80", type: "expense", description: "Qualquer descrição para essa despesa" } as Lancamento,
      { id: 2, name: 'Suplementos', categoryName: 'Moradia', paid: false, date: "14/10/2020", amount: "15,00", type: "expense" } as Lancamento,
      { id: 3, name: 'Salário na Empresa X', categoryName: 'Salário', paid: true, date: "15/10/2020", amount: "4405,49", type: "revenue" } as Lancamento,
      { id: 4, name: 'Aluguel de Filme', categoryName: 'Lazer', paid: true, date: "16/10/2020", amount: "15,00", type: "expense" } as Lancamento,
      { id: 5, name: 'Suplementos', categoryName: 'Moradia', paid: true, date: "17/10/2020", amount: "30,00", type: "expense" } as Lancamento,
      { id: 6, name: 'Video Game da Filha', categoryName: 'Lazer', paid: false, date: "17/10/2020", amount: "15,00", type: "expense" } as Lancamento,
      { id: 11, name: 'Uber', categoryName: 'Lazer', paid: true, date: "17/10/2020", amount: "30,00", type: "expense" } as Lancamento,
      { id: 12, name: 'Aluguel', categoryName: 'Moradia', paid: false, date: "23/10/2020", amount: "15,00", type: "expense" } as Lancamento,
      { id: 13, name: 'Gás de Cozinha', categoryName: 'Moradia', paid: false, date: "25/10/2020", amount: "30,00", type: "expense" } as Lancamento,
      { id: 14, name: 'Pagamento Pelo Projeto XYZ', categoryName: 'Freelas', paid: true, date: "25/10/2020", amount: "2980,00", type: "revenue" } as Lancamento,
      { id: 19, name: 'Aluguel de Filme', categoryName: 'Lazer', paid: false, date: "07/11/2020", amount: "15,00", type: "expense" } as Lancamento,
      { id: 22, name: 'Cinema', categoryName: 'Lazer', paid: true, date: "18/11/2020", amount: "15,00", type: "expense" } as Lancamento,
      { id: 23, name: 'Jiu Jitsu', categoryName: 'Saúde', paid: false, date: "21/11/2020", amount: "130,00", type: "expense" } as Lancamento,
      { id: 44, name: 'Uber', categoryName: 'Lazer', paid: true, date: "28/11/2020", amount: "15,00", type: "expense" } as Lancamento,
      { id: 55, name: 'Cinema', categoryName: 'Lazer', paid: false, date: "28/11/2020", amount: "30,00", type: "expense" }  as Lancamento
    ]

    return { categorias, lancamentos }
  }
}
