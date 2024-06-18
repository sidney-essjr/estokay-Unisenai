import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { FormDonatorRegistration } from "../helper/validations";

export default async function postDonator(donator: FormDonatorRegistration) {
  try {
    const docRef = await addDoc(collection(db, "donators"), donator);
    return { data: docRef.id, error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { data: null, error: error.message };
    } else {
      return { data: null, error: "Erro genérico" };
    }
  }
}
