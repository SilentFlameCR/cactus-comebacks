var btn = document.getElementById("button");
var comeback = document.getElementById("comeback");

let comebacks = [
    "Why don't you go and sit on a cactus",
    "Who's a good boye??",
    "You look so effortlessly horrible.",
    "You'd look better with the light's out",
    "NO U",
    "I just ordered a pizza and it comes in 20 seconds. Thought of you.",
    "You see this finger, dwell on it cause its real unlike your girlfriend.",
    "I am rubber you are glue. No actually you eat glue anyway, nevermind.",
    "Can you spell gonorrhea? You should atleast be able to spell what you have.",
    "Growing up my parents told me not to want what other's have. You were probably the kid they were talking about.",
    "You look like a discount store barbie.",
    "Shit I'd have a ton of wine in my house too if you were my daughter/son.",
    "Spending time with you is like riding a bike, except the bike is on fire and i'm on fire and everything is on fire.",
    "You are the reason photoshop was made.",
    "Spongebobs magic conch shell just declared that you are a nerd.",
    "That's a really great picture of you! You don't look bad for once!",
    "At least your not as ugly as the grown up home alone kid.",
    "Have you ever thought about how hard you have worked for everything in life and then there is the kid who yodeled in Walmart and is already more successful than you.",
    "You have your entire life to be a jerk. Why not take today off?",
    "Remember when I asked for your opinion? Me neither.",
    "Some day you’ll go far—and I really hope you stay there.",
    "Your going places kid. Not college but places.",
    "Sometimes it’s better to keep your mouth shut and give the impression that you’re stupid than open it and remove all doubt.",
    "Do yourself a favor and ignore anyone who tells you to be yourself. Bad idea in your case.",
    "Better at sex than anyone? Now all you need is a partner.",
    "I could eat a bowl of alphabet soup and spit out a smarter statement than that.",
    "Roses are red, violets are blue, God made me pretty, what the hell happened to you",
    "Your like the first slice of bread. Everyone see's you but no one wants you",
    "Keep rolling your eyes. Maybe you'll find a brain back there.",
    "I saw a scary waterfall once. You make me want to throw you down it.",
    "They think we the hoes but actually them's the hoes.",
    "Sorry I can't think of an insult stupid enough for you.",
    "I'm not anti-social, I just don't like you.",
    "I know that everyone is allowed to act stupid once in awhile, but you’re really abusing that privilege.",
    "There are some really dumb people in this world. Thanks for helping me understand that.",
    "If ignorance is really a bliss, you must be the happiest person in the world.",
    "Good story bro, but in what part do you shut the fuck up?",
    "Please, don’t stop, keep talking. I only yawn when I’m super intrigued.",
    "Whenever I see your face, I’m reminded that God has a great sense of humor.",
    "You bring me so much joy and happiness — every single time you leave the room.",
    "I think I might have Alzheimer’s because I can’t remember when was the last time I asked for your opinion.",
    "Your lips keep moving, but all I can hear is “blah, blah, blah…",
    "Check your face, please. I think I just found your nose in my business.",
    "Your grades say marry rich but your face says study harder",
    "Yeah you’re pretty, pretty stupid.",
    "You are a disgrace to Evolution.",
    "You are depriving some poor village of its idiot.",
    "Remember JESUS loves you but everyone else thinks you’re an idiot.",
    "Maybe if you ate some of that makeup you could be pretty on the inside.",
    "It’s kinda sad watching you attempt to fit your entire vocabulary into a sentence.",
    "Do you believe in the multiverse theory? That means there is a universe where your funny and not a bitch.",
    "Life is good you should get one.",
    "Oh honey your not pretty enough to be that stupid!",
    "Jesus loves you... but everyone else thinks you're an asshole.",
    "I was hoping for a battle of wits but you appear to be unarmed.",
    "Aww, it's so cute when you try to talk about things you don't understand.",
    
]

btn.addEventListener("click", function addComeback(){
    const random = Math.floor(Math.random() * comebacks.length);
    //console.log(comebacks.length);
    event.preventDefault();
    comeback.value = comebacks[random];
    
})




