import { allProducts } from "../catalog";

const origin = "https://bonnet.fuyodati.com";
const columns = [
  "id", "title", "description", "availability", "condition", "price",
  "link", "image_link", "brand", "google_product_category", "product_type",
] as const;

function csvCell(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export async function GET() {
  const rows = allProducts.map((product) => ({
    id: `fuyodati-${product.kind.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}-${product.id}`,
    title: `Bonnet ${product.kind} ${product.name}`,
    description: `Bonnet ${product.kind} FuyoDati, modèle ${product.name}, couleur ${product.color}. Disponible à Dakar en tailles 56 à 60.`,
    availability: product.available ? "in stock" : "out of stock",
    condition: "new",
    price: `${product.priceAmount} XOF`,
    link: `${origin}/?product=${product.id}#${product.kind === "carré" ? "carres" : product.kind}`,
    image_link: `${origin}${product.image}`,
    brand: "FuyoDati",
    google_product_category: "Apparel & Accessories > Clothing Accessories > Hats",
    product_type: `Vêtements et accessoires > Accessoires > Bonnets > ${product.kind}`,
  }));

  const csv = [
    columns.join(","),
    ...rows.map((row) => columns.map((column) => csvCell(row[column])).join(",")),
  ].join("\r\n");

  return new Response(`\uFEFF${csv}\r\n`, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'inline; filename="fuyodati-meta-catalog.csv"',
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}

