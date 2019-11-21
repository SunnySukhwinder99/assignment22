const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://assignment2:assignment2@cluster0-ahzai.mongodb.net/test?retryWrites=true&w=majority';
const readLine = require('readline');


mongoose.connection.on('connected', () =>{
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err =>{
    console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () =>{
    console.log('Mongoose disconnected');
});

if(process.platform === "win32"){
    const rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ('SIGINT', () => {
        process.emit ("SIGINT");
    });
}

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
require('./mobile');