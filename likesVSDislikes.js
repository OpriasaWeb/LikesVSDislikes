// June 12, 2023
// CodeWars: Likes vs Dislikes (7 kyu challenge)
// Description: YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round. Create a function that takes in a list of button inputs and returns the final state.
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.

function likeOrDislike(buttons) {
  let state = "";
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    if (button === "Like") {
      if (state === "Dislike") {
        state = "Like";
      } else if (state === "Like") {
        state = "Nothing";
      } else {
        state = "Like";
      }
    } else if (button === "Dislike") {
      if (state === "Like") {
        state = "Dislike";
      } else if (state === "Dislike") {
        state = "Nothing";
      } else {
        state = "Dislike";
      }
    } else if(button === ''){
      state = "Nothing";
    }
  }
  return state || "Nothing";
}

console.log(likeOrDislike([Dislike,Like,Dislike,Dislike,Like,Like]));