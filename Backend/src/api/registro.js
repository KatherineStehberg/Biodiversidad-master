fetch('/api/registro', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('¡Registro exitoso!');
        window.location.href = '/Frontend/Src/dashboard.html';
      } else {
        alert('Error en el registro');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  