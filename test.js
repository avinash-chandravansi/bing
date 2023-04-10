import { BingChat } from 'bing-chat'

async function example() {
  const api = new BingChat({
    cookie: "1mWquPJiAHkz7sgivEIr17ZI3D6vjtqIN3F_StHDl3pXA6WS7gzptvJwh48UxTHEmQihImCkQVuULlzy3zOkp4g1y_aUHcSMWEtT6uSrBnXATpjw2Hvu1mfb6yXvT8--DDuv5VbAhbTxdyApf3QJYjxmwh1mFaeYtINRIkbxP_TnKI2yGkKfA3U0NVt4unJUA2PLdpyg6703HKFyud3URWZ4lCCQ3dufiOlJ9MVXKdw4"
  })

  const res = await api.sendMessage('Hello World!')
  console.log(res.text)
}
example();