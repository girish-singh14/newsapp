# newsapp
Project has API's for two screens  View Feed and Add Profile Page. The API's perform all the operations required by the two mentioned page like 
listing artilcles, sorting articles by published date, fitering  articles by category and author, adding and validating user profile.

## Installation Requirements

1) Node v15.13.0
2) Mongo v5.0.6
3) Pm2

## Installation and Execution 
   
1)  npm install 
2)  pm2 start server.js
   

## Postman Collections Link 

https://www.getpostman.com/collections/8c75c01c9ba45c773866

## Postman Document Link

https://documenter.getpostman.com/view/8616920/UVkjvxAh


## View Feed / Articles API's Functionalities

1) Fetch All Articles API
2) Sort all Articles
3) Filter Articles API
4) Filter Articles And Sort

All The above functionality is performed by a single api depending on the parameters passed in the query string.

## Add Profile API's Functionalities

1) Add Profile
2) Edit Profile

Add and Edit Profile functionality is performed by same api depending whether id parameter is passed in the request or not.

## Live Demo 

The above mentioned apis are live and can be tested from postman.

# REST API

The REST API of the above functionalities is described below.

### Fetch All Articles API

#### Url : http://voitekk.co.in/newsapp/articles
#### Type : GET
#### Description : 
Fetch's all the articles from db.

#### Node Request : 
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://voitekk.co.in/newsapp/articles',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

 #### Response : 
 
 [
  {
    "_id": "620d030a54d51cb6ebdd1452",
    "author": "Amit Mudgill",
    "title": "Bajaj Finance pips HDFC in m-cap race, now 8th most valued stock - Economic Times",
    "description": "Shares of Bajaj Finance have rallied 20 per cent in the last one year compared with an 8 per cent drop in HDFC shares. The BSE Sensex is up 10 per cent during the same period.",
    "url": "https://economictimes.indiatimes.com/markets/stocks/news/bajaj-finance-pips-hdfc-in-m-cap-race-now-8th-most-valued-stock/articleshow/89586983.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-89586983,width-1070,height-580,imgsize-11416,overlay-etmarkets/photo.jpg",
    "urlToVideo": "",
    "publishedAt": "2022-02-16T13:58:34.952Z",
    "category": "business"
  },
  {
    "_id": "620d030a54d51cb6ebdd1453",
    "author": "Pranav Mukul",
    "title": "Explained: In Zomato crash, symptoms of new-age stock shocks, return of eating-out as Covid retreats - The Indian Express",
    "description": "At Rs 75.75, Zomato’s share was down 8 per cent from its issue price. The stock had been falling for four consecutive trading sessions, wiping 20 per cent of its value during this period.",
    "url": "https://indianexpress.com/article/explained/zomato-crash-symptoms-new-age-stock-shocks-return-of-eating-out-covid-retreats-7775155/",
    "urlToImage": "https://images.indianexpress.com/2022/02/Zomato.jpg",
    "urlToVideo": "",
    "publishedAt": "2022-02-16T13:58:34.962Z",
    "category": "business"
  },
  {
    "_id": "620d030a54d51cb6ebdd1454",
    "author": "Rich Woods",
    "title": "Android apps are coming to Windows 11 today, with over a thousand apps - XDA Developers",
    "description": "Microsoft is announcing availability of several new Windows 11 features, such as Android apps, a clock on a second monitor, and more.",
    "url": "https://www.xda-developers.com/android-apps-are-coming-to-windows-11-today-with-over-a-thousand-apps/",
    "urlToImage": "https://www.xda-developers.com/files/2021/06/Android-Apps-Windows-11-2.jpg",
    "urlToVideo": "",
    "publishedAt": "2022-02-10T00:00:00.000Z",
    "category": "technology"
  },
  {
    "_id": "620d030a54d51cb6ebdd1455",
    "author": "Tom Warren",
    "title": "Microsoft Teams now has new 3D emoji - The Verge",
    "description": "Microsoft is bringing 3D emoji to Microsoft Teams. The new 3D emoji will appear in chat, channels, and reactions in meetings and are part of Microsoft’s Fluent design push.",
    "url": "https://www.theverge.com/2022/2/15/22934720/microsoft-teams-3d-emoji-fluent-design",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/HmICfaVyyYLkr_yfwf8_wP7RSpo=/0x212:652x553/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23243355/KaushalMehtaLYNC_0_1644856338740.png",
    "urlToVideo": "",
    "publishedAt": "2022-02-12T00:00:00.000Z",
    "category": "technology"
  },
  {
    "_id": "620d030a54d51cb6ebdd1456",
    "author": "Dr. Uma Naidoo",
    "title": "Is coffee good for your memory? A Harvard nutritionist and brain expert shares how she maximizes its health benefits - CNBC",
    "description": "Dr. Uma Naidoo, a nutritional psychiatrist and Harvard Medical School professor, shares the health benefits of drinking coffee — and how to maximize its brain-boosting properties.",
    "url": "https://www.cnbc.com/2022/02/15/is-coffee-good-for-your-memory-a-harvard-brain-expert-shares-how-she-maximizes-its-health-benefits.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107015547-1644936797527-GettyImages-516525085.jpg?v=1644936853",
    "urlToVideo": "",
    "publishedAt": "2022-01-11T00:00:00.000Z",
    "category": "health"
  },
  {
    "_id": "620d030a54d51cb6ebdd1457",
    "author": "Tara Garrison, T Nation",
    "title": "Do Keto. Not Forever. - T-Nation",
    "description": "They said that it's a lifestyle, not a diet. They were wrong. Here's why a keto diet is actually BETTER when used in phases.",
    "url": "https://www.t-nation.com/?p=93410",
    "urlToImage": "https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2022/01/Keto-Diet.jpg",
    "urlToVideo": "",
    "publishedAt": "2022-01-15T00:00:00.000Z",
    "category": "health"
  },
  {
    "_id": "620d030a54d51cb6ebdd1458",
    "author": "More by Vicky Singh",
    "title": "IND vs WI Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- West Indies Tour of India, 1st T20I - Cricket Addictor",
    "description": "IND vs WI Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- West Indies Tour of India, 1st T20I",
    "url": "https://cricketaddictor.com/fantasy-cricket/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-west-indies-tour-of-india-1st-t20i/",
    "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2022/02/india-1024x683.png",
    "urlToVideo": "",
    "publishedAt": "2022-01-14T04:50:00.000Z",
    "category": "sports"
  },
  {
    "_id": "620d030c54d51cb6ebdd1459",
    "author": "Vinay Chhabria",
    "title": "Pro Kabaddi Top Raider, Top Defender 2022: Most Raid Points, Most Tackle Points (Updated) after GUJ vs PUN - Sportskeeda",
    "description": "the Pro Kabaddi League had a Triple Panga in store for fans on February 14. The night opened with a battle between tabletoppers Patna Pirates and the inconsistent Telugu Titans.",
    "url": "https://www.sportskeeda.com/kabaddi/news-pro-kabaddi-top-raider-top-defender-2022-most-raid-points-most-tackle-points-updated-guj-vs-pun",
    "urlToImage": "https://staticg.sportskeeda.com/editor/2022/02/25f62-16449222333217-1920.jpg",
    "urlToVideo": "",
    "publishedAt": "2022-01-05T00:00:00.000Z",
    "category": "sports"
  }
]


#### Sort all Articles

#### Url : http://voitekk.co.in/newsapp/articles?sort=1
#### Type : GET
#### Description 
Sorts all articles in ascending order when 1 is passed in sort param and in descending order when -1 is passed in param.

#### Node Request : 
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://voitekk.co.in/newsapp/articles?sort=1',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

 #### Response : 
 
 [
    {
        "_id": "620d030c54d51cb6ebdd1459",
        "author": "Vinay Chhabria",
        "title": "Pro Kabaddi Top Raider, Top Defender 2022: Most Raid Points, Most Tackle Points (Updated) after GUJ vs PUN - Sportskeeda",
        "description": "the Pro Kabaddi League had a Triple Panga in store for fans on February 14. The night opened with a battle between tabletoppers Patna Pirates and the inconsistent Telugu Titans.",
        "url": "https://www.sportskeeda.com/kabaddi/news-pro-kabaddi-top-raider-top-defender-2022-most-raid-points-most-tackle-points-updated-guj-vs-pun",
        "urlToImage": "https://staticg.sportskeeda.com/editor/2022/02/25f62-16449222333217-1920.jpg",
        "urlToVideo": "",
        "publishedAt": "2022-01-05T00:00:00.000Z",
        "category": "sports"
    },
    {
        "_id": "620d030a54d51cb6ebdd1456",
        "author": "Dr. Uma Naidoo",
        "title": "Is coffee good for your memory? A Harvard nutritionist and brain expert shares how she maximizes its health benefits - CNBC",
        "description": "Dr. Uma Naidoo, a nutritional psychiatrist and Harvard Medical School professor, shares the health benefits of drinking coffee — and how to maximize its brain-boosting properties.",
        "url": "https://www.cnbc.com/2022/02/15/is-coffee-good-for-your-memory-a-harvard-brain-expert-shares-how-she-maximizes-its-health-benefits.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107015547-1644936797527-GettyImages-516525085.jpg?v=1644936853",
        "urlToVideo": "",
        "publishedAt": "2022-01-11T00:00:00.000Z",
        "category": "health"
    },
    {
        "_id": "620d030a54d51cb6ebdd1458",
        "author": "More by Vicky Singh",
        "title": "IND vs WI Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- West Indies Tour of India, 1st T20I - Cricket Addictor",
        "description": "IND vs WI Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- West Indies Tour of India, 1st T20I",
        "url": "https://cricketaddictor.com/fantasy-cricket/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-west-indies-tour-of-india-1st-t20i/",
        "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2022/02/india-1024x683.png",
        "urlToVideo": "",
        "publishedAt": "2022-01-14T04:50:00.000Z",
        "category": "sports"
    },
    {
        "_id": "620d030a54d51cb6ebdd1457",
        "author": "Tara Garrison, T Nation",
        "title": "Do Keto. Not Forever. - T-Nation",
        "description": "They said that it's a lifestyle, not a diet. They were wrong. Here's why a keto diet is actually BETTER when used in phases.",
        "url": "https://www.t-nation.com/?p=93410",
        "urlToImage": "https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2022/01/Keto-Diet.jpg",
        "urlToVideo": "",
        "publishedAt": "2022-01-15T00:00:00.000Z",
        "category": "health"
    },
    {
        "_id": "620d030a54d51cb6ebdd1454",
        "author": "Rich Woods",
        "title": "Android apps are coming to Windows 11 today, with over a thousand apps - XDA Developers",
        "description": "Microsoft is announcing availability of several new Windows 11 features, such as Android apps, a clock on a second monitor, and more.",
        "url": "https://www.xda-developers.com/android-apps-are-coming-to-windows-11-today-with-over-a-thousand-apps/",
        "urlToImage": "https://www.xda-developers.com/files/2021/06/Android-Apps-Windows-11-2.jpg",
        "urlToVideo": "",
        "publishedAt": "2022-02-10T00:00:00.000Z",
        "category": "technology"
    },
    {
        "_id": "620d030a54d51cb6ebdd1455",
        "author": "Tom Warren",
        "title": "Microsoft Teams now has new 3D emoji - The Verge",
        "description": "Microsoft is bringing 3D emoji to Microsoft Teams. The new 3D emoji will appear in chat, channels, and reactions in meetings and are part of Microsoft’s Fluent design push.",
        "url": "https://www.theverge.com/2022/2/15/22934720/microsoft-teams-3d-emoji-fluent-design",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/HmICfaVyyYLkr_yfwf8_wP7RSpo=/0x212:652x553/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23243355/KaushalMehtaLYNC_0_1644856338740.png",
        "urlToVideo": "",
        "publishedAt": "2022-02-12T00:00:00.000Z",
        "category": "technology"
    },
    {
        "_id": "620d030a54d51cb6ebdd1452",
        "author": "Amit Mudgill",
        "title": "Bajaj Finance pips HDFC in m-cap race, now 8th most valued stock - Economic Times",
        "description": "Shares of Bajaj Finance have rallied 20 per cent in the last one year compared with an 8 per cent drop in HDFC shares. The BSE Sensex is up 10 per cent during the same period.",
        "url": "https://economictimes.indiatimes.com/markets/stocks/news/bajaj-finance-pips-hdfc-in-m-cap-race-now-8th-most-valued-stock/articleshow/89586983.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-89586983,width-1070,height-580,imgsize-11416,overlay-etmarkets/photo.jpg",
        "urlToVideo": "",
        "publishedAt": "2022-02-16T13:58:34.952Z",
        "category": "business"
    },
    {
        "_id": "620d030a54d51cb6ebdd1453",
        "author": "Pranav Mukul",
        "title": "Explained: In Zomato crash, symptoms of new-age stock shocks, return of eating-out as Covid retreats - The Indian Express",
        "description": "At Rs 75.75, Zomato’s share was down 8 per cent from its issue price. The stock had been falling for four consecutive trading sessions, wiping 20 per cent of its value during this period.",
        "url": "https://indianexpress.com/article/explained/zomato-crash-symptoms-new-age-stock-shocks-return-of-eating-out-covid-retreats-7775155/",
        "urlToImage": "https://images.indianexpress.com/2022/02/Zomato.jpg",
        "urlToVideo": "",
        "publishedAt": "2022-02-16T13:58:34.962Z",
        "category": "business"
    }
]


## Filter Articles API

#### Url : http://voitekk.co.in/newsapp/articles?category=sports&author=Vinay Chhabria
#### Type : GET
#### Description : 

Filter articles by category and author

#### Node Request : 

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://voitekk.co.in/newsapp/articles?category=sports&author=Vinay Chhabria',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

#### Response : 

[
    {
        "_id": "620d030c54d51cb6ebdd1459",
        "author": "Vinay Chhabria",
        "title": "Pro Kabaddi Top Raider, Top Defender 2022: Most Raid Points, Most Tackle Points (Updated) after GUJ vs PUN - Sportskeeda",
        "description": "the Pro Kabaddi League had a Triple Panga in store for fans on February 14. The night opened with a battle between tabletoppers Patna Pirates and the inconsistent Telugu Titans.",
        "url": "https://www.sportskeeda.com/kabaddi/news-pro-kabaddi-top-raider-top-defender-2022-most-raid-points-most-tackle-points-updated-guj-vs-pun",
        "urlToImage": "https://staticg.sportskeeda.com/editor/2022/02/25f62-16449222333217-1920.jpg",
        "urlToVideo": "",
        "publishedAt": "2022-01-05T00:00:00.000Z",
        "category": "sports"
    }
]



### Filter Articles And Sort

#### Url : http://voitekk.co.in/newsapp/articles
#### Type : GET
#### Description : 
Filter the articles by category and sort it by published_at date

#### Node Request : 

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://voitekk.co.in/newsapp/articles?category=sports&sort=1',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

#### Response
[
    {
        "_id": "620d030c54d51cb6ebdd1459",
        "author": "Vinay Chhabria",
        "title": "Pro Kabaddi Top Raider, Top Defender 2022: Most Raid Points, Most Tackle Points (Updated) after GUJ vs PUN - Sportskeeda",
        "description": "the Pro Kabaddi League had a Triple Panga in store for fans on February 14. The night opened with a battle between tabletoppers Patna Pirates and the inconsistent Telugu Titans.",
        "url": "https://www.sportskeeda.com/kabaddi/news-pro-kabaddi-top-raider-top-defender-2022-most-raid-points-most-tackle-points-updated-guj-vs-pun",
        "urlToImage": "https://staticg.sportskeeda.com/editor/2022/02/25f62-16449222333217-1920.jpg",
        "urlToVideo": "",
        "publishedAt": "2022-01-05T00:00:00.000Z",
        "category": "sports"
    },
    {
        "_id": "620d030a54d51cb6ebdd1458",
        "author": "More by Vicky Singh",
        "title": "IND vs WI Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- West Indies Tour of India, 1st T20I - Cricket Addictor",
        "description": "IND vs WI Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- West Indies Tour of India, 1st T20I",
        "url": "https://cricketaddictor.com/fantasy-cricket/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-west-indies-tour-of-india-1st-t20i/",
        "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2022/02/india-1024x683.png",
        "urlToVideo": "",
        "publishedAt": "2022-01-14T04:50:00.000Z",
        "category": "sports"
    }
]

### Add Profile

#### Url : http://voitekk.co.in/newsapp/articles
#### Type : POST
#### Description :
Add profile to saves entry into db as new user if no id parameter is passed.

#### HEADERS
Content-Type : application/x-www-form-urlencoded
#### BODY: 
urlencoded

#### Params 
username : testuser
email : test@gmail.com
phone : 2224444555
password : tempPassword
gender : male
language : hindi
maritial_status: married
dob : 1983-03-25
tob : 12:20


#### Node Request : 

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://voitekk.co.in/newsapp/profile',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    'username': 'testuser',
    'email': 'test@gmail.com',
    'phone': '2224444555',
    'password': 'tempPassword',
    'gender': 'male',
    'language': 'hindi',
    'maritial_status': 'married',
    'dob': '1983-03-25',
    'tob': '12:20'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

#### Response

{
  "username": "testuser",
  "email": "test@gmail.com",
  "phone": "2224444555",
  "password": "tempPassword",
  "gender": "male",
  "language": "hindi",
  "maritial_status": "married",
  "dob": "1983-03-25T00:00:00.000Z",
  "tob": "12:20",
  "_id": "620e311b7de501f92f14dbd8",
  "__v": 0
}


### Edit Profile
#### Url : http://voitekk.co.in/newsapp/profile
#### Type : POST
#### Description : 
Edit profile if id is provided in the parameter. Find the detals by id and saves it. If no details are found through then it sends no user found response.

#### HEADERS
Content-Type : application/x-www-form-urlencoded
#### BODY: 
urlencoded

#### Params 
username:testuser34
email:test@gmail.com
phone:2224444555
password:tempPassword
gender:male
language:hindi
maritial_status:married
dob:1983-03-25
tob:12:20
id:6210fa36d68cc27e1372d889


#### Node Request : 

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://voitekk.co.in/newsapp/profile',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    'username': 'testuser34',
    'email': 'test@gmail.com',
    'phone': '2224444555',
    'password': 'tempPassword',
    'gender': 'male',
    'language': 'hindi',
    'maritial_status': 'married',
    'dob': '1983-03-25',
    'tob': '12:20',
    'id': '6210f6537a98ae0d7e3aa1cc'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

#### Response

{
    "username": "testuser34",
    "email": "test@gmail.com",
    "phone": "2224444555",
    "password": "tempPassword",
    "gender": "male",
    "language": "hindi",
    "maritial_status": "married",
    "dob": "1983-03-25T00:00:00.000Z",
    "tob": "12:20",
    "_id": "6210f6537a98ae0d7e3aa1cc",
    "__v": 0
}
