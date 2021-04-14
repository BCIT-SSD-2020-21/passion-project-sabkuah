# RESTful API Documentation by Russ, Kal and Sab &copy;

## USERS

### `POST`

### Register User

### `/api/users/register`

### Sample body:

    {
        "email": "kal@gmail.com",
        "username": "kal@gmail.com",
        "firstName": "Kal",
        "lastName": "Tang",
        "location": "Richmond",
        "avatar": <optional string>,
        "password": "password"
    }

### Sample response:

    {
        "accessToken": <accessToken>
    }

<hr>

### `POST`

### Login User

### `/api/users/login`

### Sample body:

    {
        "username": "kal@gmail.com",
        "password": "password"
    }

### Sample response:

    {
        "accessToken": <accessToken>
    }

<hr>

### `POST`

### Logout User

### `/api/users/logout`

### Sample response:

    {
        "message": "Successfully logged out"
    }

<hr>

### `GET`

### Get logged in user's communities

### `/api/users/communities`

### Sample Header:

    {
        authorization: 'Bearer ${token}'
    }

### Sample response:

    {
        "user": {
            "communities": [
                {
                    "_id": "60769924ebfe4cedcade8716",
                    "title": "Lansdowne",
                    "description": "Awesome community near the mall and skytrain",
                    "location": "Richmond, BC",
                    "geometry": {
                        "coordinates": [
                            -123.1369,
                            49.1633
                        ],
                        "_id": "60769924ebfe4cedcade8717",
                        "type": "Point"
                    }
                }
            ],
            "_id": "60769922ebfe4cedcade8713",
            "firstName": "Russ",
            "lastName": "Telen",
            "avatar": "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=339&q=80"
        }
    }

<hr>

### `GET`

### Get user basic info

### `/api/users/info`

### Sample Header:

    {
        authorization: 'Bearer ${token}'
    }

### Sample response:

    {
        "user": {
            "_id": "607741b3520700f9cb82943c",
            "email": "russ@gmail.com",
            "firstName": "Russ",
            "lastName": "Telen",
            "location": "Richmond",
            "avatar": "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=339&q=80",
            "__v": 1
        }
    }

<hr>

### `PATCH`

### Update user avatar

### `api/users/updateAvatar`

### Sample Header:

    {
        authorization: 'Bearer ${token}'
    }

### Sample Body:

    {
        "avatar": <optional url string>
    }

### Sample Response:

    {
        "message": "Succesfully updated avatar"
    }

<hr>

## COMMUNITIES

### `GET`

### Get all communities

### `/api/communities`

### Sample response:

    {
        "communities": [
            {
                "_id": "60769924ebfe4cedcade8716",
                "title": "Lansdowne",
                "description": "Awesome community near the mall and skytrain",
                "location": "Richmond, BC",
                "creator": {
                    "_id": "60769922ebfe4cedcade8714",
                    "email": "kal@gmail.com",
                    "firstName": "Kal",
                    "lastName": "Tang",
                    "location": "Richmond",
                    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                }
            },
            {
                "_id": "60769924ebfe4cedcade8718",
                "title": "Kitsilano",
                "description": "Safe community by the beach",
                "location": "Vancouver, BC",
                "creator": {
                    "_id": "60769922ebfe4cedcade8715",
                    "email": "sab@gmail.com",
                    "firstName": "Sab",
                    "lastName": "Kuah",
                    "location": "Vancouver",
                    "avatar": "https://images.unsplash.com/photo-1507331789086-893e9003c0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                }
            }
        ]
    }

<hr>

## COMMUNITIES

### `GET`

### Get community by id

### `/api/communities/:id`

### Sample response:

    {
        "community": {
            "contents": [
                {
                    "_id": "60769924ebfe4cedcade871f",
                    "title": "Potholes",
                    "author": {
                        "_id": "60769922ebfe4cedcade8713",
                        "email": "russ@gmail.com",
                        "firstName": "Russ",
                        "lastName": "Telen",
                        "location": "Richmond",
                        "avatar": "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=339&q=80"
                    }
                },
                {
                    "_id": "60769924ebfe4cedcade8720",
                    "title": "Missing stop sign",
                    "author": {
                        "_id": "60769922ebfe4cedcade8715",
                        "email": "sab@gmail.com",
                        "firstName": "Sab",
                        "lastName": "Kuah",
                        "location": "Vancouver",
                        "avatar": "https://images.unsplash.com/photo-1507331789086-893e9003c0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    }
                }
            ],
            "members": [
                {
                    "_id": "60769922ebfe4cedcade8714",
                    "email": "kal@gmail.com",
                    "firstName": "Kal",
                    "lastName": "Tang",
                    "location": "Richmond",
                    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                },
                {
                    "_id": "60769922ebfe4cedcade8713",
                    "email": "russ@gmail.com",
                    "firstName": "Russ",
                    "lastName": "Telen",
                    "location": "Richmond",
                    "avatar": "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=339&q=80"
                },
                {
                    "_id": "60769922ebfe4cedcade8715",
                    "email": "sab@gmail.com",
                    "firstName": "Sab",
                    "lastName": "Kuah",
                    "location": "Vancouver",
                    "avatar": "https://images.unsplash.com/photo-1507331789086-893e9003c0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                }
            ],
            "_id": "60769924ebfe4cedcade8716",
            "title": "Lansdowne",
            "description": "Awesome community near the mall and skytrain",
            "location": "Richmond, BC",
            "geometry": {
                "coordinates": [
                    -123.1369,
                    49.1633
                ],
                "_id": "60769924ebfe4cedcade8717",
                "type": "Point"
            },
            "creator": {
                "_id": "60769922ebfe4cedcade8714",
                "email": "kal@gmail.com",
                "firstName": "Kal",
                "lastName": "Tang",
                "location": "Richmond",
                "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            },
            "__v": 2
        }
    }

<hr>

### `POST`

### Create a community

### `/api/communities`

### Sample Header:

    {
        authorization: 'Bearer ${token}'
    }

### Sample Body:

    {
        "title": "5 and Cambie",
        "description": "Where the hood at",
        "location": "Richmond",
    }

### Sample Response:

    {
        "message": "Successfully created ${community.title} community"
    }

<hr>

### `PATCH`

### Join a community

### `/api/communities/:id/join`

### Sample Header:

    {
        authorization: 'Bearer ${token}'
    }

### Sample Response:

    {
        "message": "Successfully joined ${community.title} community"
    }

<hr>

### `PATCH`

### Edit title/description/location of a community

### `/api/communities/:id`

### Sample Header:

    {
        authorization: 'Bearer ${token}'
    }

### Sample Body:

    {
        "title": "5 and Cambiezzz",
        "description": "Where the hood atzzz",
        "location": "Richmondzzz"
    }

### Sample Body if editing only one property:

    {
        "title": "5 and Cambiezzz",
    }

### Sample Response:

    {
        "message": "Successfully edited community"
    }

<hr>

## POSTS (posting)

### `GET`

### Get all posts in a community

### `/api/communities/:id/posts`

### Sample response:

    {
        "posts": [
            {
                "_id": "60769924ebfe4cedcade871f",
                "title": "Potholes",
                "description": "I damn near broke my suspension today. Way too many potholes on Arcadia road. Theyre MASSIVE too. This needs to be addressed ASAP",
                "date": "2021-04-14T07:26:28.321Z",
                "category": "Incident Reports",
                "image": "https://images.unsplash.com/photo-1601026909629-bad5e1122bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
                "author": {
                    "_id": "60769922ebfe4cedcade8713",
                    "email": "russ@gmail.com",
                    "firstName": "Russ",
                    "lastName": "Telen",
                    "location": "Richmond",
                    "avatar": "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=339&q=80"
                },
                "__v": 0
            },
            {
                "_id": "60769924ebfe4cedcade8720",
                "title": "Missing stop sign",
                "description": "Somone stole the stop sign @ the corner of Cook rd. Damn hoodlums..",
                "date": "2021-04-14T07:26:28.322Z",
                "category": "Incident Reports",
                "image": "https://images.unsplash.com/photo-1592360964881-5f3d7459403f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                "author": {
                    "_id": "60769922ebfe4cedcade8715",
                    "email": "sab@gmail.com",
                    "firstName": "Sab",
                    "lastName": "Kuah",
                    "location": "Vancouver",
                    "avatar": "https://images.unsplash.com/photo-1507331789086-893e9003c0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                },
                "__v": 0
            }
        ]
    }

<hr>

### `POST`

### Create a post in a community

### `/api/communities/:id/posts`

### Sample Header:

    {
        authorization: 'Bearer ${token}'
    }

### Sample Body:

    {
        "title": "First Post !!",
        "description": "Weeooooo firs post yay",
        "category": "Incident Reports",
        "image": <optional string>
    }

### Sample Response:

    {
        "message": "Succesfully created new post!"
    }

<hr>

### `PATCH`

### Edit title/description/category of a community

### `/api/communities/:id/posts/:postId`

### Sample Header:

    {
        authorization: 'Bearer ${token}'
    }

### Sample Body:

    {
        "title": "Post title",
        "description": "Post description",
        "category": "Incident Reports",
        "image": <optional string>
    }

### Sample Body if editing only one property:

    {
        "title": "Post title"
    }

### Sample Response:

    {
        "message": "Successfully edited post"
    }

<hr>

## COMMENTS

### `GET`

### Get all comment in a post

### `/api/post/:id/comments`

### Sample response:

    {
        "comments": [
            {
                "date": "2021-04-14T19:25:40.985Z",
                "_id": "607741b4520700f9cb82944a",
                "body": "Aw man i know !! Drove down there the other day and they need to fix that soon!",
                "author": {
                    "_id": "607741b3520700f9cb82943e",
                    "email": "sab@gmail.com",
                    "firstName": "Sab",
                    "lastName": "Kuah",
                    "location": "Vancouver",
                    "avatar": "https://images.unsplash.com/photo-1507331789086-893e9003c0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                },
                "__v": 0
            },
            {
                "date": "2021-04-14T19:25:40.985Z",
                "_id": "607741b4520700f9cb82944b",
                "body": "^^ right !! sheeesh",
                "author": {
                    "_id": "607741b3520700f9cb82943c",
                    "email": "russ@gmail.com",
                    "firstName": "Russ",
                    "lastName": "Telen",
                    "location": "Richmond",
                    "avatar": "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=339&q=80"
                },
                "__v": 0
            }
        ],
        "post": "Potholes"
    }

<hr>

## `POST`

### Add a comment to a post

### `/api/post/:id/comments`

### Sample Header:

    {
        authorization: 'Bearer ${token}'
    }

### Sample Body:

    {
        "body": "This is a comment !"
    }

### Sample Response:

    {
        "message": "Succesfully added comment"
    }

<hr>

## `DELETE`

### Delete a comment

### `/api/post/:id/comments/:commentId`

### Sample Header:

    {
        authorization: 'Bearer ${token}'
    }

### Sample Response:

    {
        "message": "Succesfully deleted comment"
    }
