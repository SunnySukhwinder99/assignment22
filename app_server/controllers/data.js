var mobiles = [

    {  "name": "Iphone8",
        "OS": "IOS",
    },

    {
         "name": "Iphone X",
        "OS": "IOS",
    },

    {
        "name": "Iphone XS",
        "OS": "IOS",
    },

    {
        "name": "Iphone XS Max Pro",
        "OS": "IOS",
    },

    {
        "name": "Samsung Galaxy S10",
        "OS": "Android",
    },

    {
        "name": "Samsung Galaxy S10 plus",
        "OS": "Android",
    },
    

    {
        "name": "Google Pixel 4XL",
        "OS": "Android",
    }]

module.exports.m_list = function (req, res) {
    res.render('list-display.pug', {
        mobiles: mobiles
    });
};

module.exports.index = function (req, res) {
    res.render('index', {
        name: 'Mobile Store'
    });
};
