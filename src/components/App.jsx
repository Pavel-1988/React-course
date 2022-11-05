import { Component } from 'react';
import { fetchDogByBreed } from 'api';
import { Dog } from './Dog';

import { BreedSelect } from './BreedSelect';
import { DogSkeleton } from './DogSkeleton';
import { ErrorMessage } from './ErrorMessage';
import { Layout } from './Layout';
import { errorMessages } from 'constants';

import { SkipMountExample } from './SkipMountExample'
import { GlobalStyle } from './GlobalStyle';

export const App = () => {


    return (
      <Layout>
        < SkipMountExample />

        <GlobalStyle />
   
      </Layout>
    );
  }
