// old loader JS
$(window).on('load', function () {
  var counter = 0; // Start from 0
  var interval = 30; // Interval between counts (in milliseconds)

  // Update the counter and progress bar
  var intervalId = setInterval(function () {
    counter++;
    $('#count').text(counter);
    $('#progress-bar').css('width', counter + '%');

    if (counter >= 100) {
      clearInterval(intervalId); // Stop counting at 100

      // Add pop-down animation to the count
      $('#count').addClass('pop-down');
      $('#percent').addClass('pop-down');
      $('#position').addClass('pop-down');
      $('#timer').addClass('pop-down');

      // Fade out the loader and fade in the content after animation
      setTimeout(function () {
        $('#loader').fadeOut('slow', function () {
          $('#load').fadeIn('slow');
        });
      }, 1000); // Wait for the pop-down animation to complete
    }
  }, interval);
});

function updateTime() {
  // Get the current time in Hyderabad (Indian Standard Time)
  const options = {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const time = new Date().toLocaleString('en-IN', options);

  // Display the time in the timer div
  document.getElementById('timer').textContent = time;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial time display when the page loads
updateTime();



var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "75px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  }
})
gsap.to("body", {
  backgroundColor: "black",
  duration: 1,
  scrollTrigger: {
    trigger: "#page2",
    start: "top center",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
    scrub: true,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

var typed = new Typed(".auto-type", {
  strings: ["Web Developer", "The OG!", "Microsoft Dynamics Developer"],
  typeSpeed: 100,
  backSpeed: 150,
  loop: true
});

function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

const parentCube = document.querySelector('.parent-cube');

document.addEventListener('DOMContentLoaded', () => {
  const parentCube = document.querySelector('.parent-cube');

  parentCube.addEventListener('click', () => {
    parentCube.classList.add('bounce-animation');
    setTimeout(() => {
      parentCube.classList.remove('bounce-animation');
    }, 600);
  });
});


// Get all elements with the class "eleme"
const elements = document.querySelectorAll(".eleme");

// Add event listeners for hover
elements.forEach((elem) => {
  elem.addEventListener("mouseover", function () {
    const imageUrl = this.getAttribute("data-image"); // Get image URL
    const fixedImage = document.getElementById("fixed-image");

    // Set the background image and show the fixed image
    fixedImage.style.backgroundImage = `url(${imageUrl})`;
    fixedImage.style.display = "block";
  });

  elem.addEventListener("mouseout", function () {
    const fixedImage = document.getElementById("fixed-image");

    // Hide the fixed image
    fixedImage.style.display = "none";
  });
});
