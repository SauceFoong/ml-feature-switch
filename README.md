# MoneyLion Technical Assessment (Backend)

## Steps to run:

### Step 1: Set up and installation

```
git clone https://github.com/SauceFoong/ml-feature-switch.git
```

### Step 2: Install dependencies

```
npm install
```

### Step 3: Environment Variables

Create the file .env in root directory and copy the text below into the env file. Insert the values base on the tag description respectively. (Let me know if you need the values or you may create your own)

```
DATABASE_URL="postgresql://<DB_USER>:<DB_PASSWORD>@<HOST>:5432/<DB_NAME>?schema=public"
```

### Step 3: Environment Variables

Create the file .env in root directory and insert the value below: (Let me know if you need the values or you may create your own)

```
DATABASE_URL="postgresql://<DB_USER>:<DB_PASSWORD>@<HOST>:5432/<DB_NAME>?schema=public"
```

### Step 3: Run the migration / Reset the DB

```
npx prisma migrate dev --name <migration_filename>
npx prisma migrate reset
```

### Step 4: Run the application

Start running the application by typing command:

```
npm run dev
```

## Built Using

- NodeJS (ExpressJS Framework)
- Typescript
- Prisma ORM
- PostgreSQL

## Watch Demo

[Click To Watch the DEMO video](https://www.youtube.com/watch?v=74vXPk3JGxI)
