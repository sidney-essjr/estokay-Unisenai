import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { FormDonationRegistration } from "../helper/validations";

export default async function postDonation(donation: FormDonationRegistration) {
  try {
    const docRef = await addDoc(collection(db, "donations"), {
      donation,
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
