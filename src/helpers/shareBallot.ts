export function shareBallot(emojifiedBallot: string, ballot: number[]) {
  const ballotHash = btoa(ballot.join(""));
  const shareString = `My Oscar Bingo Card\n\n${emojifiedBallot}\n\n${window.location.href}?_=${ballotHash}`;
  if (navigator && !!navigator.share) {
    navigator
      .share({
        text: shareString,
      })
      .catch(() => {
        alert(`Could not share ballot, sorry, please copy it manually`);
      });
  } else if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareString);
  } else {
    alert(`Could not share ballot, sorry, please copy it manually`);
  }
}
