# Frontend Performance Optimization

## Week 4 – Frontend Performance Optimization Challenge

### Project: Accessible Information Portal

This project focuses on analyzing and improving the frontend performance of an **Accessible Information Portal**. The website was originally developed as an accessibility-focused project and was further optimized during Week 4 to improve loading speed, resource usage, and overall user experience.

The project follows a **before-and-after optimization approach**. The original version was tested using browser-based performance auditing tools, performance issues were identified, and optimization techniques were then applied to create an improved version.

---

## Project Objective

The main objective of this project is to understand how frontend development decisions affect website performance and to apply practical optimization techniques.

The project focuses on:

* Identifying performance bottlenecks.
* Measuring initial website performance.
* Optimizing images and static resources.
* Improving JavaScript loading.
* Reducing unnecessary code.
* Simplifying the DOM structure.
* Improving page loading behavior.
* Comparing performance before and after optimization.
* Maintaining accessibility while improving performance.

---

## Technologies Used

* **HTML5** – Semantic page structure
* **CSS3** – Styling, responsive layout and visual design
* **Vanilla JavaScript** – Interactivity and form validation
* **WebP** – Optimized image format
* **Google Lighthouse** – Performance auditing
* **Chrome DevTools** – Browser and performance testing
* **PageSpeed Insights** – Performance analysis

---

## Website Features

The Accessible Information Portal contains:

* Responsive navigation
* Skip-to-content functionality
* Hero section
* Article cards
* Article categories
* Search functionality
* About section
* Newsletter subscription form
* Form validation
* Keyboard navigation
* Visible focus indicators
* Responsive design
* Accessibility-focused HTML structure

---

## Performance Optimization Techniques

### 1. Image Optimization

Large or unnecessary image sizes can increase page loading time. Images used in the optimized version were resized and compressed where appropriate.

Modern image formats such as WebP were used to reduce file size while maintaining suitable visual quality.

---

### 2. Lazy Loading

Images that are not immediately visible on the screen use lazy loading.

Example:

```html
<img
    src="images/technology.webp"
    alt="Computer technology components"
    loading="lazy">
```

This prevents all images from being downloaded immediately when the page loads.

---

### 3. Deferred JavaScript

The JavaScript file is loaded using the `defer` attribute.

```html
<script src="script.js" defer></script>
```

This allows the browser to continue parsing the HTML while the JavaScript resource is being downloaded.

---

### 4. CSS Optimization

The stylesheet was reviewed and unnecessary or repeated declarations were reduced.

The optimized CSS maintains the original design while keeping the stylesheet organized and efficient.

---

### 5. JavaScript Optimization

The JavaScript code was reviewed to reduce unnecessary operations and improve code organization.

The required interactive features were retained, including:

* Mobile navigation
* Search validation
* Newsletter validation
* Keyboard interaction
* Escape-key navigation handling

---

### 6. DOM Simplification

The HTML structure was reviewed to reduce unnecessary elements and excessive nesting.

Semantic elements such as:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

were retained to maintain a meaningful and accessible document structure.

---

### 7. Resource Loading

The loading behavior of images, CSS and JavaScript was reviewed to reduce unnecessary work during the initial page load.

Critical content is prioritized while resources that do not need to load immediately are handled more efficiently.

---

### 8. Caching Considerations

Browser caching was considered as part of the production optimization strategy.

Static resources such as images, CSS and JavaScript can be cached by browsers to reduce repeated downloads when users revisit the website.

---

## Accessibility Preservation

Performance optimization was performed without removing the accessibility improvements implemented in the previous task.

The project continues to support:

* Semantic HTML
* Keyboard navigation
* Skip-to-content link
* Visible focus indicators
* ARIA attributes
* Accessible form labels
* Form validation messages
* Responsive layouts
* Reduced-motion preferences

The goal was to improve performance without reducing usability or accessibility.

---

## Project Structure

```text
week-4-performance-optimization/
│
├── before/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── images/
│
├── optimized/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── images/
│
├── screenshots/
│   ├── lighthouse-before.png
│   ├── lighthouse-after.png
│   ├── pagespeed-before.png
│   └── pagespeed-after.png
│
├── README.md
└── report.md
```

---

## Performance Testing

The project was tested before and after optimization using **Google Lighthouse**.

The following metrics were recorded:

* Performance score
* Accessibility score
* Best Practices score
* SEO score
* First Contentful Paint (FCP)
* Largest Contentful Paint (LCP)
* Total Blocking Time (TBT)
* Cumulative Layout Shift (CLS)

The actual values are documented in the project report.

---

## Before vs After

The optimization process follows this workflow:

```text
Original Website
       ↓
Performance Audit
       ↓
Identify Bottlenecks
       ↓
Apply Optimizations
       ↓
Optimized Website
       ↓
Second Performance Audit
       ↓
Compare Results
```

This makes it possible to measure the effect of each optimization rather than relying only on visual improvements.

---

## How to Run the Project

### Step 1

Open the project folder in **Visual Studio Code**.

### Step 2

Open either:

```text
before/index.html
```

or:

```text
optimized/index.html
```

### Step 3

Right-click `index.html`.

Select:

```text
Open with Live Server
```

The website will open in your browser.

---

## Testing Checklist

Before submitting the project, verify:

* [ ] Website loads correctly.
* [ ] Navigation works.
* [ ] Mobile navigation works.
* [ ] Search form works.
* [ ] Newsletter form works.
* [ ] Images load correctly.
* [ ] Lazy-loaded images work.
* [ ] Keyboard navigation works.
* [ ] Focus indicators are visible.
* [ ] Website works on mobile screen sizes.
* [ ] Lighthouse test completed.
* [ ] Before screenshot saved.
* [ ] After screenshot saved.
* [ ] Report completed.
* [ ] Project folder compressed into ZIP.

---

## Learning Outcomes

This project provided practical experience with:

* Frontend performance analysis
* Lighthouse auditing
* Image optimization
* Lazy loading
* JavaScript loading strategies
* CSS optimization
* DOM optimization
* Browser caching concepts
* Core Web Vitals
* Performance comparison
* Accessibility and performance balance

---

## Future Improvements

Future versions of the project could include:

* Responsive images using `srcset`
* Further JavaScript code splitting
* Automated asset minification
* CDN integration
* Production-level caching headers
* Additional image compression
* Performance monitoring after deployment
* Automated performance testing during development

---

## Conclusion

This project demonstrates the practical process of analyzing and improving frontend performance. Instead of focusing only on visual design, the project considers how images, CSS, JavaScript, HTML structure and resource loading affect the overall user experience.

The original website was measured first, optimization techniques were then applied, and the optimized version was tested again. At the same time, the accessibility features from the previous project were preserved.

The project helped develop a better understanding of how small frontend improvements can contribute to a faster, more efficient and more usable website.

---

## Author

**Rehan Raza Shaikh**

**Project:** Accessible Information Portal
**Task:** Week 4 – Frontend Performance Optimization Challenge
**Technologies:** HTML, CSS, Vanilla JavaScript
