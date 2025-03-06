# Case installation task

These steps have been already tested successfully by two students. But it's always possible
to make some step a bit different way than in the instructions. Contact immediately if not
able to follow the steps below.

Be careful with e.g. what folder you open/add/edit. It matters for the tools. Works or doesn't.

**Case:** Spring 2025 case was Siba (e.g. Siba_be, siba-fe, api, Subject, subject, admin, planner, noroleuser)

## Prerequisites

- Git
- Docker Desktop
- Node.js
- Visual Studio Code

## Backend installation and tests

1. Create a root folder called `Siba` outside of any repos and OneDrive folders (e.g., `C:\temp`, `C:\git_repos`, ...).
1. In that folder, clone the backend repo: ```sh git clone https://github.com/haagahelia/Siba_be ```
1. ... and also frontend repo: `https://github.com/haagahelia/siba-fe`
1. extract that given secret files zip (Found in `Teams`, `docker channel`, `files`) somewhere and copy the contents to the `Siba` folder correctly
1. Open `VS Code` in `Siba` folder (in the root root folder!)
1. Install extension called `REST client` (from Huachao Mao)
1. Install `Node.js` to your computer if not there yet (not 100% necessary for just running, if dockerized, but for VS Code code writing etc.)
1. Open terminal (e.g. `GitBash`) e.g in VS Code and go to `Siba_be` folder
1. install the node_modules to that local project work folder (for code intellisense etc to work) with:  ```npm install```    or ```npm i```
1. Start `Docker Desktop` to see `Docker Engine` runs ok?
1. Then ```Siba_be> docker-compose -f docker-compose-dbbe.yaml up```
1. Test the BE + DB combination with browser at URL:   `http://localhost:4678/api/subject` which does not require login token yet  (save SCREENSHOT to file `be1.png`)
1. If ok, go to `Siba_be` project and folder `request` and file called `Subject.rest`. Click on the code and then look at the lower right corner of VS Code, and change the `No Environment` to be e.g. `adminEnv`
1. and find in that file the line `GET {{host}}/subject`  and press the Send request above that. You should get the same data with the REST client tool.   (save SCREENSHOT to file `be2.png`)
1. then find different line `POST {{host}}/subject` and press `Send request` above that. Now result should be `401 Unauthorized`. `Token found but NOT valid`.   (save SCREENSHOT to file `be3.png`)
1. Open the file `1_Logins.rest` and send the `'email:admin, password:admin'` login request. From the response, copy the token value without copying the quotes, go to the `.vscode` folder `settings.json` file and paste the token carefully to `adminEnv` and Save
1. Copy the very same token to `expiredTokenEnv` (not expired yet, but e.g. tomorrow it will be. Valid but expired). Save the file.
1. Run the POST request again while `adminEnv` is active at bottom right corner. Works? (save SCREENSHOT to file `be4.png`)
1. You could also login as `planner`, `statist` and `noroleuser` and copy those tokens to respective places.

## Frontend installation and test

1. Open another console for `siba-fe` repo/project
1. Run also there the ```npm i```
1. Then ```docker-compose -f docker-compose-fe-dev.yaml up```
1. Wait for 1-10 minutes for operations to finish, 
1. when see the `Vite` posted link, open it and login with: `admin`, `admin`
1. Will you see data in the views? If you see data then FE works, BE works and DB works. Open some OTHER view than the first view. 
1. Add some more info of yours, e.g. new `Room`, `Equipment`, Course=`Subject`, (save SCREENSHOT to file `fe1.png`
so that your new data succesfully added data appears on the screen)

## Submission?

* Post one PDF with at least the SCREENSHOT images mentioned above. It can have others you find informative. But keep it still **less** than 4 pages long PDF.