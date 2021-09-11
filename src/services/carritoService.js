import {db} from '../db.js'

export async function createCarrito(data) {
    try {
        await db('carrito').insert(data)
        return
    } catch (error) {
        throw new Error(error)
    }
}

export async function getCarritos() {
    try {
        const carritos = db('carrito').select()
        return carritos
    } catch (error) {
        throw new Error(error)
        
    }
}
export async function getProductById(productId) {
    try {
        const products = db('producto').where('id',productId).select()
        return products
    } catch (error) {
        throw new Error(error)
        
    }
}

export async function deleteCarrito(carritoId){
    try {
        await db('carrito').del().where('id',carritoId)
        return
    } catch (error) {
        throw new Error(error)
        
    }
}

export async function updateCarrito(carritoId, data) {
    try {
        await db('carrito').update(data).where('id',carritoId)
        return
    } catch (error) {
        throw new Error(error)
        
    }
}