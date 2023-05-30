const { response } = require("express");

const usersGet = (req, res = response) => {
  //Guarda los query params que vengan en la ruta
  const {q, name = 'No name', apikey} = req.query;

  res.json({
    msg: "get API - Controller",
    q,
    name,
    apikey
  });
};

const usersPut = (req, res = response) => {
  //Guarda los parametros de la ruta en una variable ID
  const { id } = req.params;

  res.json({
    msg: "put API - Controller",
    id,
  });
};

const usersPost = (req, res = response) => {
  //Guarda lo que viene hacia el backend en el body
  const { name, age } = req.body;

  res.json({
    msg: "post API = Controller",
    body,
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: "delete API - Controller",
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    msg: "patch API - Controller",
  });
};

module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch,
};
