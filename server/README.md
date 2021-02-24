# ms-wt-20-06-BuecherBoerse
### Tutorial aus Full-Stack React Projects

### Pakete installieren
```
npm install
Falls es einen Fehler geben sollte:
npm install --legacy-peer-deps
```

### Während der Entwicklung
Als Datenbank wird mongodb benutzt, welches vorher installiert werden muss:
[https://docs.mongodb.com/manual/installation/]
Datenbank starten mit
```
mongod
```

Server starten
```
npm run development
```

Später dann
```
npm run start
```


Im Browser aufrufen:
http://localhost:3000


### Beschreibung
User login backend mit create, update, delete (CRUD) und authentication-authorization (auth)
Testen mit https://install.advancedrestclient.com/install

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

### Benutzer Felder in der Datenbank
| Feld        | Typ           | Beschreibung  |
| ------------- |:-------------:| -----:|
| name      | string| Notwendig |
| email     | string| Notwendig (einzigartig) |
| password  | string| Notwendig Passwort wird verschlüsselt gespeichert|
| created   | Date  | Wann wurde der Benutzer erstellt? Automatisch generiert|
| updated   | Date  | Wann wurde der Benutzer aktualisiert? Automatisch generiert|

### Bücher API
| Route         | HTTP Methode           | Beschreibung  |
| ------------- |:-------------:| -----:|
| `/api/books/`          |`POST`     | Erstelle Buch     |
| `/api/books/`          | `GET`     | Liste aller Bücher  |
| `/api/books/:bookId`   | `GET`     | Finde ein bestimmtes Buch  |
| `/api/books/:bookId`   | `PUT`     | Verändere Buch  |
| `/api/books/:bookId`   | `DELETE`  | Lösche Buch  |

### Bücher Felder in der Datenbank
| Feld        | Typ           | Beschreibung  |
| ------------- |:-------------:| -----:|
| name      | string| Notwendig |
| author    | string| Notwendig |
| category  | string| optional  |
| language  | string| optional  |
| condition | string| optional  |
| status    | string| optional  |
| owner     | User  | Wird automatisch generiert |
| created   | Datum | Wird automatisch generiert |
| updated   | Datum | Wird automatisch generiert |