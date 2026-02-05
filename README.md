# Personal Portfolio Website

A modern, responsive, and interactive personal portfolio website built with React, Vite, and Tailwind CSS. This project showcases skills, projects, and achievements with a clean design, dark/light mode support, and a fully functional contact form.

## 🚀 Features

-   **Modern UI/UX**: Built with a "glassmorphism" aesthetic and smooth animations using [Framer Motion](https://www.framer.com/motion/).
-   **Responsive Design**: Fully responsive layout that looks great on all devices (Mobile, Tablet, Desktop).
-   **Theme System**: Seamless Light & Dark mode toggle with [Next Themes](https://github.com/pacocoursey/next-themes).
-   **Real-time Contact Form**: 
    -   Integrated with [EmailJS](https://www.emailjs.com/).
    -   Sends instant notifications to the portfolio owner.
    -   Sends an auto-reply confirmation to the sender.
    -   Form validation and toast notifications using [Sonner](https://sonner.emilkowal.ski/).
-   **Component Library**: Utilizes [Radix UI](https://www.radix-ui.com/) primitives for accessible and robust components.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS (v4)](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Animations**: [Motion](https://motion.dev/)
-   **Email Service**: [EmailJS](https://www.emailjs.com/)

## 🏗️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your EmailJS credentials. You can find these in your EmailJS dashboard.

    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_ADMIN_TEMPLATE_ID=your_admin_notification_template_id
    VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_user_auto_reply_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    > **Note:** Use `.env.example` as a reference.

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📜 Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run preview`: Preview the production build locally.

## 🤝 Contributing

Contributions are welcome! If you find a bug or want to add a new feature:

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Shubh Dixit](https://github.com/Shubh-Dixit)
