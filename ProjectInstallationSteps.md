# Case installation task

These steps have been already tested successfully by two students. But it's always possible
to make some step bit different way than in the instructions. Contact immediately if not
able to follow the steps below.

Be careful with e.g. what folder you open/add/edit. It matters for the tools. Works or doesn't.

## Backend installation and tests

1. Create somewhere outside any repos and OneDrive folders a root root folder called Siba
1. In that folder clone the backend repo: https://github.com/haagahelia/Siba_be
1. ... and also frontend repo: https://github.com/haagahelia/siba-fe
1. extract that given secret files zip somewhere and copy the contents to the Siba folder correctly
1. Open VS Code in Siba folder (in the root root folder!)
1. Install extension called REST client (from Huachao Mao)
1. Install Node.js to your computer if not there yet (not 100% necessary for just running, if dockerized, but for VS Code code writing etc.)
1. Open terminal (e.g. GitBash) e.g in VS Code and go to Siba_be folder
1. install the node_modules to that local project work folder (for code intellisense etc to work) with:  npm install    or npm i
1. Start Docker Desktop to see Docker Engine runs ok?
1. Siba_be> docker-compose -f docker-compose-dbbe.yaml up
1. Test the BE + DB combination with browser at URL:   http://localhost:4678/api/subject which does not require login token yet  (save SCREENSHOT to file be1.png)
1. If ok, go to Siba_be project and folder request and file called Subject.rest. Click on the code and then look at the lower right corner of VS Code, and change the No Environment to be e.g. adminEnv
1. and find in that file the line GET {{host}}/subject  and press the Send request above that. You should get the same data with the REST client tool.
1. then find different line POST {{host}}/subject and press Send request above that. Now result should be 401 Unauthorized. Token found but NOT valid.   (save SCREENSHOT to file be2.png)
1. Open the file 1_Logins.rest and send the 'admin,admin' login request. From the response, copy the token value without copying the quotes, go to the .vscode folder settings.json file and paste the token carefully to adminEnv and Save
1. Copy the very same token to expiredTokenEnv (not expired yet, but e.g. tomorrow it will be. Valid but expired). Save the file.
1. Run the POST request again while adminEnv is active at bottom right corner. Works? (save SCREENSHOT to file be3.png)
1. You could also login as planner, statist and noroleuser and copy those tokens to respective places.

## Frontend installation and test

1. Open another console for siba-fe
1. Run also there the npm i
1. docker-compose -f docker-compose-fe-dev.yaml up
1. Wait for 1-10 minutes for operations to finish, 
1. when see the Vite posted link, open it and login with: admin, admin
1. Will you see data in the views? If you see data then FE works, BE works and DB works.
1. (save SCREENSHOT to file fe1.png)

* Post one PDF with at least the SCREENSHOT images from above. It can have others you find informative. But keep it still less than 4 pages long PDF.