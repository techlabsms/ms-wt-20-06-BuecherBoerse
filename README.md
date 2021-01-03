# ms-wt-20-06-BuecherBoerse
### Tutorial aus Full-Stack React Projects

### Pakete installieren
```
npm install
npm install --legacy-peer-deps
```

### Während der Entwicklung
Datenbank starten
```
mongod
```

Server starten
```
npm run development
```

Im Browser aufrufen:
http://localhost:3000

### In der Verwendung
devBundle.compile aus server.js entfernen
```
npm run build
npm run start
```

### Beschreibung
User login backend mit create, update, delete (CRUD) und authentication-authorization (auth)

#### application programming interface (API)
| Route         | HTTP Methode           | Beschreibung  |
| ------------- |:-------------:| -----:|
| `/api/users`          |`POST`     | Erstelle Benutzer     |
| `/api/users`          | `GET`     | Liste aller Benutzer  |
| `/api/users/:userId`  | `GET`     | Rufe bestimmten Benutzer auf|
| `/api/users/:userId`  | `PUT`     | aktualisiere Benutzer|
| `/api/users/:userId`  | `DELETE`  | Lösche Benutzer|
| `/auth/signin`        | `POST`    | Anmelden|
| `/auth/signout`       | `GET`     | Abmelden|

Testen mit https://install.advancedrestclient.com/install

### Benutzer Felder in der Datenbank
| Feld        | Typ           | Beschreibung  |
| ------------- |:-------------:| -----:|
| name      | string| Notwendig |
| email     | string| Notwendig (einzigartig) |
| password  | string| Notwendig Passwort wird verschlüsselt gespeichert|
| created   | Date  | Wann wurde der Benutzer erstellt? Automatisch generiert|
| updated   | Date  | Wann wurde der Benutzer aktualisiert? Automatisch generiert|