# quotes-webpage-in-nodejs
Small project in Node.js of a webpage with interesting quotes.
The project is a MVC-based architecture with the models layer represented by the data/db.json which is an storage file accessed through the local filesystem.
To see this project working:
1) Clone it, 
2) Install its dependencies with "npm install"
3) Go to the root directory and execute it with the command "npm run dev"
4) In your browser go to http://localhost:4000/
5) If you want to add a new quote to the wepage /quotes, send a Post request with Postman to localhost:4000/quotes with a JSON like the following example:
{
    "message":"I praise loudly. I blame softly.",
    "author":"Catherine II of Russia",
    "photo":"https://imgix.ranker.com/user_node_img/35/684893/original/catherine-ii-of-russia-u2?auto=format&fit=crop&fm=pjpg&h=90&w=90&q=60&dpr=1"
}
