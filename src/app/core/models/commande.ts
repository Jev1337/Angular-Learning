import { Produit } from "./produit";

export class Commande {
    id!: number;
    date!: Date;
    items!: Produit[];
}