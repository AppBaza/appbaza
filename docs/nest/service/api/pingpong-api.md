---
title: PingPong API
---

# PingPong API

PingPong is a basic REST API to exchange client and server version information. Additionally, client can send a source
information to indicate which component is sending the request.

Supports GET (no client version and source) and POST (with client version and source) requests.

:::info

This API is designed for testing purposes only.

:::

## GET

Request NEST backend's version information.

### Request

```bash
curl -X GET https://api.nest.appbaza.com/v1/pingpong
```

### Response

```json
{
  "id": "8ccba5a3-7822-4819-ad8f-0bc4ce48a230",
  "pongVersion": "0.1.0"
}
```

## POST

Post client version and source and receive NEST backend's version information.

### Request

```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"source": "nest-∂dashboard", "version": "1.0.0"}' \
  https://api.nest.appbaza.com/v1/pingpong
```

### Response

```json
{
  "id": "493fc1ef-bcbc-4fd3-a611-278aa43c8cb3",
  "pongVersion": "0.1.0"
}
```



<br /><br /><br />

---

#### Doc's metadata:

- Created: 2023-08-07
- Last updated: 2023-08-07

Something missing or want to request an additional feature? [Message me](https://twitter.com/KenanBekk) or email me
here: `ken [at] AppBaza [dot] com`.
