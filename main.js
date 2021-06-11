require("express")()
    .get('/',(re, res)=> {res.send('home dir')})
    .listen(8080, ()=>console.log('Server running at port 8080'))