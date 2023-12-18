# API for Finance Manager

## v1.0.3

Релализованы сервисы:

-   test
    -   check (протестировать, что server поднят)
-   category (CRUD) (валидация входных данных)
-   translation (CRUD) (валидация входных данных)
-   auth
    -   sign-up (валидация входных данных)
    -   sign-in (валидация входных данных)
    -   sign-out
    -   refresh-token

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
