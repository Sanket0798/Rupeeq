import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { RightArrowIcon } from '../common/SvgIcons';

const BlogCTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 md:py-[46px] bg-[#F9AAA6]/20 rounded-t-3xl mx-[6px] border border-black/10 border-b-transparent md:mt-10 mb-8 md:mb-16">
      <div className="max-w-[1260px] mx-auto px-4">
        <div className="text-center">
          <motion.h2
            className="font-bold text-xl md:text-2xl lg:text-3xl leading-[28px] md:leading-[38px] lg:leading-[48px] text-custom-dark-text mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            A Few Easy Steps Can Help You Practice Better Financial Decision-Making.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-[65px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="primary"
                size="lg"
                className="text-base md:text-lg !font-normal leading-[20px] text-white gap-3 md:gap-5 rounded-full bg-custom-purple w-[161px] h-[48px]"
                onClick={() => navigate('/personal-loan')}
              >
                Begin Now
                <RightArrowIcon color="white" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="secondary"
                size="lg"
                className="text-base md:text-lg !font-normal leading-[20px] text-white gap-3 md:gap-5 rounded-full bg-custom-purple w-[161px] h-[48px]"
                onClick={() => navigate('/credit-score')}
              >
                Contact Us
                <RightArrowIcon color="white" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTASection;
