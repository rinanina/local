import React, { FC } from 'react';

import { StickerBookForm } from 'features/Archive';

import PageWrapper from '../PageWrapper';

const CreateStickerBook: FC = () => (
  <PageWrapper title='Create Stickerbook'>
    <StickerBookForm data={{}} />
  </PageWrapper>
);

export default CreateStickerBook;
