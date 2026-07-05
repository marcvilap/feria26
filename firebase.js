import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDkGy0uIVWvJZI2YrOs1ff8rZDGyrywPzU',
	authDomain: 'votacion-cope.firebaseapp.com',
	projectId: 'votacion-cope',
	storageBucket: 'votacion-cope.appspot.com',
	messagingSenderId: '651375602367',
	appId: '1:651375602367:web:20abc436bc60707cb8b40a',
	measurementId: 'G-QE1B1D9173',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const votosCollection = collection(db, 'votos')

export { votosCollection, addDoc }
