intent(
  "what does this app do?",
  "what can i do here?",
  reply("This is a news app.")
);



const API_KEY = "16a8e5fc6f0b4d69bb82357f1ff92546";
let savedArticles = [];

// News by Source
intent("Give me the news from $(source* (.*))", (p) =>{
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?/apiKey=${API_KEY}`;
    
    if(p.source.value){
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
    }
    
    api.request(NEWS_API_URL, (error, response, body) => {
        const {articles} = JSON.parse(body);
        
        if(!articles.length){
            p.play('Sorry, please try searching for news from a different source.');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles});
        p.play(`Here are the (latest|recent) ${p.source.value} news.`)
    })
});
