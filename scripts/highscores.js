// Globals variables

const leaderBoard = JSON.parse(localStorage.getItem("highscore"))
const leaderboardElement = document.querySelector("#highScoresList")
const entryPlaceholder = document.querySelector(".high-score.js-placeholder")
const entryModel = entryPlaceholder.cloneNode()

entryModel.classList.remove("js-placeholder")
entryPlaceholder.remove()

for(let [username, score] of Object.entries(leaderBoard)){
    const entry = entryModel.cloneNode()
    entry.innerHTML = `${username} - ${score}`
    leaderboardElement.appendChild(entry)
}