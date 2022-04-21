import {getDocs, collection, query, where, doc, getDoc} from 'firebase/firestore'
import { firestoreDb } from './index'

export const getProducts  = (typeId) => {
    return new Promise ((resolve,reject) => {
        const collectionRef = typeId
        ? query(collection(firestoreDb, 'products'), where('category', '==', typeId))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(querySnapshot =>{
            const products = querySnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
            
        })
             resolve(products)
             console.log(products)
    }).catch(error => {
        reject(error)
    })
})
}


// va al detalle del producto
export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(firestoreDb, 'products', id)
    
        getDoc(docRef).then(querySnapshot => {
            const product = { id: querySnapshot.id, ...querySnapshot.data() }
            resolve(product)
        }).catch(error => {
            reject(error)
        })
    })
}

   