
var indArray1 = [];	// Dup #s of truth eng
var indArray2 = []; // Dup #s of dare eng
var indArray3 = [];	// Dup #s of truth esp
var indArray4 = []; // Dup #s of dare esp
var ind1 = Math.floor(Math.random() * 1000); // Holds all truths
var ind2 = Math.floor(Math.random() * 1000); // Holds all dares
var ind3 = Math.floor(Math.random() * 1000); // Holds all truths sp
var ind4 = Math.floor(Math.random() * 1000); // Holds all dares sp
var tot = 0;
var isEng = true;


function trackDup(ind, indArray, td)
{
	// Check if all options have already been seen
	if (td == 1 && indArray1.length == TArray.length)
	{
		alert('You have seen all the TRUTH options currently available, I would appreciate you taking this time to review my extension and suggesting more questions or things you would like to see. Thanks for playing, click ok to randomize and start over!');
		// Reset the array that holds the duplicates
		while(indArray1.length > 0) 
		{
			indArray1.pop();
		}
		while(indArray3.length > 0) 
		{
			indArray3.pop();
		}
	}
	else if (td == 2 && indArray2.length == DArray.length)
	{
		alert('You have seen all the DARE options currently available, I would appreciate you taking this time to review my extension and suggesting more questions or things you would like to see. Thanks for playing, click ok to randomize and start over!');
		// Reset the array that holds the duplicates
		while(indArray2.length > 0) 
		{
			indArray2.pop();
		}
		while(indArray4.length > 0) 
		{
			indArray4.pop();
		}
	}
	// Checks for duplicates 
	for (i = 0; i < indArray.length; i++)
	{
		if (ind == indArray[i] && td == 1)
		{
			ind1 = Math.floor(Math.random() * 1000);
			ind3 = Math.floor(Math.random() * 1000);
			pickFromTArray();
		}
		else if (ind == indArray[i] && td == 2)
		{
			ind2 = Math.floor(Math.random() * 1000);
			ind4 = Math.floor(Math.random() * 1000);
			pickFromDArray();
		}		
	}
} 

// -----------------------------------------------------------

function pickFromTArray()
{	
	// Check the length of the array
	if (isEng)
	{
		while ( ind1 >= TArray.length )
		{
			ind1 = Math.floor(Math.random() * 1000);
			
		}
		trackDup(ind1, indArray1, 1);
		result = TArray[ind1];	
	} else {
		while ( ind3 >= TArraySp.length )
		{
			ind3 = Math.floor(Math.random() * 1000);
			
		}
		trackDup(ind3, indArray3, 1);
		result = TArraySp[ind3];	
	} 
}

function pickFromDArray()
{
	// Check the length of the array
	if (isEng) {
		while ( ind2 >= DArray.length )
		{
			ind2 = Math.floor(Math.random() * 1000);
			
		}	
		trackDup(ind2, indArray2, 2);	
		result = DArray[ind2];	
	} else {
		while ( ind4 >= DArraySp.length )
		{
			ind4 = Math.floor(Math.random() * 1000);
			
		}	
		trackDup(ind4, indArray4, 2);	
		result = DArraySp[ind4];	
	}

}

// ---------------------------------------------------------------------

function newTruth(){
	pickFromTArray();
	updateTo(result);
	if (isEng) {
		indArray1[indArray1.length] = ind1; // Add to dup array
	} else {
		indArray3[indArray3.length] = ind3; // Add to dup array
	}
	
}

function newDare(){	
	pickFromDArray();
	updateTo(result);
	if (isEng) {
		indArray2[indArray2.length] = ind2; // Add to dup array
	} else {
		indArray4[indArray4.length] = ind4; // Add to dup array
	}
	
}

function updateTo(resultText)
{
	document.getElementById("resultT").innerHTML=resultText;
	// Update the totals of truths and dares

	if (tot == 0)
	{
		tot = 1;
		document.getElementById("totals").innerHTML=totalString;
	}
}

// Language -------------------------------------------------------------------------
function toEng() {
	isEng = true;
}

function toEsp() {
	isEng = false;
}

// Listeners -------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('truth').addEventListener('click', newTruth);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dare').addEventListener('click', newDare);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('english').addEventListener('click', toEng);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('espanol').addEventListener('click', toEsp);
});

// Tracking	------------------------------------------------------------------------------
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-58411589-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Themes ---------------------------------------------------------------------------------
function clickOriginal() {
  chrome.tabs.executeScript(null,
      {code:"document.getElementById('originalTheme').href = 'originalTheme.css'"});
  window.close();
}


// --------------------------------------------------------------------------
	// The array of truths
	var TArray = [
		"Who was your first crush?",
		"What was the worst grade that you got this year?",
		"What do you do in your free time that nobody knows that you do?",
		"Is your underwear boring or do they have pictures and words on them?",
		"Do you match your underwear to your outfit?",
		"How much time do you spend getting ready every day?",
		"Why do or don't you wear makeup?",
		"How much do you weight? How much do you wish you weighed?",
		"Do you eat differently in front of people than you do by yourself?",
		"Do you like the 'nice guys' or the 'bad boys'?",
		"Democrat or Republican?",
		"Do you support the gays?",
		"Are you racist?",
		"Do you care about what goes on in the rest of the world?",
		"Do you know where France is located on a map? Where's Italy?",
		"Have you ever been scared for your life?",
		"Where did that scar come from?",
		"Would you ever mercy kill someone?",
		"How do you imagine your wedding?",
		"How many people do you think you'll date before you marry? How many do you want to?",
		"Can you fall in love with two people at the same time?",
		"What is your goal in life?",
		"What do you think the person to your right thinks about you?",
		"How do you think other people perceive you?",
		"What do you think of yourself?",
		"Are you happy with your life choices?",
		"Do you believe in fate or destiny?",
		"If you had to kill everyone in this room OR kill yourself, which would you choose?",
		"Who do you think about the most?",
		"What was your first impression of the person to your left?",
		"Why do you like your crush?",
		"What determines if you will be friends with someone",
		"What do you look for in a friend?",
		"How often do you lie in this game?",
		"Do you think anyone has lied in this game? If so, who lied the most?",
		"What is the worst gift you have ever received?",
		"What is the meanest thing you've ever done? Would you do it again?",
		"Have you ever cheated to win a game?",
		"Have you ever cheated on a test or homework?",
		"Who is the ugliest person you know?",
		"Have you ever talked bad about someone in the room?",
		"What is one annoying habit of each person in the room?",
		"Have you ever lied to a teacher? If so, what was it about?",
		"What was the worst grade you ever got?",
		"Have you ever broken something that belonged to someone else and not told them?",
		"Have you ever pretended to be sick or busy to avoid seeing someone in the room?",
		"Do you sleep with a night light or stuffed animal?",
		"What is your spirit animal?",
		"How many kids do you want to have?",
		"What is your guilty pleasure TV show?",
		"When you get a text, who do you hope it's from?",
		"What do you think your friends dislike about you the most?",
		"What was the worst day of your life?",
		"Have you ever accidentally started a rumour and then let it keep going?",
		"If you had to relive the same year forever that you've already lived, which year would you choose?",
		"Do you believe in a God? Are you sure?",
		"What kind of underwear do you wear?",
		"Tell us about your first kiss, if you haven't had one yet, tell us how you want it to go down.",
		"Have you ever seen a naked person before?",
		"If drugs were legal, would you do them?",
		"If all crime was legal for one day, what would you do?",
		"Have you ever lied to your parents? About what?",
		"When was the last time someone called you out on a lie?",
		"Have you lied during this game?",
		"If you were the opposite gender for a day, what would you do?",
		"What TV show or movie are you emabarrased for watching or liking?",
		"Who in this room would be the worst person to be stuck in an elevator with?",
		"Are you even a little bit racist?",
		"When you tell people your grade/gpa/etc., do you round up or down? Or not at all?",
		"Have you ever lied to make someone feel better? About what?",
		"Who is the meanest person in the room?",
		"Who in the room do you like the least",
		"Who in the room would you like to go on a date with?",
		"Who would you die for?",
		"Who would you take a bullet for but not die for?",
		"What do you do to make some money?",
		"What would you give all your money to have?",
		"Is there an afterlife? What do you think it is like? What do you want it to be like?",
		"If you are religious, what would you do differently in your life if you found out for sure that there was no God? If you are not religious, what would you do differently in your life if you found out for sure that was is a God?",
		"If you could be a different ethnicity, would you want to change?",
		"Do you believe there is life out there?",
		"What would be your personal Hell?",
		"What scares you in the dark?",
		"What would you be afraid of more if you were alone in a dark forest, bugs/murderers or ghosts/monsters?",
		"Who do you dress up for? Who do you try to impress?",
		"Have you had any life changing events? If so, what was it?",
		"What do people think that you would like but you actually hate?",
		"What traditional gender roles do you agree with?",
		"Which stereotypes do you think are actually true?",
		"On days that nobody sees you and you can stay home, what do you do differently?",
		"What do you do to try and impress your crush",
		"What is the stupidest thing you've had a fight about?",
		"What bad habit do you have that you want to break?",
		"Have you ever done something and then blamed it on someone else?",
		"Who do you think tried to impress you?",
		"If you were morbidly obese, would you want people to tell you and try to help you or leave you alone and let you live your life?",
		"What is your favorite bad word?",
		"What is your earliest memory?",
		"If you had all the money in the world, would you still go to college? What would you major in?",
		"Who is the worst person you know?",
		"What would you do if you found out your child was a bully?",
		"What would you do if you found our your parent was a bully at work?",
		"Who is your dearest friend?",
		"What is your most prized possession?",
		"If this room caught on fire, what things would you try to save?",
		"If you could only eat one food for the rest of your life, what would it be?",
		"When you argue and you realize you're wrong, do you keep arguing or admit defeat?",
		"If you had one hour everyday for which you were invisible, what would you do?",
		"If you could be famous for something, what would you want it to be for?",
		"If you could make the same amount of money being a world-renown doctor/scientist or a famous swimsuit model, which would you be?",
		"What would you rather be doing right now?",
		"Do you secretly not want to play this game any more?",
		"Would you or have you flirted with a cashier to get a discount?",
		"How many different passwords do you have?",
		"Who in the room would you want to switch parents or siblings with?",
		"What features do you looks for in a mate? What about in a friend?",
		"Have you ever had a now or never moment?",
		"What are you doing in school that you think is the least useful in life?",
		"Do you have a signature? How did you create it?",
		"What's more important in a food? How it looks, smells, or tastes?",
		"Have you cried in public?",
		"What is the least amount of stuff you would need to be happy?",
		"What songs do you listen to when you're sad?",
		"What is a secret that you promised to keep but then didn't?",
		"Does your best friend call you their best friend?",
		"What rule do you regularly break?",
		"What do you hate about your life?",
		"What do you love about your life?",
		"Who is the smartest person in the room?",
		"If you could trade half your IQ to be the most beautiful person in the world, would you do it?",
		"In what scenario would you die for someone else?",
		"Who would you die for?",
		"Who would die for you?",
		"Who in the room would you take a bullet for but not die for?",
		"Do you have a crush on another player?",
		"Is this game boring you?",
		"Is there anyone that is playing that you don't like but pretend to be friends with?",
		"What is the best lie that you have ever pulled off?",
		"Who do you think has lied in this game?",
		"What's the difference between boys and girls?",
		"Who do you wish was here?",
		"What were you afraid of when you were little that you aren't afraid of now?",
		"What were you afraid of when you were little that you are still afraid of now?",
		"What is the most illegal thing that you want to do?",
		"If you could change one thing about yourself, what would it be?",
		"If you could change one thing about the person to your right, what would it be?",
		"Do you think you're attractive?",
		"Rank everyone in the room in hotness from 1-10.",
		"Have you ever done anything illegal?",
		"Who is your current crush?",
		"What do you really think about the person sitting to your right?",
		"What are your biggest insecurities?",
		"Who do you wish you could be?",
		"How much would you pay for the person to your left if they were held for ransom?",
		"What would you do for a Klondike Bar?",
		"Who do you regularly stalk on Facebook?",
		"What do people dislike about you the most?",
		"What do people like about you the most?",
		"What is the most important quality your future husband should have and why?",
		"What is a deal breaker for you?",
		"What would be your ideal date?",
		"What is the worst thing about being a boy/girl whatever you are?",
		"What is your worst fear?",
		"What was the last thing you remember dreaming about?",
		"When was the last time you lied and what was it about?",
		"What is the meanest thing you've done and do you regret it?",
		"Have you ever cheated? Who what when where why.",
		"What is the craziest thing you've done to get your crush's attention",
		"What is your biggest regret?",
		"What is the funniest thing that has ever happened to you?",
		"Have you ever stolen anything?",
		"What do you look for in the opposite gender?",
		"When was the last time someone saw you naked?",
		"When was the last time you farted?",
		"Have you ever fallen for someone your shouldn't have? Who what when where why.",
		"How long have you gone without showering or brushing your teeth?",
		"Do you floss?"
	];
	
// The array of dares
	var DArray = [
		"Fake a marriage proposal.",
		"I dare you to face a fear",
		"Take a shot of ketchup",
		"Cover your face entirely in ketchup like a mask until it dries",
		"Call a black friend and say something racist",
		"Act out the death scene in Romeo and Juliet where you're both people",
		"Make the frowniest face that you can and do an evil laugh",
		"Break dance",
		"Act like a gangsta",
		"Sing like the opposite gender",
		"Call your crush and ask to talk to their parents, have a conversation",
		"Call your crush and say that you like someone else",
		"Call your crush and tell them that you heard they like you",
		"Eat a piece of dog or cat food",
		"Try to scratch your armpit with your toe",
		"Call a random number and make weird noises when they answer",
		"Call a random number and pretend to be their kid",
		"Call a random number and ask if their refrigerator is running, if they say yes then say that they should go catch it",
		"Call a random number and try to sell them something.",
		"Wax something.",
		"Make an angry face and keep it for 60 seconds",
		"Make a really weird face and go talk to someone not in the group",
		"Act out a death scene",
		"Brush the teeth of the person who next picks a dare",
		"Brush the teeth of the person who last got dared",
		"Go into as far of a split as you can do",
		"Try to do a cartwheel",
		"Dip your hands in the toilet",
		"Snort like a pig for 30 seconds",
		"Run around the yard acting like a horse",
		"Dance like a cow boy",
		"Do a model runway walk down the hall",
		"Call your crush and try to sell him a potato",
		"Call your crush and tell them you like them, now or never",
		"Find a couple in public and say 'I thought we had something special!' and run away pretending to cry",
		"Have the person to your right do your hair however they want and leave it that way until the end of the game",
		"Smell the feet of everyone in the room and rank them from best to worst",
		"Read the last text that you received out loud",
		"Use someone else's phone and prank call your mom",
		"Do an imitation of the person on your right",
		"Repeat everything anyone says until the next dare",
		"Say the pledge of allegiance in slow motion",
		"Call your sibling or parent if you don't have a sibling and tell them how great they are",
		"Drink some toilet water",
		"Convince a parent that you just failed a test",
		"Convince a parent that you were caught cheating on a test and they have to pay a $250 fine or you'll be kicked out of school",
		"Do the chicken dance",
		"Call your parents and tell them that you were dared to drive the car and then you crashed it",
		"Call your parents and tell them that you were dared to do drugs and now you don't know where you are or what happened",		
		"Try not to smile while all other players try to make your smile by any means necessary.", 
		"Touch your nose with your tongue, if you can't, you have to touch someone else's nose with your tongue.",
		"Have another player select a food item from the kitchen for you to eat without using your hands.",
		"Poke someone you don't really know on Facebook",
		"If in public, go up to a stranger and pretend to know them.",
		"Every time the player to your left says something, you have to say 'All hail Queen/King' and then their name until you get another dare.",
		"Log into your Facebook and allow other players to do whatever they want for 60 seconds. Anything done cannot be undone.",
		"Update your Facebook status to say that you are single and ready to mingle.",
		"Slow dance with someone while blindfolded and try to guess who they are without them speaking.",
		"Try to get the person next to you to laugh while they are trying not to laugh.",
		"Make out with a piece of fruit.",
		"Walk around outside in your pajamas.",
		"Put makeup on yourself while blindfolded.",
		"Put makeup on someone else while blindfolded.",
		"Hug someone of the opposite gender.",
		"Hug someone of the same gender.",
		"Talk like Shakespeare for a while.",
		"Fake a pregnancy to your parents.",
		"Call a random number and pretend to be their long lost friend from that time ago.",
		"Call a random number and try to order a pizza ... in a funny accent.",
		"Speak in an Australian accent until your next turn.",
		"Imitate someone in the room.",
		"Imitate a teacher",
		"Imitate a celebrity.",
		"Perform a 15 second long belly dance in the center of the room.",
		"Sing a song and make up movements for it.",
		"Prank call a random number.",
		"Call a friend's mom and tell them they need to lose weight.",
		"If in a public location, pick a stranger and ask them out.",
		"Brush your teeth with a bottle of Jack ... or orange juice.",
		"Brush your teeth with your non-dominant hand.",
		"Call your crush and ask them out on a date.",
		"Crack an egg on your head in front of a parent with no explanation.",
		"Close your eyes until your next turn.",
		"Make out with your elbow.",
		"Drink some ketchup.",
		"Piggyback someone until your next turn.",
		"Let everyone draw on your face for 10 seconds.",
		"Slap a piece of bologna or cheese onto your face and leave it there until your next dare.",
		"Put a cookie on your forehead and try to eat it without getting help or using your hands.",
		"Wear someone's socks on your hands until their next dare.",
		"Sing a song chosen by the person who previously chose a dare.",
		"Have someone put makeup on your while they are blindfolded.",
		"Stand in the toilet bowl and flush.",
		"Go on Facebook, message the first name you see and tell them that you have secretly been in love with them for the past 5 years.",
		"Have a slow motion fight with an imaginary dragon.",
		"Go around the place slapping your bare belly for one minute.",
		"Act like a farm animal for 15 seconds.",
		"Eat a spoonful of mayo.",
		"Pick a song and then make up your own words to ten seconds of it.",
		"Lick the mirror (and then clean it cuz that's gross).",
		"Pretend to be a sumo wrestler for one minute, have an imaginary fight",
		"Stuff your mouth with marshmallows and say 'chubby bunny' 10 times.",
		"Try to do a hand stand.",
		"Try to do a cart wheel.",
		"Slow dance with an imaginary partner.",
		"Do an imitation of Shrek.",
		"Do an imitation of Obama.",
		"Put your arms in your armpits and flap your wings around the house.",
		"Make rooster noises until someone comes into the room to ask if you're ok."
	];
	
	var totalString = "There are currently " + TArray.length + " truth questions and " + DArray.length + " dare questions in the database!";

// ????????? SPANISH VERSION BELOW  ???????????????????????????

	var TArraySp = [
		" ¿Quién fue su primer pique? ",
		" ¿Cuál fue la peor calidad que tienes este año? ",
		" ¿Qué haces en tu tiempo libre que nadie sabe que usted? ",
		"La ropa interior es aburrido o tienen imágenes y palabras en ellos? ",
		" ¿Usted coincide con la ropa interior de tu ropa? ",
		" ¿Cuánto tiempo pasa prepara cada día? ",
		" ¿Por qué hacer o que no usas maquillaje? ",
		" ¿Cuánto peso? ¿Cuánto desea usted pesa? ",
		" ¿Usted come diferente delante de gente que se puede hacer por usted mismo? ",
		" ¿Te gusta el 'nice guys' o el 'bad boys' ? ",
		"Demócrata o Republicano? ",
		" ¿Apoya usted la gays? ",
		" ¿Racista? ",
		" ¿Te importa lo que pasa en el resto del mundo? ",
		" ¿Sabe usted que Francia se encuentra en un mapa? ¿Dónde está Italia? ",
		" ¿Alguna vez ha tenido miedo de tu vida? ",
		"¿De dónde provienen de esa cicatriz? ",
		" ¿Alguna vez misericordia matar a alguien? ",
		" ¿Cómo se imagina su boda? ",
		" ¿Cuántas personas crees que le fecha antes casarse? ¿Cuántos Desea? ",
		"Puede caer en amor con dos personas al mismo tiempo? ",
		" ¿Cuál es su objetivo en la vida? ",
		" ¿Qué crees que la persona a su derecha piensa en vosotros? ",
		" ¿Cómo crees que perciben los demás? ",
		" ¿Qué piensa de usted mismo? ",
		" ¿Está usted satisfecho con su elección de vida? ",
		" ¿Cree usted en la fatalidad o el destino? ",
		"Si tuviera que matar a todos en esta sala O suicidarse, lo que usted Elegir? ",
		"Y vosotros, ¿quién piensa en la mayoría? ",
		" ¿Cuál fue su primera impresión de la persona a su izquierda? ",
		" ¿Por qué te gusta el aplastar? ",
		" ¿Qué es lo que determina si se quiere ser amigos de alguien",
		" ¿Qué es lo que busca en un amigo? ",
		" ¿Con qué frecuencia se encuentran en este juego? ",
		" ¿Creéis que alguien ha mentido en este juego? Si es así, ¿quién miente más? ",
		" ¿Cuál es el peor regalo que han recibido alguna vez? ",
		" ¿Cuál es el más temido lo que he hecho? ¿Lo repetirías otra vez? ",
		" ¿Alguna vez ha hecho trampas para ganar en el juego? ",
		" ¿Alguna vez ha hecho trampa en un examen o tarea? ",
		" ¿Quién es la persona más odiosa conoce usted? ",
		" ¿Alguna vez ha hablado mal de alguien en la habitación? ",
		" ¿Qué es un hábito molesto de cada persona en la habitación? ",
		" ¿Alguna vez ha mentido a un profesor? Si es así, ¿qué tiene? ",
		" ¿Cuál fue la peor grado alguna vez? ",
		" ¿Alguna vez te has roto algo que pertenece a otra persona y no me dijeron Ellos? ",
		" ¿Alguna vez ha fingido estar enfermo o ocupados a fin de evitar ver a alguien en el Habitación? ",
		" ¿Usted duerme con una luz de noche o peluche? ",
		" ¿Cuál es su espíritu animal? ",
		" ¿Cuántos niños ¿desea tener? ",
		" ¿Cuál es tu placer culpable TV show? ",
		"Cuando se obtiene un texto, que es lo que esperas de ti? ",
		" ¿Qué piensa usted que sus amigos no le gusta acerca de usted la mayoría? ",
		" ¿Cuál fue el peor día de tu vida? ",
		" ¿Alguna vez ha comenzado accidentalmente un rumor  y, a continuación, dejar que siga? ",
		"Si tuviera que revivir para siempre el mismo año que ya hemos vivido, que Año se elige? ",
		" ¿Usted cree en un Dios? ¿Está usted seguro? ",
		" ¿Qué tipo de ropa interior lo llevas? ",
		"Nos dicen acerca de su primer beso, si usted no ha tenido uno, nos dicen cómo se Deseamos que vaya hacia abajo. ",
		" ¿Ha visto alguna vez una simple persona antes? ",
		"Si las drogas son legales, ¿no? ",
		"Si todos los delitos era legal que un día, ¿qué harías? ",
		" ¿Alguna vez ha mentido a sus padres? Acerca de qué? ",
		"Cuando fue la última vez que alguien os ha llamado a una mentira? ",
		" ¿Ha mentido durante este juego? ",
		"Si usted fuera el sexo opuesto por un día, ¿qué harías? ",
		" ¿Qué programa de televisión o la película está emabarrased para ver o gusto? ",
		"Que en esta sala sería la peor persona para ser atrapado en un ascensor Con? ",
		" ¿Ni siquiera un poco racista? ",
		"Cuando le dice a la gente el grado/gpa/etc. , ¿redondeado hacia arriba o hacia abajo? O no A todos? ",
		" ¿Alguna vez ha mentido a hacer que la persona se sienta mejor? Acerca de qué? ",
		" ¿Quién es la persona más temido en la habitación? ",
		" ¿Quién en la habitación es lo que te gusta menos",
		" ¿Quién en la habitación le gustaría ir en una fecha? ",
		" ¿A quién le die? ",
		" ¿A quién le tome una bala y no morir? ",
		" ¿Qué hay que hacer para ganar algo de dinero? ",
		" ¿Qué le daría todo el dinero que tienen? ",
		" ¿Hay una vida futura? ¿Qué es lo que creo que es? ¿Qué es lo que quieres Como? ",
		"Si ustedes son religiosos, ¿qué haría diferente en su vida si Se ha encontrado para asegurarse de que no hay Dios? Si no son religiosos, ¿qué haría Algo diferente en su vida si se descubre que se trata de un Dios? ",
		"Si pudiera ser una etnia diferente, se desea cambiar? ",
		" ¿Cree usted que hay vida ahí fuera? ",
		" ¿Cuál sería su infierno personal? ",
		" ¿Qué te asusta en la oscuridad? ",
		" ¿Qué miedo de más si estuviera solo en un bosque oscuro, Los errores o los verdugos o fantasmas o monstruos? ",
		" ¿Quién te viste? ¿A quién se intentan impresionar? ",
		" ¿Ha tenido cambios de vida? Si es así, ¿qué era? ",
		" ¿Qué piensa la gente que le gustaría pero que en realidad odian? ",
		" ¿Qué roles tradicionales de género ¿está usted de acuerdo con? ",
		"Los estereotipos que cree que son verdad? ",
		"En los días en que nadie lo ve usted y usted puede permanecer en su país de origen, ¿qué se puede hacer Forma diferente? ",
		" ¿Qué se puede hacer para intentar impresionar a su aplastar",
		" ¿Cuál es la cosa más estúpida que he tenido una lucha acerca? ",
		"Qué mala costumbre ¿tiene que deseas romper? ",
		" ¿Alguna vez ha hecho algo y luego culpa a alguien más? ",
		" ¿Quién cree que trataron de impresionar? ",
		"Si obesos mórbidos, desea que las personas le dirán a usted y tratar de Le ayudan a usted o le dejan solos y que vivas tu vida? ",
		" ¿Cuál es su favorito mala palabra? ",
		" ¿Cuál es su primer recuerdo? ",
		"Si usted lo tenía todo el dinero del mundo, ir a la universidad? ¿Qué¿Grandes? ",
		" ¿Quién es la peor persona que sepa? ",
		" ¿Qué haría usted si usted encuentra que su hijo era un abusón? ",
		" ¿Qué harías si tu padre nuestro era un abusón en el trabajo? ",
		" ¿Quién es el amigo más querido? ",
		" ¿Cuál es su posesión más preciada? ",
		"Si esta sala atrapados en un incendio, cómo serían las cosas que intenta guardar? ",
		"Si sólo se puede comer una comida para el resto de tu vida, ¿qué es lo que sería Ser? ",
		"Cuando hablas y te das cuenta de que estamos equivocados, te quedas argumentando o admitir Derrota? ",
		"Si había una hora cada día para la que había sido invisible, ¿qué le ? ",
		"Si pudiera ser famoso por algo, ¿qué es lo que desearía que fuera? ",
		"Si se puede hacer la misma cantidad de dinero que está siendo un renombre mundial Médico/científico o un famoso bañador modelo, que te gustaría ser? ",
		" ¿Qué te gustaría estar haciendo ahora? ",
		" ¿Usted no desea en secreto para jugar a este juego más? ",
		" ¿O ha coqueteado con un cajero para obtener un descuento? ",
		" ¿Cuántas contraseñas diferentes tiene? ",
		" ¿Quién en la habitación que desea cambiar sus padres o hermanos? ",
		" ¿Qué características ¿busca en una pareja? ¿Qué hay en un amigo? ",
		" ¿Alguna vez ha tenido un ahora o nunca ahora? ",
		" ¿Qué están haciendo en la escuela que usted piensa que es el menos útil en la vida? ",
		" ¿Tiene usted una firma? ¿Cómo crear? ",
		" ¿Qué es más importante en un alimento? Cómo se ve, los olores, o el gusto? ",
		" ¿Ha llorado en público? ",
		" ¿Cuál es la menor cantidad de cosas que se necesita para ser feliz? ",
		"Lo que las canciones no se escucha cuando estás triste? ",
		" ¿Qué es un secreto que usted se comprometió a mantener, pero, a continuación, ¿no?",
		" ¿Tu mejor amigo llamada que su mejor amigo? ",
		" ¿Qué regla periódicamente? ",
		" ¿Qué es lo que odias de tu vida? ",
		" ¿Qué es lo que te gusta de tu vida? ",
		" ¿Quién es la persona más inteligente en la sala? ",
		"Si pudiera comercio mitad de tu IQ para ser la persona más hermosa en el Mundo, ¿no? ",
		"En qué situación se puede morir por alguien más? ",
		" ¿A quién le die? ",
		" ¿Quién iba a morir por usted? ",
		" ¿Quién en la habitación que usted toma una bala pero no morir? ",
		" ¿Tiene un crush de otro jugador? ",
		" ¿Es este juego aburrido? ",
		" ¿Hay alguien que se está reproduciendo que a usted no le gusta, pero pretende ser Amigos? ",
		" ¿Cuál es la mejor mentira que alguna vez has sacado? ",
		" ¿Quién cree que ha mentido en este juego? ",
		" ¿Cuál es la diferencia entre los niños y las niñas? ",
		" ¿Quién es aquí? ",
		"Lo que se le tiene miedo a cuando era pequeña que no tienen miedo de Ahora? ",
		"Lo que se le tiene miedo a cuando era pequeño que usted sigue de miedo Ahora? ",
		" ¿Qué es lo más ilegal que lo que quieres hacer? ",
		"Si pudiera cambiar una cosa acerca de usted, ¿qué sería? ",
		"Si pudiera cambiar una cosa acerca de la persona a su derecha, ¿qué es Ser? ",
		" ¿Te sientes atractivo? ",
		"Clasificar a todos en la habitación de picor de 1-10. ",
		" ¿Alguna vez ha hecho nada ilegal? ",
		" ¿Quién es el actual aplastar? ",
		" ¿Qué es lo que realmente piensa en la persona que está sentada a la derecha? ",
		" ¿Cuáles son sus mayores inseguridades? ",
		" ¿Quién lo desea, podría ser? ",
		" ¿Cuánto pagaría por la persona a la izquierda, si que se celebraron para Rescate? ",
		" ¿Qué haría usted para una Klondike Bar? ",
		"Y vosotros, ¿quién regularmente manecilla en Facebook? ",
		"Que es lo que hace la gente no le gusta a la mayoría? ",
		" ¿Qué hace que la gente le gusta de usted la mayoría? ",
		" ¿Qué es lo más importante la calidad que su futuro esposo debe tener y ¿Por qué? ",
		" ¿Qué es un ofertón para usted? ",
		" ¿Cuál sería su fecha ideal? ",
		" ¿Qué es lo peor de ser un chico/chica lo que eres? ",
		" ¿Cuál es su mayor temor? ",
		" ¿Cuál fue la última cosa que usted recuerde soñando? ",
		"Cuando fue la última vez que mintió y ¿qué tiene? ",
		" ¿Cuál es el más temido lo que hemos hecho y no se arrepienta? ",
		" ¿Alguna vez te has engañado? Que cuando donde por qué. ",
		" ¿Cuál es la mayor locura cometida que has hecho para obtener su aplastar la atención",
		" ¿Cuál es su mayor pesar? ",
		" ¿Qué es lo más gracioso que ha le ha sucedido a usted? ",
		" ¿Alguna vez ha robado nada? ",
		" ¿Qué se puede buscar en el sexo opuesto? ",
		"Cuando fue la última vez que alguien te vio desnudo? ",
		"Cuando fue la última vez que farted? ",
		" ¿Alguna vez te has enamorado de alguien de tu no debería tener? Que cuando donde Por eso. ",
		" ¿Cuánto tiempo ha pasado sin ducharse o lavarse los dientes? ",
		"Hacer que use el hilo dental? ",
	];
	
// La matriz de se atreve
	var DArraySp = [
		"Fake una propuesta de matrimonio",
		"Me atrevo a afrontar el miedo",
		"Toma una foto de ketchup",
		"Cubrir su cara totalmente el ketchup como una máscara hasta que se seque",
		"Llamar a un amigo negro y decir algo racista",
		"La ley del lugar de la muerte de Romeo y Julieta en el que tú eres tanto a las personas",
		"Hacer de la  cara, por lo que frowniest que puede hacer un mal reír",
		"Break dance",
		"Actuar como un gangsta",
		"Cantar como el sexo opuesto",
		"Llame al aplastar y pida hablar con sus padres, mantener una conversación",
		"Llame al aplastar y decir que le gusta otra persona",
		"Llame al aplastar y les dicen que ellos les gusta escuchar",
		"Comer un pedazo de perro o gato alimentos",
		"Tratar de arañar la axila con el dedo",
		"Llamar a un número al azar y hacer ruidos inusuales cuando responden",
		"Llamar a un número al azar y pretende ser su hijo",
		"Llamar a un número al azar y preguntar si la nevera está en marcha, si ellos dicen Sí, a continuación, decir que deben ir las capturas",
		"Llamar a un número al azar y tratar de vender algo. ",
		"Cera algo. ",
		"Hacer una expresión de enojo y mantenerlo durante 60 segundos",
		"Hacer una cara y muy raro ir a hablar con alguien que no está en el grupo",
		"Actúan en una escena de muerte",
		"Cepillarse los dientes de la persona que elige un audaz",
		"Cepillarse los dientes de la última persona que se ha atrevido",
		"Ir a por lo que se refiere de una división que se puede hacer",
		"Tratar de hacer un cartwheel",
		"Sumergir las manos en el retrete",
		"Snort como un cerdo durante 30 segundos",
		"Correr por el patio, como un caballo",
		"Baila como un cow boy",
		" ¿Un modelo pista andando por el pasillo",
		"Llame al aplastar y tratar de vender una patata",
		"Llame al aplastar y decirles que al igual que ellos, ahora o nunca",
		"Encontrar una pareja en público y decir 'yo pensaba que había algo especial!' y Escapar haciéndose pasar por llorar",
		"Tener a la persona a su derecha y el cabello sin embargo que ellos desean, y dejarlo Que hasta el final del juego",
		"Huelen los pies de todos los presentes en la sala y clasificarlas de mejor a peor",
		"Leer el último texto que ha recibido en voz alta",
		"El uso de otra persona y travesura teléfono llame a su mamá",
		"Hacer una imitación de la persona a su derecha",
		"Repetir todo lo que alguien dice que hasta la próxima se atreven",
		"Dicen que el juramento de fidelidad en cámara lenta",
		"Llame a su hermano o padre si usted no tiene un hermano y decirles cómo Grandes son",
		"Beber agua del retrete",
		"Convencer a un padre que sólo ha fallado una prueba",
		"Convencer a un padre que se te pilló haciendo trampa en un examen y tienen que Pagar una multa de 250 $o te ser expulsado de la escuela",
		"El baile del pollo",
		"Llame al los padres y les dicen que se ha atrevido a conducir el coche y A continuación, se estrelló",
		"Llame a su padres y les dicen que se había atrevido a hacer las drogas y ahora No se sabe bien a dónde o qué ha pasado",		
		"Trate de no sonreír mientras que todos los demás los jugadores tratan de hacer su sonrisa por cualquier Medios necesarios. ", 
		"Tocar la nariz con la lengua, si no puedes hacerlo, tienes que tocar a alguien Otra cosa la nariz con la lengua. ",
		"Otro jugador seleccionar un alimento de la cocina para comer Sin usar las manos. ",
		"Dar un toque a alguien que realmente no saben en Facebook ",
		"Si en público, ir a un extranjero y pretendo saber. ",
		"Cada vez que el jugador a su izquierda dice algo, usted tiene que decir 'Todos Dios te salve Reina/Rey' y, a continuación, su nombre hasta que no te dare otro. ",
		"Inicie sesión en su Facebook y permitir que otros jugadores para poder hacer lo que quieran para 60 Segundos. Nada no se puede deshacer. ",
		"Actualiza tu estado en Facebook  para decir que usted es único y está listo para Relacionarse. ",
		"Slow dance con alguien con los ojos vendados y tratar de adivinar quiénes son Sin ellos hablando. ",
		"Tratar de llevar a la persona junto a usted a reír mientras se están tratando de no Reír. ",
		"Con un pedazo de fruta. ",
		"Pasear por fuera en pijama. ",
		"Maquillarse en sí mismo con los ojos vendados. ",
		"Maquillarse a alguien con los ojos vendados",
		"Abrazar a alguien del sexo opuesto",
		"Abrazar a alguien del mismo sexo. ",
		"Hablar como Shakespeare por un tiempo. ",
		"Amago de embarazo a tus padres. ",
		"Llamar a un número al azar y pretende ser su viejo amigo de la Hace tiempo. ",
		"Llamar a un número al azar y tratar de pedir una pizza... en un gracioso acento. ",
		"Hablar de acento australiano hasta tu próximo turno. ",
		"Imitar a alguien en la habitación. ",
		"Imitar a un maestro",
		"Imitar una celebridad. ",
		"Realizar un segundo largo 15 danza del vientre en el centro de la habitación. ",
		"Cantar una canción y los movimientos de. ",
		"Prank call un número aleatorio. ",
		"Llame a un amigo de mamá y les dicen que deben perder peso. ",
		"Si en un lugar público, un extraño y selección les pedimos",
		"Cepillarse los dientes con una botella de Jack... o un vaso de zumo de naranja. ",
		"Cepillarse los dientes con su mano no dominante",
		"Llame al aplastar y pedir en una fecha. ",
		"Cascar un huevo en la cabeza delante de un progenitor con ninguna explicación. ",
		"Cerrar los ojos hasta tu próximo turno. ",
		"Con el codo. ",
		"Beber ketchup. ",
		"Piggyback alguien hasta tu próximo turno. ",
		"Que todo el mundo dibuja en su cara durante 10 segundos. ",
		"Slap un pedazo de Bolonia o queso en la cara y dejar hasta que La próxima se atreven. ",
		"Poner una cookie en tu frente y tratar de comer sin ayuda o Usando las manos. ",
		"Usar calcetines de alguien en las manos hasta su próxima se atreven. ",
		"Cantar una canción elegida por la persona que previamente eligió un atrevido. ",
		"Tener a alguien que maquillarse en el mientras están con los ojos vendados. ",
		"Estar en la taza del inodoro y enjuague. ",
		"Ir en Facebook, mensaje que el primer nombre que se ve y les dicen que tienen Secretamente enamorado de ellos durante los últimos 5 años. ",
		"Tienen un movimiento lento con una imaginaria lucha dragon. ",
		"Ir por todo el lugar con su vientre desnudo durante un minuto. ",
		"Actuar como un animal de granja durante 15 segundos. ",
		"Comer una cucharada de mayonesa. ",
		"Elegir una canción y, a continuación, haga sus propias palabras a diez segundos de. ",
		"Haga clic en el espejo (y, a continuación, limpie el cuz que bruto) . ",
		"Pretende ser un luchador de sumo en un minuto, tienen una imaginaria lucha",
		"Algunas cosas la boca con malvaviscos y decir 'chubby bunny' 10 veces. ",
		"Tratar de hacer un pedestal. ",
		"Tratar de hacer una rueda de carreta. ",
		"Slow dance con un imaginario socio. ",
		"Hacer una imitación de Shrek. ",
		"Hacer una imitación de Obama. ",
		"Poner sus armas en sus axilas y tus alas mariposa alrededor de la casa. ",
		"Hacer ruidos gallo hasta que alguien entra en la habitación para preguntar si está bien",
	];
	
