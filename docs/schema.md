# Schema Information

## pins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image_url   | string    | not null

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## pinnings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
pin_id      | integer   | not null, foreign key (references pins), indexed, unique [tag_id]
board_id    | integer   | not null, foreign key (references boards), indexed
description | text      |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
