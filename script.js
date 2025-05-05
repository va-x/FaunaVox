
document.getElementById('menu-btn').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  });
  
  const quotes = [
    `"The time will come when men such as I will look upon the murder of animals as they now look upon the murder of men." — Leonardo da Vinci`,
    `"If slaughterhouses had glass walls, everyone would be vegetarian." - Paul McCartney`,
    `"As long as Man continues to be the ruthless destroyer of lower living beings, he will never know health or peace. For as long as men massacre animals, they will kill each other." - Pythagoras`,
    `"If a man aspires towards a righteous life, his first act of abstinence is from injury to animals." - Albert Einstein`,
    `“All beings tremble before violence. All fear death, all love life. See yourself in others. Then whom can you hurt? What harm can you do?” - Buddha`,
    `“To my mind, the life of a lamb is no less precious than that of a human being. The more helpless the creature, the more that it is entitled to protection by man from the cruelty of man.” - Mohandas Gandhi`,
    `"Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet." - Albert Einstein`
  ];
  
  let quoteIndex = 0;
  
  document.getElementById('inspire-btn').addEventListener('click', () => {
    document.getElementById('quote').textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
  });


  //Extra credit!
  document.getElementById('catfact-btn').addEventListener('click', async () => {
    try {
      const res = await fetch('https://catfact.ninja/fact');
      const data = await res.json();
      document.getElementById('catfact').textContent = `🐱 ${data.fact}`;
    } catch (err) {
      document.getElementById('catfact').textContent = "Couldn't load a cat fact 😿 Try again later.";
    }
  });
  