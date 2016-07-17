# MiniPin

[MiniPin live][heroku]

[heroku]: http://www.minipin.herokuapp.com

MiniPin is a full-stack web application inspired by Pinterest and minimalist design.

## Features & Implementation  

### Boards and Pins

  Users can create and edit boards, and boards can be private or public. Private boards and their pins will not be accessible by other users. The simple design allows users easy access their boards.

  ![sidebar]

  Pins can be created by adding an image through the Cloudinary widget, or added from another board.

  ![pinform]

### Profiles and Following

  Users can follow other users, and each user's home page features a feed of pins from the users they follow.

  ![feed]

  Profile pages feature a user's boards, pins, followers, and the users they are following.

  ![following]

### Tags and Search

  Pins can have tags and are searchable. Searching utilizes a custom Rails query that searches tags and pin descriptions in order to find the widest range of results.

  ![search]

<!-- [board]: ./docs/screenshots/board.png -->
[sidebar]: ./docs/screenshots/sidebar.png
[pinform]: ./docs/screenshots/pinform.png
[feed]: ./docs/screenshots/feed.png
[following]: ./docs/screenshots/following.png
[search]: ./docs/screenshots/search.png
