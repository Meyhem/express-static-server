# express-static-server
Instant node app to serve static files. Contains preconfigured Cors & Logging. Prepared also for Heroku.

# Usage
Copy your static files to 'static' folder (it's considered root).

```bash
$ npm install

# then
$ npm start
# or
$ node main.js
```

# Heroku
```bash
# Prepare env
$ heroku login
$ heroku git:remote -a <your-app-name>

# Deploy
$ git add .
$ git commit -m "<message>"
$ git push heroku master
```

# License
MIT