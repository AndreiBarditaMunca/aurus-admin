# Aurus Frontend

## Development

1. Clone the repo
2. `npm i`: install all the dependencies required for the project.
3. `yarn dev`: opens a local server which enables you to see the project.

## Deployment

1. SSH into VPS `164.92.217.25` with `aurus-admin` user: `ssh aurus-admin@164.92.217.25`
2. `cd` to `/aurus-admin`
3. `pull` changes from git
4. Build the project with: `sudo NODE_ENV=production npm run build`
5. `cd` back home with `cd ..`
6. `pm2 start ecosystem.config.js` (`--update-env` if any environment changes have been made)
