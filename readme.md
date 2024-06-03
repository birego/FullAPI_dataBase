# KADEA EDUCATIONAL MANAGEMENT - API DOCUMENTATION

## Introduction

Cette documentation API décrit les points de terminaison et les modèles de données du système KADEA Academy. Le système permet la gestion des sessions, des cohortes, des apprenants, des coachs et des machines.

## END POINTS

### SESSION

#### CREATE NEW SESSION

- méthode: POST
- authentication required
- Authorized Roles: ADMIN, COACH
- route: /sessions
- request body: annee (int), ville (string)
- response: The Created Session object

```json
{
  "annee": 2025,
  "ville": "GOMA"
}
```

#### GET ALL SESSIONS

- méthode: GET
- authentication required
- Authorized Roles: ADMIN, COACH
- route: /sessions
- response: Array of Session objects

#### GET ONE SESSION BY ID

- méthode: GET
- authentication required
- Authorized Roles: ADMIN, COACH, APPRENANT(Only Theirs)
- Params: id
- route: /sessions/:id
- Response: Session object

#### UPDATE ONE SESSION BY ID

- méthode: PUT
- authentication required
- Authorized Roles: ADMIN, COACH
- Params: id
- route: /sessions/:id
- request body: annee (int), ville (string)
- Response: Updated Session object

#### DELETE ONE SESSION BY ID

- méthode: DELETE
- authentication required
- Authorized Roles: ADMIN, COACH(Only session he's in)
- Params: id
- route: /sessions/:id
- Response: Deleted Session object

### COHORTE

#### CREATE NEW COHORTE

- méthode: POST
- authentication required
- Authorized Roles: ADMIN, COACH
- route: /cohortes
- request body: code (string), description (string), sessionId (Session id fk)
- response: The Created Cohorte object

```json
{
  "code": "C001",
  "description": "Development Web et Web mobile",
  "sessionId": "7dd6b708-370e-43b2-87e3-92928904d345"
}
```

#### GET ALL COHORTES

- méthode: GET
- authentication required
- Authorized Roles: ADMIN, COACH
- route: /cohortes
- response: Array of cohorte objects

#### GET ONE COHORTE BY ID

- méthode: GET
- authentication required
- Authorized Roles: ADMIN, COACH, APPRENANT(Only Theirs)
- Params: id (refers to the code)
- route: /cohortes/:id
- Response: Cohorte object

#### UPDATE ONE COHORTE BY ID

- méthode: PUT
- authentication required
- Authorized Roles: ADMIN, COACH
- Params: id (refers to the code)
- route: /cohortes/:id
- request body: code (string), description (string), sessionId (Session id fk)
- Response: Updated Cohorte object

#### DELETE ONE COHORTE BY ID

- méthode: DELETE
- authentication required
- Authorized Roles: ADMIN, COACH
- Params: id (refers to the code)
- route: /cohortes/:id
- Response: Deleted Cohorte object

### APPRENANTS

#### CREATE NEW APPRENANT

- méthode: POST
- authentication required
- Authorized Roles: ADMIN, COACH
- route: /apprenants
  request body: codeCohorte (string), tagOrdinateur (string), matricule (string, auto, not required), nom (string), prenom (string), postnom (string, not required), dateNaissance (string), lieuNaissance (string), email (string), password (string, not required)
- Assigned Role: APPRENANT
- Create a User linked to that created Apprenant
- response: The Created Apprenant object

```json
{
  "nom": "Warden",
  "prenom": "Megumi",
  "postnom": "Ishigami",
  "email": "megumi@gmail.com",
  "dateNaissance": "01/12/2002",
  "lieuNaissance": "Tokyo",
  "codeCohorte": "C001",
  "tagOrdinateur": "CP0001",
  "password": "okay"
}
```

#### GET ALL APPRENANTS

- méthode: GET
- authentication required
- Authorized Roles: ADMIN, COACH, APPRENANT(Only in the same cohorte)
- route: /apprenants
- response: Array of Apprenant objects

#### GET ONE APPRENANT BY MATRICULE

- méthode: GET
- authentication required
- Authorized Roles: ADMIN, COACH, APPRENANT(Only Theirs)
- Params: matricule
- route: /apprenants/:matricule
- Response: Apprenant object

#### UPDATE ONE APPRENANT BY MATRICULE

- méthode: PUT
- authentication required
- Authorized Roles: ADMIN, COACH, APPRENANT(Only Theirs)
- Params: matricule
- route: /apprenants/:matricule
- request body: matricule (string, auto, not required), codeCohorte (string), tagOrdinateur (string), nom (string), prenom (string), postnom (string, not required), dateNaissance (string), lieuNaissance (string), email (string), password (string, not required)
- Response: Updated Apprenant object

#### DELETE ONE APPRENANT BY MATRICULE

- méthode: DELETE
- authentication required
- Authorized Roles: ADMIN, COACH, APPRENANT(Only Theirs)
- Params: matricule
- route: /apprenants/:matricule
- Response: Deleted Apprenant object

### COACHES

#### CREATE NEW COACHE

- méthode: POST
- authentication required
- Authorized Roles: ADMIN, COACH
- route: /coaches
- request body: matricule (string, auto, not required), codeCohorte (string),nom (string), prenom (string), postnom (string, not required), email (string), dateNaissance (string), adresse (string), telephone (string), password (string, not required)
- Assigned Role: COACH
- Create a User linked to that create coache
- response: The Created Coache object

```json
{
  "codeCohorte": "C001",
  "nom": "kiyotaka",
  "prenom": "senku",
  "postnom": "Ishigami",
  "dateNaissance": "01/12/2002",
  "address": "Hokaido",
  "email": "senku@gmail.com",
  "telephone": "+1234346421",
  "password": "okay"
}
```

#### GET ALL COACHES

- méthode: GET
- authentication required
- Authorized Roles: ADMIN, COACH
- route: /coaches:
- response: Array of Coaches objects

#### GET ONE COACHE BY MATRICULE

- méthode: GET
- authentication required
- Authorized Roles: ADMIN, COACH
- Params: matricule
- route: /coaches/:matricule:
- Response: Coache object

#### UPDATE ONE COACHE BY MATRICULE

- méthode: PUT
- authentication required
- Authorized Roles: ADMIN, COACH(Only Theirs)
- Params: matricule
- route: /coaches/:matricule
- request body: matricule (string, auto, not required), codeCohorte (string),nom (string), prenom (string), postnom (string, not required), email (string), dateNaissance (string), adresse (string), telephone (string), password (string, not required)
- Response: Updated Coache object

#### DELETE ONE COACHE BY MATRICULE

- méthode: DELETE
- authentication required
- Authorized Roles: ADMIN, COACH(Only Theirs)
- Params: matricule
- route: /coaches/:matricule
- Response: Deleted Coache object

### MACHINES / ORDINATEURS

#### CREATE NEW MACHINE

- méthode: POST
- authentication required
- Authorized Roles: ADMIN, COACH
- route: /machines
- request body: modele (string), fabricant (string), tag (string)
- response: The Created Machine object

```json
{
  "tag": "PC0001",
  "modele": "TOSHIBA",
  "fabricant": "DOCOMO"
}
```

#### GET ALL MACHINES

- méthode: GET
- authentication required
- Authorized Roles: ADMIN, COACH, APPRENANT(Only Theirs)
- route: /machines
- response: Array of Machine objects

#### GET ONE MACHINE BY TAG

- méthode: GET
- authentication required
- Authorized Roles: ADMIN, COACH, APPRENANT(Only Theirs)
- Params: tag
- route: /machines/:tag
- Response: Machine object

#### UPDATE ONE MACHINE BY TAG

- méthode: PUT
- authentication required
- Authorized Roles: ADMIN, COACH
- Params: tag
- route: /machines/:tag
- request body: modele (string), fabricant (string), tag (string)
- Response: Updated Machine object

#### DELETE ONE MACHINE BY TAG

- méthode: DELETE
- authentication required
- Authorized Roles: ADMIN, COACH
- Params: tag
- route: /machines/:tag
- Response: Deleted Machine object

## Data Models

### Session

- id (integer, primary key)
- ville (string)
- annee (integer)

### Cohorte

- code (string, primary key)
- description (string)
- session_id (integer, foreing key)

### Apprenant

- matricule (string, primary key)
- user (string, foreing key, one to one)
- codeCohorte (string, foreing key)
- tagOrdinateur (string, foreing key)
- nom (string)
- prenom (string)
- postNom (string)
- dateNaissance (string),
- lieuNaissance (string),
- email (string)

### Coach

- matricule (string, primary key)
- user (string, foreing key, one to one)
- codeCohorte (string, foreing key)
- nom (string)
- prenom (string)
- postnom (string)
- dateNaissance (String)
- email (string)
- adresse (string)
- telephone (string)

### Machine

- tag (string, primary key)
- modele (string)
- fabricant (string)

### Use

- id (string)
- username (string)
- email (string, unique)
- password (string)
- role (Role)
- createdAt (DateTime,now)
- updatedAt (DateTime)

## Authentication

Authentication and Authorization
The API uses JSON Web Tokens (JWT) for authentication and authorization.

### USER ROLE

The users has one of this 4 different roles:

- ADMIN
- APPRENANT
- COACH
- GUEST

```ts
enum Role {
  ADMIN
  APPRENANT
  COACH
  GUEST
}
```

### USER

#### LOGIN

- méthode: POST
- authentication not required
- route: /user/login
- Request Body: email(string), password(string)
- Response: Login State and token

```json
{
  "email": "megumi@gmail.com",
  "password": "okay"
}
```

#### REGISTER

- méthode: POST
- authentication not required
- route: /user/register
- Request Body: username(string), email(string), password(string)
- Assigned Role: ADMIN
- Response: Message of signup state

```json
{
  "username": "Armine Arlet",
  "email": "armine@gmail.com",
  "password": "okay"
}
```

#### USER PROFILE

- méthode: GET
- authentication required
- route: /user/:id
- Response: The logged in user object data

#### USERS LIST

- méthode: GET
- authentication not required
- route: /user
- Response: Array list of user objects with their roles
