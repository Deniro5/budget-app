import { useState } from "react";
import { AddTransactionModal } from "../Components/Modals/AddTransactionModal";

const useAddTransactions = () => {
  // const accessToken = useAppSelector((state) => state.player.accessToken);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const Modal = <AddTransactionModal isOpen={isOpen} handleClose={handleClose} />;

  return {
    isOpen,
    setIsOpen,
    Modal,
  };
};

export default useAddTransactions;
