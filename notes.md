# Notes

## steps

- create repo
- clone repo
- cd into folder
- `npm init -y`
- `npx gitignore node` or `npm -i gitignore` and then `gitignore node`
- `git add .`
- `git commit -m "message"`
- `git push -u origin master`

React apps are broken down into components.

Express API are broken down into Express Routers.

## request / response cycle

1. client makes a request to a server
2. server produces a response and sends it to the client

[client] > request > [mw > mw > mw] > responds [client]

## Middleware

- can see the request and do something with the information from the request
- can stop the request and produce a response
- can do nothing
- can do the same with the response object
- **can modify the request or response objects**

three types:

- built-in: no need to install
- third party: need to install using yarn or npm
- custom: we build it

can be used:
