import { InMemoryDbService } from "angular-in-memory-web-api";

import { Categoria } from "./pages/categorias/shared/categoria.model";
import { Lancamento } from "./pages/lancamentos/shared/lancamento.model";

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
      { id: 1, name: 'Gás de Cozinha', categoriaId: categorias[0].id, categoria: categorias[0], paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "Qualquer descrição para essa despesa" } as Lancamento,
      { id: 2, name: 'Suplementos', categoriaId: categorias[1].id, categoria: categorias[1], paid: false, date: "14/10/2018", amount: "15,00", type: "expense" } as Lancamento,
      { id: 3, name: 'Salário na Empresa X', categoriaId: categorias[3].id, categoria: categorias[3], paid: true, date: "15/10/2018", amount: "4405,49", type: "revenue" } as Lancamento,
      { id: 4, name: 'Aluguel de Filme', categoriaId: categorias[2].id, categoria: categorias[2], paid: true, date: "16/10/2018", amount: "15,00", type: "expense" } as Lancamento,
      { id: 5, name: 'Suplementos', categoriaId: categorias[1].id, categoria: categorias[1], paid: true, date: "17/10/2018", amount: "30,00", type: "expense" } as Lancamento,
      { id: 6, name: 'Video Game da Filha', categoriaId: categorias[2].id, categoria: categorias[2], paid: false, date: "17/10/2018", amount: "15,00", type: "expense" } as Lancamento,
      { id: 11, name: 'Uber', categoriaId: categorias[1].id, categoria: categorias[1], paid: true, date: "17/10/2018", amount: "30,00", type: "expense" } as Lancamento,
      { id: 12, name: 'Aluguel', categoriaId: categorias[2].id, categoria: categorias[2], paid: false, date: "23/10/2018", amount: "15,00", type: "expense" } as Lancamento,
      { id: 13, name: 'Gás de Cozinha', categoriaId: categorias[1].id, categoria: categorias[1], paid: false, date: "25/10/2018", amount: "30,00", type: "expense" } as Lancamento,
      { id: 14, name: 'Pagamento Pelo Projeto XYZ', categoriaId: categorias[4].id, categoria: categorias[4], paid: true, date: "25/10/2018", amount: "2980,00", type: "revenue" } as Lancamento,
      { id: 19, name: 'Aluguel de Filme', categoriaId: categorias[2].id, categoria: categorias[2], paid: false, date: "07/11/2018", amount: "15,00", type: "expense" } as Lancamento,
      { id: 21, name: 'Video Game da Filha', categoriaId: categorias[1].id, categoria: categorias[1], paid: true, date: "17/11/2018", amount: "30,00", type: "expense" } as Lancamento,
      { id: 22, name: 'Cinema', categoriaId: categorias[2].id, categoria: categorias[2], paid: true, date: "18/11/2018", amount: "15,00", type: "expense" } as Lancamento,
      { id: 23, name: 'Jiu Jitsu', categoriaId: categorias[1].id, categoria: categorias[1], paid: false, date: "21/11/2018", amount: "130,00", type: "expense" } as Lancamento,
      { id: 44, name: 'Uber', categoriaId: categorias[2].id, categoria: categorias[2], paid: true, date: "28/11/2018", amount: "15,00", type: "expense" } as Lancamento,
      { id: 55, name: 'Cinema', categoriaId: categorias[1].id, categoria: categorias[1], paid: false, date: "28/11/2018", amount: "30,00", type: "expense" }  as Lancamento
    ]

    return { categorias, lancamentos }
  }
}
