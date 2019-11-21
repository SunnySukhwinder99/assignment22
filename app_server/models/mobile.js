const manufacturerSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true,
    }
    
});

const mobileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength : 5,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        minlength : 10,
        maxlength: 100
    },
    os: {
        type: String,
        required: true,
        maxlength: 20
    }
});

mongoose.model('mobiles', mobileSchema);