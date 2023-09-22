---
sidebar_position: 2
title: User Profile and Projects
---

# Concept of Profile and Projects

## User Profile and Projects

In NEST Backend-as-a-Service (BaaS), all data (items, files, images, requests, etc.) are linked to a project. Each project has its unique project ID. Projects are linked to a user profile.

We automatically generate a **default project** for each user. If no project ID is provided, the default project is used.

To fetch all your projects and their IDs, send a `GET` request to `/v1/projects`.

```bash
curl --location 'https://api.nest.appbaza.com/v1/projects' \
--header 'Authorization: Bearer _YOUR_API_TOKEN_'
```

On a successful request, you will receive a response similar to the following:

```json
[
  {
    "id": "_ID_OF_THE_DEFAULT_PROJECT_",
    "name": "default"
  }
]
```

## Create a new project

Users can create as many projects as they want. Each project has its unique project ID.

:::info

For example, the project concept is useful when you want to separate your development and production environments. Or, you can create a project for each of your apps.

:::

To create a new project, send a `POST` request to `/v1/projects` with the following information:

```bash
curl --location 'https://api.nest.appbaza.com/v1/projects' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer _YOUR_API_TOKEN_' \
--data '{
    "name": "MY-FIRST-PROJECT"
}'
```

On a successful request, you will receive generated project ID in the response:

```json
{
  "id": "453cf828-8e4a-4ed5-b375-4806b7f87b73",
  "name": "MY-FIRST-PROJECT"
}
```

## Select a project

Clients can select a project for each request by sending a `nest-project-id` header. If no project ID is provided, the default project is used.

Good way to test this is to send a `GET` request to `/v1/pingpong` with a project ID:

```bash
curl --location 'https://api.nest.appbaza.com/v1/pingpong' \
--header 'Authorization: Bearer _YOUR_API_TOKEN' \
--header 'nest-project-id: 453cf828-8e4a-4ed5-b375-4806b7f87b73'
```

On a successful request, you will receive a response similar to the following:

```json
{
  // ...
  "metadata": {
    "nest": {
      "nest.project.resolved_name": "MY-FIRST-PROJECT",
      "nest.project.resolved_id": "453cf828-8e4a-4ed5-b375-4806b7f87b73",
      "nest.project.id": "453cf828-8e4a-4ed5-b375-4806b7f87b73"
    }
  // ...
}
```

If you send a wrong project ID, NEST Backend will use the default project, and you will see the following response:

```json
{
  // ...
  "metadata": {
    "nest": {
      "nest.project.resolved_name": "default",
      "nest.project.resolved_id": "_ID_OF_THE_DEFAULT_PROJECT_",
      "nest.project.id": ""
    }
  // ...
}
```

Here, project is resolved to the default project and user provided project ID (`nest.project.id`) is empty.



<br /><br /><br />

---

#### NEST: Backend as a Service / Overview / User Details, Profile, and Projects

##### Metadata:

- Generated: 2023-09-22
- Last updated: 2023-09-22

[Message](https://twitter.com/KenanBekk) or [email](mailto:ken@appbaza.com) us with feedback, questions, or requests.
