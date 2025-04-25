const socialModel = require('../models/socialModel');

exports.getCourses = (req, res) => {
  const { data, count } = socialModel.getFreeCourses();
  res.json({
    success: true,
    message: "Cursos para reduzir a desigualdade digital",
    data,
    count
  });
};

exports.getStats = (req, res) => {
  res.json({
    success: true,
    message: "Dados sobre a desigualdade digital no Brasil",
    data: socialModel.getStatistics(),
    source: "IBGE e INEP"
  });
};

exports.getNGOs = (req, res) => {
  res.json({
    success: true,
    message: "Organizações que promovem inclusão digital",
    data: socialModel.getNGOs()
  });
};

exports.getRandomTip = (req, res) => {
  res.json({
    success: true,
    tip: socialModel.getRandomTip()
  });
};