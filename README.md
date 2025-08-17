# Nest Base Repo


## Tech Stacks 

- Language : TypeScript 
- ORM : Prisma 
- Database : MySQL
- Logging : Winston

> [!NOTE]  
>   make sure that you have Node.js >= 22.17.1

## How to use

Clone this repository, and set up env

```
cp example.env .env
```


## Steps To Run Project Locally

```
git checkout dev
```
Install dependencies with :

```powershell
npm install
```

Get .env value, and change db connection url in .env

Run prisma db migration with :

```powershell
npx prisma migrate --name <migration_name>
```

## Running The App 

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```