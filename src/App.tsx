import React, { useState } from 'react';
import CharacterCounter from './components/CharacterCounter/CharacterCounter';
import TextInput from './components/TextInput/TextInput';
import StatsDisplay from './components/StatsDisplay/StatsDisplay';

export default function App() {


  return (
     <>
      <CharacterCounter />
      <StatsDisplay stats={status} />
      <TextInput />
    </>
  );
}

