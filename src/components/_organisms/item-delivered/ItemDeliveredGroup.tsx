import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDeliveredDisplay from "../../_molecules/item-delivered/ItemDeliveredDisplay";
import { getDonation } from "../../services/getDonation";
import { DonationI } from "../../services/getDonations";

export default function ItemDeliveredGroup() {
  const [donation, setDonation] = useState<DonationI>();
  const { id } = useParams();

  async function getDonationInfo() {
    if (id) {
      const result = await getDonation(id);
      if (result?.data) setDonation(result.data);
    }
  }

  getDonationInfo();

  return donation && <ItemDeliveredDisplay donation={donation} />;
}
