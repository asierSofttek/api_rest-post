fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Título',
      body: 'Fugiat nostrud sunt in occaecat laborum consequat Lorem occaecat aliquip culpa.',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
 
      let resul = json;
  
      let title = resul.title;
      let body = resul.body;
  
      let content = `
          <h3> ${title}</h3>
          <p>${body}</p>
      `;
  
      document.getElementById('result').innerHTML = content;
  });
  