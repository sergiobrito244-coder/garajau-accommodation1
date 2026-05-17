# Garajau Paradise - Accommodation Website

A beautiful, modern website for a one-bedroom apartment in Garajau, Madeira with stunning ocean views.

## Features

- **Hero Section**: Compelling introduction with WhatsApp and Booking buttons
- **About Section**: Details about the apartment and its features
- **Services Section**: Transfer, massage, and acupuncture services
- **Gallery Section**: Placeholder for property photos
- **Location Section**: Information about Garajau and nearby attractions
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## How to View

Simply open `index.html` in your web browser. No server required!

## Customization Required

### 1. WhatsApp Number
Replace `351000000000` with your actual WhatsApp number in:
- `index.html` (line 35 and line 175)
- Format: `https://wa.me/YOURNUMBER?text=YOURMESSAGE`

### 2. Booking.com Link
Replace `https://booking.com` with your actual Booking.com property URL in:
- `index.html` (line 39 and line 177)

### 3. Images
Replace the placeholder sections with your actual photos:
- Hero background image (currently a gradient)
- About section image (line 95-102)
- Gallery images (lines 145-160)
- Consider using high-quality photos of:
  - The stunning ocean view
  - The apartment interior
  - The bedroom
  - The kitchen
  - The bathroom
  - Nearby attractions

### 4. Map Integration
Replace the map placeholder (line 192-199) with an actual Google Maps embed:
1. Go to Google Maps
2. Search for your property location
3. Click "Share" → "Embed a map"
4. Copy the iframe code and replace the map-placeholder div

### 5. Contact Information
Update any additional contact details if needed in the footer or contact section.

## File Structure

```
garajau-accommodation/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Design Features

- Modern, clean aesthetic with ocean-inspired color scheme
- Smooth scrolling navigation
- Animated service cards and gallery items
- Responsive design for all screen sizes
- Professional typography (Playfair Display + Inter)
- Call-to-action buttons for WhatsApp and Booking.com

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Next Steps

1. Add your actual photos
2. Update WhatsApp number
3. Add Booking.com property link
4. Integrate Google Maps
5. Test on mobile devices
6. Deploy to a hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Deployment Options

Since this is a static website, you can deploy it for free:

- **Netlify**: Drag and drop the folder to netlify.com
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to GitHub and enable Pages
- **Traditional hosting**: Upload files to any web host

## Support

For questions or customization help, refer to the code comments in each file.
