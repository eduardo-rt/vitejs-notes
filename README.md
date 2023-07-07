# My potatoes notes test

# Project made with Vite
### Vite
https://vitejs.dev/guide/

# API
## Host

https://api.potatonotes.app

## Token
eyJraWQiOiIrdm0wNmNpS2t2OFI2VlpmOWxCYWY1ajcrQnU2UEJ4ancrRTVjYVJ6ZUJBPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiV3AyZ0NpeVlhZDF4X1Z5Rnp1dVAyUSIsInN1YiI6Ijk0ZDhlNDc4LTEwMTEtNzA1My04ZGNjLWZkZWFlZDIyNTgyMCIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9PcUNvWmRhUVpfR29vZ2xlIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX09xQ29aZGFRWiIsImNvZ25pdG86dXNlcm5hbWUiOiJHb29nbGVfMTA2ODg5NjQ4NzE5NTk3OTk0NzcyIiwiZ2l2ZW5fbmFtZSI6IkVkdWFyZG8gU291emEiLCJvcmlnaW5fanRpIjoiZWU0NDk5NmEtN2Y3YS00ZTZjLWFkMmQtZDU0NmM2M2RhZTIxIiwiYXVkIjoiNGhjZ240MHNpbWFzYTgzbHRjdTkxM3YyajciLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIxMDY4ODk2NDg3MTk1OTc5OTQ3NzIiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjg4NjU5MzUxNDQyIn1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY4ODY2MTA1OSwibmFtZSI6IkVkdWFyZG8gU291emEiLCJleHAiOjE2ODg3Mzc4MjksImlhdCI6MTY4ODczNDIyOSwianRpIjoiNTJiMjkxY2EtNDQwMi00NWU4LWI5MTctN2FkNGQzOTc0YmFlIiwiZW1haWwiOiJlZHVhcmRvc3o5OEBnbWFpbC5jb20ifQ.myK8TI-goQWw-Plkn86MGRU7yhe_3c_gm--hadV4SXdLEZyZlcZWpAuWcn3ZepMGZOF9SXpJt8WMvZD_zNwSB3ShcMaC8SAfhwWJQnLUTIIoL8w0J6o4O6LtYadRAgHcO9vEB4Yo1IBYRYVdeQh4O3YRh9AatHffAPJcRnQ3dk1cgGGbw3tUrLuyfeDtOqO8BYIngCs6ZR5tXmrN5HBkSYVD4XuVMyQZcUio7TYgVivYjW-5IOx8NTJ28rFXoj47JFsxGIvFUXTmtFTg1o6xdDFNqf6jfLf7Zz7jbiTga6OWrqs83vF2-fiUy5QStKpfn-Rklj87ECktQNJwUAJlLA

## GET List
https://api.potatonotes.app/notes

## Response
[
    {
        "id": "01H4PGMQEQBGNPWRHMT3JW2V4T",
        "title": "Only titles",
        "contents": "a",
        "createdAt": "2023-07-06T21:10:01.432Z",
        "updatedAt": "2023-07-07T12:52:10.072Z"
    },
    {
        "id": "01H4P29S9GWGWK6M5H1TW8RQMT",
        "title": "My second note (2)",
        "contents": "Here is the detail of my second note",
        "createdAt": "2023-07-06T16:59:22.800Z",
        "updatedAt": "2023-07-06T16:59:33.369Z"
    },
    {
        "id": "01H4P27PNK9NYYWSG96ME8N0D1",
        "title": "My first note",
        "contents": "Here is the details of my first note",
        "createdAt": "2023-07-06T16:58:14.579Z",
        "updatedAt": "2023-07-06T16:58:14.579Z"
    }
]

## GET By ID

## PATCH
https://api.potatonotes.app/notes/01H4PGMQEQBGNPWRHMT3JW2V4T

## Request
{
"title": "Only titles",
"contents": "a"
}

## Response
{
"id": "01H4PGMQEQBGNPWRHMT3JW2V4T",
"title": "Only titles",
"contents": "a",
"createdAt": "2023-07-06T21:10:01.432Z",
"updatedAt": "2023-07-07T12:52:10.072Z"
}
HTTP Status Code 200

## POST
https://api.potatonotes.app/notes/01H4PGMQEQBGNPWRHMT3JW2V4T

## Request
{
"title": "A",
"contents": "B"
}

## Response
{
"id": "01H4R6NP9RWGWESR8MTG8N6XX2",
"title": "A",
"contents": "B",
"createdAt": "2023-07-07T12:54:16.133Z",
"updatedAt": "2023-07-07T12:54:16.133Z"
}
HTTP Status Code 201

## DELETE
https://api.potatonotes.app/notes/01H4PGMQEQBGNPWRHMT3JW2V4T

## Response
Empty
HTTP Status Code 204
