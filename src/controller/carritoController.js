
import * as carritoServices from '../services/carritoService.js'



export async function createCarrito( req,res) {
  const {body} = req
  try {
    await carritoServices.createCarrito(body)
    res.status(200).send('carrito creado')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export async function getCarritos(req,res){
  try {
    const carritos = await carritoServices.getCarritos()
    res.status(200).json({carritos})

  } catch (error) {
    res.status(400).send(error.message)
    
  }
}

export async function deleteCarrito(req,res){
  const {id} = req.params

  try {
      await carritoServices.deleteCarrito(id)
      res.status(200).send('Carrito borrado')

  } catch (error) {
    res.status(400).send(error.message)

      
  }
}


export async function updateCarrito(req,res) {
  const {id} = req.params
  const {body} = req
  try {
    await carritoServices.updateCarrito(id,body)
    res.status(200).send('carrito actualizado')
  } catch (error) {
    res.status(400).send(error.message)
    
  }
  
}


