import React, { useState } from 'react';

import main from 'assets/main.png';
import { useAuth } from 'context/AuthContext';

import SelectTypeModal from '../SelectTypeModal';
import { AddButton, Wrapper, Item, Image, Title } from './styled';

const Archive = () => {
  const { isAuth } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateClick = (event) => {
    event.preventDefault();

    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SelectTypeModal isOpen={isOpen} onClose={handleModalClose} />
      {isAuth && <AddButton onClick={handleCreateClick}>Add new</AddButton>}
      <Wrapper>
        <Item>
          <Image src={main} alt='Local Stickerbook 2'/>
          <Title>Local Stickerbook #2</Title>
        </Item>
        <Item>
          <Image src={main} alt='Local Stickerbook 1'/>
          <Title>Local Stickerbook #1</Title>
        </Item>
      </Wrapper>
    </>
  );
};

export default Archive;
