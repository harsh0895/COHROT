const express = require("express");

const app = express();

function Sum(n){
    let ans = 0;
    for( let i=1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

// here "/" is the router which shows on the url of our website
app.get("/", function(req, res){
  const n = req.query.n; // this is use for taking input from the user!
  const ans = Sum(n);
  res.send(`hi your ans is: ${ans}`) // we are sending the data or response from the http server! 
  })

app.listen(3000); // localhost:3000/ 