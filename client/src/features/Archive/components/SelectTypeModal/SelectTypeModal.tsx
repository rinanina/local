import React, { useState, FC, ChangeEvent } from 'react';
import styled from 'styled-components';
import Modal from 'simple-react-modal';
import { useNavigate } from 'react-router-dom';

import { Page } from 'features/Page';
import { Button, Select, FormElement } from 'components';

import { TYPE } from '../../config/constants';

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SelectTypeModal: FC<TProps> = ({ isOpen, onClose }) => {
  const [type, setType] = useState(TYPE.STICKER_BOOK);
  const navigate = useNavigate();

  const handleChangeType = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    setType(event.target.value as TYPE);
  };

  const handleNextClick = () => {
    // const toPage = type === TYPE.STICKERBOOK ? Page.CREATE_STICKERBOOK : Page.CREATE_TAPE;
    const toPage: Page = Page.CREATE_STICKER_BOOK;

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
