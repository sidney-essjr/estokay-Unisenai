import { addDoc, collection } from "firebase/firestore";
import { FormDonatorRegistration } from "../helper/validations";
import { db } from "../../firebase/firebase";

export default async function postDonator(donator: FormDonatorRegistration) {
  try {
    const docRef = await addDoc(collection(db, "donators"), {
      donator,
    });
    return { data: docRef.id, error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { data: null, error: error.message };
    } else {
      return { data: null, error: "Erro genérico" };
    }
  }
}
