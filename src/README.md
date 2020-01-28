# Running
- Must have yarn or npm
- `yarn install`
- Locally on localhost:3000 => `yarn start` or `npm start`
- To generate an optimized production build `yarn build`
- Heroku `https://statz-client.herokuapp.com/`

# Production
- Client code is hosted at `https://statz-react.herokuapp.com/`, this domain has been whitelisted with Mailgun
(sending an email from either service on localhost will not work)

# To send an email
- Email me at `robinstatz@gmail.com` and I can whitelist your email address.
- Be sure to manually enter all the fields
- I've also noticed that with the delay on heorku, the 10 or more seconds upon firing it up the first time, the emails don't always go through the first time. When they don't I can immediately have success with Postman

# Improvements
- Clearly this is a janky form!!! (I guess that's what I get for 3 hrs)
- Given more time I would fix the autofill issue, i.e. if you copy and paste/autofill the onChange doesn't register and therefore state doesn't update
- I went with React because I haven't touched it in a while and other than a versioning issue(had to downgrade from 3.3.0 to 3.2.0 in order to deploy to Heroku), things went quickly
- It would also be nice to have the success message appear when an email has been successfully sent. That would be done by assigning a variable named message to the response and displaying it below the form
- Ideally, the frontend would have redux (actions and reducers) and the http call wouldn't be in the app.js