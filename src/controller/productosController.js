
import * as productoServices from '../services/productoService.js'

export async function createProduct( req,res) {
  const {body} = req
  try {
    await productoServices.createProduct(body)
    res.status(200).send('Usuario creado')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export async function getProducts(req,res){
  try {
    const products = await productoServices.getProduct()
    res.status(200).json({products})

  } catch (error) {
    res.status(400).send(error.message)
    
  }
}

export async function getProductById(req,res) {
  const {id} = req.params
  try {
    const product = await productoServices.getProductById(id)
    res.status(200).json({product})

  } catch (error) {
    res.status(400).send(error.message)
    
  }
}

export async function deleteProducto(req,res){
  const {id} = req.params

  try {
    await productoServices.deleteProduct(id)
    res.status(200).send('producto borrado')
  } catch (error) {
    res.status(400).send(error.message)
    
  }
}


export async function updateProduct(req,res) {
  const {id} = req.params
  const {body} = req
  try {
    await productoServices.updateProducts(id,body)
    res.status(200).send('producto actualizado')
  } catch (error) {
    res.status(400).send(error.message)
    
  }
  
}
