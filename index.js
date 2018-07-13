var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: "1593787437",
  channelSecret: "e85b69801614833e32cd7aec02b748ec",
  channelAccessToken: "HOkM2n22jz745vO3CmvfowRfayqdoDnc4sVuxBMZGX/71AC+IRVd10t2BZV2SD/lqUwh6z660qxEpXU7ZrstRGv2ob4pVhJlgc4VF+uPK4FzxH0qKf5hyGqJji2I1ss+P7iwKobXKoROtCHx1Qwb/QdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
    console.log(event); //把收到訊息的 event 印出來看看
  });
  
  const app = express();
  const linebotParser = bot.parser();
  app.post('/', linebotParser);
  
  //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
  var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
  