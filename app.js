// code to generate daily quotes 

let quotes = [

    {
        author: "Niccolo Machiavelli",
        title: "Honor",
        message: "It is not title that honour men, but men that honour titles "
    },

    {
        author: "Robert Manguel",
        title: "The Liberty at Night",
        message: "Old books that we have known but not possessed cross our path and invite themsleves over. New book try to seduce us daily with tempting titles and tantalizing covers"
    },

    {
        author: "Charles Dickens",
        title: "Dignity",
        message: "There are some promotions in life, which, independent of the more substaintial rewards they offer, acquire peculiar value and dignity from the coast and waistcoats connected with them. A field-marchal has his uniform; a bishop his silk apron; a counsellor his silk gown; a beadle his cocked hat.  "
    }
]


setInterval(() => {
    // generate a random number
    let num = Math.floor((Math.random())* quotes.length)
    //get the quote of the day
    let quote = quotes[num].message;
    let title = quotes[num].title;
    let author = quotes[num].author;

    let displayTitle = document.querySelector('.title')
    displayTitle.innerHTML = title
    let displayQuote = document.querySelector('.message')
    displayQuote.innerHTML=quote;
}, 1000);


