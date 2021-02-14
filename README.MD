
1) Connect Mysql Server on 3306 Port and password 1909 ( Can be changed in src/resources/application.properties)
2) Open (Backend) folder as project with Intellij Idea (Build and run, follow File-> invalidate caches & restart if needed)
3) Run this command on CMD 'docker run -p 6379:6379 --name rediscache -d redis' and then run 'redis-commander' , you can manage Redis on 
localhost:8081. If you dont want to use Redis Cache, remove 'Cacheable(...)' lines from Controller/TestController.
4) Open (react-hooks-jwt-auth) folder as project with Visual Studio Code, create in app terminal and run 'npm install & npm start', if everything is OK you will probably connect localhost:3000 .

Prerequirements :
 - Node JS -> https://nodejs.org/en/
 - Java -> https://www.oracle.com/java/technologies/javase-jdk15-downloads.html
 - MySQL -> https://dev.mysql.com/downloads/ - https://dev.mysql.com/downloads/workbench/
 - Browser -> https://brave.com/
 - Redis(Docker Image) -> https://www.docker.com/products/docker-desktop
 - Redis Commander -> https://github.com/joeferner/redis-commander
 
NOTE : 
 - If you re-run backend on Intellij Idea it will warn you about custom Sql quaries in (resources/data.sql) but don't worry it's not an obstacle to work. Database and Schema will created automatically so you dont have to do it yourself.
 
  