---
sidebar_position: 1
title: Overview
---

# NEST: Backend-as-a-Service (BaaS)

**NEST** is a backend-as-a-service (BaaS) for mobile, web, and games.

NEST Backend's primary goal is **ease of integration** and **usage**. It provides a simple and easy-to-use API for all its features.

## Steps

To get started with NEST Backend, follow these steps:

1. Create a profile and activate it
2. Install client SDK and integrate with your application
3. Start using the NEST Backend

:::info

This documentation provides all the required information to integrate NEST Backend into your application.

Visit [**AppBaza.com/NEST**](https://AppBaza.com/nest) for more information about NEST features.

:::

## Quickstart

### Create a profile

You can create a profile by sending a `POST` request to `/v1/auth/register` with the following information:

```bash
curl --location 'https://api.nest.appbaza.com/v1/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "_YOUR_EMAIL_",
    "password": "_YOUR_PASSWORD_"
}'
```

After successful registration, you will receive a confirmation email. Click on the link to confirm your email.

### Generate a token

To start using NEST Backend APIs, you need to generate a token. You can generate a token by sending a `POST` request to `/v1/auth/login` with the following information:

```bash
curl --location 'https://api.nest.appbaza.com/v1/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "_YOUR_EMAIL_",
    "password": "_YOUR_PASSWORD_"
}'
```

You will receive a token in the response. Use this token to access NEST Backend APIs.

### Test your token

By using [PingPong API](/docs/nest/backend/api/pingpong-api), you can test your settings.

Send a `GET` request to `/v1/pingpong`:

```bash
curl --location 'https://api.nest.appbaza.com/v1/pingpong' \
--header 'Authorization: Bearer _YOUR_API_TOKEN_'
```

As you can see, we have used the token in the `Authorization` header.

If the setup is correct, you will get detailed information about your profile and NEST backend service.

`Authorization` header is used to authenticate your request. You need to use this header in all your requests to NEST Backend.

:::success

You are now ready to start using NEST Backend-as-a-Service.

Let's dive deep into NEST Backend features and learn more about user profiles and projects.

:::

<br /><br /><br />

---

#### NEST: Backend as a Service / Overview / Getting Started

##### Metadata:

- Generated: 2023-08-14
- Last updated: 2023-09-22

[Message](https://twitter.com/KenanBekk) or [email](mailto:ken@appbaza.com) us with feedback, questions, or requests.
