async function getFact() {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    if (response.ok) {
      const data = await response.json();
      document.getElementById('fact').textContent = data.fact;
    } else {
      console.error('Error fetching data');
    }
  } catch (error) {
    console.error(error);
  }
}