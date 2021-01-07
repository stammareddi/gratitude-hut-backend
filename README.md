# Gratitude-hut-backend

Welcome to the backend of the gratitude-hut application. The frontend of the application can be found [here](https://github.com/stammareddi/gratitude-hut-frontend/blob/main/README.md)



## Hosting application continued

1. Clone the repo (click on the green code button at the top and download zip) and open it up in your code editor alongside a terminal
2. run `npm install package.json` to install all the dependencies required for the backend of this project
3. To be able to setup your connection you will need a connection string head over to mongoDB and [create a account](https://account.mongodb.com/account/login) if you don't have one
4. Go ahead and create a project and once created establish a connection to your cluster to get the connection name. [How do I do this ?](https://docs.google.com/document/d/1Z9CbmnJI7R-O6_GgIDGlIDsYpQLsg0j7tBXuxvvvf6g/edit?usp=sharing)
5. Great! you have a connection string, lets locate a file called env in our project directory.Once you find it go ahead and copy the connection string from the previous step inside the quotations. In the connection string where it says `<Password>` go ahead and replace that with the database user password you have created. For the `<dbname>` go ahead and pass `gratitude`
6. Perfect your all setup run `npm start` in the terminal to see the backend connection go live!
   - Once setup the terminal will output 
        - Connection made on port 5000
        - MongoDB database connection established successfully
        
 7. Head back to the [frontend](https://github.com/stammareddi/gratitude-hut-frontend/blob/main/README.md) for the final step



Here you will create
## Getting your backend connection established


## How to get setup 
 1. Go ahead and clone down the repo 
 2. run npm install to download all the dependencies 
 3. Pass in the connection string you have received from mongoDB into the .env file (provided in the repo) where it says to pass your string here
    * Make sure the username and password match with the database user creds and for the dbname pass in gratitude
     * If you haven't setup a connection string here is a [How do I do this ?](https://docs.google.com/document/d/1Z9CbmnJI7R-O6_GgIDGlIDsYpQLsg0j7tBXuxvvvf6g/edit?usp=sharing) that will help you get setup in 10 minute 
  4. Once setup in your terminal run npm start to host the backend 
       * If successful it will tell 
           * Connection made on port 5000
           * MongoDB database connection established successfully
           
           
 5. Great you are all setup for the backend! Lets go back to the frontend of the application to finish up the process !!!
 [Gratitude-hut frontend](https://github.com/stammareddi/gratitude-hut-frontend/blob/main/README.md)



