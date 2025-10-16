# Responsive Dashboard App

A React Native application demonstrating responsive design principles for mobile devices. This dashboard app adapts its layout dynamically based on screen size and orientation, providing an optimal user experience across phones and tablets.

## Features

- **Responsive Grid Layout**: Automatically adjusts column count based on device type and orientation
  - Small devices (< 375px): 1 column
  - Medium devices (375-767px): 2 columns
  - Large devices (≥ 768px): 3 columns (tablets get 4 in landscape)
- **Platform-Specific Styling**: Optimized UI for both iOS and Android using Platform.select
- **Orientation Handling**: Seamless layout transitions when rotating devices
- **Performance Optimized**: 60 FPS performance with efficient rendering and StyleSheet optimization
- **Accessibility**: Includes touch targets, PixelRatio scaling, and accessibility labels
- **Pull-to-Refresh**: Smooth refresh functionality on the dashboard

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- React Native development environment

For iOS development (macOS only):
- Xcode 12 or higher
- iOS Simulator

For Android development:
- Android Studio
- Android SDK (API level 21 or higher)
- Android emulator or physical device

### Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ResponsiveDashboardApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install iOS dependencies (macOS only):**
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Run the app:**

   For iOS:
   ```bash
   npx react-native run-ios
   ```

   For Android:
   ```bash
   npx react-native run-android
   ```

   For Expo (if using Expo):
   ```bash
   npx expo start
   ```

## Project Structure

```
ResponsiveDashboardApp/
├── src/
│   ├── components/
│   │   ├── DashboardHeader.js
│   │   ├── ResponsiveGrid.js
│   │   └── widgets/
│   │       ├── BaseWidget.js
│   │       └── StatisticWidget.js
│   ├── screens/
│   │   └── DashboardScreen.js
│   ├── styles/
│   │   └── theme.js
│   └── utils/
│       └── responsive.js
├── App.tsx
├── ResponsiveDesignDocumentation.md
└── README.md
```

## Key Components

- **ResponsiveGrid**: Handles dynamic column layout based on device characteristics
- **BaseWidget**: Reusable widget foundation with consistent styling and accessibility
- **DashboardScreen**: Main screen managing orientation changes and grid updates
- **responsive.js**: Utility functions for breakpoints, font scaling, and spacing

## Testing

The app has been tested on various devices:
- iPhone 15 (portrait/landscape)
- iPad Pro (portrait/landscape)
- Pixel 7
- Pixel Tablet

All tests pass for responsive behavior, orientation handling, and performance.

## Documentation

For detailed technical documentation, see [ResponsiveDesignDocumentation.md](./ResponsiveDesignDocumentation.md)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices
5. Submit a pull request

## License

This project is for educational purposes as part of CPAN 213 - Lab 4.
