export const models = [
  {
    id: 1,
    anime: "Naruto",
    descricao: "Ninjas lutam para proteger suas vilas e seus ideais.",
    personagens: [
      {
        id: 1,
        nome: "Naruto Uzumaki",
        estilos: [
          {
            tipo: "Action Figure",
            modelos: [
              {
                id: 1,
                nome: "Naruto SH Figuarts",
                imagens: [
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhZjX9Y-tfXUJqVDnfDiurCqBG_DCWy-IRV03s66V7PrZG55eyBeiOMcUjPQ6QcQbrqqYmJqfCGybmEgD61PEf9Od3fg23rOvBaTrrOSEnQ&s=10"
                ]
              }
            ]
          },
          {
            tipo: "Funko Pop",
            modelos: [
              {
                id: 1,
                nome: "Naruto Funko",
                imagens: [
                  "data:image/jpeg;base64,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"
                ]
              }
            ]
          }
        ]
      },

      {
        id: 2,
        nome: "Sasuke Uchiha",
        estilos: [
          {
            tipo: "Action Figure",
            modelos: [
              {
                id: 1,
                nome: "Sasuke SH Figuarts",
                imagens: [
                  "https://m.media-amazon.com/images/I/61cQ5ZKXJCL._AC_SL1000_.jpg"
                ]
              }
            ]
          },
          {
            tipo: "Funko Pop",
            modelos: [
              {
                id: 1,
                nome: "Sasuke Funko",
                imagens: [
                  "https://m.media-amazon.com/images/I/51m1k5B5yDL._AC_SL1000_.jpg"
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 2,
    anime: "One Piece",
    descricao: "Piratas navegam em busca do lendário tesouro One Piece.",
    personagens: [
      {
        id: 1,
        nome: "Monkey D. Luffy",
        estilos: [
          {
            tipo: "Action Figure",
            modelos: [
              {
                id: 1,
                nome: "Luffy Gear 5 Figure",
                imagens: [
                  "https://m.media-amazon.com/images/I/71ZsYtR7TFL._AC_SL1000_.jpg"
                ]
              }
            ]
          },
          {
            tipo: "Funko Pop",
            modelos: [
              {
                id: 1,
                nome: "Luffy Funko",
                imagens: [
                  "https://m.media-amazon.com/images/I/51jZPjYyGCL._AC_SL1000_.jpg"
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 3,
    anime: "Dragon Ball",
    descricao: "Guerreiros protegem a Terra usando artes marciais e poderes.",
    personagens: [
      {
        id: 1,
        nome: "Goku",
        estilos: [
          {
            tipo: "Action Figure",
            modelos: [
              {
                id: 1,
                nome: "Goku Ultra Instinct",
                imagens: [
                  "https://m.media-amazon.com/images/I/61mE7Vb6VTL._AC_SL1000_.jpg"
                ]
              }
            ]
          },
          {
            tipo: "Funko Pop",
            modelos: [
              {
                id: 1,
                nome: "Goku Funko",
                imagens: [
                  "https://m.media-amazon.com/images/I/51eJ0xJH1JL._AC_SL1000_.jpg"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
