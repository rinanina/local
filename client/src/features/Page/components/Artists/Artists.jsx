import React from 'react';

import useFetch from 'hooks/useFetch';

import PageWrapper from '../PageWrapper';
import { Wrapper, Content } from './styled';

const Artists = () => {
  const { doFetch } = useFetch();

  const sendRequest = () => {
    doFetch((api) =>
      api.edition.create({
        type: 'ZINE',
        title: 'some title',
        status: 'DRAFT',
      })
    );
  };

  return (
    <PageWrapper>
      <Wrapper>
        <Content>
          <p>
            The actual catalogue of visual archives represents a caleidoscopic
            flow of metamodernistic visions, routine manifesto of everydayness
            and vertigo of devalued meanings. It’s an ever-present grotesque of
            surrounding reality transferring beauty from yesterday’s tomorrow
            towards today’s future.
          </p>
          <button onClick={sendRequest}>Send request</button>
        </Content>
      </Wrapper>
    </PageWrapper>
  );
};

export default Artists;
