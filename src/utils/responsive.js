import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Width percentage
export const wp = (percent) => (width * percent) / 100;

// Height percentage
export const hp = (percent) => (height * percent) / 100;

// Responsive font size
export const rf = (size) => size * PixelRatio.getFontScale();

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// Typography
export const typography = {
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 20,
  body: 16,
  caption: 12,
  small: 10,
};

// Check if device is tablet
export const isTablet = () => width >= 768;

// Get device type
export const getDeviceType = () => {
  if (width < 375) return 'small';
  if (width < 768) return 'medium';
  return 'large';
};

// Get adaptive padding based on device type
export const getAdaptivePadding = () => {
  const deviceType = getDeviceType();
  switch (deviceType) {
    case 'small': return spacing.md;
    case 'medium': return spacing.md;
    case 'large': return spacing.lg;
    default: return spacing.xl;
  }
};

// Get grid columns based on device type
export const getGridColumns = () => {
  const deviceType = getDeviceType();
  switch (deviceType) {
    case 'small': return 1;
    case 'medium': return 2;
    case 'large': return 3;
    default: return 2;
  }
};

// Listen for orientation change
export const listenForOrientationChange = (callback) => {
  return Dimensions.addEventListener('change', callback);
};
