< ....... NODE JS ........ >

Closures - is the combination of functions bundled together (enclosed) with reference to its surrounding state (the lexical environment).
in others words , a Closures gives a function access to its outer scope.
In javascript a , a closure is created every time a function is created , at function creation time.

Hoisting - refers to the process whereby the interpreter appears to move the declarations
of functions , variables, classes and imports to the top of the scope.prior to the execution of code.

Promises - The Promise object represents the eventual completion (or failure) of
an asynchronous operation and its resulting value.

states of Promise:

1. Pending: Initial state, neither fulfilled nor rejected.
2. Fulfilled: Successful operation, result available.
3. Rejected: Failed operation, reason for failure available.

Async/Await - Async:makes a function returns a promise.
Await:makes an async function waits for the promise.

Call Stack - A call stack is a mechanism for an interpreter to keep track of its place
in a script that calls multiple functions. what function is being run and
what functions are called from within that function.
When a Script calls a function. the interpreter adds it to the call stack
and then starts carring out the function.

Event loop - Allows node js to perform non-blocking I/O operations - despite the
fact that a single javascript thread is used by default - by offloading
operations to the system kernel whenever possible

┌───────────────────────────┐
┌─>│ timers │
│ └─────────────┬─────────────┘
│ ┌─────────────┴─────────────┐
│ │ pending callbacks │
│ └─────────────┬─────────────┘
│ ┌─────────────┴─────────────┐
│ │ idle, prepare │
│ └─────────────┬─────────────┘ ┌───────────────┐
│ ┌─────────────┴─────────────┐ │ incoming: │
│ │ poll │<─────┤ connections, │
│ └─────────────┬─────────────┘ │ data, etc. │
│ ┌─────────────┴─────────────┐ └───────────────┘
│ │ check │
│ └─────────────┬─────────────┘
│ ┌─────────────┴─────────────┐
└──┤ close callbacks │
└───────────────────────────┘

Node js working - Jab Node.js koi program chalata hai, to uske paas 2 main cheezein hoti hain:

Call Stack — jahan synchronous code run hota hai.

Event Loop — jo check karta hai ke koi async kaam complete
hua hai ya nahi, aur agar hua hai to usse dobara
Call Stack me bhejta hai.

Event-Driven-Architecture - is an architectural pattern in which a system reacts to events
generated by some parts of the system or by user actions.
these events are sent asyncronously and can be consumed by
any number of components , creating a flexible and scalable
communication network.
the main characteristic is the interaction between components via
events rather then direct and synchronous calls(like Rest Api).

                            Three main components of EDA architecture:

                                   1. Event Producer - generates events and emits them to a channel.

                                   2.Event Consumer  - Processes the recieved events.

                                   3.Event Mediator  - An intermediary System (RabbitMQ , Kafka , AWS EventBridge) that manages communication
                                   between producers and consumers.

                              Benefits of EDA:

                                   1:Decoupling - components are independent, making it easier to maintain and scale.

                                   2:Scalability - Events can be processed in parallel and
                                   distrubuted amoung mutlple consumers.

                                   3:Resilience - Failures in consumers do not affect the
                                                  system as a whole.

                                   4:Reactivity - System responds quickly to changes and
                                                  making it ideal for real-time systems.

THE NODE JS File System - Node js act as a File Server . With Node Modules you can work with
files on your computer and perform various operations.
When you are building web app , you might want to upload images , resume , video , docs to the server.Well the node file system has the ability to do all of that and more.

Node js built-in Modules - fs , http , url , os , path.

How to work with Node fs Module - The fs module allows you to carry out several operations
that involve files and folders.With the fs module you can:
.read files
.create files
.update files
.delete files
.rename files

How to read file in node js - using fs.readFile() method.

How to create file in node js - using appendFile() , open() and writeFile().

Two types of reading files - Sync and Async
for Sync - use readFileSync().
for Async - use readFile().

fs module also with directories is well with fs.mkdir creates directory and fs.rmdir removes directory.

What is process in Node.JS ? - In node js , the process object is a global object provides
information and control over the current node js process.
Basically the instance of the program that is running.

                                   You can use it to :
                                                     1. Access Arguments passed to the script.
                                                     2. Communicate with the operating system.
                                                     3. Handle Input / Output (stdIn, stdout).
                                                     4. Manage Environment Variables.
                                                     5. Handle Exit code and signals.
                                                     6. Spawn child process.

                                   Main Features of Process :
                                                  1.process.argv : access cmd-line arguments.
                                                  2.process.env: access environment variables.
                                                  3.process.stdin , stdout :
                                                    terminal input/output - Reading user input , logging errors.
                                                  4:process.exit : exit the program eg. Process.exit(0) success | process.exit(1) error
                                                  5.process.cwd(): current working directory.
                                                  6.process.memoryUsage() : View memory used by your app.
                                                  7.process.uptime():time since the process started.
                                                  8.process.kill(): kill a process.

Environment Variables - Environment variables are key-value pairs used to configure  
 applications externally, allowing you to manage secrets and settings without hardcoding them into the source code.

Streams in Node js - A Stream is a way to read or write sequence of data continously.
in small chunks rather than loading it all into memory at once.
Streams are used for handling data like files , network communications or
any kind of data that comes in chunks.

                          Types of Streams:
                              1. Readable Streams : for reading data.
                              2. Writable Streams : for writing data.
                              3. Duplex Streams : for both reading and writing data.(.net Socket)
                              4. Transform Streams : for transforming data while it is being read or written.

Buffers in Node js - Buffers are temporary storage areas for chunks of data being
transfered between streams and processed by node js.They are
useful for handling binary data like images or files.

                      Why use Buffers?
                          1. Streams process data in chunks.
                          2. Buffers temporarily stores these chunks until the
                             stream processes them

                      Buffer methods:
                          1.Buffer.alloc(size).
                          2.Buffer.from(data).

Event Emitters in node js - eventemitters is a class that comes from event module that is
a built in module in node js. we can create , fire(emit) and
listen (on) to the events in node js and many listeners can listen 1 single event emit that triggers.

                             eventEmitter.emit("triggered event").
                             eventEmitter.on("triggered event", callback).

Child Process in node js - Child Process node js main eik helper program hota hai jo
jo alag task perform krta hai taka node js ka main program
busy na ho.

                            Real Examples:
                                    Image resize karna

                                    Video ko compress karna

                                    1000 records ko Excel mein export karna

                                    1 lakh users ka analysis karna


                                    spawn() - ka kaam hai node js main koi b system ya terminal ki command chalana aur live output show krwana

                                    fork() - node ka chota helper node banata hai alg jisko tum message bhej sakta ho aur wapis recieve b krskta ho.

                                    exec(): System command ko string ke through shell ke saath run karta hai aur ek baar mein output return karta hai.

                                    execFile(): Directly program ya executable file ko run karta hai aur arguments ko safely pass karta hai, bina shell ke

MINI PROJECT : 2 CLI APPS - POKEDEX - POKEMON API and CLI To build and show pokemon
name and its top five moves
Quiz Cli - Using figlet , inquirer , many other packages
to build a quiz app that asks user questions and user
give answers.

                           <  ..... EXPRESS JS .....  >

EXPRESS.JS - FAST , UNOPINIONATED , MINIMALISTIC framework for Node js

              Express js  : is a web framework for node js that helps you

                            => Handle Request and Responses.
                            => Create Routes.
                            => Use MiddleWares.
                            => Make your Server organised and efficient.

              Basic Routing - Routing refers to determining how an application responds to a
                              client request at a particular endpoint

                              what is endpoint - a specific address on the server where
                                                client get or send  data.

                              App.Method(Path , Handler)

Middlewares in Express js - Middleware functions are the functions that have access to
request object , response object and next function in the
application's request-response cycle.

                             Types of MiddleWares

                                            App-Level Middleware
                                            Router-Level Middleware
                                            Error-Handling Middleware
                                            Built-in Middleware
                                            Third-Party Middleware

                              Flow of Middleware in example specific order

                                     Request()

                                      |
                                      v

                                    Auth Middleware

                                      |
                                      v

                                    Role-base MiddleWare

                                      |
                                      v

                                    Response()

Handling Request and Response in Express - At the heart of any Express App is Request and
Response - How Clients and Servers Talks

Request - in express req object is like an incomming request
from the client(like a browser , mobile app or postman).

                                  Key Properties of Request Object

                                    req.url    : The req of the URL(e.g /login).

                                    req.method : Http methods used (e.g GET , POST).

                                    req.body   : The data sent by the client in a
                                                  POST/PUT request.
                                    req.params : Url parameters (e.g /user/:id)

                                    req.query  : Query Strings (e.g /search?term=react)

                                    req.headers: Metadata about the request(content type
                                                  and auth tokens).

Response - The res object is used to send back data or messages to
the client.

                                  Key Methods

                                    res.send()     : sends a plain response ( like text , html
                                                     and object etc);
                                    res.json()     : sends a JSON response (automatically set
                                                     headers).

                                    res.status()   : Sets the HTTP status code.

                                    res.redirect() : Redirects the Client to another url.

                                    res.render()   : Renders a view template(if using a                templating engine. )

In simple :
Request (req) is what you get from the client, and Response (res) is what you send back to the client.

Express Router - in express.js , Router is a way to create modular , mountable route handlers
Think of it as a mini express app without features of full app(like .listen()). it helps to seperate routes and logic into files.Keeping your code clean and manageable.

Modular Code - it means breaking your code into small , reusable pieces(modules).

                      In an Express App, you can seperate:

                          Routes(routes/).

                          Controllers or logic (controllers/).

                          Database or models.

                          App setup.

Error Handling in node js : it means writing code that catches and responds to unexpected
issues (errors) in your program.

                               __ like missing files , wrong input or failed input requests -
                                  instead of crashing.



                          Types of Error

                          Programmer :

                                     1: mistakes in the logic and syntax of the code.

                                     2:can be fixed by editing source code.

                                     3:ex, trying to access a property of undefined variable.

                          Operational:

                                     1: antiticipated and accounted for (expected).

                                     2: when an operation has the potential o fail.

                                     3: handled by determining what should happen if it fails.

                                     4: ex ; " User not found " , " Not Authorized".

JWt in node js ? - JWT stands for json web token  
 jwt is a secure token that server gives to client for
secure authication of user and it is stateless

                                    JWT consists of 3 parts

                                        1: Header (type:jwt and algorithm (e.g HS256)).

                                        2: Payload (User info (e.g userId , email etc)).

                                        3: Signature : Secret key to signature data.


                                    Working of jwt

                                        user login krta hai =>

                                        server token banata hai aur client ko bhejta hai ->

                                        client har protected route main token send krta hai =>

Role-Base Authorization - it is a technique that we
asign specfic roles to a user (e.g Admin , User , Editor) and according to that role they have permissions to do the things.

                                      Role-Base Authorization basic concept :

                                      Authentication: Verify the identity of  user (using login).

                                      Authorization: decide what access we give to user (based on Role).

                                      Example :
                                                admin : can manage user and data.

                                                user : can only access its data.


                                        Step | What Happens
                                                  ✅ Login | JWT token generate hota hai
                                                  🍪 Cookie | Token client browser mein store
                                                  🔐 Middleware | Cookie se token extract, verify
                                                  🔍 RBAC | Role check hota hai
                                                  🎯 Final | Access allowed ya denied

Visual Summary Of RBAC:

[Client]
→ Signup/Login → Token milta hai cookie mein

[Client Browser]
→ Har request ke saath cookie send hoti hai

[Server]
→ Middleware JWT verify karta hai → req.user mein info inject karta hai
→ Role middleware (RBAC) role check karta hai
→ If allowed → data send, else → 403 Access Denied

Multer and Cloudnary for File Uploads in node js -
use multer and cloudnary packages to
to work with file uploads.

                                                      steps :
                                                             1: require multer.
                                                             2: allocate diskstorage.
                                                             3: upload.single or array.

Sending email in node js :
steps:
1: install nodemailer.
2: create a SMTP transporter
3: Create Email contents ( to , from , subject , body , attachments).
4: to send email use transporter.sendMail() fn.
5: SMTP accepts it and semd it to receipent inbox.

                    <...... Mongo DB Intro ........>


                    Sql vs NoSql

                    sql                                 NoSql

                    sql - structured Query language     nosql - Not only Sql

                    Tradtional relational db system     Modern flexible db system

                    data stored in Tables(rows/columns) data stored in documents , key-value ,
                                                        graph or wide-column format.

                    Cluster                             Cluster
                    Tables                              Collections
                    Rows                                Documents
                    Columns                             Fields

MongoDB is a popular open-source NoSQL database that stores data in flexible, JSON-like documents, which are then organized into collections.

                           it stores data in Json format which optimised version we called
                            (BSON).


                                {
                                      "name": "Ali",
                                      "age": 25,
                                      "email": "ali@example.com"
                                }

CRUD Operations in Mongo db : CREATE - READ - UPDATE - DELETE

                   Create:
                          db.students.insertOne()
                          db.students.insertMany()

                   Read:
                          db.students.find()
                          db.students.findOne()

                   Update:
                          db.students.updateOne()
                          db.students.updateMany()

                   Delete:
                          db.students.deleteOne();
                          db.students.deleteMany();

In Mongoose (ORM stands for object relational mapper Or ODM object data mapping)

                   find() method returns an array of objects.
                   findOne() method returns an object.
                   findByIdAndUpdate() method first finds the id and then update record.
                   findByIdAndDelete() method first finds the id and then delete record.

Schema Design - in mongo db is how you structure your data in collections and documents.

                         Common Schema design approaches :

                            Embedding(nested objects) - embed related data directly
                                                        inside the document.

                                     e.g
                                          {
                                                 "name":"Ali",

                                                 "orders":[
                                                        {"item":"laptop","price":30000},
                                                        {"item":"mobile","price":300000},
                                                 ]
                                          } Note: best when data is small and fetched      together.

                           Referencing (Normalization) - stored data in different collections
                                                         and reference by _id.

                                   e.g
                                       user collection

                                       {
                                          "_id":1,
                                          "name":"Ali"
                                       }

                                       orders collection

                                       {
                                          userId:1,
                                          "item":"laptop",
                                          "price" : 120000
                                       }

                                       Note: best when data is large and reused (many to many).

Aggregation - it groups the data from multiple documents to a single
document based on the specified expression

Aggregation Pipeline - The aggregation process in MongoDb consist of several
stages.each stage transforming the data in some way.
The Output of the one stage is fed as the input of
the next stage and so on, until the final stage produces
the desired results.
Mongo DB provides several built-in aggregation pipeline stages to permform various operations on data.

                                     $group
                                     $sum
                                     $avg
                                     $min
                                     $max


                                      Sample Query of Aggregation Pipeline

                                      db.collection.aggregate(pipeline , options);

                                      pipeline - array of aggregation stages - $match , $group.

                                      options - object with additional settings - allowDiskUse, collation etc.

                             Example:

                             db.teachers.aggregate([
                                  {  $group : {
                                          _id:"$field",students:{
                                                 $push:"$$ROOT"
                                          }
                                    }
                                  }
                             ]);

                             $$ROOT value is a reference to the current document being
                             processed in the pipeline, which represents the complete
                             document.

                             Example 2:

                                db.teachers.aggragate([ {
                                   $match:{gender:"male"}
                                } , {
                                   $group:{
                                          _id:"$age",
                                          CountOfTeachersInThisAgeGroup:{$sum:1}
                                   }
                                }])

                            $unwind flattens an array to create many different copies of same array
                            $avg operator use find average of specific field.
                            $size:<expression>
                            $ifNull:[<array>,<replacement of array>]
                            $addToSet - for unique values.
                            $filter
                            $bucket operator

                            $bucket:{
                                   groupBy:"$age",
                                   boundaries:[0,30,40],
                                   default:greater than 40,
                                   output:{
                                          count:{$sum:1}
                                   }
                            }


                            $lookup - joins the document


                            Example:
                            db,cust.aggregate([

                            {

                             $lookup:{
                                   from:"orders",
                                   localField:"_id",
                                   foreignField:"c_id",
                                   as : "Order_details"
                             }
                            },

                            ]);

                            $project - includes/excludes fields or transforming the fields
                            $sort - sorting the data by asc or dsc.

Indexing - enhances query performance by allowing the database to quickly locate documents without scanning the entire collection.
indexing:
it stores,
.index key
.pointers to locate the collection

                              types of indexing
                                   Single Index
                                   Compound Index
                                   Text Index
                                   Hashed Index
                                   Geo Spatial index

                            how to create index:
                                 db.students,createIndex("$key").explains("executionSuggests")

                            how to get index :
                                  db.students.getIndex()

                            how to drop index:
                                  db.students.dropIndex()

Transaction in Mongo DB - transaction is a set of operations that are executed as a single
, atomic unit.

ACID properties stands for atomicity , Consistency , isolation , Durability

Login --> LocalStorage --> Your ID
↓
Get All Users from API
↓
Choose Receiver from Dropdown
↓
Enter Amount → Press "Send"
↓
Backend: Run Transaction

Connecting Mongo db with express using Mongoose -

-> first install the mongoose package
-> Second Require that package in express app
-> Third use mongoose.connect('connection string').then().catch() that returns a promise
-> create schema with new mongoose.Schema({}) function.
-> then create a model like mongoose.model('collection name' , Schema)
-> used it in your app

                         npm i mongoose

                         const mongoose = require("mongoose");

                         mongoose
                                 .connect('mongodb://127.0.0.1:27017/myDb')
                                 .then(()=>console.log('mongo connected'))
                                 .catch(err => console.log('Mongo Err' , err))

                        const userSchema = new mongoose.Schema({
                            name:string,
                            email:{
                                   type:String,
                                   unique:true,
                                   required:true
                            },
                            password:String
                        });

                        const User = mongoose.model('user' , userSchema)

Relationships in mongo db -
one-to-one relation
e.g
One user have only one profile.
one-to-many relation (mostly used)
e.g
One user have multiple posts in social media.
many-to-many
e.g
Many students enroll in many courses.

Errors in DB
Common areas of DB Errors
.Connection Error - error due to connection failed
.Validation Error - error due incorrect password or email
.Cast Error - error due to invalid object id
.Duplicate Key Errors - error due to duplicate key entry
.Query Errors - not a db error but due to user not found like custom error.

ONE TO MANY relationship - means 1 thing related tp many things for example
1 Parent has many childrens but each child hai only 1 parent
e.g
1 customers can create many orders but 1 order related to only 1 customer.

                            if we create 3 tables 1 customer 2 orders and 3 is relationship table

                            in this table we have 2 fk(foreign keys) cust_id ord_id

                            so which of them is a primary key from both of them?

                            order_id -> primary key because its value is not repeat

                            if we have date attribute in this table so it is called descriptive attribute.

Redis - Redis is an in-memory datastore ,
best known for caching ,
redis allows you to reduce
load primary database while
speeding up database reads.
Example :
you have a e com app and you searched products from it there are lots of queries performed in primary database so it becomes slow so you cached the product query data in redis
Two patterns that should follow: > Cache Pre-Fetching : you put entire Product data
catalog in redis and perform your read oprations. > Cache-aside pattern: you filled redis on demand ,
based on what search parameters are requested by front end.
the goal of this pattern is to set up Optimal Caching(load as you go) for better read operations > cache miss : you do not find data in cache. > cache hit : you find data in cache.

                                          https://redis.io/learn/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbf70e6aa643f4e8db14c5b0c8dbba962%252F738e170a94d34413b7f8161ee730c090&w=640&q=75

                                          image of cache miss and cache hit
                                           in redis

Background jobs (BullMQ) - bull mq is a library use for message queue.
queues works on the principle of FIFO
(first in first out).
Queue-based operations perform in BullMQ > Producer : is responsible for adding jobs to queue. > Worker : is responsible for processing the jobs from queue.

                           Producer code :
                                          import { Queue } from 'bullmq';
                                          import { connection } from './redisClient'; // your Redis config

                                          const myQueue = new Queue('my-queue', { connection });

                                          // Add a job
                                          await myQueue.add('sendEmail', {
                                            to: 'user@example.com',
                                            subject: 'Welcome!',
                                            body: 'Thanks for signing up.'
                                          });

                            Worker Code :
                                          import { Worker } from 'bullmq';
                                          import { connection } from './redisClient';

                                          const worker = new Worker('my-queue', async job => {
                                            if (job.name === 'sendEmail') {
                                              const { to, subject, body } = job.data;
                                              // Simulate sending email
                                              console.log(`Sending email to ${to}: ${subject}`);
                                            }
                                          }, { connection });

                            // redisClient.js
                                           export const connection = {
                                             host: '127.0.0.1',
                                             port: 6379
                                           };

Cluster in node js - Clustering in Node.js enables running multiple instances of a Node.js application to utilize multi-core processors, enhancing performance and reliability.

 Node js is single threaded so it uses only one CPU core. On multi core systems , Cluster help distrubute the load across all cores to handle concorent requests. cluster create child processes (workers) that all Share same port which improves the performance of node js app.

                                  cluster is an in-built (core) module in Node.js

                                  example code:
                                  // cluster-example.js

                                    const cluster = require('cluster');
                                    const http = require('http');
                                    const os = require('os');

                                    const numCPUs = os.cpus().length;

                                    if (cluster.isMaster) {
                                    console.log(`Master process PID: ${process.pid}`);

                                    // Fork workers.
                                    for (let i = 0; i < numCPUs; i++) {
                                    cluster.fork();
                                    }

                                    // Listen for dying workers and respawn them
                                    cluster.on('exit', (worker, code, signal) => {
                                    console.log(`Worker ${worker.process.pid} died. Spawning a new one.`);
                                    cluster.fork();
                                    });

                                    } else {
                                    // Workers can share the same TCP connection
                                    http.createServer((req, res) => {
                                    res.writeHead(200);
                                    res.end(`Handled by worker ${process.pid}\n`);
                                    }).listen(3000);

                                    console.log(`Worker started: PID ${process.pid}`);
                                    }


Load Balancing  -  load balancing is a technique used to distribute network traffic across multiple servers.The goal is to :
                                 > Avoid overloading any single server.
                                 > Improve application responsiveness.
                                 > Ensure High Availability and Fault Tolerance.
                                 > Scale Easily with increased traffic.

How Load Balancing Works in Node js ?
                               > Using Node js Cluster (built-in module).
                               > Using NGINX as a proxy server.
                               > Using Costum express web server.


| Use Case                        | Recommended Approach     |
| ------------------------------- | ------------------------ |
| Multi-core usage on one server  | `cluster` module         |
| Load balancing multiple servers | NGINX                    |
| Learning/Custom logic           | Node-based load balancer |


Web Sockets : web socket is a protocol that creates bi-directional real time communication
              between client(browser) and a server

              WebSockets - Once Connection open - messages were send continously with making
                           another request.

                            USE CASES:
                                       > CHAT APP
                                       > Live Notifications
                                       > Online Games 
                                       > Real-time Dashboards
ws : a node js websocket library 

socket.io is also a websocket library that is mostly used and recommended


 Microservice Architecture - break down the entire application into small manageable
                             pieces , each perform specific functions.
                             For example
                                        order service , shippment service 
                                         , payment service , user-account service , products
                                          service etc
                            how we connect these services
                             > Api calls
                             > Message brokers (Rabbit MQ , kafka)
                             > Service mesh.
                            Advantages of Micro services
                                    > Scalabilty
                                    > Independent deployment
                                    > Loosely Coupled
                            Challenges of microservices
                                    > complexity
                                    > data management and consistency
                                    > security challenges


Monolithic architecture : create entire application as a single Unit and every component in
                          monolithic is tightly coupled.
                          every component is dependent of the other
                          for example
                               user-account , orders , payment every one depend on each other
                               one change can create enitire app change like versions
                        
API GATEWAY : it is a single entry point that recieves client request and forward them to the 
              correct micro-service.
              For Example 
              Client send request /login -> Api Gateway forwards it to Login Service.
Service Discovery: helps services to find each other by keeping track of their current
                   addresses automatically.
              For Example
              Api gate asks service registery for Current address of Product Service ->
               then send request there.
               
🔄 Real-Life Analogy:
Concept	     Real-Life Example
API Gateway....      A receptionist in a mall guiding visitors.
Service Discovery... A directory or Google Maps for store locations.

