# Passion Project

## 👐🏻 WU Tang, SOULJA BOI Telen 📞👄, Wiz Kuahlifa 🕶 🚬

### Overview

This app will be a modern neighborhood watch / community building app.

### Tech Stack

React, Express, NodeJS, MongoDB
passportJS, JWT

### Features

### Minimum Viable Products

MVP 1:

- users are able to register and log in
  - User:
    - username, email, password, firstName, lastName, location
- users are able to search for community groups
- users are able to join community groups
  - Community:
    - name, location, administrator, description, content: [posts], [users]
- users are able to post incident reports in the joined community group
  - Post:
    - title, description, date, author, category: enum[incident reports]

MVP 2:

- users should be able to find groups in their area using a map
- on load, app should show groups where community.location === user.location
- users are able respond (comment/like) on each post

MVP 3:

- users can post in different channels (eg. social events, discussions)
- Post: - title, description, date, author, category: enum[incident reports, social events, discussions]

MVP 4:

- Premium accounts for Stratas to coordinate community members
