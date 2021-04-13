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
                    "_id": "607492f05d5cbfaa2b8b6406",
                    "title": "Lansdowne",
                    "description": "Awesome community near the mall and skytrain",
                    "location": "Richmond"
                },
                {
                    "_id": "6074acc58a2d09ac8741f084",
                    "title": "Sab's Community",
                    "description": "Test",
                    "location": "Richmond"
                }
            ],
            "_id": "607492ef5d5cbfaa2b8b6403",
            "firstName": "Russ",
            "lastName": "Telen"
        }
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
                "_id": "607492f05d5cbfaa2b8b6406",
                "title": "Lansdowne",
                "description": "Awesome community near the mall and skytrain",
                "location": "Richmond",
                "creator": {
                    "_id": "607492ef5d5cbfaa2b8b6404",
                    "email": "kal@gmail.com",
                    "firstName": "Kal",
                    "lastName": "Tang"
                }
            },
            {
                "_id": "607492f05d5cbfaa2b8b6407",
                "title": "Kitsilano",
                "description": "Safe community by the beach",
                "location": "Vancouver",
                "creator": {
                    "_id": "607492ef5d5cbfaa2b8b6405",
                    "email": "sab@gmail.com",
                    "firstName": "Sab",
                    "lastName": "Kuah"
                }
            },
            {
                "_id": "6074acc58a2d09ac8741f084",
                "title": "Sab's Community",
                "description": "Test",
                "location": "Richmond",
                "creator": {
                    "_id": "607492ef5d5cbfaa2b8b6405",
                    "email": "sab@gmail.com",
                    "firstName": "Sab",
                    "lastName": "Kuah"
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
                    "_id": "6070d61ce98bef8863754a07",
                    "title": "Potholes",
                    "author": {
                        "_id": "6070d61be98bef8863754a02",
                        "email": "russ@gmail.com",
                        "firstName": "Russ",
                        "lastName": "Telen"
                    },
                    "__v": 0
                },
                {
                    "_id": "6070d61ce98bef8863754a08",
                    "title": "Missing stop sign",
                    "author": {
                        "_id": "6070d61be98bef8863754a04",
                        "email": "sab@gmail.com",
                        "firstName": "Sab",
                        "lastName": "Kuah"
                    },
                    "__v": 0
                }
            ],
            "members": [
                {
                    "_id": "6070d61be98bef8863754a03",
                    "email": "kal@gmail.com",
                    "firstName": "Kal",
                    "lastName": "Tang"
                },
                {
                    "_id": "6070d61be98bef8863754a02",
                    "email": "russ@gmail.com",
                    "firstName": "Russ",
                    "lastName": "Telen"
                },
                {
                    "_id": "6070d61be98bef8863754a04",
                    "email": "sab@gmail.com",
                    "firstName": "Sab",
                    "lastName": "Kuah"
                }
            ],
            "_id": "6070d61ce98bef8863754a05",
            "title": "Lansdowne",
            "description": "Awesome community near the mall and skytrain",
            "location": "Richmond",
            "creator": {
                "_id": "6070d61be98bef8863754a03",
                "email": "kal@gmail.com",
                "firstName": "Kal",
                "lastName": "Tang"
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
        "location": "Richmond"
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
                "_id": "607492f15d5cbfaa2b8b640b",
                "title": "Potholes",
                "description": "I damn near broke my suspension today. Way too many potholes on Arcadia road. Theyre MASSIVE too. This needs to be addressed ASAP",
                "date": "2021-04-12T18:35:29.076Z",
                "category": "Incident Reports",
                "author": {
                    "_id": "607492ef5d5cbfaa2b8b6403",
                    "email": "russ@gmail.com",
                    "firstName": "Russ",
                    "lastName": "Telen",
                    "location": "Richmond"
                },
                "__v": 0
            },
            {
                "_id": "607492f15d5cbfaa2b8b640c",
                "title": "Missing stop sign",
                "description": "Somone stole the stop sign @ the corner of Cook rd. Damn hoodlums..",
                "date": "2021-04-12T18:35:29.077Z",
                "category": "Incident Reports",
                "author": {
                    "_id": "607492ef5d5cbfaa2b8b6405",
                    "email": "sab@gmail.com",
                    "firstName": "Sab",
                    "lastName": "Kuah",
                    "location": "Vancouver"
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
        "category": "Incident Reports"
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
        "category": "Incident Reports"
    }

### Sample Body if editing only one property:

    {
        "title": "Post title"
    }

### Sample Response:

    {
        "message": "Successfully edited post"
    }
