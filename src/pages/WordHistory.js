import Navbar from "../components/Navbar"

function WordHistory({ word }) {
    return (
        <div>
            <Navbar />
            <h1>WHAT IS HANGMAN?</h1>
            <p>
                The word guessing game Hangman evolved from an English childrens game, and its earliest mention is in folklorist Alice Gomme's 1894 book, <a href="https://www.gutenberg.org/files/41727/41727-h/41727-h.htm#GameI_50">Traditional Games of England, Scotland, and Ireland</a>.
                The game was origionally called "Birds, Beasts, and Fishes." One player would choose a type of bird, beast, or fish, and write the first and last letters of its name, with all of its inner characters marked with Xs.
                <p>
                </p>
                The players would take turns guessing and choosing the word. The guesser accumulates points by guessing the entire word. They then recieve points for each blank character in the word.
                The word chooser gains points if the guesser cannot guess the word. They recieve a point for every blank character in the word they chose.
            </p>
            <p>
                The variation that incorporated the hanging man as a way to keep score first appeared in a 1902 article in the Philidelphia Inquirer.
                The game was popular at "White Cap" parties, which were thrown by turn-of-the-century <a href="https://en.wikipedia.org/wiki/Whitecapping">vigilante groups</a>.
                These groups, which became popular after the Civil War, and included the KKK, were responsible for adding the morbid lynching imagegry to this otherwise innocent childrens game.
            </p>
            <p>
                Now that we know the history of Hangman, we can omit its namesake and most violent element, and return to a version more similar to the origional game.

            </p>
        </div>
    )
}

export default WordHistory