---
title: NEST
description: NEST - Backend-as-a-Service for Mobile and Web Applications.
hide_table_of_contents: false
---

# NEST: Backend-as-a-Service (BaaS)

## NEST Service

**NEST** is a backend-as-a-service and provides variety of features that are required for building modern mobile and web applications.

## Core Features

- Generic API for List and Detail Views.
- File storage and management.
- Image manipulation (upload, resize, crop, etc.).

## Advanced Features

### AI Integrations

#### OpenAI APIs

- Chat Completion API.
- Image Generation API.

#### AI API Proxy

All traffic to AI APIs is proxied through NEST Service. This allows us to add additional features on top of the
standard API such as:

- Caching.
- Rate limiting.
- Usage tracking.
- Billing estimation.

### Other Integrations

On top of the standard BaaS features, NEST provides the following features:

- Payment systems integration (Stripe, Lemon Squeeze, etc.).
- Email services (Postmark, SendGrid, MailChimp, etc.).
- Push notifications (Firebase, OneSignal, etc.).
- Management dashboard for your app and data.

:::tip Documentation

Learn more about NEST:

- Visit [**NEST Documentation**](/docs/nest) for developer documentation.
- Visit [**AppBaza.com/nest**](https://www.appbaza.com/nest) for product features and pricing.

:::

## How to use NEST for your mobile or web app?

### Ready-to-use backend APIs for your app

NEST Service can be used as a backend for your app. It provides all the standard BaaS features (storage, authentication,
etc.) and also integrates with Firebase, Payment APIs, and AI APIs.

By using NEST Service, you can focus on building your app and not worry about the backend.

### Generic API for List and Detail Views

Often, you will need to create a list of items that can be displayed in a table or a list view. Usually, you will also need to add

- a search feature to the list,
- a detail view to display the details of an item,
- and a delete feature to delete an item from the list.

NEST Service provides a standard Items API that can be used to create a list of items and a detail view for each item.

Items API also supports filtering by type, category, and group. It also supports advanced search by JSON properties.

### Backend APIs for File and Image Management

NEST Service provides a simple API to upload and then manage files. It also provides a specific set of APIs for image manipulation (upload, resize, crop, etc.).

All files and images can be references in other APIs.

For example, upload and crop image, and later use it for Image Generation AI API.

### API Proxy for AI Integrations

Directly integrating with AI APIs can be challenging. Especially if you expect the same set of technical features (caching, rate limiting, billing estimation, etc.) from all of them.

NEST Service provides a simple API for integrating with AI APIs. It also provides a proxy for AI APIs that allows us to add additional features on top of the standard API.

Additionally, we take care of version compatibility and provide a unified API for all AI APIs.

:::caution Project Status

NEST is currently in private beta. If you are interested in trying it out, please <a href="mailto:ken@appbaza.com">contact us</a>.

- [Project Development Tracker](/docs/nest/development-status)

:::
