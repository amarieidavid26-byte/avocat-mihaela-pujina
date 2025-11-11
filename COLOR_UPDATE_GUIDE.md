# Color Scheme Update Progress

## ✅ Completed
- Tailwind config updated with new colors
- Global CSS updated
- Header component
- Hero component

## 🔄 In Progress - Remaining Files

### Color Replacement Map:
```
OLD → NEW
---
bg-black → bg-sage (for hero sections) OR bg-offwhite (for regular sections)
bg-white → bg-white OR bg-cream (footer)
text-white → text-white (on colored backgrounds) OR text-charcoal (on light backgrounds)
text-black → text-charcoal
text-gold → text-terracotta
bg-gold → bg-sage (primary) OR bg-terracotta (secondary)
border-gold → border-sage OR border-terracotta
hover:bg-gold-dark → hover:bg-sage-light OR hover:bg-terracotta-dark
text-gray-300 → text-charcoal-light OR text-white/90 (on dark backgrounds)
bg-gray-50 → bg-offwhite
```

## Files Still Needing Updates:

### Components:
1. `/components/Footer.tsx` - Change to cream background
2. `/components/CTAButton.tsx` - Update variant colors
3. `/components/WhatsAppButton.tsx` - Keep green but adjust styling
4. `/components/ExitIntentPopup.tsx` - Update to light theme
5. `/components/ContactSidebar.tsx` - Light theme
6. `/components/PracticeAreasDetail.tsx` - Light theme
7. `/components/ContactForm.tsx` - Light theme

### Home Components:
8. `/components/home/PracticeAreas.tsx` - Light cards, terracotta accents
9. `/components/home/WhyChooseUs.tsx` - Sage background with white text
10. `/components/home/Testimonials.tsx` - Light theme
11. `/components/home/CTABanner.tsx` - Terracotta background

### Pages:
12. `/app/domenii-practica/page.tsx` - Light theme
13. `/app/despre/page.tsx` - Mixed: sage hero, light content
14. `/app/contact/page.tsx` - Light theme with sage accents

### Layout:
15. `/app/layout.tsx` - Update structured data if needed

## Quick Search & Replace Patterns:

```bash
# In each file, replace:
bg-black → bg-sage (hero) or bg-offwhite (body)
text-gold → text-terracotta
border-gold → border-sage
bg-gold → bg-sage
text-gradient-gold → text-gradient-sage
```
