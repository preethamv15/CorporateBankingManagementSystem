export interface CreditRequest {
  id: string;
  clientId: string;
  requestAmount: number;
  tenureMonths: number;
  purpose: string;
  status: string;
  submittedBy: string;
}
