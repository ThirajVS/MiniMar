import { collection, addDoc, setDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

// Save shopping list
export async function saveShoppingList(userId, list) {
  try {
    const docRef = doc(db, "shoppingLists", userId);
    await setDoc(docRef, { list, updatedAt: new Date() });
    console.log("Shopping list saved!");
  } catch (e) {
    console.error("Error saving shopping list: ", e);
  }
}

// Load shopping list
export async function loadShoppingList(userId) {
  try {
    const docRef = doc(db, "shoppingLists", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().list;
    } else {
      return [];
    }
  } catch (e) {
    console.error("Error loading shopping list: ", e);
    return [];
  }
}

// Save cart (same logic as shopping list, can merge later if needed)
export async function saveCart(userId, cart) {
  try {
    const docRef = doc(db, "carts", userId);
    await setDoc(docRef, { cart, updatedAt: new Date() });
    console.log("Cart saved!");
  } catch (e) {
    console.error("Error saving cart: ", e);
  }
}

// Load cart
export async function loadCart(userId) {
  try {
    const docRef = doc(db, "carts", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().cart;
    } else {
      return [];
    }
  } catch (e) {
    console.error("Error loading cart: ", e);
    return [];
  }
}
