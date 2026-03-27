fetch('https://your-energy.b.goit.study/api/quote')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
