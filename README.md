Backend : Babel es2015

Frontend : es2015 native

## MongoDB Express Angular NodeJS

### Requirements

-   [Node](https://doc.ubuntu-fr.org/nodejs#depuis_un_ppa)
-   [MongoDB](https://doc.ubuntu-fr.org/mongodb#installation)
-   [Nodemon](http://nodemon.io/)
-   [Bower](https://bower.io/)

### Auto-install

[Bash script for Ubuntu & OSX](https://gist.github.com/pierregaillard1986/173dfb97dc821cc0eed51f4de4baf776)

### Execution

#### Installation

```bash
git clone https://github.com/WildCodeSchool/laloupe-0916-escapegame.git
cd laloupe-0916-escapegame.git
npm install
bower install
```

#### Development

```bash
nodemon --exec npm start
```

#### Production

```bash
SECRET_TOKEN='secretToken' MONGODB_URI='mongodb://localhost:8000/laloupe-0916-escapegame.git' npm start
```
