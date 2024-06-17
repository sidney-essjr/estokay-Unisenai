import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { FormDonationRegistration } from "../helper/validations";

export type DonationI = FormDonationRegistration & {
  id: string;
};

export async function getDonations() {
  const querySnapshot = await getDocs(collection(db, "donations"));

  try {
    const donations: DonationI[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data().donation as FormDonationRegistration),
    }));

    return { data: donations, error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { data: null, error: error.message };
    } else {
      return { data: null, error: "Erro genérico" };
    }
  }
}
