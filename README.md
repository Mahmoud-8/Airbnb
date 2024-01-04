# Full Stack Airbnb Clone with Next.js 13 App Router

![Alt text](<Screenshot 2024-01-04 at 2.50.23 PM.png>)


## Project Overview

This repository contains a Full Stack Airbnb Clone with Next.js 13 App Router. The project is built using React, Tailwind, Prisma, MongoDB, and NextAuth.

**VIDEO TUTORIAL:** [Watch the Video](https://youtu.be/YYHlNdip-zY)

## Features

- **Tailwind Design:** Stylish and modern UI with Tailwind CSS.
- **Tailwind Animations and Effects:** Enhanced user experience with animations.
- **Full Responsiveness:** Seamless user experience across various devices.
- **Credential Authentication:** Standard username/password authentication.
- **Google Authentication:** Sign in with Google account.
- **Github Authentication:** Sign in with Github account.
- **Image Upload using Cloudinary CDN:** Efficiently handle image uploads.
- **Client Form Validation and Handling:** Utilize react-hook-form for client-side form validation.
- **Server Error Handling:** Implement error handling with react-toast.
- **Calendars with react-date-range:** User-friendly date selection for booking.
- **Page Loading State:** Indicate loading state to users.
- **Page Empty State:** Handle scenarios where the page is empty.
- **Booking / Reservation System:** Manage property reservations.
- **Guest Reservation Cancellation:** Allow guests to cancel reservations.
- **Owner Reservation Cancellation:** Allow property owners to cancel reservations.
- **Property Management:** Create and delete properties.
- **Pricing Calculation:** Automatic pricing calculation for reservations.
- **Advanced Search Algorithm:** Filter properties by category, date range, map location, number of guests, rooms, and bathrooms.
- **Favorites System:** Save and view favorite properties.
- **Shareable URL Filters:** Share search criteria via URL.
- **Direct Database Access in Server React Components:** Fetch data in server React components without an API (Magic!).
- **Handling Files (error.tsx and loading.tsx):** Utilize Next 13 templating files for unified loading and error handling.
- **Handling Relations between Server and Child Components:** Manage relationships effectively.

## Prerequisites

Ensure you have Node version 9.5.1 installed.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/Mahmoud-8/rent-your-home.git]
   ```

2. **Install Packages:**
   ```bash
   npm i
   ```

3. **Setup .env File:**
   ```
   DATABASE_URL=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   GITHUB_ID=
   GITHUB_SECRET=
   NEXTAUTH_SECRET=
   ```

4. **Setup Prisma:**
   ```bash
   npx prisma db push
   ```

5. **Start the App:**
   ```bash
   npm run dev
   ```

## Available Commands

Run commands using npm:
```bash
npm run [command]
```

- **dev:** Start a development instance of the app.

