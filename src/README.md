# Running
- Must have yarn or npm
- `yarn install`
- Locally on localhost:3000 => `yarn start` or `npm start`
- To generate an optimized production build `yarn build`
- Heroku `https://statz-client.herokuapp.com/`

# Production
- Client code is hosted at `https://robinstatz.com/`, and http call is to server @ `https://statz-server.herokuapp.com`

# To send an email
- Email me at `robinstatz@gmail.com` and I can whitelist your email address (free plans at Mailgun have limitations).
- Be sure to manually enter all the fields (I added code to turn off autofill, but I think there is an autosuggestion(?) enabled)
- Heroku free plans take up to 10-15 seconds to fire up from idle stage, so there might be a slight delay first time filling in the form

# Improvements
- Given more time I would fix the autofill issue, i.e. if you copy and paste/autofill the onChange doesn't register and therefore state doesn't update
- I went with React because I haven't touched it in a while and other than a versioning issue(had to downgrade from 3.3.0 to 3.2.0 in order to deploy to Heroku), things went quickly
- Ideally, the frontend would have redux (actions and reducers) and the http call wouldn't be in the app.js