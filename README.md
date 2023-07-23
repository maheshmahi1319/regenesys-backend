1. Clone repository

    ```bash
    git clone https://github.com/maheshmahi1319/regenesys-backend.git
    ```


2. Create Postgres Dummy Database

and update env with username password and dbname

   
3. Install dependency

    ```bash
    npm install
    ```

4. Run migrations

    ```bash
    npm run migration:run
    ```

5. Run seeds

    ```bash
    npm run seed:run
    ```

6. Run app in dev mode

    ```bash
    npm run start:dev
    ```

7. Open http://localhost:3000/docs

login with 
/api/v1/auth/login

set jwt token in top by clicking autherize button

after access salary apis


