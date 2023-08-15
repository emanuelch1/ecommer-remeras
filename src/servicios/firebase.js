
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,doc, getDoc, where, query , addDoc, } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBY1YW-7z_WNcW4PSAKV-bZtyV5rkM_H1Q",
  authDomain: "remeras-lion-king.firebaseapp.com",
  projectId: "remeras-lion-king",
  storageBucket: "remeras-lion-king.appspot.com",
  messagingSenderId: "356492734503",
  appId: "1:356492734503:web:199b662a9f8ece56219e02"
};

// Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

async function getData(){
  const producRef= collection(db, "productos");
const documentsSnapshot= await getDocs(producRef);
//console.log(documentsSnapshot.docs[0].data());
const documents = documentsSnapshot.docs;
const docsData= documents.map((item)=>{
  let productsFullData= item.data();
  productsFullData.id= item.id
  return productsFullData;
});
return (docsData);
}

////////////////////////////////////////////////////////////////////////////


async function getProductData(id){
  const docRef = doc(db, "productos", id);
  const docSnapshot = await getDoc(docRef);

if (docSnapshot.exists()) {
 return { ...docSnapshot.data(), id: docSnapshot};
} else {
    throw new Error("No encontramos productos");
}}

//////////////////////////////////////////////////////////////////////////



async function getCategoryData(){
  const producRef= collection(db, "productos");
  const q = query(producRef, where ("category", "==", "Hombre"))
  const documentsSnapshot= await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item)=>({...item.data(), id: item.id} ));
  
}

async function createOrder(orderData){
const collectionRef = collection(db, "orders") 

const docCreated = await addDoc(collectionRef, orderData)

return (docCreated.id)
 }

 async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot= await getDoc(docRef);
  if (docSnapshot.exists()){
    return{...docSnapshot.data(), id: docSnapshot.id};
  } else{
    throw new Error ("No se encuentra producto.")
  }
 }

export { getData, getProductData, getCategoryData, createOrder, getOrder};