import React, { useState } from 'react';

import Archive from 'features/Archive';
import SelectTypeModal from 'features/SelectType';
import { useAuth } from 'context/AuthContext';
import Button from 'components/Button';

import PageWrapper from '../PageWrapper';

const ArchivePage = () => {
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
    <PageWrapper title='Archive' renderButton={() => (isAuth ? <Button text='Add new' onClick={handleCreateClick} /> : null)} >
      <SelectTypeModal isOpen={isOpen} onClose={handleModalClose} />
      <Archive />
    </PageWrapper>
  );
};

export default ArchivePage;
