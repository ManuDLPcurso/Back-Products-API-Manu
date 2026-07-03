import * as service from "../services/products.service.js";
export async function getAll(req, res) {
  const products = await service.getProducts();
  res.json(products);
}

export function getInfo(req,res){
    res.json({mensaje:"Pagina de Informacion"});
    console.log("Get info")
}

export async function getById(req, res) {
  const id = Number(req.params.id);
  const product = await service.getProduct(id);
  res.json(product);
  console.log("Has hecho una peticion GET")
}
export async function create(req, res) {
  const product = {
    id: Date.now(),
    ...req.body,
  };
  const created = await service.createProduct(product);
  res.status(201).json(created);
  console.log("Has hecho una peticion POST");
}
export async function update(req, res) {
  const id = Number(req.params.id);
  const product = await service.updateProduct(id, req.body);
  res.json(product);
  console.log("Has hecho una peticion PUT");
}
export async function remove(req, res) {
  const id = Number(req.params.id);
  await service.deleteProduct(id);
  res.status(204).send();
  console.log("Has hecho una peticion REMOVE");
}



