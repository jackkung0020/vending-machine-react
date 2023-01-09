This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the local server:

## Version
- node 14+

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Use Docker Compose

create Container build
```
docker-compose up -d --build
```

## UI user page 

Start on
```
http://localhost:3000/
```
 When you select product you need to add money with function Mock money
![alt text](./doc/assets/images/image2.png '')


![alt text](./doc/assets/images/mockMoney.png '')

After mock money you can order now
![alt text](./doc/assets/images/order.png '')

After order now you can select want to order more ?
![alt text](./doc/assets/images/order.png '')

if yes back to Home screen

if NO you will go to thank page and cal change money for you
![alt text](./doc/assets/images/change.png '')
## UI Admin page 

Start on
```
http://localhost:3000/admin
```
Same home page but have function Add new+
![alt text](./doc/assets/images/change.png '')

Same home page but have function Add new+
![alt text](./doc/assets/images/change.png '')

Click Add new+ you can add new product
![alt text](./doc/assets/images/add.png '')
- in image feild only add utl image

![alt text](./doc/assets/images/sunmit.png '')

data add to my sql server in BE php you can check in http://localhost:8891/index.php?route=/sql&pos=0&db=blueVending&table=product  product table

![alt text](./doc/assets/images/submit1.png '')

old DB before add 
![alt text](./doc/assets/images/oldDB.png '')

new DB after add 
![alt text](./doc/assets/images/newDB.png '')

but if you click product in ./admin = update function
![alt text](./doc/assets/images/update.png '')

you can update all feild 
![alt text](./doc/assets/images/update1.png '')

and when you back http://localhost:3000/ data change from you update