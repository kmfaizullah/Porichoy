## Porichoy : A large Scale Web Application containing Personal Information
This is a complete web application containing personal Information where Node.js and express.js has been used to integrate front-end with Mongodb database. <br>
<b>Technology/Tools : </b> Node.js, Express.js, Mongodb, Boostrap, HTML and CSS.
<h6> <a href="https://youtu.be/GD7KtLjFPUE">Click here to see the Demo</h6>

#### Dependencies
1. It has been tested in windows 10 machine. 
2. Express
3. Nodemon
4. Mongoose
5. ejs
6. MongoDB

#### Running Procedure
<b>Step 1: </b> Create a folder containing any name. <br>
<b>Step 2: </b> Go inside the folder, open terminal and execute following command to create server. <h5> `npm init -y` </h5> 
<b>Step 3: </b> Intall all the dependencies by executing following command. <h5> `npm i express mongoose ejs slugify method-override` </h5>
Note  : Express is our server, moggose will be required for database and ejs for different views. <br>
<b>Step 4: </b> Install nodemon by executing following command for automaticaaly refresh the server. <h5> `npm i --save-dev nodemon` </h5>
<b>Step 5: </b> Go inside the <em>package.json </em> file and change the test inside the scripts to <em> "start" : "nodemon server.js" </em> <br>
<b>Step 6: </b> Download the porichoy repository and extracted the files. <br>
<b>Step 7: </b> Copy the <b> models, public, views, routes and server files </b> from extracted repository to your project repository <br>
<b>Step 8: </b> Download the mongodb from the following link. <h5>`https://www.mongodb.com/try/download/community` </h5>
<b>Step 9: </b> Install the mongodb to your local computer. Also install mongodb compass. <br>
<b>Step 10: </b> After installing mongodb go to `cdrive->program files->mongodb->server->4.2(any version)->bin` folder. Open terminal and execute `mongod` command to start mongodb. <br>
<b>Step 11: </b> Run MongoDB Compass.<br>
<b>Step 12: </b> Using MongoDP Compass create `blog` database and `abouts, articles, contacts, publications, signups` collections. <br>
<b>Step 13: </b> Import data to the collection from the extracted `abouts.json, articles.json, publications.json, contacts.json, signups.json` files from <em> Data </em> folder. <br>
<b>Step 14: </b> Run `npm start` command in terminal. It will start your project. <br>
<b>Step 15: </b> Got to your web browser and type `localhost:5000`. The project will be visualized.<br>
<b>Step 16: </b> To get access admin login use url `localhost:5000/review/adminLogin` or to get access admin profile directly use url `localhost:5000/review/admin`. <br>





