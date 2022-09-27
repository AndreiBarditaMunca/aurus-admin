# Aurus Frontend

## Development

1. Clone the repo

2. `npm i`: install all the dependencies required for the project.

3. `UPLOADS_PATH`: add a folder anywhere in your computer which contains an empty uploads folder. Set the `UPLOADS_PATH` variable in `.env` to be the path to that container folder. Example: `UPLOADS_PATH=C:/Users/Andrei/Desktop/test`, where `test` is the name of the folder containing the empty uploads folder.

4. `yarn dev`: opens a local server which enables you to see the project.

## Deployment

1. SSH into VPS `164.92.217.25` with `aurus-admin` user: `ssh aurus-admin@164.92.217.25`

2. `cd` to `/aurus-admin`

3. `pull` changes from git

4. Check and set `UPLOADS_PATH` in env to be `/mnt/storage_cms/public` (location where uploads are being saved on the VPS).

5. Build the project with: `sudo NODE_ENV=production npm run build`

6. `cd` back home with `cd ..`

7. `pm2 start ecosystem.config.js` (`--update-env` if any environment changes have been made)
