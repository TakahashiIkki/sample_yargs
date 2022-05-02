function start() {
  setTimeout(function () {
    console.log("Hello My Infinite Loop Execution");

    // Again
    start();

    // Every 3 sec
  }, 3000);
}

// Begins
start();
