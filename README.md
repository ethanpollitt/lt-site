# lt-site
Losing Teeth website

## Required packages
* nodejs (7.5 =>)
* npm (4.1.2 =>)
* mongodb (mongo + mongod) (2.6.11 =>)

## To Download repo code
```bash
mkdir lt-site
git init
git remote add origin https://github.com/ethanpollitt/lt-site
git fetch
git pull origin master
```

## To set up project
```bash
cd /path/to/lt-site
npm install
ln -s server_dev.js server.js
mkdir /data/db
```

## To start server
```bash
cd /path/to/lt-site
sudo nohup mongod > mongo.out &
sudo nohup node server.js > server.out &
```
