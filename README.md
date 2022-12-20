Start of Project : 19/12/2022


# Developer Test

Database of Employees


## Installation

Install my-project with npm
- Server:
```bash
    cd server
    npm init -y
    npm i
```
- Client:
```bash
    cd client
    npm install 
```
    
## Feature

CRUD Karyawan, Jabatan, Department



## How to Run
- Server
```bash
    cd server
    sequelize db:create && sequelize db:migrate && sequelize db:seed:all
    npm run dev
```

- Client
```bash
    cd server
    npm start
```