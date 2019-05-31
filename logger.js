const EventEmitter = require('events'); 
    console.log(__filename);
    console.log(__dirname);
var url = "hhtp://mylogger.io/log";

class Logger extends EventEmitter {

    log(message) {
        //send an http request
        console.log(message);
    
        //RAise an event
    this.emit('messageLogged',{ id:1, url: 'http://'});
    //Making a noise or produce something
    
    
    
    
    }

}


module.exports = Logger;