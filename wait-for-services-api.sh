./wait-for-it.sh my-app-api:3030 -t 0 -- echo "my-app-api is up"

npm run build
npm run start