const likeContainer = document.getElementById("like-button-renderer");
const nextButton = document.getElementsByClassName("next-button")[0];

if (!likeContainer || !nextButton) {
  throw new Error("Failed to find dislike and next buttons");
}

setInterval(() => {
  if (likeContainer.getAttribute("like-status") === "DISLIKE") {
    nextButton.click();
  }
}, 1000);
