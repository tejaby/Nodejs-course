const getPosts = async (url) => {
  try {
    const request = await fetch(url);
    const response = await request.json();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

getPosts("https://jsonplaceholder.typicode.com/posts");

// Usando type modules ya no es necesario agregar una funcion async para utlizar await
