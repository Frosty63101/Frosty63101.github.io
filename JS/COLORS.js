function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  let whileToggle = false;
  const toggle = document.getElementById("rainbowToggle");
  
  toggle.addEventListener('click', clicked);
  
  function clicked() {
    console.log("clicked");
    whileToggle = !whileToggle; // Toggle the value of whileToggle
    if (whileToggle) {
      COLORS(); // Run COLORS if whileToggle is true
    }
  }
  
  async function COLORS() {
    var body = document.getElementById("body");
  
    do {
      body.style.color = "#ff0000";
      await delay(100);
      body.style.color = "#ffa500";
      await delay(100);
      body.style.color = "#ffff00";
      await delay(100);
      body.style.color = "#008000";
      await delay(100);
      body.style.color = "#0000ff";
      await delay(100);
      body.style.color = "#4b0082";
      await delay(100);
      body.style.color = "#ee82ee";
      await delay(100);
    } while (whileToggle);
  }
  