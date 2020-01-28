# Running
- Must have yarn or npm
- `yarn install`
- Locally on localhost:3000 => `yarn start` or `npm start`
- To generate an optimized production build `yarn build`
- Heroku `https://statz-client.herokuapp.com/`

# Improvements
- Clearly this is an ugly form!!!
- Given more time I would fix the autofill issue, i.e. if you copy and paste/autofill the onChange doesn't register and therefore state doesn't update
- I went with React because I haven't touched it in a while and other than a versioning issue(had to downgrade from 3.3.0 to 3.2.0 in order to deploy to Heroku), things went quickly