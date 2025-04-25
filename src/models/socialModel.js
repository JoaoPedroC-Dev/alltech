// Armazena todos os dados e lógica de acesso
const digitalInclusionResources = {
    courses: [
      { id: 1, title: "Introdução à Programação para Comunidades", provider: "Digital House", free: true },
      { id: 2, title: "Educação Financeira Digital", provider: "Banco Central", free: true },
      { id: 3, title: "Internet Segura para Idosos", provider: "SaferNet", free: true }
    ],
    statistics: {
      digitalDivide: "30% da população rural não tem acesso à internet (IBGE, 2023)",
      education: "Apenas 45% das escolas públicas têm laboratório de informática"
    },
    NGOs: [
      { name: "Programando o Futuro", focus: "Inclusão digital em periferias", site: "programandofuturo.org.br" },
      { name: "Tecnologia para Todos", focus: "Doação de equipamentos", site: "techparatodos.org" },
      { name: "Programadores do Amanhã", focus: "Inclusão de pardos, pretos e indígenas", site: "programadoresdoamanha.org.br"}
    ],
    tips: [
      "Doe equipamentos eletrônicos usados para projetos de inclusão digital",
      "Voluntarie-se para ensinar habilidades digitais em sua comunidade",
      "Compartilhe cursos online gratuitos com quem precisa"
    ]
  };
  
  module.exports = {
    getFreeCourses: () => ({
      data: digitalInclusionResources.courses.filter(course => course.free),
      count: digitalInclusionResources.courses.filter(course => course.free).length
    }),
    
    getStatistics: () => digitalInclusionResources.statistics,
    
    getNGOs: () => digitalInclusionResources.NGOs,
    
    getRandomTip: () => digitalInclusionResources.tips[Math.floor(Math.random() * digitalInclusionResources.tips.length)]
  };