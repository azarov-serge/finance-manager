# API for Finance Manager

## .env

```env
# PostgresSQL
POSTGRES_DB=POSTGRES_DB
POSTGRES_USER=POSTGRES_USER
POSTGRES_PASSWORD=POSTGRES_PASSWORD
DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}?schema=public"

# JWT
JWT_ACCESS_SECRET="JWT_ACCESS_SECRET"
JWT_REFRESH_SECRET="JWT_REFRESH_SECRET"
```

## Prisma

```sh
cd ./prisma
npx prisma db push --schema='./schema.prisma'
```
