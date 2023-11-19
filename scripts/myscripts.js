var timer; //Timer for automatic slide rotating (see rotate() function)
let current = 2;
rotate();


$("#menubutton").click(function() {
  if ($("#dropper").hasClass("hidden")) {
    $("#dropper").removeClass("hidden");
  } else {
    $("#dropper").addClass("hidden");
  }
});

$("#rightarrow").click(function() {
  let nextNum = current + 1;
  if (nextNum >= 3) {
    nextNum = 0;
  }
  $("#middle"+current).addClass("hidden");
  $("#button"+current).removeClass("currentButton");
  $("#middle"+nextNum).removeClass("hidden");
  $("#button"+nextNum).addClass("currentButton");
  current = nextNum;
  clearTimeout(timer); // This line resets the automatic slide scrolling and pauses longer then normal, so the user can see the image they selected
  timer = setTimeout(rotate, 5000); // 5 second timeout instead of 2.5
});

$("#leftarrow").click(function() {
  let nextNum = current - 1;
  if (nextNum < 0) {
    nextNum = 2;
  }
  $("#middle"+current).addClass("hidden");
  $("#button"+current).removeClass("currentButton");
  $("#middle"+nextNum).removeClass("hidden");
  $("#button"+nextNum).addClass("currentButton");
  current = nextNum;
  clearTimeout(timer); // This line resets the automatic slide scrolling and pauses longer then normal, so the user can see the image they selected
  timer = setTimeout(rotate, 5000); // 5 second timeout instead of 2.5
});


$("#button0").click(function() {
  current = 0;

  if ($("#middle0").hasClass("hidden")) {
    $("#middle0").removeClass("hidden");
    $("#button0").addClass("currentButton");
  }
  if (!($("#middle1").hasClass("hidden"))) {
    $("#middle1").addClass("hidden");
    $("#button1").removeClass("currentButton");
  }
  if (!($("#middle2").hasClass("hidden"))) {
    $("#middle2").addClass("hidden");
    $("#button2").removeClass("currentButton");
  }
  clearTimeout(timer); // This line resets the automatic slide scrolling and pauses longer then normal, so the user can see the image they selected
  timer = setTimeout(rotate, 5000); // 5 second timeout instead of 2.5
});

$("#button1").click(function() {
  current = 1;

  if (!($("#middle0").hasClass("hidden"))) {
    $("#middle0").addClass("hidden");
    $("#button0").removeClass("currentButton");
  }
  if ($("#middle1").hasClass("hidden")) {
    $("#middle1").removeClass("hidden");
    $("#button1").addClass("currentButton");
  }
  if (!($("#middle2").hasClass("hidden"))) {
    $("#middle2").addClass("hidden");
    $("#button2").removeClass("currentButton");
  }
  clearTimeout(timer); // This line resets the automatic slide scrolling and pauses longer then normal, so the user can see the image they selected
  timer = setTimeout(rotate, 5000); // 5 second timeout instead of 2.5
});

$("#button2").click(function() {
  current = 2;

  if (!($("#middle0").hasClass("hidden"))) {
    $("#middle0").addClass("hidden");
    $("#button0").removeClass("currentButton");
  }
  if (!($("#middle1").hasClass("hidden"))) {
    $("#middle1").addClass("hidden");
    $("#button1").removeClass("currentButton");
  }
  if ($("#middle2").hasClass("hidden")) {
    $("#middle2").removeClass("hidden");
    $("#button2").addClass("currentButton");
  }
  clearTimeout(timer); // This line resets the automatic slide scrolling and pauses longer then normal, so the user can see the image they selected
  timer = setTimeout(rotate, 5000); // 5 second timeout instead of 2.5
});


function rotate() {
  let nextNum = current + 1;
  if (nextNum >= 3) {
    nextNum = 0;
  }
  $("#middle"+current).addClass("hidden");
  $("#button"+current).removeClass("currentButton");
  $("#middle"+nextNum).removeClass("hidden");
  $("#button"+nextNum).addClass("currentButton");
  current = nextNum;
  timer = setTimeout(rotate, 2500); // This line sets the timeout to 2.5 seconds, so a new image is shown every 2.5 seconds
};

// setTimeout() and clearTimeout() functions learned from w3schools (https://www.w3schools.com/js/js_timing.asp)
