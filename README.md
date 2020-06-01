# Prerequisites
You are going to need Node.js and npm installed on your machine.

# Installing
How to properly install and configure this repository to work on your machine.

Cloning the repository

`git clone ...`

Enter cloned directory

`cd file-reader/`
Enter Server directory and do `npm i`

`cd file-reader/server && npm i`
Enter Client directory and do npm install

`cd file-reader/client && npm i`
Starting the repository on your machine
You will need to run Server & Client seperately, ports are already configured, make sure you don't conflict them if you change anything.

Enter Client directory and do `npm start`

`cd file-reader/client && npm start`
Enter Server directory and do `npm start` 

`cd file-reader/backend && npm start` and if this doesn't work try `PORT=8000 node app.js`

Now you can load localhost:3000 in your browser and use the app.
