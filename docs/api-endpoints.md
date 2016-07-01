# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Users

- `GET /user/:id`
- `GET /user/:id/followers`
- `GET /user/:id/followees`

### Pinnings
 - `POST /api/pinnings`
 - `PATCH /api/pinnings/:id`
 - `DELETE /api/pinnings/:id`

### Boards

- `GET /api/boards`
- `POST /api/boards`
- `GET /api/boards/:id`
- `PATCH /api/boards/:id`
- `DELETE /api/boards/:id`
- `GET /api/boards/:id/pinnings`
  - index of all pinnings for a board
