# 🏞️ The Wild Oasis — Customer Website

Welcome to **The Wild Oasis Website**, the official customer-facing page for a fictional boutique hotel nestled in the heart of the Dolomites 🇮🇹.  
This project is the **Part 5** of the [Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/), and serves as a continuation of the **Wild Oasis internal app**.

> 🌐 Live demo: [the-wild-oasis-website-course-two.vercel.app](https://the-wild-oasis-website-course-two.vercel.app)

---

## ✨ Features

- 📸 **Cabin Catalog** – View all luxury cabins with photos, descriptions, and pricing.
- 🎯 **Filtering** – Filter cabins by guest capacity.
- 📆 **Reservation System** – Select date range and book available cabins.
- 🔐 **Authentication** – Login via Google account (powered by `NextAuth.js` and `Supabase`).
- 🧑‍💼 **User Area** – View, update, or delete your reservations.
- 👤 **Guest Profile** – Manage personal details to speed up check-in.
- 🖥️ **Responsive Design** – Fully optimized for mobile and desktop.

---

## 🚀 Tech Stack

| Tech | Description |
|------|-------------|
| **Next.js 14** | React meta-framework for routing, SSR, and more |
| **Tailwind CSS** | Utility-first styling for rapid UI development |
| **Supabase** | PostgreSQL-based backend with authentication and API |
| **NextAuth.js** | Seamless authentication using Google provider |
| **React Day Picker** | For elegant date selection |
| **Date-fns** | Lightweight date utilities |
| **Heroicons** | Stylish icons used across the UI |

---

## 🧠 Architecture

This app is a **client-facing web application** that consumes the **same Supabase backend** as the [internal admin dashboard](https://github.com/Begriper/the-wild-oasis).

- Uses **file-based routing** in Next.js.
- Features both **public pages** (`Home`, `Cabins`, `About`) and **private pages** under `/account`:
  - `/account/reservations`
  - `/account/profile`

---

## 📂 Pages Overview

| Path | Description |
|------|-------------|
| `/` | Homepage with hero section |
| `/cabins` | List and filter available cabins |
| `/cabins/[cabinId]` | View details and make reservation |
| `/about` | Info about hotel history and philosophy |
| `/account` | Protected area for logged-in guests |
| `/account/reservations` | List of past and upcoming bookings |
| `/account/profile` | Update guest personal info |
| `/login` | Login page (Google OAuth only) |

---

## 🔑 Login Info

This project uses **Google authentication only**.  
To access guest features like booking or reservation management, please sign in using a Google account.

---

## 📦 Setup Instructions

# Clone the repository
git clone https://github.com/your-username/the-wild-oasis-website.git
cd the-wild-oasis-website

# Install dependencies
npm install

# Run the development server
npm run dev



🙋‍♂️ Author
František Stolar
Frontend Developer building modern React apps with style and purpose.
Follow my journey: github.com/Begriper

📜 License
This project is part of the Ultimate React Course by Jonas Schmedtmann. For educational and portfolio use only.
