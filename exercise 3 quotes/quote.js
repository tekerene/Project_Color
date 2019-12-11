const quotes = [
{
    
    name: 'Leo Tolstoy',
    quote: 'If you want to be happy , be.'
},
{
    name: 'Stephen King',
    quote:'Get busy living or get busy dying.'
},
{
    name:'Leonardo da vinci',
    quote:'it had long since come to my attention that people of accomplishment rarely sat back. '
},
{
    name:'John F.Kennedy',
    quote:'Those who dare to fall miserably can acheive greatly.'
}
]
// const simpleQuoters = [
// {
//     name:'author number 1',
//     quote:'quote number.'
// },
//  {
//     name: 'author number 1',
//     quote:'quote number.'
// }
// ]
const quoteBtn  = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random()* quotes.length);
    //console.log(number);
    quoteAuthor.innerHTML =  quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}