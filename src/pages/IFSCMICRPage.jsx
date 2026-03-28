import { useState } from 'react';
import { IFSCMICRHero, IFSCMICRSearchSection } from '../components/sections';

const IFSCMICRPage = () => {
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [result, setResult] = useState(null);

  const searchState = { selectedBank, selectedState, selectedCity, selectedBranch, result };
  const searchActions = { setSelectedBank, setSelectedState, setSelectedCity, setSelectedBranch, setResult };

  return (
    <>
      <section id="ifsc-micr-hero">
        <IFSCMICRHero searchState={searchState} searchActions={searchActions} />
      </section>
      <section id="ifsc-micr-search">
        <IFSCMICRSearchSection searchState={searchState} searchActions={searchActions} />
      </section>
    </>
  );
};

export default IFSCMICRPage;
