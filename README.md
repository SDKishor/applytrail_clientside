# ApplyTrail - Job Application Tracker

**ApplyTrail** is a web application that helps job-seekers track and manage their job applications. It allows users to organize their applications, set reminders, stay updated with relevant blogs, and gain insights into their application progress. With Clerk authentication and mobile optimization, ApplyTrail provides a seamless and personalized experience.

---

## Features

- **Dashboard:**

  - Overview of job applications with sorting, filtering, and pagination features.
  - Quick access to reminders, blogs, analytics, and profile settings.

- **Job Application Tracker:**

  - Track and manage job applications, including status updates and deadlines.

- **Reminder Page:**

  - Set reminders for important dates related to job applications.

- **Blog Page:**

  - Integrated with the DEV.to public API to display job-related blogs.
  - Search, filter, and pagination functionality for easy navigation.

- **Analytics Page:**

  - Provides insights into job application activity.

- **Profile and Settings Pages:**

  - Manage personal details and preferences.

- **Authentication:**

  - Sign In and Sign Up functionality powered by **Clerk** for secure authentication.

- **Mobile Optimization:**
  - Fully responsive design for mobile devices.

---

## Technologies Used

- **Frontend:**

  - React
  - TypeScript
  - Tailwind CSS
  - ShadCN (for UI components)
  - GSAP (for animations, minor usage)

- **Backend:**

  - Node.js (if applicable)
  - Express (if applicable)
  - Mongoose for MongoDB (if applicable)

- **Authentication:**

  - Clerk (for secure sign-in and sign-up functionality)

- **APIs:**
  - DEV.to public API (for blogs)
  - Axios (for data fetching)

---

## Installation

To get started with the project locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ApplyTrail.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ApplyTrail
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create an `.env` file in the root directory and add the following environment variables:

   ```env
   REACT_APP_CLERK_FRONTEND_API=your-clerk-frontend-api-url
   REACT_APP_CLERK_API_KEY=your-clerk-api-key
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and go to `http://localhost:3000` to see the application running.

---

## Authentication

This project uses **Clerk** for authentication, which allows users to sign up, sign in, and manage their accounts. The following routes are available:

- **Sign In**: `/sign-in`
- **Sign Up**: `/sign-up`
- After authentication, users are redirected to the dashboard page.

---

## Deployment

To deploy the project:

1. Build the application for production:

   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting provider (e.g., Vercel, Netlify, or your custom server).

---

## Contributing

If you'd like to contribute to **ApplyTrail**, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to your forked repository.
5. Open a pull request to the main repository.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- **Clerk** for authentication.
- **DEV.to API** for job-related blog content.
- **Tailwind CSS** for styling.
- **React** and **TypeScript** for frontend development.

---

## Contact

For questions or feedback, feel free to reach out to me at [kishorsutradhar32@gmail.com](mailto:kishorsutradhar32@gmail.com)
