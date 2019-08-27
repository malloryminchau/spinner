let animations = ["|", "/", "-", "\\"];
let delay = 0

for (let delay = 0; delay <= 6000; delay + 200) {
  animations.forEach(function(element) {
    setTimeout(() => {
      process.stdout.write('\r' + element);
      
    }, delay)
    delay = delay + 200;
  })
}
