# Backend for SARC BPHC

## Techonlogies used


* Node.js
* Express.js
* Socketio
* JWT
* Mongodb

### Things to watch out for
* install and setup mongodb
* install node 8.10.0 or change bcrypt version
* open port 8080 in your firewall and 27017 to test from outside
>to test
```
npm run dev
```
>to build
```
npm run build
```

[Backend deployed on heroku, click to acess](http://staghorn.net:8080/)

to make chanes after being added as a contributor 
```bash
heroku login
heroku git:clone -a sarc-bphc-backend
cd sarc-bphc-backend
git add .
git commit -am "explanation with changes made"
git push heroku master
```

check for logs using
```
heroku logs --tail
```