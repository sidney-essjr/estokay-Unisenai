import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { DonationI } from "./getDonations";

export async function updateStock(
  ollDonation: DonationI,
  updatedQuantity: number
) {
  const docRef = doc(db, "donations", ollDonation.id);

  const donation = {
    donator: ollDonation.donator,
    entryDate: ollDonation.entryDate,
    item: ollDonation.item,
    measure: ollDonation.measure,
    quantity: updatedQuantity,
    size: ollDonation.size,
    type: ollDonation.type,
    validity: ollDonation.validity,
  };

  try {
    await updateDoc(docRef, donation);
  } catch (error) {
    console.log(error);
  }
}
