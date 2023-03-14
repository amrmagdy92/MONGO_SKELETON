# MongoDB Skeleton
As a starter template, this project was built to help get other developers up and running without having to go through the steps of creating user and authentication functionality. A fellow developer would simply update the user model, add their configuration to a .env file and they should be good to go.

During my years as a freelance developer, I noticed that when I started any project, I always had to create user models from scratch along with their authentication and authorization. Seeing the similarity, I was intruiged into finding ways to reuse what I always build in future projects and thus creating this skeleton to start building on top of it. This has allowed me to cut down a couple of days off my schedule and to deliver earlier than before

This project was built using the latest versions of the below technologies:
1. _Express.js_ to provide the core backend functionality
2. _Mongoose_ as the ORM for MongoDB databases

There were other middleware that I've used to make things easier:
1. _body-parser_ to provide a clean body out of the incoming request for easier handling inside the project.
2. _compression_ to allow lighter communication by minimizing the request size.
3. _cookie-parser_ similar to body-parser but for cookies.
4. _cors_ to handle cross origin request on our behalf.
5. _dotenv_ to ensure that the data in the project's .env is read properly.
6. _helmet_ to handle various security aspects of the project.
7. _jsonwebtoken_ to provide a means for authentication.

### Target Audience
This project was built with other Node.js developers in mind to help make a tedious step a bit more tolerable.

### How to run the project
Simply clone this solution, add .env file for configuration, build the rest of your solution, and then use one of the scripts mentioned in the steps below to run your project.
Steps
1. Add a .env file to the root folder and into it, add the following to get the project up and running
__Note__: Don't forget to add your values in the below configuration
```
SERVER_PORT=
DATABASE_USER=""
DATABASE_PASSWORD=""
DATABASE_HOST=""
DATABASE_NAME=""
DIALECT=""
NODE_ENV=""
JWT_SECRET=""
JWT_EXPIRY=
```
You still need to add any other necessary environment variables for your project but these are the ones you need to start the project properly.
2. Update the readme file as needed or delete it altogether if it's not necessary.
3. Through your favourite terminal, navigate to the folder where you cloned the project and the below block of code depending on your terminal
```
npm install
git remote remove origin
git remote add origin "PATH_TO_YOUR_GITHUB_REPOSITORY"
git push -u origin master
```
4. Go to ```SOLUTION_PATH/server/models/user.model.js``` and update the model as needed according to your design.
5. Start building the rest of your solution.

# License
This project uses MIT license as shown in the license file

# How to Contribute to the Project
Simply create a branch, add your recommendation, and then create a pull request or simply reach out to me through comments or through my [LinkedIn](https://www.linkedin.com/in/amaa/)