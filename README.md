# MoneyLion Technical Assessment (Backend)

## Steps to run:

### Step 1: Set up and installation

```
git clone https://github.com/SauceFoong/ml-feature-switch.git
```

### Step 2: Install dependencies

Go the cloned file directory and type the command:

```
npm install
```

### Step 3: Environment Variables

Create the file .env in root directory and insert the value below: (Let me know if you need the values or you may create your own)

```
DATABASE_URL="postgresql://<DB_USER>:<DB_PASSWORD>@<HOST>:5432/<DB_NAME>?schema=public"
```

### Step 4: Populate the tables with either one command (Run the migration / Reset the DB)

You can run the first command to make migrate and execute it or the second command to reset your db.

```
npx prisma migrate dev --name <migration_filename>
npx prisma migrate reset
```

### Step 5: Run the application

Start running the application by typing command:

```
npm run dev
```

Or run with Docker

```
docker build . -t ml-backend-assignment:dev
docker-compose up -d
```

## Run Acceptance Testing with command:

```
npm run test
```

## Built Using

- NodeJS (ExpressJS Framework)
- Typescript
- Prisma ORM
- PostgreSQL
- Docker

## Watch Demo

[Click To Watch the DEMO video](https://www.youtube.com/watch?v=74vXPk3JGxI)
