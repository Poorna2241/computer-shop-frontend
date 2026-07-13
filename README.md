# Computer Shop Frontend 💻🛒

Welcome to the frontend application for the **Computer Shop** — a modern, responsive, and feature-rich E-Commerce platform built for buying and selling computer hardware, components, and accessories.

This React SPA is designed using a premium, high-performance tech stack utilizing **Vite**, **React 19**, **Tailwind CSS v4**, and **Supabase**.

---

## 🚀 Technology Stack

The project leverages a modern web development stack:

*   **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/) (fast builds and Hot Module Replacement)
*   **Routing:** [React Router DOM v7](https://reactrouter.com/) (declarative routing for client-side navigation)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS utility framework with CSS-first configuration)
*   **Database & Auth integration:** [Supabase SDK](https://supabase.com/) (for backend/storage integrations)
*   **Authentication:** [Google OAuth via `@react-oauth/google`](https://www.npmjs.com/package/@react-oauth/google) (for secure social sign-ins)
*   **HTTP Client:** [Axios](https://axios-http.com/) (for backend API communications)
*   **UI Helpers:**
    *   [React Icons](https://react-icons.github.io/react-icons/) (high-quality icon sets like Lucide, Fi, etc.)
    *   [React Hot Toast](https://react-hot-toast.com/) (beautiful toast notifications)
    *   [React Modal](https://reactcommunity.org/react-modal/) (accessible modal dialogs)

---

## 📁 Directory Structure

```directory
frontend/
├── public/                 # Static assets (logos, default graphics)
├── src/
│   ├── assets/             # Project assets (images, vectors)
│   ├── components/         # Reusable UI components
│   │   ├── header.jsx              # Global navigation bar & header
│   │   ├── imageSlider.jsx         # Carousel/slider for showcasing items
│   │   ├── loader.jsx              # Loading spinner component
│   │   ├── productCard.jsx         # Card layout for displaying products
│   │   ├── productDeleteButton.jsx # Admin-only product deletion component
│   │   ├── userData.jsx            # User profile/details display
│   │   ├── viewOrderInfo.jsx       # Order detail modal for admins
│   │   └── vieworderInfocustomer.jsx # Order detail modal for customers
│   ├── pages/              # Application pages (routed views)
│   │   ├── admin/                  # Admin-specific management subpages
│   │   │   ├── adminAddProductPage.jsx    # Add new products
│   │   │   ├── adminOrdersPage.jsx        # Manage user orders
│   │   │   ├── adminProductsPage.jsx      # View/filter catalog products
│   │   │   ├── adminUpdateProductPage.jsx  # Edit existing products
│   │   │   └── adminUsersPage.jsx         # User roles and list management
│   │   ├── aboutPage.jsx           # About the store and team
│   │   ├── adminPage.jsx           # Parent layout for Admin dashboard
│   │   ├── cart.jsx                # Shopping cart summary page
│   │   ├── checkOut.jsx            # Checkout page with billing/shipping info
│   │   ├── contactPage.jsx         # Customer support/contact details
│   │   ├── forgetPasswordPage.jsx  # Account recovery workflow
│   │   ├── homePage.jsx            # Customer-facing homepage & router
│   │   ├── loginPage.jsx           # Login credentials & OAuth screen
│   │   ├── registerPage.jsx        # Register new accounts
│   │   ├── ordersPage.jsx          # Customer order history list
│   │   └── productOverview.jsx     # Detail page for a specific product
│   ├── utils/              # Client side helper utilities
│   │   ├── cart.js                 # Cart state management (local storage etc.)
│   │   └── mediaUpload.js          # File & image upload utilities
│   ├── App.jsx             # Root layout and global routes
│   ├── index.css           # Global CSS variables and Tailwind directives
│   └── main.jsx            # Application entry point
├── package.json            # Scripts and dependencies
└── vite.config.js          # Vite custom configuration
```

---

## ✨ Features

### 🛒 Customer Experience
*   **Dynamic Landing Page:** Features categorized listings, feature benefits, and modern visual styling.
*   **Intuitive Catalog & Detail Views:** Showcase high-resolution images, specifications, price, and availability.
*   **Robust Shopping Cart & Checkout:** Easy management of items in cart, order overview, and secure order placement.
*   **Customer Dashboard:** View active orders, history, and status updates.
*   **Authentication:** Easy signup, login, password recovery, and secure **Google One-Tap / OAuth sign-in**.

### 🛠️ Administrative Portal (`/admin/*`)
*   **Order Tracking:** Review all client orders, check statuses, and update fulfillments.
*   **Inventory Control:** Add new computer products, upload hardware images, modify prices/descriptions, and delete items from the catalog.
*   **User Management:** Manage users, monitor accounts, and configure permissions.

---

## 🛠️ Getting Started

### 📋 Prerequisites
Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.

### ⚙️ Setup & Installation

1.  **Clone or navigate to the directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root of the project (if not already present) and supply the required API endpoints and clients:
    ```env
    VITE_BACKEND_URL=http://localhost:5000   # Your backend API server URL
    VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id.apps.googleusercontent.com
    VITE_SUPABASE_URL=your_supabase_project_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_public_key
    ```

4.  **Run Development Server:**
    To run the app locally with hot reloading:
    ```bash
    npm run dev
    ```
    The application will typically start running at `http://localhost:5173`.

5.  **Build for Production:**
    To build optimized assets for deployment:
    ```bash
    npm run build
    ```
    This will generate build artifacts inside the `dist` directory.
