import Navbar from "../components/Navbar"

function WordHistory({ word }) {
    return (
        <div>
            <Navbar />
            <h1>WHAT IS HANGMAN?</h1>
            <p>
                The word guessing game Hangman evolved from an English children's game, and its earliest mention is in folklorist Alice Gomme's 1894 book, <a href="https://www.gutenberg.org/files/41727/41727-h/41727-h.htm#GameI_50">Traditional Games of England, Scotland, and Ireland</a>.
                The game was originally called "Birds, Beasts, and Fishes." One player would choose a type of bird, beast, or fish, and write the first and last letters of its name, with all of its inner characters marked with Xs.
                <p>
                <p>
                B×××××××h = Bullfinch <br></br>
                E××××××t = Elephant <br></br>
                S×××××××h = Swordfish

                </p>
                </p>
                The players would take turns guessing and choosing the word. The guesser wins by guessing the entire word. They then receive points for each blank character in the word.
                The word chooser gains points if the guesser cannot guess the word. They receive a point for every blank character in the word they chose.
            </p>
            <p>
                The variation that incorporated the hanging man as a way to keep score first is first referenced in a 1902 article in the Philadelphia Inquirer.
                The game was popular at "White Cap" parties, which were thrown by turn-of-the-century <a href="https://en.wikipedia.org/wiki/Whitecapping">vigilante groups</a>.
                These groups, which became popular after the Civil War and included the KKK, were responsible for adding the morbid lynching imagery to this otherwise innocent childrens game.
            </p>
            <p>
                Why should this children's game, which began without any references to lynching, include a completely unnecessary hanging-man scorekeeping element? 
                This is the problem I have solved by re-naming the game, "Dang, Man!" 
                With this new game, which is the exact same as the original aside from the name and score card, we can free ourselves from the vestiges of our violent past and stride proudly into the 21st century.
            </p>
            <p>
                However, our world today is not without problems... Though less racist than at the turn of the century, we now exisit within a hyper-capitalist world, 
                where money rules every aspect of our lives. The stakes are still high! Guess wrong and loose your hard earned money! Guess right and keep some of it, but barely enough to survive!
                Welcome to the world of "Dang, Man!"
            </p>
        </div>
    )
}

export default WordHistory