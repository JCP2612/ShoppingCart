export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  image: string;
  taxRate: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Adaptador de pared de 12 VCD Regulada",
    price: 15.99,
    stock: 150,
    image: "img/adaptador-pared-12vcd.png",
    taxRate: 0.19,
  },
  {
    id: 2,
    title: "Adaptador DC Macho a DC Macho",
    price: 7.49,
    stock: 20,
    image: "img/adaptador-dc-macho.jpg",
    taxRate: 0.19,
  },
  {
    id: 3,
    title: "Fuente industrial EPCOM",
    price: 29.99,
    stock: 35,
    image: "img/fuente-industrial-epcom.jpeg",
    taxRate: 0.19,
  },
  {
    id: 4,
    title: "Conector F macho plegable",
    price: 22.5,
    stock: 60,
    image: "img/conector-f-macho-plegable.jpeg",
    taxRate: 0.19,
  },
  {
    id: 5,
    title: "Carrete de 305 metros",
    price: 5.75,
    stock: 80,
    image: "img/carrete-305-metros.jpeg",
    taxRate: 0.19,
  },
  {
    id: 6,
    title: "Bobina de 152 metros",
    price: 0.99,
    stock: 200,
    image: "img/bobina-152-metros.jpeg",
    taxRate: 0.19,
  },
  {
    id: 7,
    title: "Cable de fibra optica DROP",
    price: 3.49,
    stock: 0,
    image: "img/cable-fibra-optica-drop.jpg",
    taxRate: 0.19,
  },
  {
    id: 8,
    title: "Carrete de 4km de fibra optica aerea",
    price: 4.25,
    stock: 90,
    image: "img/cable-fibra-optica.png",
    taxRate: 0.19,
  },
  {
    id: 9,
    title: "Diadema RANGER para Motorola DGP",
    price: 1.99,
    stock: 10,
    image: "img/diadema-ranger-motorola-dgp.png",
    taxRate: 0.19,
  },
];
