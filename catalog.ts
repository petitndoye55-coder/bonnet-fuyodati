export type Product = {
  id: number;
  name: string;
  color: string;
  image: string;
  price: string;
  priceAmount: number;
  kind: "togolais" | "haoussa" | "carré";
  badge?: string;
  available: boolean;
};

export const togolais: Product[] = [
  [1,"Noir solaire","Noir & or","togolais-01.jpeg","Nouveau"],
  [2,"Violet royal","Violet & argent","togolais-02.jpeg","Coup de cœur"],
  [3,"Gris or","Gris & doré","togolais-03.jpeg"],
  [4,"Gris signature","Gris clair","togolais-04.jpeg"],
  [5,"Chocolat tissé","Brun profond","togolais-05.jpeg"],
  [6,"Jaune soleil","Jaune éclat","togolais-06.jpeg","Éclat"],
  [7,"Vert lagon","Vert turquoise","togolais-07.jpeg"],
  [8,"Ivoire doré","Ivoire & or","togolais-08.jpeg"],
  [9,"Terre géométrique","Brun & sable","togolais-09.jpeg"],
  [10,"Gris zébré","Gris & noir","togolais-10.jpeg"],
  [11,"Bleu nuit","Bleu profond","togolais-11.jpeg"],
  [12,"Sable tissé","Sable & brun","togolais-12.jpeg"],
  [13,"Marine graphique","Marine & blanc","togolais-13.jpeg"],
].map(([id,name,color,image,badge]) => ({
  id: id as number,
  name: name as string,
  color: color as string,
  image: `/assets/${image}`,
  price: "15 000 F CFA",
  priceAmount: 15000,
  kind: "togolais",
  badge: badge as string | undefined,
  available: true,
}));

export const haoussa: Product[] = [
  [101,"Émeraude tissée","Vert, bleu & doré","bonnet-01-white.png"],
  [102,"Azur graphique","Bleu géométrique","bonnet-02-white.png"],
  [103,"Ivoire solaire","Ivoire & vert","bonnet-03-white.png"],
  [104,"Sable rosé","Rose sable","bonnet-04-white.png"],
].map(([id,name,color,image]) => ({
  id: id as number,
  name: name as string,
  color: color as string,
  image: `/assets/${image}`,
  price: "25 000 F CFA",
  priceAmount: 25000,
  kind: "haoussa",
  available: true,
}));

export const carres: Product[] = [
  [201,"Carré noir","Noir profond","bonnet-carre-noir.png"],
  [202,"Carré blanc","Blanc ivoire","bonnet-carre-blanc.png"],
  [203,"Carré bleu royal","Bleu royal","bonnet-carre-bleu.png"],
  [204,"Carré bordeaux","Bordeaux profond","bonnet-carre-bordeaux.png"],
].map(([id,name,color,image]) => ({
  id: id as number,
  name: name as string,
  color: color as string,
  image: `/assets/${image}`,
  price: "20 000 F CFA",
  priceAmount: 20000,
  kind: "carré",
  available: true,
}));

export const allProducts = [...togolais, ...carres, ...haoussa];

