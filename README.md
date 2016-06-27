# MiniPin

[Heroku link](heroku)

[heroku]: http://www.minipin.herokuapp.com

## Minimum Viable Product

MiniPin is a web application inspired by Pinterest that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Profile
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Boards and Pins
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Follows
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Discover feed on home page
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Pins Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Pins can be read and Pinnings can be created through
the API.

- [ ] create `Pin` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for boards (`PinsController`)
- [ ] jBuilder views for pins
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Pins can be read and Pinnings can be created with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each Pin component, building out the flux loop as needed.
  - [ ] `PinIndex`
  - [ ] `PinIndexItem`
  - [ ] `PinDetail`
  - [ ] `PinForm`

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Boards (1 day, W2 Tu 12pm)

**Objective:** Pins belong to Boards, and can be viewed by Board.

- [ ] create `Board` model
- build out API, Flux loop, and components for:
  - [ ] Board CRUD
  - [ ] adding pins requires a board
  - [ ] moving pins to a different board
  - [ ] viewing pins by board
- Use CSS to style new views

Phase 3 adds organization to the Pins. Pins belong to a Board,
which has its own `Index` view.

### Phase 6: Follows (1 days, W2 Th 12pm)

**Objective:** Users can follow other users, and home page shows pins of followed users.

- [ ] create `Follow` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching followers for a user
  - [ ] fetching followed users of a user
  - [ ] fetching pins of followed users
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Pins (0.5 days, W2 Th 6pm)

**objective:** Enable complex styling of pins.

- [ ] Use Rails helpers to sanitize HTML before rendering.

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Creating new pins (rather than adding current pins to new board)
- [ ] Private boards
- [ ] Search pins and/or boards
- [ ] Pin likes

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
