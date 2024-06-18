import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export async function deleteDonation(donationId: string) {
  const docRef = doc(db, "donations", donationId);

  try {
    await deleteDoc(docRef);
    return { data: true, error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { data: null, error: error.message };
    }
  }
}
