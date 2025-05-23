# YouTube Clone 🎥

A modern YouTube clone built from scratch using React and modern web technologies. This application replicates the core functionality and UI of YouTube with a clean, responsive design.

![YouTube Clone Screenshot](https://via.placeholder.com/800x400/ff0000/ffffff?text=YouTube+Clone+Preview)

## 🚀 Features

- **Pixel-perfect UI**: Interface closely resembling the original YouTube website
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dynamic Navigation**: Collapsible sidebar with smooth animations
- **Video Integration**: Real YouTube videos using YouTube Data API v3
- **Modern Architecture**: Built with React and Redux for state management
- **Fast Performance**: Powered by Parcel bundler for lightning-fast builds

## 🛠️ Tech Stack

- **Frontend Framework**: React.js
- **Bundler**: Parcel
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **API**: YouTube Data API v3
- **Development**: ES6+, Modern JavaScript

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/nilaykothekar/youtube.git
   ```

2. **Navigate to project directory**
   ```bash
   cd youtube
   ```

3. **Open in Visual Studio Code**
   ```bash
   code .
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start the development server**
   ```bash
   npm run start
   ```

6. **Open your browser**
   Navigate to `http://localhost:1234/`

🎉 **That's it! Your YouTube clone should now be running locally.**

## 🔑 API Configuration

This application uses the YouTube Data API v3. The API key has been configured for demonstration purposes. For production use, you'll need to:

1. Get your own API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable YouTube Data API v3
3. Replace the API key in your environment configuration

## 🎨 Key Features Implemented

### UI Components
- ✅ Header with search functionality
- ✅ Collapsible sidebar navigation
- ✅ Video grid layout
- ✅ Video cards with thumbnails
- ✅ Responsive design across all devices

### Functionality
- ✅ Redux Toolkit for sidebar toggle state
- ✅ YouTube API integration for video data
- ✅ Dynamic video loading
- ✅ Search functionality
- ✅ Category-based filtering

## 🏗️ Project Structure

```
youtube-clone/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── VideoCard/
│   │   └── VideoList/
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   ├── utils/
│   │   ├── api.js
│   │   └── constants.js
│   ├── styles/
│   └── App.js
├── public/
├── package.json
└── README.md
```

## 🚀 Development Highlights

- **Built from Scratch**: Every component and feature developed without using pre-built templates
- **Modern React Patterns**: Utilizing hooks, functional components, and modern React practices
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Redux Toolkit**: Simplified Redux usage for efficient state management
- **Parcel Bundler**: Zero-configuration build tool for fast development and production builds

## 📱 Responsive Design

The application is fully responsive and provides an optimal viewing experience across:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop (1024px and up)
- 🖥️ Large screens (1200px and up)

## 🔄 State Management

Redux Toolkit is used for managing:
- Sidebar toggle state
- Video data caching
- Search query state
- Application-wide UI states

## 🌟 Future Enhancements

- [ ] Video player functionality
- [ ] User authentication
- [ ] Comment system
- [ ] Like/dislike functionality
- [ ] Subscription management
- [ ] Video upload capability
- [ ] Dark/light theme toggle

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Nilay Kothekar**
- GitHub: [@nilaykothekar](https://github.com/nilaykothekar)

## 🙏 Acknowledgments

- YouTube for the inspiration and API
- React community for excellent documentation
- Tailwind CSS for the amazing utility-first framework
- Redux team for simplified state management tools

---

⭐ Don't forget to star this repository if you found it helpful!

#React #JavaScript #YouTube #WebDevelopment #TailwindCSS #Redux

