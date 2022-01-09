import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'simple-react-modal';
import { useNavigate } from 'react-router-dom';

import { Page } from 'features/Page';
import { Button, Select, FormElement } from 'components';

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
      <FormElement>
        <Select name='type' onChange={handleChangeType} selected={type} options={Object.keys(TYPE)} />
      </FormElement>
      <Button text='Next' onClick={handleNextClick} fullWidth />
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
  font-size: 22px;
  line-height: 24px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;
