const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join('D:/20761A05F7%20node\hi.html'));
  //__dirname : It will resolve to your project folder.
});
//add the router
app.use('/', router);
app.listen(process.env.port || 8001);
console.log('Running at Port 8001');