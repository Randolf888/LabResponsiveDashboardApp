## Student Info

* **Name:** [Randolf ]
* **Student ID:** [n01697788]
* **Date Submitted:** October 16, 2025
* **Lab:** CPAN 213 - Lab 4

---

## How the Responsive Design Works

### Breakpoint Plan

This app changes its layout based on the screen size, so it looks  th same  on any device. The breakpoints are in `src/utils/responsive.js`, using the `getDeviceType()` function.

**Here's the Breakdown:**

* Small devices:  get Less than 375px wide - one column layout.
* Medium devices: 375-767px - two columns.
* Large devices: 768px or wider - three columns (for tablets).

**Why These Sizes?**

I picked these sizes because they're common  for phones and tablets. 375px separates older, smaller phones, and 768px is where tablets start. If you turn your device, it recalculates the layout to keep things looking good.

### Grid System

The `ResponsiveGrid` component adjusts the number of columns automatically, depending on the device and how it's held. It puts content into rows and adds empty spaces if a row isn't full, keeping everything neat.

**How Columns are Figured Out:**

The `getGridColumns()` function decides how many columns to use: one for small devices (under 375px), two for medium (375-767px), and three for large (768px+). Holding a tablet sideways gives you four columns, and phones get two.

**Turning the Device:**

When you turn your device, the `listenForOrientationChange` function notices via `Dimensions.addEventListener('change')`. The `DashboardScreen` reacts to these changes, updating the grid layout without any awkward jumps.

### Font Sizes

Font sizes are set in `src/utils/responsive.js`, ranging from 10px (tiny) to 32px (big). The `PixelRatio.getFontScale()` makes sure the text scales properly if users have changed their font size settings.

**The Math:**

The `rf()` function takes the base font size and adjusts it based on the user's font scale, so the text is readable no matter what.

**Font Size List:**

* h1: 32px
* h2: 28px
* h3: 24px
* h4: 20px
* body: 16px
* caption: 12px
* small: 10px

### Spacing System

Spacing is also set in `src/utils/responsive.js`, with values that increase evenly to make things look organized and easy to tap.

**Spacing Chart:**

* xs: 4px
* sm: 8px
* md: 16px
* lg: 24px
* xl: 32px

---

## How it Works on Different Phones

### iOS Styling

iOS uses shadows to make things look like they have depth, while Android uses elevation. The theme picks the right one based on the device using Platform.select.

* Shadows use shadowColor, shadowOffset, shadowOpacity, and shadowRadius properties.
* Border radius: 4px (small), 8px (medium), 12px (large), 16px (xlarge).
* Status bar height: hp(6) for notches/dynamic islands, light-content barStyle.
* SafeAreaView automatically handles safe areas on iOS.

### Android Styling

Android uses elevation for a sense of depth and automatic shadows, which makes it feel more responsive.

* Elevation for shadows: small (2), medium (4), large (8).
* Material Design color scheme with primary/secondary/accent colors.
* Translucent status bar handled with hp(4) padding.
* Padding tweaked for the best look.

---

## How the App is Built

### Widget Design

The BaseWidget component is the foundation for all dashboard widgets. It has consistent styling, touch feedback, and accessibility features. It's to hold different types of content while keeping a uniform look across StatisticWidget and other widget types.

### Component Breakdown

DashboardScreen

├── DashboardHeader

│ ├── Menu Button

│ ├── Title/Subtitle

│ └── Notification/Profile Buttons

├── ResponsiveGrid

│ └── StatisticWidgets (4x)

└── BaseWidget

└── Quick Actions (4x)

---

## Speed Improvements

### Style Tweaks

Styles are defined using StyleSheet.create so the app runs faster. Dynamic styles are kept to a minimum, with conditional logic at the component level, not in the styles themselves. The theme object keeps all styles in one place, making it easier to reuse them. Platform.select avoids having the app figure out styles at the last minute. Inline styles are only used for truly dynamic stuff, ensuring the app renders smoothly.

### Render Tricks

React's useState and useEffect are used carefully to prevent unnecessary re-renders. The grid data is computed once per render, and orientation changes trigger targeted updates. No need for heavy memoization libraries yet, since the data is light. Event handlers are defined outside render or memoized so they aren't recreated every time.

### Speed Checks

React Native DevTools shows a steady 60 FPS during normal use. Orientation changes sometimes drop to 55-58 FPS on slower devices but quickly stabilize. RefreshControl animations stay smooth at 60 FPS. Memory usage stays around 50-70MB, with no leaks found during testing. The app runs well on both iOS and Android, with very few frame drops.

---

## Problems and Fixes

### Problem 2: Different Styles on iOS and Android

**What I Learned:** Consider platform differences from the beginning. Utility functions are good for consistent responsive behavior.

## Testing Results

### Device Testing

| Device Type | Screen Size | Orientation | Columns | Result |
| :---------- | :---------- | :---------- | :------ | :----- |
| iPhone 15 | 393x852 | Portrait | 2 | ✅ Pass |
| iPhone 15 | 852x393 | Landscape | 2 | ✅ Pass |
| iPad Pro | 1024x1366 | Portrait | 3 | ✅ Pass |
| iPad Pro | 1366x1024 | Landscape | 4 | ✅ Pass |
| Pixel 7 | 412x915 | Portrait | 2 | ✅ Pass |
| Pixel Tablet| 1600x2560 | Portrait | 3 | ✅ Pass |

### Functionality Checks

* [ ] Responsive grid adjusts to screen size ✅
* [ ] Orientation changes handled well ✅
* [ ] Pull-to-refresh works smoothly ✅
* [ ] All widgets display correctly ✅
* [ ] Platform-specific styling ✅
* [ ] Performance at 60fps ✅
* [ ] Accessibility labels present ✅
* [ ] No console errors or warnings ✅

---

## Code Quality

* [ ] All components properly commented
* [ ] Consistent naming conventions used
* [ ] No unused imports or variables
* [ ] Proper file organization
* [ ] ESLint rules followed
* [ ] Code formatted with Prettier
* [ ] No hardcoded values (using theme system)
* [ ] Accessibility props included

---

## Review

### What I Learned

This lab taught me how important it is to design for mobile first and test on different devices. It tought proactive orientation handling and memoization significantly enhance user experience. Utility functions and platform-aware styling from the beginning also important. I also learned some performance tricks, like using StyleSheet.create and cleaning up event listeners. and I learned value of utility functions for responsive logic and the need for platform-aware styling from the outset. I also learned more about iOS shadows and Android elevation, and how to use Platform.select to make them consistent. Overall, this lab showed how responsive design relates to mobile app development.

### Skills I picked up

* Responsive layouts using breakpoints
* Flexbox layouts
* Platform specific styling
* Performance tuning
* Accessibility implementations

### What to improve

I could have put all more  comments  

### How to apply for future projects

By implementing responsive design from the start, cross-platform compatibility, performance optimization.
**End of Documentation**