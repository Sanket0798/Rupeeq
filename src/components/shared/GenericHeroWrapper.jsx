import GenericHero from './GenericHero';

/**
 * GenericHeroWrapper - Wrapper component that handles HTML parsing for benefitsTitle
 * This allows us to use <span> tags in the benefitsTitle from constants
 */
const GenericHeroWrapper = ({ benefitsTitle, ...props }) => {
  // Parse benefitsTitle to handle HTML tags
  const parseBenefitsTitle = (title) => {
    if (!title) return title;
    
    // Split by <span class="text-custom-purple"> and </span>
    const parts = title.split(/(<span class="text-custom-purple">|<\/span>)/);
    
    return parts.map((part, index) => {
      if (part === '<span class="text-custom-purple">') {
        return null; // Skip the opening tag
      } else if (part === '</span>') {
        return null; // Skip the closing tag
      } else if (index > 0 && parts[index - 1] === '<span class="text-custom-purple">') {
        // This part should be highlighted
        return (
          <span key={index} className="text-custom-purple">
            {part}
          </span>
        );
      } else {
        return part;
      }
    }).filter(Boolean);
  };

  const parsedBenefitsTitle = parseBenefitsTitle(benefitsTitle);

  return (
    <GenericHero 
      {...props} 
      benefitsTitle={parsedBenefitsTitle}
    />
  );
};

export default GenericHeroWrapper;
