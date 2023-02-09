import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

export type IAddTransactionModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  //   name: string;
  //   description: string;
  //   title: string;

  //   handleConfirm: () => void;
  //   handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  //   handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const customModalStyle = {
  content: {
    width: "350px",
    height: "fit-content",
    left: "calc(50% - 196px)",
    top: "calc(50% - 250px)",
  },
};

const AddTransactionModal: React.FC<IAddTransactionModalProps> = ({
  isOpen,
  handleClose,
}: IAddTransactionModalProps) => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const handleSubmit = () => {
    console.log(name, category, date, type, amount);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} style={customModalStyle}>
      <Title> Add Transaction</Title>
      <FieldContainer>
        <FieldLabel>Name</FieldLabel>
        <NameField value={name} onChange={handleNameChange} />
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>Amount</FieldLabel>
        <NameField value={amount} onChange={handleAmountChange} />
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>Category</FieldLabel>
        <NameField value={category} onChange={handleCategoryChange} />
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>Date</FieldLabel>
        <NameField value={date} onChange={handleDateChange} />
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>Type</FieldLabel>
        <NameField value={type} onChange={handleTypeChange} />
      </FieldContainer>
      <ButtonContainer>
        <Button onClick={handleSubmit}>Confirm</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </ButtonContainer>
    </Modal>
  );
};

const FieldContainer = styled.div``;

const FieldLabel = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
`;

const NameField = styled.input`
  width: 300px;
  height: 23px;
  font-size: 15px;
  padding: 2px 10px;
`;

const DescriptionField = styled.textarea`
  width: 300px;
  outline: none !important;
  resize: none;
  height: 85px;
  padding: 10px;
  width: 328px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu";
  font-size: 15px;
`;

const Title = styled.h2`
  margin-top: 0;
  text-align: center;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  margin: auto;
  margin-top: 50px;
`;

const Button = styled.button``;

export { AddTransactionModal };
