import {db} from '../db.js'

export async function createProduct(data) {
    try {
        await db('producto').insert(data)
        return
    } catch (error) {
        throw new Error(error)
    }
}

export async function getProduct() {
    try {
        const products = db('producto').select()
        return products
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

export async function deleteProduct(productId){
    try {
        await db('producto').del().where('id',productId)
        return
    } catch (error) {
        throw new Error(error)
        
    }
}

export async function updateProducts(productId, data) {
    try {
        await db('producto').update(data).where('id',productId)
        return
    } catch (error) {
        throw new Error(error)
        
    }
}