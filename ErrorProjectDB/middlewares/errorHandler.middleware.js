const errorHandler =  (err ,req , res , next) =>{
    console.error('💥 Error:', err);

    const statusCode = 500;
    const message = 'Server Error';

    if(err.name === 'ValidatorError'){
        statusCode = 400;
        message = Object.values(err.errors).map( val => val.message).join(", ");
    }
    else if(err.code === 11000){
        statusCode = 400;
        message = `Duplicate field value: ${Object.keys.keyValue}`;
    }
    else if(err.name === 'castError'){
        statusCode = 400;
        message = "Invalid id format";
    }

    res.status(statusCode).json({
        success:false,
        error:message
    });
};


module.exports = errorHandler;