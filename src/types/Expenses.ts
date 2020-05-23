// add specific types to Expenses redux

export interface Expense {
    id: string;
    description: string;
    note: string;
    amount: number;
    createdAt: number;
}
