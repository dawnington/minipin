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

### Pins

- `GET /api/pins`
  - Pins index/search
- `GET /api/pins/:id`

### Boards

- `GET /api/boards`
- `POST /api/boards`
- `GET /api/boards/:id`
- `PATCH /api/boards/:id`
- `DELETE /api/boards/:id`
- `GET /api/boards/:id/pins`
  - index of all notes for a notebook
  - accepts pagination params (if I get there)
