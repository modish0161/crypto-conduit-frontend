// theme.ts
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    // Define your theme colors based on the logo provided
    colors: {
        primary: '#0D47A1', // Main color from the logo
        secondary: '#64FFDA', // Secondary color from the logo
        background: '#0A192F', // Background color from the logo or a suitable match
        text: '#FFFFFF', // Primary text color, assuming the logo's primary text color is white
        textSecondary: '#8892B0', // Secondary text color, for less emphasized text
        hover: '#64FFDA', // Color for hover states on buttons or links
        border: '#64FFDA', // Border color for elements like inputs or cards
        error: '#E57373', // Color for error messages and icons
        // Add more colors as needed
    },

    // Define any additional global variables such as font sizes, spacing, etc.
    fontSize: {
        small: '0.8rem',
        medium: '1rem',
        large: '1.2rem',
        // You can add as many sizes as you need
    },

    spacing: {
        xsmall: '0.5rem',
        small: '1rem',
        medium: '2rem',
        large: '3rem',
        xlarge: '4rem',
        // Add more spacing sizes as needed
    },

    // Define breakpoints for responsive design if needed
    breakpoints: {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px',
        // Add more breakpoints as needed
    },

    // Any other global variables that might be useful
    borderRadius: '4px', // Border-radius for elements like buttons, inputs, cards
};

export default theme;
