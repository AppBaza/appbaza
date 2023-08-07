---
title: NEST
description: NEST - Backend-as-a-Service with Next.js and Payments, AI APIs, and more.
hide_table_of_contents: false
---

# NEST

**NEST** is a backend-as-a-service (BaaS) application.

On top of standard BaaS features (storage, authentication, etc.), NEST also provides easy-to-use integration APIs for:

- AI services,
- Payment systems (Stripe, Lemon Squeeze, etc.),
- Email services (Postmark, SendGrid, MailChimp, etc.).
- and more.

Optionally, NEST also provides a web-based dashboard to manage your app and data.

## Project Overview

The NEST project consists of the following parts:

- **NEST Service**: Backend application that integrates with Firebase, Payment APIs, and AI APIs and
  exposes an easy-to-use API for web and mobile applications. On top of these APIs will also be Client SDKs for the most
  popular stacks (JavaScript, Dart, Flutter, etc.).

- **NEST Dashboard**: Next.js Web application that integrates with <u>NEST Service</u> and Firebase and provides ready-to-use
  dashboards for User Management, Payments, AI APIs, and more.

Check [NEST documentation page](/docs/nest) for more detail information.

### NEST Service

**NEST Service** is the actual backend application that integrates with Firebase, Payment APIs, and AI APIs and
exposes an easy-to-use API for web and mobile applications. On top of these APIs will also be Client SDKs for the most
popular stacks (JavaScript, Dart, Flutter, etc.).

The service can be used in the following ways:

### NEST Dashboard

**NEST Dashboard** is a Next.js Web application that integrates with the <u>NEST Service</u> and Firebase and provides ready-to-use
dashboards and features such as User Management, Payments, AI APIs, and more.



## How you can use NEST?

### Backend for your app

NEST Service can be used as a backend for your app. It provides all the standard BaaS features (storage, authentication,
etc.) and also integrates with Firebase, Payment APIs, and AI APIs.

### Management Dashboard for the NEST Service

NEST Service also comes with a web-based dashboard that can be used to manage your app and data.

### Project template for building a custom dashboard

Since NEST Dashboard is a Next.js application, it can be used as a starting point for building a custom dashboard. It
already comes with NEST Service integration and will include polished UI components that you can use for user facing
pages.

### Project template for building a custom web application

Since NEST Service is a Next.js application, it can be used as a starting point for building a custom web application.
It already comes with NEST integration and will include polished UI components that you can use for user facing pages.

### Project template for building a custom mobile application

Since NEST Service is a Next.js application, it can be used as a starting point for building a custom mobile
application. It already comes with NEST integration and will include polished UI components that you can use for user
facing pages.

### Project template for building a custom backend

Since NEST Service is an open-source application, it can be used as a starting point for building a custom backend. It
already comes with NEST integration and will include polished UI components that you can use for user facing pages.

---


## Project Status

The project is currently in the early development phase.

| Feature                                    | NEST Service | NEST Dashboard          | Public API | SDK | Open Source | [Expected] Release Date |
|--------------------------------------------|--------------|-------------------------|------------|-----|-------------|-------------------------|
| **Core Features**                          |
| Initial Project                            | ✅            | 🚧                      | 🚧         | ❌   | 🚧          | 2023 Week 32            |
| Authentication                             | ❌            | ✅ (with Firebase)       | ❌          | ❌   | ❌           | 2023 Q3                 |
| User Management                            | ❌            | ❌                       | ❌          | ❌   | ❌           | 2023 Week 3x            |
| Data Storage                               | ❌            | ❌                       | ❌          | ❌   | ❌           | 2023 Week 32-33         |
| File Storage                               | ❌            | ❌                       | ❌          | ❌   | ❌           | 2023 Q3                 |
| **Web & Mobile App Features**              |
| Special data API for List and Detail views | 🚧           | ❌                       | 🚧         | ❌   | ❌           | 2023 Week 32-33         |
| **Integrations**                           |
| Payments (Stripe)                          | ❌            | ✅(directly with Stripe) | ❌          | ❌   | ❌           | 2023 Q3                 |
| AI (OpenAI, GPT API)                       | ❌            | ❌                       | ❌          | ❌   | ❌           | 2023 Q3                 |

Follow [@KenanBekk](https://twitter.com/KenanBekk) for development updates and [@AppBazaCOM](https://twitter.com/AppBazaCOM)
for feature announcements.
