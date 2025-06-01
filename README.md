# Data Science Portfolio Website

A modern, responsive portfolio website designed for data science professionals and graduate students. This website template includes sections for showcasing your projects, skills, and professional background.

## Features

- Clean and professional design
- Fully responsive layout
- Interactive project cards
- Skills showcase
- Contact form
- Smooth scrolling and animations
- Mobile-friendly navigation

## Structure

```
.
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Stylesheet
├── js/
│   └── main.js        # JavaScript functionality
└── images/            # Directory for your images
```

## Customization Guide

### 1. Personal Information

Edit the following sections in `index.html`:

- Update the title in the `<head>` section
- Modify the hero section content
- Edit the "About Me" section with your background
- Update your education details

### 2. Projects

In the projects section, each project is structured as a card. To add a new project:

1. Copy an existing project card structure
2. Update the following:
   - Project image
   - Project title
   - Project description
   - Technology tags
   - Project link

### 3. Skills

The skills section is divided into two categories:
- Programming Languages
- Tools & Technologies

Add or modify skills by editing the respective sections in the HTML file.

### 4. Contact Information

Update the contact section with your:
- Email address
- LinkedIn profile link
- GitHub profile link

### 5. Styling

The website uses CSS variables for consistent styling. To change the color scheme, edit the following variables in `style.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --text-color: #333;
    --light-bg: #f8f9fa;
    --dark-bg: #2c3e50;
}
```

### 6. Images

1. Create an `images` directory
2. Add your project images
3. Update the hero background image
4. Recommended image sizes:
   - Project images: 800x600px
   - Hero background: 1920x1080px

## Getting Started

1. Clone or download this repository
2. Replace the placeholder content with your information
3. Add your own images
4. Test the website locally
5. Deploy to your preferred hosting service

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Additional Customization

### Adding Analytics

To add Google Analytics, insert the tracking code just before the closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

### SEO Optimization

The template includes basic SEO meta tags. Customize them in the `<head>` section of `index.html`:

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="data science, portfolio, projects">
<meta name="author" content="Your Name">
```

## License

This project is open source and available under the MIT License.

## Support

For questions or customization help, please open an issue in the repository.