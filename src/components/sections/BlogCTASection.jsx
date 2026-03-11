import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { ChevronUpIcon, RightArrowIcon, RightUpArrowIcon } from '../common/SvgIcons';

/**
 * BlogCTASection - Generic CTA section for blogs page
 * This section remains static regardless of tab selection
 */
const BlogCTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-[46px] bg-[#F9AAA6]/20 rounded-t-24 mx-[6px] border border-black/10 border-b-transparent mb-16">
      <div className="max-w-[1260px] mx-auto px-4">
        <div className="text-center">
          <h2 className="font-bold text-3xl leading-[48px] text-custom-dark-text mb-8">
            A Few Easy Steps Can Help You Practice Better Financial Decision-Making.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-[65px]">
            <Button
              variant="primary"
              size="lg"
              className="text-lg !font-normal leading-[20px] text-white gap-5 md:gap-2 rounded-full bg-custom-purple w-[161px] h-[48px]"
              onClick={() => navigate('/personal-loan')}
            >
              Begin Now
              <ChevronUpIcon />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="text-lg !font-normal leading-[20px] text-white gap-5 md:gap-2 rounded-full bg-custom-purple w-[161px] h-[48px]"
              onClick={() => navigate('/credit-score')}
            >
              Contact Us
              <ChevronUpIcon className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTASection;
