# BLOCKWATCH

### A Passion Project by 👐🏻 WU Tang, SOULJA BOI Telen 📞👄, Wiz Kuahlifa 🕶

### Overview

<i>Wouldn't you like to know if your neighbour's house got broken into last week? <br/><br/> Don't you wish you remembered to send a welcome gift to that couple who moved in down the street? <br/><br/> How often have we lived in buildings and never even talked to the people on our floor?<br/><br/> Remember those old neighbourhood blockwatches? ...</i>

<b>WE ARE BUILDING A MODERN NEIGHBOURHOOD BLOCKWATCH! </b>

This is a community building app. With this app, we aim to help our users find their community and get to know the people around them. Users can report incidents in their neighborhood, discuss community issues, and schedule community events.

Currently, communities use platforms such as Facebook to form groups however these groups are often by invite only and are difficult to find. This app is targeted to community groups only and aims to help your community become a safer, warmer and more pleasant place to live.

### Tech Stack

React, Express, NodeJS, MongoDB
passportJS, JWT

### Prototype

[Figma Prototype](https://www.figma.com/file/2CuDFzcuuQ4WG493aJDGKK/BLOCKWATCH?node-id=4%3A1)

### Features

### Minimum Viable Products

MVP 1:

- users are able to register and log in
  - User: username, email, password, firstName, lastName, location
- users are able to search for community groups
- users are able to join community groups
  - Community: name, location, administrator, description, content: [posts], [users]
- users are able to post incident reports in the joined community group
  - Post: title, description, date, author, category: enum[incident reports]

MVP 2:

- users should be able to find groups in their area using a map
- on load, app should show groups where community.location === user.location
- users are able respond (comment/like) on each post

MVP 3:

- users can post in different channels (eg. social events, discussions)
- Post: - title, description, date, author, category: enum[incident reports, social events, discussions]

MVP 4:

- Premium accounts for Stratas to coordinate community members
