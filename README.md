# Anand Tiwari - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion. Inspired by the beautiful design of react-chatbotify themes.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Elements**: Hover effects and smooth transitions
- **Performance Optimized**: Fast loading and smooth scrolling
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **CSS3** - Modern styling with gradients and effects

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section with intro
│   │   ├── About.tsx           # About me section
│   │   ├── Skills.tsx          # Skills and expertise
│   │   ├── Projects.tsx        # Featured projects
│   │   ├── Contact.tsx         # Contact form and info
│   │   ├── Footer.tsx          # Footer with links
│   │   └── *.css              # Component styles
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # React entry point
│   ├── index.css              # Global styles
│   └── App.css                # App-specific styles
├── public/                    # Static assets
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.ts            # Vite configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple to blue gradient (#667eea to #764ba2)
- **Accent Color**: Gold (#ffd700)
- **Background**: Dark gradient with glassmorphism effects

### Typography
- **Font**: Inter (system font stack)
- **Headings**: Bold weights with gradient text effects
- **Body**: Clean, readable text with proper line heights

### Animations
- **Page Load**: Fade-in animations for sections
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Smooth transitions on interactive elements
- **Floating Elements**: Subtle floating animations

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, title, and description
- `src/components/About.tsx` - About me content and stats
- `src/components/Skills.tsx` - Your skills and expertise levels
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Contact information

### Styling
- Modify `src/App.css` for global styles
- Update component-specific CSS files for individual styling
- Change color variables in CSS files to match your brand

### Content
- Replace placeholder text with your actual content
- Update social media links
- Add your own projects and images
- Customize the contact form

## 🎯 Sections

### Hero Section
- Animated introduction with your name and title
- Call-to-action buttons
- Social media links
- Floating code card animation

### About Section
- Personal description
- Key statistics
- Feature cards highlighting your strengths

### Skills Section
- Categorized skills (Frontend, Backend, Tools)
- Animated progress bars
- Skill proficiency levels

### Projects Section
- Featured projects with descriptions
- Technology tags
- Links to GitHub and live demos
- Hover effects with project overlays

### Contact Section
- Contact form with validation
- Contact information cards
- Social media links

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- Functional components with hooks
- CSS modules for component styling
- Framer Motion for animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: anand.tiwari@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [@yourusername](https://linkedin.com/in/yourusername)

## 📧 EmailJS Setup

The contact form uses EmailJS to send emails directly from the frontend. To set this up:

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Get your credentials** from [https://dashboard.emailjs.com/admin/account](https://dashboard.emailjs.com/admin/account):
   - Service ID
   - Template ID  
   - Public Key

3. **Create a `.env` file** in the root directory:
   ```bash
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

4. **Create an email template** in EmailJS dashboard with variables:
   - `{{to_email}}` - Recipient email
   - `{{from_name}}` - Sender name
   - `{{from_email}}` - Sender email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message

**Note**: If EmailJS is not configured, the form will fallback to opening the user's default email client.

---

Made with ❤️ by Anand Tiwari # anand-tiwari-portfolio
# anand-portfolio
# anand-portfolio
