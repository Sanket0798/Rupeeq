// Common SVG Icons Component
// All SVG icons used across the application

export const PlusIcon = () => (
    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.875 10.5C16.875 11.2031 16.2891 11.7891 15.625 11.7891H10V17.4141C10 18.0781 9.41406 18.625 8.75 18.625C8.04688 18.625 7.5 18.0781 7.5 17.4141V11.7891H1.875C1.17188 11.7891 0.625 11.2031 0.625 10.5C0.625 9.83594 1.17188 9.28906 1.875 9.28906H7.5V3.66406C7.5 2.96094 8.04688 2.375 8.75 2.375C9.41406 2.375 10 2.96094 10 3.66406V9.28906H15.625C16.2891 9.25 16.875 9.83594 16.875 10.5Z" fill="#178FE5" />
    </svg>

);

export const MinusIcon = () => (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.625 11.75H1.875C1.17188 11.75 0.625 11.2031 0.625 10.5C0.625 9.83594 1.17188 9.25 1.875 9.25H15.625C16.2891 9.25 16.875 9.83594 16.875 10.5C16.875 11.2031 16.2891 11.75 15.625 11.75Z" fill="#178FE5" />
    </svg>

);

export const QuestionMarkIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg
        className={className}
        fill={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
    </svg>
);

export const ChevronDownIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg
        className={className}
        fill="none"
        stroke={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

export const ChevronUpIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg
        className={className}
        fill="none"
        stroke={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);

export const StarIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg
        className={className}
        fill={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

export const HeartIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg
        className={className}
        fill={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

export const ThumbsUpIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg
        className={className}
        fill={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
    </svg>
);

// Add more icons as needed...