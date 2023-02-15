import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
            },
            "author": "Chris Mooney",
            "title": "Warming oceans are carving vast trenches into Thwaites glacier - The Washington Post",
            "description": "New research provides a startling and unprecedented look at how warmer oceans, driven by climate change, are tearing apart Thwaites glacier. All of West Antarctica, and 10 feet of sea level rise, are at stake.",
            "url": "https://www.washingtonpost.com/climate-environment/2023/02/15/glacier-ice-melt-ocean-warming/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BPCRTC7E3ZPUVGHBPW3J2TKGCQ.jpeg&w=1440",
            "publishedAt": "2023-02-15T16:29:35Z",
            "content": "Comment on this story\r\nRapidly warming oceans are cutting into the underside of the Earths widest glacier and posing a major sea-level-rise threat, startling new data and images show.\r\nUsing an under… [+8416 chars]"
        },
        {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Natasha Turak",
            "title": "Ukraine war live updates: EU announces new Russia sanctions package; Ukrainian children sent to Russian 're-education' camps, study says - CNBC",
            "description": "A new report from the Conflict Observatory details the Kremlin's systemic efforts to abduct Ukrainian children.",
            "url": "https://www.cnbc.com/2023/02/15/russia-ukraine-live-updates.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107045367-1649734536077-gettyimages-1390462714-jm2_3062_44ec7c1a-4f63-4d58-8de9-4d1a83cfa617.jpeg?v=1676473903&w=1920&h=1080",
            "publishedAt": "2023-02-15T16:28:00Z",
            "content": "European Union bans on Russian oil and oil product exports are having the \"intended effect\" on Russian oil production despite continued flows into the continent, according to Toril Bosoni, head of th… [+1568 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Mark Morales, Eric Levenson, Aya Elamroussi",
        "title": "Man rushes at Buffalo grocery store mass shooter during emotional sentencing hearing - CNN",
        "description": "The 19-year-old White man who killed 10 people in a racist mass shooting at a grocery store in a predominantly Black area of Buffalo last May cried and said he regretted his actions as he was sentenced to life in prison during an emotional court hearing Wedne…",
        "url": "https://www.cnn.com/2023/02/15/us/buffalo-tops-grocery-shooting-payton-gendron-state-sentencing/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230215103332-01-gendron-sentencing-testimonies-0215.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-02-15T16:06:00Z",
        "content": "The 19-year-old White man who killed 10 people in a racist mass shooting at a grocery store in a predominantly Black area of Buffalo last May cried and said he regretted his actions as he was sentenc… [+6630 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Super Bowl Champions Parade | Kansas City Chiefs - Kansas City Chiefs",
        "description": "The Chiefs celebrate their Super Bowl 57 victory with a championship parade in downtown Kansas City. Official parade start time is Noon CT.Subscribe for more...",
        "url": "https://www.youtube.com/watch?v=RCh7vr020Tc",
        "urlToImage": "https://i.ytimg.com/vi/RCh7vr020Tc/maxresdefault_live.jpg",
        "publishedAt": "2023-02-15T15:59:47Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Nikki Haley: Why she thinks she can beat Trump in Republican race - BBC",
        "description": "She's banking on Republicans looking for something different, but can she pull it off?",
        "url": "https://www.bbc.com/news/world-us-canada-64653925",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/106C/production/_128640240_haley3_976getty.jpg",
        "publishedAt": "2023-02-15T15:57:26Z",
        "content": "Media caption, Watch: Five things to know about Nikki Haley\r\nNikki Haley becomes the first candidate to challenge Donald Trump for the Republican nomination when she holds her first campaign event in… [+7108 chars]"
        },
        {
        "source": {
        "id": "abc-news",
        "name": "ABC News"
        },
        "author": "CHALIDA EKVITTAYAVECHNUKUL Associated Press",
        "title": "One of 12 boys rescued from Thai cave dies at British school - ABC News",
        "description": "One of the boys rescued from a flooded cave in Thailand in 2018 has died in England",
        "url": "https://abcnews.go.com/International/wireStory/12-boys-rescued-thai-cave-dies-british-school-97220018",
        "urlToImage": "https://s.abcnews.com/images/International/thai-cave-Duangphet-Phromthep-ap-thg-230215_1676469815754_hpMain_16x9_992.jpg",
        "publishedAt": "2023-02-15T15:37:26Z",
        "content": "BANGKOK -- One of the 12 boys rescued from a flooded cave in Thailand in 2018 after being trapped for more than two weeks has died in England, where he was attending a sports academy, the foundation … [+2289 chars]"
        },
        {
        "source": {
        "id": "financial-times",
        "name": "Financial Times"
        },
        "author": "Alexandra White",
        "title": "US retail sales jump in latest sign Federal Reserve may need to keep rates high - Financial Times",
        "description": "January’s 3% increase follows hotter-than-expected inflation and labour market data",
        "url": "https://www.ft.com/content/80a4d9ae-5a3c-4fbe-a767-c88f014734d6",
        "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fd7466f77-ae7c-4184-b432-6dcd4b2a83ac.jpg?source=next-opengraph&fit=scale-down&width=900",
        "publishedAt": "2023-02-15T15:11:30Z",
        "content": "US retail sales increased sharply in January, the latest in a series of hotter-than-expected economic data that may force the Federal Reserve to keep tightening monetary policy for longer to slow the… [+2435 chars]"
        },
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "https://www.engadget.com/about/editors/mat-smith",
        "title": "Oppo Find N2 Flip hands-on: Fixing the foldable's shortcomings - Engadget",
        "description": "Oppo's second generation of foldable phones would compete with the same form factors as Samsung.",
        "url": "https://www.engadget.com/oppo-find-n2-flip-hands-on-fixing-the-foldables-shortcomings-150021728.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-02/3ffb0430-ad44-11ed-9ee6-502379fb5e82",
        "publishedAt": "2023-02-15T15:01:46Z",
        "content": "Samsung, in a few short years, became the foldable phone company. For now. Rivals have either been unable to launch their own smartphone origami projects or simply failed to match against the Z Fold … [+2760 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Page Six"
        },
        "author": "Riley Cardoza",
        "title": "Heather Rae Young, Tarek El Moussa reveal 2-week-old son's name and face - Page Six",
        "description": "The “Selling Sunset” star gave birth to her baby boy in January. She is also the stepmom of El Moussa’s two children with ex-wife Christina Haack.",
        "url": "https://pagesix.com/2023/02/15/heather-rae-young-tarek-el-moussa-reveal-sons-name-face/",
        "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/02/heather-rae-tarek-el-moussa-18.jpg?quality=75&strip=all&w=1200",
        "publishedAt": "2023-02-15T14:45:00Z",
        "content": "Meet Tristan!\r\nHeather Rae Young and Tarek El Moussa introduced their baby boy two weeks after his arrival.\r\nThe reality stars shared photos of their son’s face for the first time Wednesday, telling … [+2098 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Italy's Berlusconi acquitted in Bunga Bunga bribe case - Reuters",
        "description": "An Italian court on Wednesday acquitted Silvio Berlusconi over allegations of bribing witnesses in an underage prostitution case that has dogged the former prime minister for more than a decade.",
        "url": "https://www.reuters.com/world/europe/italys-berlusconi-faces-verdict-bunga-bunga-bribe-case-2023-02-15/",
        "urlToImage": "https://www.reuters.com/resizer/8utZkwlbXrUQ9XbFIEnUxWg-QVk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HT2P6T42TBIYDNVDV5USG2ODXU.jpg",
        "publishedAt": "2023-02-15T14:28:00Z",
        "content": "MILAN, Feb 15 (Reuters) - An Italian court on Wednesday acquitted Silvio Berlusconi over allegations of bribing witnesses in an underage prostitution case that has dogged the former prime minister fo… [+2701 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CBS Sports"
        },
        "author": "",
        "title": "Derek Carr released by Raiders: Best fits for QB in 2023 include multiple teams in NFC South - CBS Sports",
        "description": "Assessing the ideal destinations for the veteran QB",
        "url": "https://www.cbssports.com/nfl/news/derek-carr-released-by-raiders-best-fits-for-qb-in-2023-include-multiple-teams-in-nfc-south/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/07/11/32008552-07a8-49ca-af01-8ed84fc80648/thumbnail/1200x675/e93adba0aebf42cdc00e1c15e68f0faf/derek-carr-2-1400-us.jpg",
        "publishedAt": "2023-02-15T14:19:00Z",
        "content": "Derek Carr's days as Raiders quarterback are over. After the veteran's abrupt demotion at the end of the 2022 NFL season, he informed the Raiders that he would not accept a trade. As a result, the Ra… [+498 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "I feel like people are questioning his character - JWill on Eric Bieniemy not getting HC offer | KJM - ESPN",
        "description": "The KJM crew break down the different factors that could have led into Kansas City Chiefs offensive coordinator Eric Bieniemy not landing a head coaching job...",
        "url": "https://www.youtube.com/watch?v=-zc6XlOp0j4",
        "urlToImage": "https://i.ytimg.com/vi/-zc6XlOp0j4/maxresdefault.jpg",
        "publishedAt": "2023-02-15T14:06:56Z",
        "content": null
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Lisa Respers France",
        "title": "Lady Gaga in first look of 'Joker' sequel - CNN",
        "description": "Lady Gaga looks to be off the deep end with her new character.",
        "url": "https://www.cnn.com/2023/02/15/entertainment/lady-gaga-joker-sequel/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230215085952-01-joker-folie-a-deux.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-02-15T14:02:00Z",
        "content": "Lady Gaga looks to be off the deep end with her new character.\r\nThe singer/actress is believed to be playing Harley Quinn in the Joker sequel, Joker: Folie à deux.\r\nGaga shared a photo of herself in … [+477 chars]"
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": "John Bacon and Sheldon Krause, USA TODAY",
        "title": "Michigan State shooting live updates: Investigators search for motive - USA TODAY",
        "description": "Two days after a gunman's rampage left three students dead on the campus of Michigan State University, the motive remains elusive. Live updates.",
        "url": "https://www.usatoday.com/story/news/nation/2023/02/15/michigan-state-university-shooting-live-updates/11262108002/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2023/02/15/USAT/5d9ecfe3-6e43-4501-aff3-d0dcc53368da-GTY_1466103219.jpg?auto=webp&crop=5999,3375,x0,y305&format=pjpg&width=1200",
        "publishedAt": "2023-02-15T14:01:21Z",
        "content": "EAST LANSING, Mich. – Two days after a gunman's rampage left three students dead on the campus of Michigan State University, investigators were still hunting Wednesday for an answer to one question: … [+6021 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Ron Miller",
        "title": "You.com takes aim at Google and Microsoft with multimodal chat search - TechCrunch",
        "description": "You.com is taking on the giants of search in Google and Microsoft, but it believes it's ahead of the game with multimodal chat search.",
        "url": "https://techcrunch.com/2023/02/15/you-com-takes-aim-at-google-and-microsoft-with-multimodal-chat-search/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/GettyImages-1303365178.jpg?resize=1200,801",
        "publishedAt": "2023-02-15T14:01:13Z",
        "content": "You.com founder Richard Socher knows that his company has always been a David going after the Goliath in search, Google, and to a lesser extent Microsoft. He likes to point out that his company built… [+4497 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Space.com"
        },
        "author": "Mike Wall",
        "title": "Task complete! Perseverance Mars rover snaps photo of filled sample depot - Space.com",
        "description": "Perseverance has recorded the 10-sample Three Forks cache for posterity.",
        "url": "https://www.space.com/mars-rover-perseverance-sample-depot-photo",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/oxqBea9CzopUxGQM6x3M6e-1200-80.jpeg",
        "publishedAt": "2023-02-15T14:00:10Z",
        "content": "NASA's Perseverance Mars rover has recorded the first-ever off-Earth sample depot for posterity.\r\nPerseverance built that depot on a patch of Martian ground called Three Forks over the course of five… [+3495 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Mortgage News Daily"
        },
        "author": "Jann Swanson",
        "title": "Mortgage Rates Rise, Application Volumes Retreat - Mortgage News Daily",
        "description": "It was unrealistic to expect last week’s strong increase in mortgage activity to be sustainable in the current volatile rate environment, and indeed it was not. The Mortgage Bankers Association said its seasonally adjusted Market Composite Index, a measure of…",
        "url": "https://www.mortgagenewsdaily.com/news/02152023-mortgage-application-volume",
        "urlToImage": "https://a.mortgagenewsdaily.com/dsocial/63ecd208d70246f51c557fd0/63ecd208d70246f51c557fd0_0_2023021513.jpg?provider=facebook",
        "publishedAt": "2023-02-15T13:31:39Z",
        "content": "It was unrealistic to expect last weeks strong increase in mortgage activity to be sustainable in the current volatile rate environment, and indeed it was not. The Mortgage Bankers Association said i… [+2952 chars]"
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": "Elise Brisco, USA TODAY",
        "title": "Jennifer Lopez, Ben Affleck show off tattoos on Valentine's Day - USA TODAY",
        "description": "Jennifer Lopez posted photos of herself and husband, Ben Affleck, while  showing off a fresh infinity tattoo and Affleck's tattoo with their initials.",
        "url": "https://www.usatoday.com/story/entertainment/celebrities/2023/02/15/jennifer-lopez-ben-affleck-show-off-tattoos-valentines-day/11262196002/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2023/02/15/USAT/32ae5335-56f7-4775-8752-5bee97713fdd-AP_LA_Premiere_of__The_Tender_Bar_.jpg?auto=webp&crop=3695,2079,x0,y183&format=pjpg&width=1200",
        "publishedAt": "2023-02-15T13:27:18Z",
        "content": "Jennifer Lopez and Ben Affleck are locked in love and have the tattoos to prove it. \r\nLopez posted a carousel of photos of herself and her husband, Affleck, through the years smiling, embracing and k… [+1619 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Luke McGee, Jack Guy",
        "title": "Nicola Sturgeon unexpectedly quits as first minister of Scotland amid swirl of political setbacks, citing 'brutality' of public life - CNN",
        "description": "Nicola Sturgeon, the figurehead of the Scottish independence movement, dramatically announced on Wednesday that she would resign after eight years as Scotland's first minister.",
        "url": "https://www.cnn.com/2023/02/15/uk/nicola-sturgeon-resigns-scotland-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230215112358-01-nicola-sturgeon-021523.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-02-15T12:18:00Z",
        "content": "Nicola Sturgeon, the figurehead of the Scottish independence movement, dramatically announced on Wednesday that she would resign after eight years as Scotlands first minister. \r\nThe Scottish National… [+3951 chars]"
        }
    ]
    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <div className='row'>
            {this.state.articles.map((e)=>{
                return <div className='col-md-4' key={e.url}>
                        <NewsItem title={e.title.slice(0, 45)} description={e.description.slice(0, 78)} imageUrl={e.urlToImage} newsUrl={e.url}/>
                    </div>
            })}
        </div>
      </div>
    )
  }
}

export default News
