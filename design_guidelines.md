# Design Guidelines for Bluebell Maintenance Services Website Clone

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional service company websites with emphasis on trust, reliability, and residential focus. The design prioritizes credibility and clear service communication over trendy aesthetics.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Blue: 220 85% 25% (primary brand color for headers, navigation)
- Light Blue: 210 50% 85% (subtle backgrounds, accents)
- White: 0 0% 100% (main background, text contrast)
- Dark Gray: 210 10% 20% (body text, secondary elements)

**Supporting Colors:**
- Success Green: 140 60% 45% (CTA buttons, positive actions)
- Warm Gray: 30 5% 95% (section backgrounds)

### B. Typography
**Primary Font**: Inter or similar professional sans-serif from Google Fonts
- Headings: 600-700 weight, clear hierarchy (h1: 3rem, h2: 2.25rem, h3: 1.5rem)
- Body text: 400 weight, 1rem base size with 1.6 line-height
- Navigation: 500 weight, slightly condensed spacing

### C. Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 24
- Consistent use of p-6, mb-8, mt-12 for section spacing
- Container max-width of 1200px with mx-auto
- Grid systems using 2-3 columns for service cards

### D. Component Library

**Navigation**
- Fixed header with white background and subtle shadow
- Logo on left, navigation center, phone number on right
- Mobile hamburger menu with slide-out drawer

**Hero Section**
- Full-width background image with dark overlay (40% opacity)
- Centered content with large heading and CTA button
- Minimum height of 80vh for impact

**Service Cards**
- Clean white cards with subtle shadows
- Service image at top, title, description, and arrow link
- Hover effect with slight elevation increase

**Forms**
- Clean input fields with subtle borders
- Blue focus states matching brand colors
- Generous padding and clear labeling

**Buttons**
- Primary: Blue background with white text
- Secondary: White background with blue border (outline variant)
- When placed over images: blurred background effect

### E. Images
**Hero Image**: Large residential property or maintenance work scene covering full viewport width
**Service Images**: Professional photos for each service category:
- Lawn care: Well-maintained yard/landscaping
- Handyman: Tools or repair work in progress
- Appliances: Kitchen or laundry room setting
- Pool maintenance: Clean pool area
- Drywall: Interior wall repair
- Flooring: Elegant floor installation
- Seasonal cleanup: Outdoor maintenance scene

**Image Treatment**: Consistent aspect ratios (16:9 for hero, 4:3 for service cards), subtle overlays where text appears over images

## Page-Specific Guidelines

**Home Page**: Hero + value propositions + services overview (3 sections maximum)
**Services Page**: Header + detailed service grid with 6-7 service cards + CTA section
**About Us Page**: Company story + process flow + values section
**Contact Page**: Contact information + contact form in two-column layout

## Visual Hierarchy
- Use consistent spacing and typography scales
- Maintain strong contrast between sections
- Limit color usage to maintain professional appearance
- Ensure mobile responsiveness with stacked layouts on smaller screens