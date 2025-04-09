const checkButton = document.getElementById("open-p");
checkButton.addEventListener("click", function() {
    const userInput = prompt("Enter a word to check");
    checkPalindrome(userInput)
});


function checkPalindrome(userInput) {
    let reversedWord = userInput.split("").reverse().join("");
    alert(userInput === reversedWord)
}
