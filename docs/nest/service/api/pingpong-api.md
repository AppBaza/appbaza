---
title: PingPong API
description: PingPong is a basic REST API to exchange client and server version information.
tags:
- nest-api
---

# PingPong API

PingPong is a basic REST API to exchange client and server version information. Additionally, client can send a source
information to indicate which component is sending the request.

Supports GET (no client version and source) and POST (with client version and source) requests.

:::info

This API is designed for testing purposes.

:::

## Create a basic PingPong request


### Request

<Tabs
defaultValue="curl"
values={[
{ label: 'cURL', value: 'curl' },
{ label: 'HTTP', value: 'http' }
]}
groupId="code-snipets"
>
<TabItem value="curl">

```bash
curl -L "https://api.nest.appbaza.com/v1/pingpong" \
-H "Authorization: Bearer <YOUR API TOKEN>"
```

</TabItem>
<TabItem value="http">

```http
GET /v1/pingpong HTTP/1.1
Host: api.nest.appbaza.com
Authorization: Bearer <YOUR API TOKEN>
```

</TabItem>
</Tabs>

### Response

```json
{
  "id": null,
  "nestVersion": "0.5.0",
  "metadata": {
    "nest": {
      "nest.project.resolved_name": "default",
      "nest.project.resolved_id": "7a86a6d4-dfd1-41af-b715-92ae4b45ba32",
      "nest.project.id": ""
    },
    "userDetails": {
      "credentialsNonExpired": "true",
      "accountNonExpired": "true",
      "authorities": "[ROLE_USER]",
      "enabled": "true",
      "username": "ken@appbaza.com",
      "accountNonLocked": "true"
    },
    "authentication": {
      "name": "ken@appbaza.com",
      "isAuthenticated": "true",
      "authorities": "[ROLE_USER]"
    }
  }
}
```

<br /><br /><br />

---

#### NEST: Backend as a Service / PingPong API - PingPong is a basic REST API to exchange client and server version information.

##### Metadata:

- Generated: 2023-08-07
- Last updated: 2023-09-20

[Message](https://twitter.com/KenanBekk) or [email](mailto:ken@appbaza.com) us with feedback, questions, or requests.
