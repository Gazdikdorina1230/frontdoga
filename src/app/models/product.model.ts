export interface Product {
    id?: string;
    category: string;
    description: string;
    name: string;
    price: number; // Ensure this is handled with two decimal places in the service
}
