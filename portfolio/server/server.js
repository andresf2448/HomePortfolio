const express = require('express');
const server = express();
const cors = require("cors");
server.use(cors());

let trees = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1545308562-050974fb9ac4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1564860924912-f27764fd2ab6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1502311526760-ebc5d6cc0183?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJlZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1501261379837-c3b516327829?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJlZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1421790500381-fc9b5996f343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJlZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1584181854784-b8b3fd9d6c45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyZWV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1567811544553-400218252756?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyZWV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1496060169243-453fde45943b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyZWV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1610823796603-59669e8ee29c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHRyZWV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyZWV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1565138146061-e29b079736c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHRyZWV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

server.get('/', (req, res) => {
    res.status(200).json(trees);

})

server.listen(3001, () => {console.log("Server is listening in port 3001")});