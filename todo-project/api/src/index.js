import app from './app';

async function Index() {
  const result = await {
    port: app.listen(3001),
    mesage: 'server on port 3001'
  };
  console.log(result.mesage);
  return result.port;
}

Index();
