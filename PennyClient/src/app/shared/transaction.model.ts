export interface Transaction
{
    id: number;
    date?: Date;
    type: string;
    amount: number;
}