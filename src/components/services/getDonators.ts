import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { FormDonatorRegistration } from "../helper/validations";

export type DonatorsI = FormDonatorRegistration & {
  id: string;
};

export async function getDonators() {
  try {
    const querySnapshot = await getDocs(collection(db, "donators"));

    const donators: DonatorsI[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as FormDonatorRegistration),
    }));

    return { data: donators, error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { data: null, error: error.message };
    } else {
      return { data: null, error: "Erro genérico" };
    }
  }
}
