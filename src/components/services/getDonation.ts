import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { FormDonationRegistration } from "../helper/validations";

export async function getDonation(id: string) {
  const docRef = doc(db, "donations", id);

  try {
    const response = await getDoc(docRef);

    if (response.exists()) {
      return {
        data: {
          id: response.id,
          ...(response.data() as FormDonationRegistration),
        },
        error: null,
      };
    } else {
      return { data: null, error: "Documento não localizado!" };
    }
  } catch (error) {
    if (error instanceof Error) {
      return { data: null, error: error.message };
    }
  }
}
