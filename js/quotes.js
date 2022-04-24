const quotes = [
    {
        quote: "When you need direction Look to the stars. If you don't know where you're heading Follow your heartThe road to success and the road to failure are almost exactly the same.",
        author: "Love Is a Compass - Griff" ,
    } ,
    {
        quote: "I don't wanna go home today You don't really wanna just go The blue skies are telling me to go that way, yeah I think I might just fly away.",
        author: "Zombie pop - DPR IAN" ,
    } ,
    {
        quote: "Tell me, did the wind sweep you off your feet? And did you finally get the chance to dance along the light of day and head back to the Milky Way?",
        author: "Drops of Jupiter - Train" ,
    } ,
    {
        quote: "You have suffered enough. And warred with yourself. It’s time that you won.",
        author: "Falling Slowly -Glen Hansard and Markéta Irglová" ,
    } ,
    {
        quote: "Me, myself, and I, that's all I got in the end, that's what I found out. And it ain't no need to cry. I took a vow that from now on, I'm gon' be my own best friend.",
        author: "Me, Myself, and I -  Beyoncé" ,
    } ,
    {
        quote: "I made you my temple, my mural, my sky. Now I’m begging for footnotes in the story of your life.",
        author: "Tolerate It - Taylor Swift" ,
    } ,
    {
        quote: "It’s alright to die, cause death’s the only thing you haven’t tried. But just for tonight, hold on.",
        author: "Even My Dad Does Sometimes - Ed Sheeran" ,
    } ,
    {
        quote: "JUST ENJOY",
        author: "Bang chan" ,
    } ,
    {
        quote: "And I know that I deserve your love. There’s nothing I’m not worthy of.",
        author: "This Is Me - Keala Settle and The Greatest Showman Ensemble" ,
    } ,
    {
        quote: "And finally, 'Cause I'm gonna be free, and I'm gonna be fine. But maybe not tonight.",
        author: "Delilah - Florence and the Machine " ,
    },
    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;