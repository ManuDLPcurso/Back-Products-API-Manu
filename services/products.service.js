import fs from "fs/promises";
import {path} from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE = path.join(
  __dirname,
  "../data/products.json"
);

export async function getProducts() {
  const data = await fs.readFile(FILE, "utf8");
  return JSON.parse(data);
}
export async function getProduct(id) {
  const products = await getProducts();
  return products.find((p) => p.id === id);
}
export async function createProduct(product) {
  const products = await getProducts();
  products.push(product);
  await fs.writeFile(FILE, JSON.stringify(products, null, 2));
  return product;
}
export async function updateProduct(id, data) {
  const products = await getProducts();
  const index = products.findIndex((p) => p.id === id);
  products[index] = {
    ...products[index],
    ...data,
  };
  await fs.writeFile(FILE, JSON.stringify(products, null, 2));
  return products[index];
}
export async function deleteProduct(id) {
  let products = await getProducts();
  products = products.filter((p) => p.id !== id);
  await fs.writeFile(FILE, JSON.stringify(products, null, 2));
}
