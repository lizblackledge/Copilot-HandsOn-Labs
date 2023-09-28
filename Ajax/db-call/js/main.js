function getUser() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.w3schools.com/PHP/demo/getUser.php?1=', true);
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      document.getElementById('users').textContent = response.firstname + ' ' + response.lastname;
    } else {
      console.error('Error fetching data');
    }
  };
  xhr.send();
}