import { GenericHeroWrapper } from '../shared';
import { IFSC_MICR_HERO } from '../../constants';

const IFSCMICRHero = () => {
  return (
    <div className="">
      <GenericHeroWrapper {...IFSC_MICR_HERO} />
    </div>
  );
};

export default IFSCMICRHero;
