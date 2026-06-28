import { Summary, Transaction } from '@/components/Screens/Home';

export const summaries: Summary[] = [
  {
    title: 'Entradas',
    amount: 'R$ 17.400,00',
    description: 'Ultima entrada em 13 de abril',
    variant: 'default',
    icon: 'up',
  },
  {
    title: 'Saidas',
    amount: 'R$ 1.259,00',
    description: 'Ultima saida em 10 de abril',
    variant: 'default',
    icon: 'down',
  },
  {
    title: 'Total',
    amount: 'R$ 16.141,00',
    description: 'De 15/03 a 15/04',
    variant: 'total',
    icon: 'up',
  },
];

export const transactions: Transaction[] = [
  {
    id: '1',
    title: 'Hamburguer',
    amount: '- R$ 59,00',
    type: 'outcome',
    category: 'Alimentacao',
    date: '10/04/2022',
  },
  {
    id: '2',
    title: 'Aluguel do apartamento',
    amount: '- R$ 1.200,00',
    type: 'outcome',
    category: 'Casa',
    date: '27/03/2022',
  },
  {
    id: '3',
    title: 'Computador',
    amount: 'R$ 5.400,00',
    type: 'income',
    category: 'Venda',
    date: '15/03/2022',
  },
  {
    id: '4',
    title: 'Desenvolvimento de site',
    amount: 'R$ 8.000,00',
    type: 'income',
    category: 'Venda',
    date: '13/03/2022',
  },
  {
    id: '5',
    title: 'Janta',
    amount: '- R$ 39,00',
    type: 'outcome',
    category: 'Alimentacao',
    date: '10/03/2022',
  },
];
