import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'simple-react-modal';
import { useNavigate } from 'react-router-dom';

import { Page } from 'features/Page';

import { TYPE } from '../../config/constants';

const SelectTypeModal = ({ isOpen, onClose }) => {
  const [type, setType] = useState(TYPE.STICKERBOOK);
  const navigate = useNavigate();

  const handleChangeType = (event) => {
    event.preventDefault();

    setType(event.target.value);
  };

  const handleNextClick = () => {
    const toPage = type === TYPE.STICKERBOOK ? Page.CREATE_STICKERBOOK : Page.CREATE_TAPE;

    onClose();
    navigate(toPage);
  };

  return (
    <Modal show={isOpen} onClose={onClose} containerStyle={containerStyles}>
      <Title>Select a type: </Title>
      <Select name='type' onChange={handleChangeType}>
        {Object.keys(TYPE).map((item) => <option key={item} value={item} selected={item === type}>{item}</option>)}
      </Select>
      <NextButton onClick={handleNextClick}>Next</NextButton>
    </Modal>
  );
};

export default SelectTypeModal;

const containerStyles = {
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const Title = styled.h4`
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 16px;
`;

const Select = styled.select`
  margin-bottom: 16px;
  cursor: pointer;
`;

const NextButton = styled.button`
  margin-bottom: 16px;
`;
