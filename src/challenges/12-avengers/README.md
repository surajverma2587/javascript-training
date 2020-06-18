# Avengers Terminal Game

## Concept

Your task is to design a game featuring the **Avengers** vs **Thanos**. This game is a terminal game where the user will be prompted a series of questions in order to progress through the game. The main aim of this game is to beat Thanos before he destroys half the Universe.

![Thanos](https://upload.wikimedia.org/wikipedia/en/2/22/Thanos_in_Avengers_Infinity_War.png)

## APIs

You will use the superhero API endpoint `https://www.superheroapi.com/api.php/{accessToken}/{characterId}` to fetch data for the following characters ids:

- Thanos `655`
- Thor `659`
- Black Widow `107`
- Hulk `332`
- Iron Man `732`

**NOTE**: You will need to register for an access token [here](https://superheroapi.com/index.html)

## Game Flow

The main aim of the game is throw in a few attacks or maneuver with a few defends until you either get beaten as an Avenger or you successfully beat Thanos.

- User is presented with a prompt on the terminal where they are required to select a single avenger from the choices of Iron Man, Thor, Hulk or Black Widow.
- User is presented with a choice to either attack or defend using their selected character.
- Depending on what option they select the health of both the Avenger and Thanos are affected.
- Turns between the Avenger and Thanos continue to alternate starting with the Avenger.
- After each player move the health of both are displayed.
- Continue to attack or defend until there is only one winner.
- Display the winner at the end of the game.

## Game Logic

- If you attack and your attack power is higher than the defence power of the opponent, then the difference between your attack and your opponent's defence is subtracted from the opponents health.
- If you attack and your attack power is lower than the defence power of the opponent, then there is no change to your opponent's health.
- It is vice versa when your opponent attacks.
- If you defend and your opponent's attack power is higher then the difference between the attack and defence powers is subtracted from your health.
- If you defend and the attack power of the opponent is lower then there is no change to your health.
- It is vice versa when your opponent defends.

## Characters

- Characters like Thor and Thanos have extended powers such as `flight` which is similar to a power stat from the Superhero API and feel free to initialize any numeric value; and `backToLife` which is a number to indicate how many times can they come back to life after death.
- Characters like Thor and Thanos also have extended abilities such as `bringMeToLife` which revives the character's health when it is negative and decreases the `backToLife` by 1.
