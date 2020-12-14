 exports.config={

    // test script
    specs:[
        "TC_001_Login.js"
    ],
    capabilities:[
        {
            browserName:"chrome"
        }
    ],
     runner:'local',
     // khai báo server
     hostname:'localhost',
     port:9515,
     path:'/',
     // khai báo test framework
     framework: 'mocha',
     mochaOpts: {
        ui: 'bdd',
        timeout:600000
    },
 }