document.addEventListener('DOMContentLoaded', function() {
  let progressBar = document.getElementById('progress-bar');
  let loadingText = document.getElementById('loading-text');
  let progressText = document.getElementById('progress-text');
  let content = document.getElementById('content');
  let loader = document.getElementById('loader');
  let horse = document.getElementById('horse');
  let horseImg = document.getElementById('horse-img');

  let progress = 0;
  let duration = 2000; // 3 seconds
  let incrementTime = duration / 100; // Increment every 1% (i.e. 2000ms / 100)
  
  let interval = setInterval(function() {
    progress += 1;
    progressBar.style.width = progress + '%';
    progressText.textContent = progress + '%';
    
    // Move horse as progress increases
    let horsePosition = (progress / 100) * 90; // Horse should move with progress
    horse.style.left = `${-100 + horsePosition}%`; // Ensure horse stays within bounds

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(function() {
        loader.style.display = 'none';
        content.style.display = 'block';
      }, 300); // Delay to show completion before transitioning
    }
  }, incrementTime); // Update progress bar every incrementTime
});
