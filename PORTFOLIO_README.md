# Neekson Shrestha - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 15, React 19, and CSS Modules. Features smooth animations, a clean dark theme, and an elegant design showcasing projects, skills, and experience.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15 App Router and React 19
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Theme**: Elegant dark color scheme with custom design
- **Smooth Animations**: Intersection Observer-based scroll animations
- **Component-Based**: Modular architecture with CSS Modules
- **Performance Optimized**: Fast loading times and minimal bundle size
- **SEO Friendly**: Optimized metadata and semantic HTML

## 🎨 Design

### Color Palette
- **Background**: `#0D1117` (Deep dark blue-black)
- **Surface/Cards**: `#161B22` (Slightly lighter dark)
- **Primary Text**: `#E6EDF3` (Light gray-white)
- **Accent**: `#3B82F6` (Vibrant blue)
- **Secondary**: `#8B949E` (Muted gray)

### Typography
- **Headings**: Inter (Google Fonts)
- **Body**: JetBrains Mono (Google Fonts)

## 📋 Sections

1. **Hero Section**: Animated introduction with typing effect
2. **About Me**: Education, experience, awards, and interests
3. **Skills**: Interactive skill bars across multiple categories
4. **Projects**: Featured project cards with descriptions and tags
5. **Contact**: Contact form and email with copy functionality
6. **Footer**: Social links and back-to-top button

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Navigate to the project directory**:
   ```bash
   cd /home/selkie/p_web/portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navbar/
│       │   │   ├── Navbar.js
│       │   │   └── Navbar.module.css
│       │   ├── Hero/
│       │   ├── About/
│       │   ├── Skills/
│       │   ├── Projects/
│       │   ├── Contact/
│       │   └── Footer/
│       ├── layout.js
│       ├── page.js
│       └── globals.css
├── public/
├── package.json
└── README.md
```

## 🎯 Key Technologies

- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **CSS Modules**: Scoped component styling
- **React Icons**: Icon library
- **Framer Motion**: Animation library (optional enhancement)

## 🔧 Customization

### Update Personal Information

Edit the content in each component file:
- **Bio**: `src/app/components/About/About.js`
- **Skills**: `src/app/components/Skills/Skills.js`
- **Projects**: `src/app/components/Projects/Projects.js`
- **Contact Email**: `src/app/components/Contact/Contact.js`

### Modify Colors

Update CSS variables in `src/app/globals.css`:
```css
:root {
  --bg-primary: #0D1117;
  --bg-surface: #161B22;
  --text-primary: #E6EDF3;
  --accent-blue: #3B82F6;
  --accent-gray: #8B949E;
}
```

### Add Profile Picture

Replace the placeholder in `src/app/components/Hero/Hero.js` with an image component:
```jsx
<Image src="/profile.jpg" alt="Neekson Shrestha" width={180} height={180} />
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

Deploy easily to Vercel, Netlify, or any hosting platform that supports Next.js:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Neekson Shrestha**
- GitHub: [@Selkie-the-goat](https://github.com/Selkie-the-goat/)
- Email: info@neeksonshrestha.com.np

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by React Icons
- Fonts by Google Fonts

---

Built with ❤️ using Next.js
