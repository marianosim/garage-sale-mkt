import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIph6h4hL22OlO2NVnGeVv5_Y43Gb0DNA",
  authDomain: "garage-sale-ts.firebaseapp.com",
  projectId: "garage-sale-ts",
  storageBucket: "garage-sale-ts.appspot.com",
  messagingSenderId: "907015589576",
  appId: "1:907015589576:web:3c8edfde5425ecd0e3dffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const getItems = async () => {
  try {
    const myCollection = collection(firestore, 'products');
    let snapShotDB = await getDocs(myCollection);
    let dataDocs = snapShotDB.docs.map(doc => {
      let docsFormat = {
        ...doc.data(),
        id: doc.id
      };
      return docsFormat
    });
    return dataDocs;
  } catch (error) {
    console.log(error)
  }
};

export const getSingleItem = async (idParams) => {
  try {
    const docRef = doc(firestore, 'products', idParams);
    const docSnapShot = await getDoc(docRef);
    if (docSnapShot.exists()) {
      return { ...docSnapShot.data(), id: docSnapShot.id };
    } else {
      throw new Error('Item no encontrado')
    }
  } catch (error) {
    console.error(error);
  }
};

export const getItemsByCategory = async (catParams) => {
  try {
    const myCollection = collection(firestore, 'products');
    const queryCategory = query(myCollection, where('category', '==', catParams));
    const querySnapShot = await getDocs(queryCategory);
    let dataDocs = querySnapShot.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    })
    return dataDocs
  } catch (error) {
    console.log(error)
  }
};

export const createBuyOrder = async (orderData) => {
  const collectionRef = collection(firestore, 'orders');
  let doc = await addDoc(collectionRef, orderData)
  return doc.id;
}

export const getBuyOrder = async (orderIdParams) => {
  try {
    const docRef = doc(firestore, 'orders', orderIdParams);
    const docSnapshot = await getDoc(docRef);
    return docSnapshot.data();
  } catch (error) {
    console.log(error)
  }
}

//Exports data from local to firebase
export const exportData = async () => {
  const data = [
    {
      id: 1,
      title: "Pantalón de vestir Zara XS",
      price: "2500",
      category: "ropa",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683138094/IMG_4444_yy7lla.jpg"
    },
    {
      id: 2,
      title: "Campera Jean Como Quieres Kids XS",
      price: "2000",
      category: "ropa",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683138172/IMG_4445_haltkw.jpg"
    },
    {
      id: 3,
      title: "Cinturón de cuero Marrón L",
      price: "1500",
      category: "accesorios",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683138236/IMG_4446_a25cd5.jpg"
    },
    {
      id: 4,
      title: "Bandanas Time Tru x4",
      price: "500",
      category: "accesorios",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683138303/IMG_4447_lxsefd.jpg"
    },
    {
      id: 5,
      title: "Cartera Adidas",
      price: "2500",
      category: "accesorios",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683138352/IMG_4462_vspv0t.jpg"
    },
    {
      id: 6,
      title: "Computadora de escritorio Banghó All in one Bold E09",
      price: "80000",
      category: "electronica",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683138464/IMG_4450_lkrrlj.jpg"
    },
    {
      id: 7,
      title: "Impresora Multifunción Xerox Phaser 6010",
      price: "20000",
      category: "electronica",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683138526/IMG_4451_ge6v7a.jpg"
    },
    {
      id: 8,
      title: "Go Pro Hero Silver 4K Pantalla táctil y accesorios",
      price: "20000",
      category: "electronica",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683138600/IMG_4452_ctcyyv.jpg"
    },
    {
      id: 9,
      title: "Lámpara colgante vintage Peill & Putzler",
      price: "80000",
      category: "hogar",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683138719/IMG_4453_mwn1hh.jpg"
    },
    {
      id: 10,
      title: "2 Tazas de café + 4 cucharas",
      price: "2500",
      category: "hogar",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683138774/IMG_4454_qcg62f.jpg"
    },
    {
      id: 11,
      title: "Mesa amarilla de comedor",
      price: "7000",
      category: "hogar",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683138876/IMG_4455_hzuvss.jpg"
    },
    {
      id: 12,
      title: "Set Banquetas taburetes premium x2",
      price: "23000",
      category: "hogar",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683138943/IMG_4456_spmreu.jpg"
    },
    {
      id: 13,
      title: "Zapatillas Superstar T37 1/2",
      price: "3000",
      category: "calzado",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683139036/IMG_4457_hss1ke.jpg"
    },
    {
      id: 14,
      title: "Zapatos taco alto Lyona T38",
      price: "6000",
      category: "calzado",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683139085/IMG_4458_trmlnz.jpg"
    },
    {
      id: 15,
      title: "Botas Kosiuko azúl eléctrico T39",
      price: "10000",
      category: "calzado",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683139140/IMG_4459_wb7agz.jpg"
    },
    {
      id: 17,
      title: "BICICLETA ELECTRICA TAILG MODELO: TAILG FL1 PLUS MOTOR: 350W VELOCIDAD: 35KM/H AUTONOMIA:30-40 KM PESO BRUTO: 25KG PESO SOPORTADO: 120KG TIEMPO DE CARGA: 3-5 HORAS TAMAÑO: 1590 X 560 X 1100M",
      price: "250000",
      category: "vehiculo",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1683139242/IMG_4460_cb8abg.jpg"
    },
    
  ];
  const collectionRef = collection(firestore, 'products');

  for (let item of data) {
    delete item.id;
    const newDoc = await addDoc(collectionRef, item);
  }

}

export default firestore;