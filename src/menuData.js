const menu = [
  {
    categoria: "Entradas",
    items: [
      { nombre: "Rabas de Calamar", descripcion: "Con dip de mayonesa cítrica", precio: 650 },
      { nombre: "Miniaturas de Pescado", descripcion: "Con alioli y ciboulette", precio: 650 },
      { nombre: "Salteado de Chipirones, Garbanzos y Chorizos", descripcion: "Al pimenton ahumado con ajo, cebolla y pimientos, acompañado con pan de campo", precio: 750 },
      { nombre: "Provolone Fundido", descripcion: "Queso provolone gratinado, servido con pan", precio: 480 },
      { nombre: "Provolone Arrecife", descripcion: "Panceta, olivas, pimientos asados y verdeo", precio:580 },
      { nombre: "Revuelto Gramajo", descripcion: "Jamón, panceta, cebolla, mórron, perejil, huevo y límon en gajos", precio: 620},
      { nombre: "Tóston de Salón Curado", descripcion: "De masa maddre, queso crema, palta, tomate cherry, rúcula y alcaparras fritas", precio: 720},
      { nombre: "Quesadillas de Pollo y Bacon", descripcion: "Con tomates confitados, queso fundido y cebolla, acompañadas con fritas y guacamole", precio:590 },
      { nombre: "Tacos de Carne", descripcion: "Carne cortada a cuchillo, verduras crocantes, porotos refritos, pimentón y panceta, acompañados de papas fritas y salsa picante", precio:590 },
      { nombre: "Tabla de Mar (para 2 personas)", descripcion: "Rabas de Calamar, Miniaturas de Pescado con alioli, Pejerrey doré y mejillones a la provenzal", precio:2400 },
    ],
  },
  {
    categoria: "Ensaladas",
    items: [
      { nombre: "Mixta", descripcion: "Lechuga, Tomate y Cebolla", precio: 320 },
      { nombre: "César", descripcion: "Mix de verdes, daditos de pollo, parmesano, croutones y aderezo César", precio: 680 },
      { nombre: "Mediterránea", descripcion: "Mix de verdes, berenjenas asadas, parmesano, olivas negras, tomates confitados, chips de jamón crudo y vinagreta de mostaza Dijon", precio:680 },
      { nombre: "De La Huerta", descripcion: "Lechuga, rúcula, albahaca, tomate, zanahoria, repollo, maíz, huevo duro, olivas, deditos de queso y lascas de parmesano", precio:680 },
      { nombre: "Del Mar", descripcion: "Mix de verdes, salón macerado, camarones al vapor, frutilla fresca, mango, cous-cous, aderezado con suave vinagreta de lima", precio:790 },
      { nombre: "Francesa", descripcion: "Mix de verdes, peras, roquefort, almendras, apio, croutones y semillas de girasol", precio: 750 },
      { nombre: "Valen", descripcion: "Mix de verdes, duraznos asados, castañas de cajú, dátiles, queso de cabra, tomates cherry, vinagreta de arándanos y agave", precio:750 }
    ],
  },
  {
    categoria: "Minutas",
    items: [
      { nombre: "Papas fritas", descripcion: "", precio: 320 },
      { nombre: "Papas fritas con Crema de Hongos", descripcion: "", precio: 430 },
      { nombre: "Papas fritas Rústicas", descripcion: "Con salsa de cheddar, panceta crocante y verdeo", precio:460 },
      { nombre: "Milanesa de Carne", descripcion: "Con guarnición a elección", precio:730 },
      { nombre: "Milanesa de Pollo", descripcion: "Con guarnición a elección", precio:730 },
      { nombre: "Milanesa Napolitana", descripcion: "Muzzarella fundida, jamón, salsa de tomate y orégano, con guarnición a elección", precio:780 },
      { nombre: "Milanesa a Caballo", descripcion: "Con dos huevos fritos, con guarnición a elección", precio:780 },
      { nombre: "Milanesa Tres Quesos", descripcion: "Gratinada con muzzarella, provolone, roquefort y pimientos asados, con guarnición a elección", precio:780 },
      { nombre: "Chivito Canadiense al Pan", descripcion: "Lomo, muzzarella, jamón, panceta, olivas, huevo frito, tomate, lechuga, rusa y papas fritas", precio:730 },
      { nombre: "Chivito al Plato Completo", descripcion: "Lomo, muzzarella, jamón, panceta, olivas, huevo frito, con guarnición de mixta, ensalada rusa y papas fritas", precio:820 },
      { nombre: "Hamburguesa Americana", descripcion: "pan brioche con sésamo, carne magra, panceta, cheddar, cebolla caramelizada, lechuga, tomate, huevo a la plancha, mayonesa y papas rústicas", precio:730 }
    ],
  },
  {
    categoria: "Veganos y Celíacos",
    items: [
      { nombre: "Hamburguesa de Garbanzo", descripcion: "Con pan de papa, mostaza Dijon, peinillos, tofu, cebolla colorada, lechuga y tomate.Acompañado con papas rústicas", precio: 650 },
      { nombre: "Hamburguesa de Lentejas", descripcion: "Con pan de papa, mostaza Dijon, peinillos, tofu, cebolla colorada, lechuga y tomate.Acompañado con papas rústicas", precio: 650 },
      { nombre: "Vermicelli al Wok de Vegetales", descripcion: "De arroz, con julianas de vegetales, jengibre, soja y semillas tostadas", precio: 650 },
      { nombre: "Budakiss", descripcion: "Masa de papa, manzana, puerro, queso de cajú y salsa fresca de tomate", precio: 650 },
    ],
  },
  {
    categoria: "Las Brasas",
    items: [
      { nombre: "Chorizo", descripcion: "", precio: 260},
      { nombre: "Morcilla", descripcion: "", precio: 260},
      { nombre: "Chinchulín", descripcion: "", precio: 360},
      { nombre: "Riñón", descripcion: "", precio: 320},
      { nombre: "Molleja", descripcion: "", precio: 510},
      { nombre: "Entraña", descripcion: "", precio: 850},
      { nombre: "Picaña de Cordero", descripcion: "", precio: 820},
      { nombre: "Asado Premium", descripcion: "", precio: 850},
      { nombre: "Bife de Vacío", descripcion: "", precio: 780},
      { nombre: "Bife Ancho", descripcion: "", precio: 850},
      { nombre: "Matambrito de Cerdo", descripcion: "", precio: 740},
      { nombre: "Pamplona de Pollo", descripcion: "Con relleno de jamón, muzzarella, olivas y pimientos", precio: 690},
      { nombre: "Pollo a las Brasas", descripcion: "Muslo o Pechuga Deshuesada con la opcion de una salsa de mostaza y miel", precio: 620},
      { nombre: "Boniato al Plomo Glaseado", descripcion: "", precio: 330},
      { nombre: "Papa al Plomo Con Manteca de Hierbas", descripcion: "", precio: 320},
      { nombre: "Papa al Plomo Con Queso Roquefort", descripcion: "", precio: 360},
      { nombre: "Verduras Asadas", descripcion: "", precio: 320},
      { nombre: "Brasero para Dos Personas", descripcion: "Asado, Bife Ancho, Pollo, Chorizo, Morcilla, Chinchulín, Riñón. Acompañado con papas fritas o ensalada mixta", precio: 320},

    ],
  },
  {
    categoria: "Del Mar",
    items: [
      { nombre: "Paella de Mariscos", descripcion: "Hecha en el momento, variedad de mariscos con todos los sabores del mar, arroz carnaroli y el clásico azafrán en hebras", precio: 850 },
      { nombre: "Pesca con Manteca de Hierbas", descripcion: "Con guarnición a elección", precio: 790 },
      { nombre: "Pesca Cítrica", descripcion: "pesca grillada con un suave pesto cítrico. Con guarnición a elección", precio: 810 },
      { nombre: "Pesca Arrecife", descripcion: "Pesca grillada con crema de camarones, roquefort y puerro. Con guarnición a elección", precio: 890 },
      { nombre: "Pesca Toscana", descripcion: "Pesca grillada con salsa fresca de tomate, olivas negras, albahaca, muzzarella de búfala, alcaparras y tomates secos. Con guarnición a elección", precio: 850 },
      { nombre: "Salmón Teriyaki", descripcion: "Con puré de calabaza y vegetales de estación", precio: 980 },
    ],
  },
];

export default menu;