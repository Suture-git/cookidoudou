// Base de données des recettes Cookidoudou
// Fichier initialisé avec le Lot 1 : Entrées (Recettes 1 à 8)

window.RECIPES = [
  {
    id: 1,
    category: "Entrées",
    title: "Rillettes de sardines",
    image: "",
    time: "5 min",
    ingredients: ["150 g Sardines à l'huile (en conserve)", "1 Échalote", "1 bouquet Ciboulette", "2 c. à soupe rases Fromage frais (type St Môret)", "1 Citron vert", "Fleur de sel et poivre"],
    adultSteps: [
      "Retirez les arêtes des sardines et écrasez-les à la fourchette.",
      "Épluchez l'échalote et émincez-la. Ciselez la ciboulette.",
      "Mélangez aux sardines l'échalote, la ciboulette, le fromage frais et le jus du citron vert.",
      "Assaisonnez de fleur de sel et de poivre.",
      "Réservez au frais (se déguste avec des croûtons ou gressins)."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Lisse : Récupérez 10g de sardines (sans arêtes). Mixez-les très finement avec 100g de légumes cuits et un peu d'eau." },
      { maxAge: 8, text: "Mouliné : Écrasez 10g de sardines finement. Mélangez avec 130g de légumes cuits écrasés." },
      { maxAge: 12, text: "Morceaux : Récupérez 15g de rillettes (avant de mettre le sel/poivre). Donnez-les à bébé avec des bâtonnets de légumes ou du pain moelleux." },
      { maxAge: 999, text: "Une excellente source d'oméga 3 pour toute la famille !" }
    ]
  },
  {
    id: 2,
    category: "Entrées",
    title: "Mousse de betterave",
    image: "",
    time: "15 min",
    ingredients: ["300 g Betterave cuite", "100 g Fromage frais", "1 c. à soupe Huile de noix", "Sel et poivre"],
    adultSteps: [
      "Coupez la betterave cuite en morceaux.",
      "Mixez la betterave avec le fromage frais et l'huile de noix jusqu'à obtenir une texture mousseuse.",
      "Assaisonnez de sel et de poivre et réservez au frais."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Lisse : Récupérez 130g de betterave (avant fromage). Mixez finement avec 1 c.à.c d'huile et un peu d'eau." },
      { maxAge: 8, text: "Mouliné : Hachez finement 130g de betterave avec 1 c.à.c d'huile." },
      { maxAge: 12, text: "Morceaux : Récupérez 50g de mousse (sans sel ajouté). Bébé peut y tremper des petits morceaux de pain ou l'attaquer à la cuillère." },
      { maxAge: 999, text: "Comme les parents, très coloré et doux !" }
    ]
  },
  {
    id: 3,
    category: "Entrées",
    title: "Gaspacho de concombre",
    image: "",
    time: "15 min",
    ingredients: ["1 Concombre", "200 g Tomates pelées concassées (en boîte)", "1/2 Oignon nouveau", "1 c. à soupe Huile d'olive", "10 feuilles Basilic", "Sel et poivre"],
    adultSteps: [
      "Épluchez le concombre, coupez-le en deux pour l'épépiner, puis coupez-le en morceaux.",
      "Dans le bol d'un mixeur, placez le concombre, les tomates, l'oignon émincé, l'huile d'olive et le basilic. Mixez finement.",
      "Assaisonnez et réservez au frais."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Lisse : Le concombre cru est dur à digérer. Faites cuire 130g de concombre à la vapeur et mixez finement avec 1 c.à.c d'huile." },
      { maxAge: 8, text: "Mouliné : Récupérez 130g du gaspacho familial mixé (sans sel/poivre)." },
      { maxAge: 12, text: "Morceaux : Servez 130g de gaspacho (sans sel) dans un petit bol ou une tasse à boire." },
      { maxAge: 999, text: "Rafraîchissant pour l'été !" }
    ]
  },
  {
    id: 4,
    category: "Entrées",
    title: "Guacamole de courgette",
    image: "",
    time: "10 min",
    ingredients: ["1 Courgette", "1 Avocat bien mûr", "1/2 Citron", "1/2 Oignon nouveau", "1 filet Huile d'olive", "1 brin Coriandre", "Sel et piment d'Espelette"],
    adultSteps: [
      "Lavez la courgette, coupez-la en morceaux et faites-la cuire à la vapeur 15 min.",
      "Écrasez la chair de l'avocat et citronnez-la.",
      "Mixez la courgette (refroidie) avec l'avocat, l'oignon émincé, l'huile et la coriandre.",
      "Assaisonnez avec sel et piment d'Espelette selon les goûts."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Lisse : Mixez finement 100g de courgette cuite avec 30g d'avocat cru." },
      { maxAge: 8, text: "Mouliné : Hachez la courgette (100g) et écrasez l'avocat (30g) à la fourchette." },
      { maxAge: 12, text: "Morceaux : Récupérez 50g du guacamole mixé (sans sel ni piment). Idéal pour tremper des légumes cuits." },
      { maxAge: 999, text: "Une alternative légère au guacamole classique." }
    ]
  },
  {
    id: 5,
    category: "Entrées",
    title: "Caviar d'aubergine",
    image: "",
    time: "60 min",
    ingredients: ["2 Aubergines", "1 Gousse d'ail", "1 c. à soupe Huile d'olive", "1 c. à café Jus de citron", "Sel et poivre"],
    adultSteps: [
      "Préchauffez le four à 200 °C. Coupez les aubergines en deux, entaillez la chair en croisillons et badigeonnez d'huile.",
      "Enfournez pour 40 à 45 min. Récupérez la chair à la cuillère.",
      "Hachez la chair avec l'ail pressé, le jus de citron, le sel et le poivre.",
      "Réservez au frais."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Lisse : Récupérez 130g de chair d'aubergine nature cuite au four. Mixez finement avec 1 c.à.c d'huile." },
      { maxAge: 8, text: "Mouliné : Hachez finement la chair nature à la fourchette." },
      { maxAge: 12, text: "Morceaux : Donnez 50g du caviar assaisonné (sans sel si possible, l'ail est très bon pour l'éveil au goût)." },
      { maxAge: 999, text: "Un délice sur des tartines grillées." }
    ]
  },
  {
    id: 6,
    category: "Entrées",
    title: "Houmous",
    image: "",
    time: "10 min",
    ingredients: ["300 g Pois chiches cuits et égouttés", "Jus d'un citron", "1/2 Gousse d'ail", "1 c. à soupe Purée de sésame (tahin)", "2 c. à soupe Huile d'olive", "Sel et poivre"],
    adultSteps: [
      "Mettez les pois chiches dans le mixeur (gardez un peu du jus de la conserve/aquafaba).",
      "Ajoutez le jus de citron, l'ail, la purée de sésame, l'huile d'olive, sel et poivre.",
      "Mixez jusqu'à obtenir une pâte homogène. Ajustez la texture avec un peu d'eau si besoin."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Lisse : Les pois chiches sont difficiles à digérer si tôt, privilégiez une purée de légumes verts." },
      { maxAge: 8, text: "Mouliné : Donnez 130g de houmous non salé, mixé très finement. (Astuce : enlever la peau des pois chiches facilite la digestion)." },
      { maxAge: 12, text: "Morceaux : Récupérez 50g de houmous. Idéal en tartinade." },
      { maxAge: 999, text: "Comme les parents !" }
    ]
  },
  {
    id: 7,
    category: "Entrées",
    title: "Velouté de lentilles corail au lait de coco",
    image: "",
    time: "25 min",
    ingredients: ["200 g Lentilles corail", "1 Oignon", "1 Carotte", "1 c. à soupe Huile d'olive", "1 c. à café Cumin", "20 cl Lait de coco", "Sel et poivre"],
    adultSteps: [
      "Rincez les lentilles. Émincez l'oignon, épluchez et coupez la carotte en dés.",
      "Faites revenir l'oignon et la carotte dans l'huile avec le cumin.",
      "Ajoutez les lentilles, couvrez d'eau et laissez cuire 15 min.",
      "Ajoutez le lait de coco, mixez le tout, salez et poivrez."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Lisse : Les légumes secs purs ne sont pas conseillés si tôt, mais vous pouvez donner 130g du velouté mixé (avant le sel) si bébé digère bien." },
      { maxAge: 8, text: "Mouliné : Récupérez 130g de velouté (sans sel/poivre). La texture doit être très souple." },
      { maxAge: 12, text: "Morceaux : Servez tel quel, à manger à la cuillère ou à boire." },
      { maxAge: 999, text: "Doux et réconfortant." }
    ]
  },
  {
    id: 8,
    category: "Entrées",
    title: "Salade de champignons de Paris",
    image: "",
    time: "15 min",
    ingredients: ["250 g Champignons de Paris frais", "Jus d'un citron", "2 c. à soupe Huile de colza", "1 bouquet Ciboulette", "30 g Abricots secs", "Sel et poivre"],
    adultSteps: [
      "Nettoyez les champignons et coupez-les en fines lamelles. Arrosez-les de jus de citron.",
      "Coupez les abricots secs en petits dés et ciselez la ciboulette.",
      "Mélangez le tout avec l'huile de colza, salez et poivrez."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Lisse : Récupérez 200g de champignons (avant assaisonnement). Faites-les bien cuire à la vapeur puis mixez finement." },
      { maxAge: 8, text: "Mouliné : Récupérez 200g de champignons, cuisez-les bien et hachez-les finement." },
      { maxAge: 12, text: "Morceaux : Dès 12 mois, vous pouvez donner la salade mixée sans les abricots secs. Dès 15 mois, donnez la salade avec les doigts !" },
      { maxAge: 999, text: "Une entrée crue et croquante !" }
    ]
  },
  {
    id: 9,
    category: "Plats",
    title: "Courgettes carbonara",
    image: "",
    time: "20 min",
    ingredients: ["4 Courgettes", "2 Gousses d'ail", "250 g Lardons", "20 cl Crème fraîche", "60 g Parmesan râpé", "3 brins Sarriette", "Sel et poivre"],
    adultSteps: [
      "Ouvrez les courgettes en deux dans la longueur et épépinez-les. Faites-en des spaghettis avec une râpe à gros trous et faites-les cuire à la poêle 3 min.",
      "Pelez l'ail, dégermez-le et hachez-le.",
      "Déposez les lardons dans la poêle avec les courgettes et faites-les revenir jusqu'à ce qu'ils soient bien colorés. Ajoutez l'ail et la sarriette. Mélangez.",
      "Versez la crème et le parmesan. Laissez réduire 2 ou 3 min.",
      "Assaisonnez. Vous pouvez ajouter 1 jaune d'œuf comme dans les vraies carbonaras."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de courgette après l'étape 1 et mixez-la encore chaude." },
      { maxAge: 6, text: "Lisse : Récupérez 130 g de courgette (étape 1) et mixez finement avec un filet d'huile." },
      { maxAge: 8, text: "Mouliné : Hachez 130 g de courgette avec 10 g de lardons finement mixés (sans la crème salée)." },
      { maxAge: 12, text: "Morceaux : Donnez les spaghettis de courgettes en morceaux avec un peu de crème et de parmesan." },
      { maxAge: 999, text: "Un plat complet qui revisite les classiques !" }
    ]
  },
  {
    id: 10,
    category: "Plats",
    title: "Foie de veau poêlé et endives braisées",
    image: "",
    time: "25 min",
    ingredients: ["4 escalopes de foie de veau", "12 endives", "1 citron", "1 c. à soupe miel", "1 branche thym", "beurre", "1 gousse d'ail", "farine", "sel et poivre"],
    adultSteps: [
      "Nettoyez les endives et retirez la partie amère. Coupez-les en deux dans la longueur et déposez-les dans une sauteuse, côté coupé dessous. Faites-les revenir avec une noix de beurre 15 min à feu moyen en les retournant de temps en temps.",
      "Au bout de 5 min, ajoutez du jus de citron, l'ail haché et le miel. Laissez confire.",
      "Pendant ce temps, farinez les tranches de foie de veau et enlevez l'excès de farine en les secouant. Dans une poêle, faites fondre 30 g de beurre, ajoutez le thym et mettez les tranches à saisir 2 à 3 min de chaque côté (plus de 5 min pour bébé).",
      "Assaisonnez et servez les endives braisées et le foie de veau au thym sans attendre."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g d'endive crue. Faites-la bien cuire avant de la mixer finement (ajoutez un petit jus de citron contre l'amertume)." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g d'endives (étape 1) et 10 g de foie de veau bien cuit (étape 3). Mixez finement." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g d'endives et 20 g de foie de veau bien cuit. Moulinez finement." },
      { maxAge: 12, text: "Morceaux : Récupérez 160 g d'endives et 30 g de foie de veau. Coupez en morceaux." }
    ]
  },
  {
    id: 11,
    category: "Plats",
    title: "Saltimbocca de veau aux artichauts",
    image: "",
    time: "30 min",
    ingredients: ["4 escalopes de veau bien fines", "12 fonds artichauts", "4 tranches jambon de Parme", "2 citrons", "4 feuilles sauge", "1 échalote", "beurre", "huile d'olive", "sel et poivre"],
    adultSteps: [
      "Dans une cocotte, faites revenir l'échalote émincée dans du beurre. Ajoutez les artichauts égouttés et coupés en quatre et arrosez de jus de citron. Faites colorer 10 min.",
      "Étalez les escalopes de veau. Posez 1 tranche de jambon et 1 feuille de sauge sur chaque. Roulez-les et maintenez par un cure-dents.",
      "Faites chauffer une poêle, ajoutez un filet d'huile avec une noix de beurre et faites revenir les saltimboccas.",
      "Assaisonnez et servez les fonds d'artichauts avec les saltimboccas bien chauds."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Lisse : 200 g d'artichauts mixés finement accompagnés de 10 g de saltimbocca haché." },
      { maxAge: 8, text: "Mouliné : 200 g d'artichauts moulinés finement accompagnés de 20 g de saltimbocca grossièrement haché." },
      { maxAge: 12, text: "Morceaux : 150 g d'artichauts accompagnés de 30 g de saltimbocca en morceaux." }
    ]
  },
  {
    id: 12,
    category: "Plats",
    title: "Médaillon de porc et tagliatelles fraîches",
    image: "",
    time: "30 min",
    ingredients: ["600 g filet mignon de porc", "2 fenouils", "250 g tagliatelles fraîches", "1 c. à soupe sirop d'érable", "1 oignon", "1 branche thym", "1 gousse d'ail", "1/2 bouquet de coriandre", "huile d'olive", "sel et poivre"],
    adultSteps: [
      "Badigeonnez le filet mignon avec le sirop d'érable, ajoutez du thym. Émincez l'oignon et répartissez-le autour.",
      "Coupez les fenouils en quatre dans la longueur.",
      "Placez les fenouils autour de la viande avec l'ail écrasé, la coriandre et l'huile. Enfournez pour 25 min à 220 °C.",
      "Faites cuire les tagliatelles, égouttez et huilez.",
      "Répartissez les pâtes, le fenouil et le porc en tranches. Arrosez de jus."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de fenouil cuit à la vapeur et mixé finement (lait infantile si nécessaire)." },
      { maxAge: 6, text: "Lisse : 200 g de fenouils et 10 g de viande bien cuite mixés finement avec 5 g de matière grasse." },
      { maxAge: 8, text: "Mouliné : 150 g de fenouils et 20 g de viande hachés (5 g MG) avec 50 g de tagliatelles en morceaux." },
      { maxAge: 12, text: "Morceaux : 100 g de fenouils et 30 g de viande en morceaux, 50 g de tagliatelles. Mélangez avec 5 g de MG." }
    ]
  },
  {
    id: 13,
    category: "Plats",
    title: "Nems de bœuf et julienne de légumes",
    image: "",
    time: "25 min",
    ingredients: ["12 feuilles de riz", "150 g bœuf haché", "1 carotte", "1 courgette", "40 g pousses de soja", "1 oignon", "12 feuilles menthe", "sauce soja", "12 feuilles de laitue", "huile de friture", "sel et poivre"],
    adultSteps: [
      "Épluchez, râpez la carotte et taillez-la en julienne.",
      "Taillez la courgette en julienne. Émincez l'oignon et hachez la menthe.",
      "Mélangez la viande, l'oignon, la menthe, la sauce soja, sel et poivre.",
      "Trempez les feuilles de riz, garnissez-les de farce, de légumes et roulez-les bien serrées.",
      "Faites frire les nems 5 min. Servez avec laitue et sauce soja."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de carotte cuite dans l'eau bouillante et mixée finement." },
      { maxAge: 6, text: "Lisse : 200 g de carottes cuites mixées avec 5 g de MG + 10 g de viande hachée (sans assaisonnement) cuite et mixée." },
      { maxAge: 8, text: "Mouliné : 100 g de carotte et 100 g de courgette cuites mixées (5 g MG) + 20 g de viande cuite mixée." },
      { maxAge: 12, text: "Morceaux : Servez 1 ou 2 petits nems avec une salade verte (coupés si nécessaire)." }
    ]
  },
  {
    id: 14,
    category: "Plats",
    title: "Wok de poulet et légumes croquants",
    image: "",
    time: "20 min",
    ingredients: ["4 blancs de poulet", "150 g pousses de soja", "150 g radis noir", "150 g mâche", "30 g gingembre frais", "2 c. à soupe de miel", "1 c. à café d'ail en poudre", "1 citron", "2 c. à soupe d'huile", "sel et poivre"],
    adultSteps: [
      "Mélangez le miel, le gingembre râpé, l’ail, le jus de citron, sel et poivre.",
      "Coupez les blancs de poulet en lamelles et faites-les dorer au wok. Versez le mélange au miel dessus.",
      "Ajoutez le soja et le radis noir en rondelles.",
      "Terminez par la mâche (30 secondes de cuisson). Assaisonnez et servez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de radis cuit à la vapeur et mixé finement." },
      { maxAge: 6, text: "Lisse : 10 g de poulet, 100 g de radis, 100 g de mâche cuits vapeur (avec gingembre/ail) et mixés finement." },
      { maxAge: 8, text: "Mouliné : 20 g de poulet, 100 g de radis, 100 g de mâche cuits vapeur et moulinés finement." },
      { maxAge: 12, text: "Morceaux : 150 g de wok de légumes et 30 g de poulet." }
    ]
  },
  {
    id: 15,
    category: "Plats",
    title: "Poêlée de chou kale et volaille sautée au sésame",
    image: "",
    time: "20 min",
    ingredients: ["600 g chou kale", "500 g dinde en morceaux", "20 g graines de sésame", "1 gousse ail", "1 c. à café curry", "huile d'olive", "1 citron", "sel et poivre"],
    adultSteps: [
      "Hachez l'ail.",
      "Faites revenir la dinde avec le curry dans une poêle huilée. Après 5 min, ajoutez le sésame. Cuisez 5 min de plus et réservez.",
      "Dans la même poêle, faites revenir le chou kale avec l'ail et du jus de citron 3 min.",
      "Assaisonnez et servez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de chou kale cuit et mixé finement (ajouter une pomme de terre si besoin pour épaissir)." },
      { maxAge: 6, text: "Lisse : 200 g de chou kale mixé avec 5 g de matière grasse, puis mixé avec 10 g de dinde sans sésame." },
      { maxAge: 8, text: "Mouliné : 200 g de chou kale mixé avec 5 g de MG, mouliné avec 20 g de dinde au sésame." },
      { maxAge: 12, text: "Morceaux : 160 g de chou kale (avec 5 g MG) et 30 g de dinde au sésame en petits morceaux." }
    ]
  },
  {
    id: 16,
    category: "Plats",
    title: "Topinambours rôtis et petits lardons",
    image: "",
    time: "25 min",
    ingredients: ["800 g topinambours", "200 g lardons", "2 gousses ail", "50 g beurre", "3 brins sarriette", "1 citron", "huile d'olive", "fleur de sel et piment d'Espelette"],
    adultSteps: [
      "Épluchez, coupez les topinambours en dés et plongez-les dans l'eau citronnée.",
      "Blanchissez les lardons dans l'eau bouillante pour les dessaler.",
      "Dans une poêle, faites fondre le beurre avec un filet d'huile, ajoutez les topinambours égouttés et cuisez 15 min.",
      "Ajoutez les lardons, la sarriette et l'ail. Cuisez encore 5 min puis assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de topinambour cuit dans l'eau bouillante et mixé finement (vous pouvez le cuire dans du lait entier)." },
      { maxAge: 6, text: "Lisse : 200 g de topinambours rôtis et petits lardons mixés finement." },
      { maxAge: 8, text: "Mouliné : 200 g de topinambours rôtis et lardons moulinés finement." },
      { maxAge: 12, text: "Morceaux : 180 g de topinambours rôtis et petits lardons." }
    ]
  },
  {
    id: 17,
    category: "Plats",
    title: "Grenadin de veau et boulgour",
    image: "",
    time: "20 min",
    ingredients: ["4 grenadins de veau", "150 g boulgour", "6 navets", "1 échalote", "2 gousses ail", "1 bouquet persil", "beurre", "sel et poivre"],
    adultSteps: [
      "Épluchez les navets et coupez-les en quartiers. Faites-les revenir 10 min avec l'échalote et un fond d'eau.",
      "Ajoutez la moitié du persil haché et 1 gousse d'ail écrasée dans les navets.",
      "Faites cuire le boulgour.",
      "Faites cuire les grenadins de veau dans du beurre noisette avec l'autre gousse d'ail (bien cuit pour bébé).",
      "Servez le boulgour, les navets et la viande parsemés de persil."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de navet cuit et mixé finement." },
      { maxAge: 6, text: "Lisse : 200 g de navets mixés finement avec 5 g de MG, puis avec 10 g de veau bien cuit." },
      { maxAge: 8, text: "Mouliné : 150 g de navets mixés (5 g MG) + 50 g de boulgour et 20 g de veau haché menu." },
      { maxAge: 12, text: "Morceaux : 120 g de navets en morceaux (5 g MG) + 50 g de boulgour et 30 g de veau en morceaux." }
    ]
  },
  {
    id: 18,
    category: "Plats",
    title: "Fusilli à la bolognaise",
    image: "",
    time: "20 min",
    ingredients: ["300 g fusilli", "400 g tomates pelées et concassées", "250 g bœuf haché", "1 oignon", "3 gousses ail", "huile d'olive", "origan", "sel et poivre"],
    adultSteps: [
      "Faites cuire les pâtes al dente.",
      "Faites suer l'oignon et l'ail hachés avec de l'huile. Ajoutez la viande et cuisez 5 min.",
      "Ajoutez les tomates et l'origan. Laissez mijoter 5 à 10 min.",
      "Incorporez les pâtes égouttées dans la sauce, assaisonnez et servez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de tomate cuite et mixée finement." },
      { maxAge: 6, text: "Lisse : 200 g de tomates cuites mixées finement avec 10 g de viande." },
      { maxAge: 8, text: "Mouliné : 150 g de tomates hachées finement + 50 g de pâtes en morceaux avec 20 g de viande." },
      { maxAge: 12, text: "Morceaux : Servez 120 g de fusilli avec un peu de sauce." }
    ]
  },
  {
    id: 19,
    category: "Plats",
    title: "Petits pois à la française",
    image: "",
    time: "20 min",
    ingredients: ["1 kg petits pois surgelés", "4 petites sucrines", "250 g lardons", "50 g beurre", "1 botte ciboulette", "1 oignon", "sel et poivre"],
    adultSteps: [
      "Coupez les sucrines en quatre. Émincez finement l'oignon.",
      "Faites colorer les lardons dans une cocotte avec le beurre.",
      "Ajoutez l'oignon, les sucrines et laissez colorer 5 min. Ajoutez les petits pois décongelés.",
      "Laissez cuire 5 min et ajoutez la ciboulette ciselée. Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de petits pois cuits et mixés finement (passés à la passoire pour retirer les peaux)." },
      { maxAge: 6, text: "Lisse : 200 g de petits pois cuits et mixés finement avec 5 g de MG." },
      { maxAge: 8, text: "Mouliné : 200 g de petits pois à la française hachés." },
      { maxAge: 12, text: "Morceaux : 160 g de petits pois à la française." }
    ]
  },
  {
    id: 20,
    category: "Plats",
    title: "Croquettes jambon et pommes de terre",
    image: "",
    time: "20 min",
    ingredients: ["500 g purée de pommes de terre", "200 g jambon", "3 cibettes", "80 g gouda râpé", "2 œufs", "farine", "chapelure", "huile", "sel et poivre"],
    adultSteps: [
      "Faites tiédir la purée. Coupez le jambon en dés et ciselez le vert des oignons.",
      "Mélangez la purée, le jambon, les oignons, le gouda et 1 œuf de façon homogène.",
      "Formez des petites boulettes. Passez-les dans la farine, puis le 2ème œuf battu, puis la chapelure (deux fois).",
      "Faites dorer les boulettes à la poêle et servez avec une salade."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de purée de pommes de terre (détendue avec du lait infantile)." },
      { maxAge: 6, text: "Lisse : 200 g de purée mixée avec 10 g de jambon et 5 g de MG." },
      { maxAge: 8, text: "Mouliné : 200 g de purée mixée avec 20 g de jambon, 15 g de gouda et une pincée d'oignon." },
      { maxAge: 12, text: "Morceaux : Récupérez 2 ou 3 croquettes, avec une salade verte." }
    ]
  },
  {
    id: 21,
    category: "Plats",
    title: "Cordon-bleu maison",
    image: "",
    time: "30 min",
    ingredients: ["4 escalopes de poulet", "2 tranches jambon", "4 tranches comté pasteurisé", "1 kg carottes", "1 bouquet coriandre", "farine", "2 œufs", "chapelure", "huile", "sel et poivre"],
    adultSteps: [
      "Ouvrez les escalopes en portefeuille. Garnissez de demi-tranches de jambon et de fromage, puis refermez.",
      "Panez les cordons-bleus (farine, œuf, chapelure x2).",
      "Faites revenir les carottes en rondelles avec la coriandre pendant 5 min.",
      "Faites cuire les cordons-bleus à la poêle (5 min par face) puis finissez au four 5 min à 200°C."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de carotte bien cuite et mixée finement." },
      { maxAge: 6, text: "Lisse : 200 g de carottes bien cuites et mixées avec 5 g de MG + 10 g de jambon mixé." },
      { maxAge: 8, text: "Mouliné : 200 g de carottes écrasées (5 g MG) + 20 g de jambon et un peu de fromage hachés." },
      { maxAge: 12, text: "Morceaux : 180 g de carottes et 30 g de cordon-bleu en morceaux." }
    ]
  },
  {
    id: 22,
    category: "Plats",
    title: "Riz cantonais express",
    image: "",
    time: "25 min",
    ingredients: ["250 g riz basmati", "200 g petits pois surgelés", "4 œufs", "3 tranches jambon", "1/4 de bouquet persil", "huile de tournesol", "2 oignons nouveaux", "sel et poivre"],
    adultSteps: [
      "Faites cuire le riz et égouttez-le.",
      "Battez les œufs en omelette, cuisez-la et coupez-la en petits dés.",
      "Cuisez les petits pois 3 à 4 min et refroidissez-les sous l'eau froide.",
      "Mélangez le riz, l'omelette, les petits pois, le jambon en morceaux, les oignons émincés et le persil haché.",
      "Ajoutez un filet d'huile et assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de petits pois mixés finement (passés à la passoire)." },
      { maxAge: 6, text: "Lisse : 10 g d'œuf, 200 g de petits pois et persil mixés finement avec 5 g de MG." },
      { maxAge: 8, text: "Mouliné : 150 g de petits pois moulinés + 50 g de riz + 20 g d'œuf + 5 g de MG." },
      { maxAge: 12, text: "Morceaux : 150 g de riz cantonais." }
    ]
  },
  {
    id: 23,
    category: "Plats",
    title: "Boulettes de poulet au maïs",
    image: "",
    time: "20 min",
    ingredients: ["500 g filets de poulet", "200 g maïs en conserve", "1 bouquet estragon", "1 pincée curry doux", "2 blancs d'œufs", "2 échalotes", "1 gousse d'ail", "huile d'olive", "1 laitue", "sel et poivre"],
    adultSteps: [
      "Mixez la viande, l'estragon, le curry, les échalotes et l'ail.",
      "Ajoutez les blancs d'œufs et le maïs, mixez grossièrement.",
      "Façonnez des boulettes et cuisez-les à la poêle environ 10 min.",
      "Servez sur un lit de salade assaisonnée."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de laitue cuite et mixée finement." },
      { maxAge: 6, text: "Lisse : 150 g de maïs et 50 g de laitue cuits et mixés + 10 g de boulette hachée finement (estragon et ail optionnels)." },
      { maxAge: 8, text: "Mouliné : 150 g de maïs et 50 g de laitue cuits et moulinés + 20 g de boulette hachée finement." },
      { maxAge: 12, text: "Morceaux : 150 g de maïs, 50 g de laitue et 30 g de boulette en morceaux." }
    ]
  },
  {
    id: 24,
    category: "Plats",
    title: "Brochettes de poulet et houmous",
    image: "",
    time: "20 min",
    ingredients: ["500 g filets de poulet", "250 g pois chiches en conserve", "3 c. à café pâte de curry doux", "1 citron", "1 gousse d'ail", "1 c. à café de cumin", "huile d'olive", "1/4 de bouquet de coriandre", "sel et poivre"],
    adultSteps: [
      "Mélangez le poulet en morceaux avec la pâte de curry. Piquez sur des brochettes.",
      "Mixez les pois chiches, le jus de citron, le cumin, l'huile et l'ail pour le houmous.",
      "Faites cuire les brochettes 10 min à la poêle.",
      "Servez le houmous avec un filet d'huile et la coriandre, accompagné de la brochette."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Lisse : 10 g de viande hachée avec une purée de légumes au choix." },
      { maxAge: 8, text: "Mouliné : 20 g de viande moulinée avec une purée de légumes au choix." },
      { maxAge: 12, text: "Morceaux : 120 g de houmous et 30 g de viande en morceaux." },
      { maxAge: 999, text: "Note: Les pois chiches entiers ne sont conseillés qu'à partir de 15 mois car très riches en fibres." }
    ]
  },
  {
    id: 25,
    category: "Plats",
    title: "Fusilli au foie de volaille à la crème",
    image: "",
    time: "20 min",
    ingredients: ["500 g fusilli", "500 g foies de volaille", "2 échalotes", "1 bouquet persil", "50 cl crème liquide", "huile d'olive", "10 cl de vinaigre balsamique", "sel et poivre"],
    adultSteps: [
      "Faites cuire les pâtes.",
      "Faites revenir les foies et les échalotes hachées à la poêle 5 min. Déglacez au balsamique.",
      "Ajoutez la crème, le persil et laissez réduire 10 min.",
      "Assaisonnez et servez les pâtes avec les foies à la crème."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Lisse : 10 g de foie mixé avec 200 g de purée de légumes au choix." },
      { maxAge: 8, text: "Mouliné : 20 g de foie haché avec 150 g de purée et 50 g de fusilli." },
      { maxAge: 12, text: "Morceaux : 30 g de foie en morceaux avec 120 g de fusilli." }
    ]
  },
  {
    id: 26,
    category: "Plats",
    title: "Dinde grillée, salsa avocat, ananas et citron vert",
    image: "",
    time: "20 min",
    ingredients: ["4 filets de dinde", "2 avocats bien mûrs", "1 ananas Victoria", "1 citron vert", "1 citron combava bio", "huile d'olive", "1 petit piment rouge", "5 brins de coriandre", "sel et poivre"],
    adultSteps: [
      "Mélangez l'ananas en dés, la chair d'avocat écrasée, le jus de citron vert et l'huile.",
      "Ajoutez le piment et la coriandre ciselés.",
      "Faites griller les filets de dinde à la poêle. Zestez le combava dessus.",
      "Servez la viande avec une belle cuillerée de salsa."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g d'ananas cuit à la vapeur et mixé finement." },
      { maxAge: 6, text: "Lisse : 10 g de dinde hachée (5 g MG) avec purée de légumes. Option sucré-salé avec purée d'ananas." },
      { maxAge: 8, text: "Mouliné : 20 g de dinde moulinée (5 g MG) avec purée de légumes et un peu de purée d'ananas/avocat." },
      { maxAge: 12, text: "Morceaux : 30 g de dinde en morceaux et salsa (pas besoin de matière grasse ajoutée, l'avocat suffit)." }
    ]
  },
  {
    id: 27,
    category: "Plats",
    title: "Boudin aux pommes",
    image: "",
    time: "20 min",
    ingredients: ["4 boudins noirs", "4 pommes de terre", "1 pomme Granny smith", "60 g beurre", "1/2 bouquet persil", "1 gousse d'ail", "1 citron", "sel et poivre"],
    adultSteps: [
      "Épluchez, dégermez et hachez l'ail. Hachez finement le persil.",
      "Épluchez les pommes de terre et la pomme, rincez-les.",
      "Coupez les pommes de terre en petits cubes et faites-les revenir 10 min dans la moitié du beurre.",
      "Faites cuire les boudins dans l'autre moitié du beurre (saisir à feu vif puis feu modéré pour ne pas éclater le boyau).",
      "Ajoutez le persil et l'ail aux pommes de terre et cuisez encore 5 min.",
      "Taillez la pomme en fines lamelles et versez du jus de citron dessus.",
      "Dressez les pommes de terre, les boudins et les lamelles de pomme. Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de pomme de terre cuite et mixée finement (vous pouvez ajouter un peu de pomme et détendre au lait infantile)." },
      { maxAge: 6, text: "Lisse : 150 g de pommes de terre et 50 g de pomme mixées finement." },
      { maxAge: 8, text: "Mouliné : 150 g de pommes de terre mixées, 50 g de pomme en petits morceaux et 20 g de boudin bien cuit haché grossièrement." },
      { maxAge: 12, text: "Morceaux : 150 g de pommes de terre, 30 g de boudin bien cuit et quelques lamelles de pomme, le tout coupé en petits morceaux." }
    ]
  },
  {
    id: 28,
    category: "Plats",
    title: "Lapin au pesto, haricots verts frais",
    image: "",
    time: "20 min",
    ingredients: ["2 râbles de lapin", "800 g haricots verts", "3 gousses d'ail", "1 bouquet basilic", "60 g parmesan", "60 g de pignons", "1 citron", "huile d'olive", "beurre", "sel et poivre"],
    adultSteps: [
      "Mixez l'ail, le basilic, le parmesan, les pignons, le jus de citron et un filet d'huile pour obtenir un pesto.",
      "Ouvrez les râbles, badigeonnez l'intérieur de pesto, refermez et ficelez. Colorez-les en cocotte 5 à 6 min avec huile et beurre, puis finissez au four 10 à 12 min à 220 °C.",
      "Faites cuire les haricots verts 5 min à l'eau bouillante et égouttez-les.",
      "Déposez les haricots dans la cocotte avec le lapin et laissez cuire 3 min.",
      "Versez quelques gouttes de pesto sur le plat, assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de haricots verts cuits et mixés finement (détendez au lait infantile ou eau)." },
      { maxAge: 6, text: "Lisse : 200 g de haricots verts mixés avec 5 g de MG + 10 g de lapin cuit et mixé finement." },
      { maxAge: 8, text: "Mouliné : 200 g de haricots verts moulinés avec 5 g de MG + 20 g de lapin haché." },
      { maxAge: 12, text: "Morceaux : 160 g de haricots verts coupés (avec 5 g de MG) + 30 g de lapin en petits morceaux." }
    ]
  },
  {
    id: 29,
    category: "Plats",
    title: "Polenta aux asperges et cabillaud rôti",
    image: "",
    time: "25 min",
    ingredients: ["200 g polenta", "20 pointes d'asperges vertes", "4 dos de cabillaud", "1 bouquet aneth", "2 gousses ail", "huile d'olive", "parmesan râpé", "2 c. à soupe crème fraîche", "sel et poivre"],
    adultSteps: [
      "Déposez le poisson dans un plat. Parsemez d'aneth et d'une gousse d'ail écrasée, huilez et enfournez 10 à 15 min à 160 °C.",
      "Faites cuire la polenta, puis ajoutez la crème, un peu d'aneth et du parmesan.",
      "Hachez la 2e gousse d'ail. Faites blanchir les asperges 3 min à l'eau bouillante, puis sautez-les à la poêle avec l'ail et de l'huile 4 à 5 min.",
      "Dressez la polenta, le cabillaud et les asperges. Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Lisse : 10 g de cabillaud haché finement avec une purée de légumes au choix et 5 g de MG (les asperges sont déconseillées avant 8 mois pour les reins de bébé)." },
      { maxAge: 8, text: "Mouliné : 20 g de cabillaud, 50 g de polenta et 150 g d'asperges moulinés avec 5 g de MG." },
      { maxAge: 12, text: "Morceaux : 30 g de cabillaud, 100 g de polenta et 50 g d'asperges en petits morceaux." }
    ]
  },
  {
    id: 30,
    category: "Plats",
    title: "Saumon laqué et ses petits légumes",
    image: "",
    time: "20 min",
    ingredients: ["4 pavés de saumon", "800 g pois gourmands", "150 g tomates cerises en grappe", "1 grosse échalote", "20 cl de réduction balsamique", "1 c. à soupe miel", "1 c. à café de gingembre en poudre", "1/2 bouquet de coriandre", "2 c. à soupe de graines de sésame doré", "1 botte de ciboulette"],
    adultSteps: [
      "Mélangez la réduction balsamique, le miel, le gingembre, la coriandre ciselée, le sésame et l'échalote émincée.",
      "Badigeonnez le saumon de marinade sur toutes les faces et réservez au frais.",
      "Faites cuire les pois gourmands 5 min à l'eau bouillante et réservez.",
      "Faites cuire le saumon à la poêle avec la marinade 10 min à feu moyen à couvert.",
      "Dressez les pois gourmands, le saumon laqué, les tomates cerises coupées en deux et la ciboulette ciselée."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de pois gourmands (recuits si besoin) mixés finement avec un peu de pomme de terre." },
      { maxAge: 6, text: "Lisse : 150 g de pois gourmands, 50 g de tomates cerises et 10 g de saumon mixés finement avec 5 g de MG." },
      { maxAge: 8, text: "Mouliné : 150 g de pois gourmands, 50 g de tomates cerises et 20 g de saumon moulinés avec 5 g de MG et 1 c. à café de marinade cuite." },
      { maxAge: 12, text: "Morceaux : 130 g de pois gourmands, 50 g de tomates cerises et 30 g de saumon en petits morceaux avec 5 g de MG et 1 c. à café de marinade cuite." }
    ]
  },
  {
    id: 31,
    category: "Plats",
    title: "Daurade grillée et brocolis citronnés",
    image: "",
    time: "20 min",
    ingredients: ["4 filets de daurade sans arêtes", "1 kg brocoli", "1 citron", "1 c. à café coriandre citronnée en graines", "1 gousse ail", "huile d'olive", "sel et poivre"],
    adultSteps: [
      "Détaillez le brocoli en petits bouquets. Plongez-le dans l'eau bouillante 7 à 8 min. Égouttez-le et passez-le sous l'eau froide.",
      "Faites cuire la daurade côté peau 7 min dans une poêle avec l'huile, les graines de coriandre, l'ail écrasé et le jus de citron.",
      "Réservez la daurade et faites réchauffer/caraméliser le brocoli dans la poêle quelques minutes.",
      "Assaisonnez et servez chaud."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de brocoli mixé finement (ne le refroidissez pas). Ajoutez 1 pomme de terre pour lisser si besoin." },
      { maxAge: 6, text: "Lisse : 200 g de brocoli (non refroidi) et 10 g de daurade mixés finement avec 5 g de MG. Pensez à retirer les graines de coriandre." },
      { maxAge: 8, text: "Mouliné : 200 g de brocoli mouliné et 20 g de daurade hachée avec 5 g de MG (sans coriandre)." },
      { maxAge: 12, text: "Morceaux : 180 g de brocoli coupé et 30 g de daurade hachée grossièrement avec 5 g de MG." }
    ]
  },
  {
    id: 32,
    category: "Plats",
    title: "Daurade royale au four",
    image: "",
    time: "20 min",
    ingredients: ["8 filets de daurade sans arêtes", "4 tomates", "1 courgette", "1 oignon rouge", "4 brins origan frais", "huile d'olive", "sel et poivre"],
    adultSteps: [
      "Coupez les tomates, la courgette et l'oignon en fines rondelles.",
      "Dans 4 papillotes, déposez 1 filet de daurade (peau dessous), répartissez les légumes, un filet d'huile et l'origan.",
      "Déposez un second filet de daurade sur les légumes (peau dessus) et fermez hermétiquement les papillotes.",
      "Enfournez 15 min à 200 °C.",
      "Ouvrez les papillotes avant de servir pour échapper la vapeur. Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de courgette cuite et mixée finement." },
      { maxAge: 6, text: "Lisse : 200 g de légumes de la papillote et 10 g de daurade mixés finement." },
      { maxAge: 8, text: "Mouliné : 200 g de légumes de la papillote et 20 g de daurade écrasés." },
      { maxAge: 12, text: "Morceaux : 180 g de légumes de la papillote et 30 g de daurade en petits morceaux." }
    ]
  },
  {
    id: 33,
    category: "Plats",
    title: "Sardines et papillote de courgettes 3 couleurs",
    image: "",
    time: "20 min",
    ingredients: ["16 sardines sans arêtes", "3 grosses courgettes de couleurs différentes", "1/2 bouquet persil", "1 gousse ail", "huile d'olive", "farine", "1 citron", "sel et poivre"],
    adultSteps: [
      "Hachez l'ail et le persil. Coupez les courgettes en petits cubes.",
      "Mélangez la moitié de l'ail et du persil aux courgettes. Répartissez dans 4 papillotes avec de l'huile et enfournez 10 min à 200 °C.",
      "Farinez les sardines et cuisez-les à la poêle 5 min à feu vif. Ajoutez le reste d'ail et persil en fin de cuisson.",
      "Ouvrez les papillotes et servez avec les sardines et des quartiers de citron."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de courgette cuite et mixée finement (ajoutez de la pomme de terre pour épaissir la texture)." },
      { maxAge: 6, text: "Lisse : 200 g de courgettes en papillote et 10 g de sardine mixées finement avec 5 g de MG." },
      { maxAge: 8, text: "Mouliné : 200 g de courgettes et 20 g de sardine hachés grossièrement avec 5 g de MG." },
      { maxAge: 12, text: "Morceaux : 150 g de courgettes et 30 g de sardine en petits morceaux avec 5 g de MG." }
    ]
  },
  {
    id: 34,
    category: "Plats",
    title: "Tarte aux sardines et à la tomate",
    image: "",
    time: "25 min",
    ingredients: ["1 pâte feuilletée", "2 boîtes sardines à l'huile sans arêtes", "4 tomates", "12 pétales tomates confites", "copeaux de parmesan", "2 c. à soupe de câpres à queue"],
    adultSteps: [
      "Piquez la pâte dans un moule huilé, déposez les copeaux de parmesan dans le fond et précuisez 5 min à 180 °C.",
      "Coupez les tomates en rondelles. Égouttez les sardines.",
      "Garnissez le fond de tarte avec les tomates et les sardines, puis ajoutez les câpres et tomates confites.",
      "Enfournez 15 min (la croûte doit être bien dorée)."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de tomate cuite mixée finement (retirez les peaux restantes à la passoire)." },
      { maxAge: 6, text: "Lisse : 150 g de tomates et 50 g de tomates confites cuites mixées avec 10 g de sardine." },
      { maxAge: 8, text: "Mouliné : 150 g de tomates, 50 g de tomates confites et 2 petites câpres cuites et hachées. Ajoutez 20 g de sardine hachée à côté." },
      { maxAge: 12, text: "Morceaux : Servez une part de tarte à bébé, accompagnée d'une salade verte." }
    ]
  },
  {
    id: 35,
    category: "Plats",
    title: "Bricks au crabe et à la feta",
    image: "",
    time: "25 min",
    ingredients: ["8 feuilles de brick", "200 g chair de crabe égouttée", "120 g feta", "1 bouquet basilic thaï", "1 œuf", "huile d'olive", "1 jaune d'œuf", "1 salade de feuilles de chêne", "sel"],
    adultSteps: [
      "Mélangez la chair de crabe avec la feta émiettée, le basilic ciselé et l'œuf. Filmez et réservez au frais.",
      "Coupez les feuilles de brick en deux, badigeonnez-les d'huile. Rabattez le côté arrondi pour obtenir un rectangle.",
      "Déposez 1 c. à soupe de farce en bas, pliez en triangle, et soudez le dernier pli avec le jaune d'œuf.",
      "Faites dorer les bricks à la poêle avec un filet d'huile. Égouttez-les et laissez tiédir.",
      "Assaisonnez et servez avec la salade verte."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de salade cuite et mixée finement." },
      { maxAge: 6, text: "Lisse : 400 g de salade cuite (elle réduit beaucoup) et 10 g d'œuf dur mixés finement. Ajoutez 1 pomme de terre pour épaissir." },
      { maxAge: 8, text: "Mouliné : 400 g de salade cuite et hachée finement + 1/2 brick écrasée finement (ajouter 1 pomme de terre pour épaissir)." },
      { maxAge: 12, text: "Morceaux : 1 brick et quelques feuilles de salade. Coupez en petits morceaux." }
    ]
  },
  {
    id: 36,
    category: "Plats",
    title: "Spaghettis au saumon et aux épinards",
    image: "",
    time: "18 min",
    ingredients: ["250 g spaghettis", "400 g saumon frais sans peau", "400 g pousses d'épinards fraîches", "2 c. à soupe crème fraîche pasteurisée", "1/2 bouquet aneth", "huile d'olive", "2 gousses d'ail", "sel et poivre"],
    adultSteps: [
      "Faites cuire les spaghettis, égouttez-les, refroidissez-les pour stopper la cuisson et huilez-les.",
      "Faites sauter les épinards à la poêle avec 1 gousse d'ail et un filet d'huile jusqu'à évaporation de l'eau. Égouttez-les.",
      "Coupez le saumon en cubes et faites-le cuire 5 min à la poêle avec un peu d'huile.",
      "Ajoutez la 2e gousse d'ail écrasée et la crème. Remuez 3 min à feu moyen.",
      "Mélangez le saumon à la crème aux pâtes et ajoutez les épinards. Réchauffez 2 min à feu doux.",
      "Parsemez d'aneth finement haché avant d'assaisonner et de servir bien chaud."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g d'épinards cuits et mixés finement." },
      { maxAge: 6, text: "Lisse : 200 g d'épinards sautés mixés finement et 10 g de saumon haché." },
      { maxAge: 8, text: "Mouliné : 50 g de pâtes, 150 g d'épinards et 20 g de saumon mixés finement." },
      { maxAge: 12, text: "Morceaux : 180 g de spaghettis au saumon et aux épinards coupés en petits morceaux." }
    ]
  },
  {
    id: 37,
    category: "Plats",
    title: "Fenouils gratinés",
    image: "",
    time: "35 min",
    ingredients: ["4 gros fenouils", "50 g beurre", "50 g farine", "50 cl lait entier", "200 g Comté", "sel et poivre"],
    adultSteps: [
      "Retirez la base des fenouils et coupez-les en morceaux.",
      "Faites-les cuire 10 min dans une casserole d'eau bouillante.",
      "Dans une casserole, faites fondre le beurre, puis ajoutez la farine et remuez. Versez le lait petit à petit et fouettez. Laissez épaissir et cuire 5 min pour obtenir une béchamel.",
      "Placez les fenouils dans un plat à gratin et versez la béchamel dessus. Parsemez de comté et enfournez pour 10 min à 225 °C.",
      "Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de fenouil bien cuit (dans du lait entier pour garder la couleur) et mixez-le finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de fenouil bien cuit. Mixez-le finement et ajoutez 5 g de matière grasse." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g de gratin de fenouil. Moulinez-le et servez tiède (la béchamel fait office de matière grasse)." },
      { maxAge: 12, text: "Morceaux : Récupérez 180 g de gratin de fenouil et coupez les fenouils en petits morceaux." }
    ]
  },
  {
    id: 38,
    category: "Plats",
    title: "Gratin de courgettes et tofu",
    image: "",
    time: "20 min",
    ingredients: ["4 courgettes de couleur", "150 g tofu", "10 cl crème de coco", "80 g fromage râpé végétarien", "1 bouquet basilic", "huile", "sel et poivre"],
    adultSteps: [
      "Coupez les courgettes en rondelles. Hachez le basilic.",
      "Écrasez le tofu avec la crème de coco et le basilic haché.",
      "Déposez une partie du mélange au tofu dans le fond d'un plat à gratin huilé, disposez les courgettes dessus et recouvrez du reste de mélange.",
      "Parsemez de fromage et enfournez pour 15 min à 200 °C.",
      "Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de courgette crue. Faites-la cuire à la vapeur et mixez-la finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de courgettes cuites à la vapeur, mixez avec 5 g de MG. Ajoutez 10 g de tofu cuit et mixé." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g de gratin de courgettes. Moulinez-le finement en ajoutant 5 g de matière grasse." },
      { maxAge: 12, text: "Morceaux : Récupérez 160 g de gratin de courgettes et ajoutez 5 g de matière grasse." }
    ]
  },
  {
    id: 39,
    category: "Plats",
    title: "Haricots verts à l'italienne",
    image: "",
    time: "25 min",
    ingredients: ["1 kg haricots verts frais", "500 g tomates", "1 oignon", "3 gousses ail", "1 bouquet persil", "huile d'olive", "sel et poivre"],
    adultSteps: [
      "Effilez les haricots verts. Coupez les tomates en morceaux. Épluchez puis hachez l'oignon et l'ail.",
      "Dans une cocotte, faites revenir vivement l'oignon et les tomates avec un filet d'huile. Ajoutez ensuite les haricots verts et l'ail.",
      "Couvrez et laissez confire doucement 10 min.",
      "Au moment de servir, mélangez le persil haché aux haricots.",
      "Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de haricots verts cuits à l'eau 10 min et mixés finement." },
      { maxAge: 6, text: "Lisse : 200 g de haricots verts cuits à l'eau 10 min et mixés avec 5 g de matière grasse." },
      { maxAge: 8, text: "Mouliné : 200 g de haricots verts à l'italienne moulinés finement avec 5 g de matière grasse." },
      { maxAge: 12, text: "Morceaux : 180 g de haricots verts à l'italienne coupés en morceaux avec 5 g de matière grasse." }
    ]
  },
  {
    id: 40,
    category: "Plats",
    title: "Œufs à la tomate et aux courgettes",
    image: "",
    time: "20 min",
    ingredients: ["4 gros œufs", "4 tomates", "2 courgettes", "2 gousses ail", "3 branches thym", "huile d'olive", "sel et piment d'Espelette"],
    adultSteps: [
      "Coupez les courgettes en fines rondelles et les tomates en petits dés.",
      "Épluchez et émincez l'ail.",
      "Faites revenir les courgettes et les tomates à feu vif 5 min dans une poêle huilée. Ajoutez l'ail, le thym et laissez confire 5 min de plus.",
      "Cassez les œufs un à un dans la poêle et laissez-les cuire à feu doux 5 min.",
      "Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de courgette cuite à la vapeur et mixée finement." },
      { maxAge: 6, text: "Lisse : 200 g de courgettes cuites à la vapeur mixées avec 5 g de MG. Ajoutez 10 g d'œuf dur (cuit 9 min) mixé." },
      { maxAge: 8, text: "Mouliné : 200 g de courgettes et tomates hachées avec 5 g de MG. Ajoutez 20 g d'œuf dur haché." },
      { maxAge: 12, text: "Morceaux : 160 g de légumes et 30 g d'œuf (qui doit être bien cuit !)." }
    ]
  },
  {
    id: 41,
    category: "Plats",
    title: "One pot pasta, tomates et basilic",
    image: "",
    time: "25 min",
    ingredients: ["400 g spaghettis au blé complet", "400 g tomates cerises en grappe", "1/2 bouquet basilic", "2 oignons rouges", "3 gousses ail", "huile d'olive", "sel et poivre"],
    adultSteps: [
      "Émincez les oignons. Hachez l'ail et le basilic.",
      "Coupez les tomates cerises en deux.",
      "Dans une marmite, versez 1 l d'eau, 1 c. à soupe d'huile, puis ajoutez les pâtes, oignons, ail, tomates et basilic. Laissez cuire 20 min.",
      "Remuez très souvent. En fin de cuisson, les pâtes doivent être al dente et l'eau évaporée.",
      "Ajoutez un filet d'huile, assaisonnez et servez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de tomates cuites et mixées. Retirez les pépins et la peau à la passoire." },
      { maxAge: 6, text: "Lisse : 200 g de tomates cuites mixées avec 5 g de MG (retirez peau et pépins)." },
      { maxAge: 8, text: "Mouliné : 150 g de tomates avec un peu d'oignon et de basilic. Mélangez avec 50 g de pâtes moulinées et 5 g de MG." },
      { maxAge: 12, text: "Morceaux : 150 g de pâtes aux tomates et basilic coupées en petits morceaux." }
    ]
  },
  {
    id: 42,
    category: "Plats",
    title: "Poivrons farcis au taboulé",
    image: "",
    time: "20 min",
    ingredients: ["2 poivrons rouges", "1/2 poivron jaune", "200 g semoule", "1/2 ananas Victoria", "1 oignon rouge", "1 gousse d'ail", "huile d'olive", "coriandre", "1 citron", "sel et poivre"],
    adultSteps: [
      "Préchauffez le four sur position gril.",
      "Coupez et épépinez les poivrons rouges. Badigeonnez le dos d'huile et passez-les au four 10 min.",
      "Faites cuire la semoule comme indiqué sur le paquet.",
      "Coupez l'ananas et le poivron jaune en dés, hachez l'oignon, l'ail et la coriandre.",
      "Mélangez le tout à la semoule et garnissez les poivrons cuits.",
      "Versez un filet d'huile et jus de citron. Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g d'ananas cuit à la vapeur et mixé finement." },
      { maxAge: 6, text: "Lisse : 200 g de poivrons sans la peau mixés finement." },
      { maxAge: 8, text: "Mouliné : 70 g de poivrons sans peau et 70 g d'ananas mixés avec coriandre, servis avec 60 g de semoule." },
      { maxAge: 12, text: "Morceaux : 1/2 poivron farci au taboulé coupé en petits morceaux." }
    ]
  },
  {
    id: 43,
    category: "Plats",
    title: "Ravioles du Royans à la crème de courgettes",
    image: "",
    time: "20 min",
    ingredients: ["500 g ravioles du Royans", "2 courgettes", "50 cl crème liquide", "50 g parmesan râpé", "1 botte ciboulette", "sel et poivre"],
    adultSteps: [
      "Coupez les courgettes en cubes et cuisez-les à l'eau bouillante 3 min. Égouttez-les.",
      "Dans une poêle, faites réduire la crème de moitié. Ajoutez le parmesan, les courgettes et cuisez 1 min. Mixez et réservez au chaud.",
      "Plongez les ravioles 1 min dans l'eau bouillante. Égouttez et refroidissez-les sous l'eau froide très délicatement.",
      "Réchauffez les ravioles doucement dans la crème de courgettes.",
      "Assaisonnez et servez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de courgette mixée finement." },
      { maxAge: 6, text: "Lisse : 200 g de crème de courgettes (le parmesan est cuit, c'est ok). Pas besoin de MG ajoutée, la crème suffit." },
      { maxAge: 8, text: "Mouliné : 150 g de crème de courgettes avec 50 g de ravioles hachées grossièrement." },
      { maxAge: 12, text: "Morceaux : 150 g de ravioles à la crème de courgettes." }
    ]
  },
  {
    id: 44,
    category: "Plats",
    title: "Tofu à la provençale",
    image: "",
    time: "20 min",
    ingredients: ["300 g tofu", "1 poivron jaune", "100 g pois gourmands", "150 g petits pois frais", "100 g riz cuit", "huile d'olive", "1 citron", "olives noires dénoyautées", "basilic", "sel et piment d'Espelette"],
    adultSteps: [
      "Épluchez, épépinez et coupez le poivron en fines lamelles.",
      "Blanchissez les pois gourmands 1 à 2 min. Égouttez et refroidissez.",
      "Faites de même avec les petits pois.",
      "Faites sauter le tofu en dés à la poêle avec un filet d'huile, puis ajoutez le jus de citron.",
      "Ajoutez le poivron (cuire 3 min), les légumes verts, olives et basilic.",
      "Ajoutez le riz, remuez et assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de petits pois cuits fondants et mixés finement." },
      { maxAge: 6, text: "Lisse : 200 g de petits pois et pois gourmands bien cuits mixés finement, avec 10 g de tofu haché." },
      { maxAge: 8, text: "Mouliné : 150 g de légumes moulinés et tofu haché grossièrement avec 50 g de riz cuit." },
      { maxAge: 12, text: "Morceaux : 180 g de tofu à la provençale." }
    ]
  },
  {
    id: 45,
    category: "Plats",
    title: "Gratin de blettes à la poêle",
    image: "",
    time: "30 min",
    ingredients: ["1 kg blettes", "50 g beurre", "3 œufs", "100 g gruyère râpé", "1 citron", "2 gousses d'ail", "sel et poivre"],
    adultSteps: [
      "Retirez le vert des blettes, puis les fils des côtes. Coupez les côtes et cuisez-les 10 min à l'eau bouillante avec du jus de citron. Égouttez.",
      "Faites revenir le vert dans une sauteuse avec le beurre et l'ail haché, ajoutez les côtes.",
      "Fouettez les œufs avec le fromage, versez dans la sauteuse et laissez cuire en remuant jusqu'à consistance désirée.",
      "Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de blettes mixées finement (utiliser vert et blanc)." },
      { maxAge: 6, text: "Lisse : 200 g de blettes mixées avec 5 g de MG + 10 g d'œuf dur (cuit 9 min) mixé." },
      { maxAge: 8, text: "Mouliné : 200 g de blettes hachées avec 5 g de MG + 20 g d'œuf dur haché." },
      { maxAge: 12, text: "Morceaux : 180 g de gratin de blettes en morceaux (attention à bien cuire l'œuf et réguler les protéines de la semaine)." }
    ]
  },
  {
    id: 46,
    category: "Plats",
    title: "Courge farcie et gratinée",
    image: "",
    time: "25 min",
    ingredients: ["2 petites courges butternut", "200 g boulgour précuit", "150 g fourme d'Ambert", "1 poignée noix concassées", "4 c. à soupe crème fraîche", "1 gousse d'ail", "1 botte ciboulette"],
    adultSteps: [
      "Coupez les butternuts en deux, retirez les graines et enfournez 15 min à 200 °C.",
      "Réchauffez le boulgour à la vapeur 5 min. Mélangez-le avec la fourme en cubes, les noix, la crème, l'ail haché et la ciboulette.",
      "Farcissez les butternuts et enfournez de nouveau pour 5 min.",
      "Laissez tiédir avant de servir."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de courge tendre (sans peau) mixée avec un peu de lait infantile ou eau." },
      { maxAge: 6, text: "Lisse : 200 g de courge sans peau mixée avec ciboulette et 5 g de MG." },
      { maxAge: 8, text: "Mouliné : 150 g de courge sans peau écrasée avec ciboulette et crème (qui remplace la MG) + 50 g de boulgour." },
      { maxAge: 12, text: "Morceaux : 180 g de courge farcie sans peau (mixez très finement les noix pour éviter les fausses routes)." }
    ]
  },
  {
    id: 47,
    category: "Plats Végétariens",
    title: "Gratin de chou-fleur au comté et au thym",
    image: "",
    time: "30 min",
    ingredients: ["1 gros chou-fleur", "40 g comté", "2 jaunes œufs", "200 g béchamel", "60 g chapelure", "beurre", "thym"],
    adultSteps: [
      "Détaillez le chou-fleur en bouquets et rincez-les.",
      "Portez à ébullition une casserole d'eau et faites cuire le chou-fleur 10 min.",
      "Égouttez-le et faites-le sauter 5 min avec une noisette de beurre dans une poêle.",
      "Mélangez les jaunes d'œufs battus et le fromage râpé à la béchamel pour obtenir de la sauce Mornay.",
      "Étalez de la sauce dans le fond d'un plat à gratin. Déposez le chou-fleur et couvrez de sauce. Parsemez de thym frais.",
      "Saupoudrez de chapelure et enfournez pour 5 min à 210 °C. Laissez refroidir avant de servir."
    ],
    babyAdaptations: [
      { maxAge: 8, text: "Mouliné : Récupérez 200 g de gratin de chou-fleur et hachez-le finement. (Pas besoin d'ajouter de matière grasse, la sauce Mornay est assez riche)." },
      { maxAge: 12, text: "Morceaux : Récupérez 160 g de gratin de chou-fleur et écrasez-le finement." },
      { maxAge: 999, text: "Un plat familial réconfortant !" }
    ]
  },
  {
    id: 48,
    category: "Plats Végétariens",
    title: "Gratin de panais, chèvre et noisettes",
    image: "",
    time: "20 min",
    ingredients: ["1 kg panais", "1 bûche chèvre frais", "200 g noisettes concassées", "50 cl lait", "50 cl crème liquide", "3 œufs", "1/4 de botte ciboulette", "1 gousse d'ail", "beurre"],
    adultSteps: [
      "Épluchez et taillez les panais en fines lamelles.",
      "Beurrez un plat à gratin et déposez les panais.",
      "Dans un saladier, versez le lait, la crème, la ciboulette ciselée, l'ail épluché et haché. Cassez-y les œufs et mélangez vigoureusement.",
      "Émiettez la bûche de chèvre et déposez-la sur les panais. Versez la préparation à la crème dessus.",
      "Parsemez de noisettes et enfournez pour 15 min à 200 °C. Laissez tiédir avant de servir."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de panais après l'étape 1. Faites-le cuire dans du lait entier et mixez-le finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de panais après l'étape 1. Faites-les cuire dans du lait entier et mixez-les finement." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g de panais après l'étape 1. Faites-les cuire dans du lait entier et écrasez-les grossièrement." },
      { maxAge: 12, text: "Morceaux : Servez 180 g de gratin de panais. Les noisettes doivent être mixées finement (afin d'éviter les fausses routes)." }
    ]
  },
  {
    id: 49,
    category: "Plats Végétariens",
    title: "Velouté de courge et champignons",
    image: "",
    time: "30 min",
    ingredients: ["600 g courge", "200 g champignons de Paris", "2 échalotes", "1 gousse ail", "1 l lait entier", "huile", "1/2 bouquet persil", "sel et poivre"],
    adultSteps: [
      "Pelez les échalotes, épluchez et dégermez l'ail. Coupez-les grossièrement. Hachez finement le persil.",
      "Épluchez la courge et taillez-la en petits morceaux. Épluchez les champignons et coupez-les en quatre.",
      "Dans une marmite, versez un filet d'huile et faites revenir les échalotes, l'ail et les champignons 3 min.",
      "Ajoutez la courge et faites-la revenir avec les champignons. Versez le lait et de l'eau à hauteur. Laissez mijoter 15 min.",
      "Ajoutez du persil et mixez finement le velouté. Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de champignons après l'étape 3. Faites-les cuire et mixez-les finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de velouté de courge et champignons après l'étape 6." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g de velouté de courge et champignons après l'étape 6." },
      { maxAge: 12, text: "Morceaux : Récupérez 180 g de velouté de courge et champignons après l'étape 6." }
    ]
  },
  {
    id: 50,
    category: "Plats Végétariens",
    title: "Velouté de panais à l'aneth et au raifort",
    image: "",
    time: "20 min",
    ingredients: ["1 kg panais", "1 petite patate douce", "1 bouquet aneth", "30 g raifort râpé", "1 l lait", "fleur de sel et piment d'Espelette"],
    adultSteps: [
      "Épluchez les panais et la patate douce. Rincez-les et coupez-les en petits morceaux.",
      "Dans une casserole, faites chauffer le lait avec 50 cl d'eau. Ajoutez les morceaux de légumes et laissez cuire 15 min.",
      "Hachez finement l'aneth.",
      "Au terme de la cuisson, mixez finement les légumes pour obtenir un velouté lisse et onctueux.",
      "Dans les assiettes, versez le velouté et ajoutez une petite cuillerée de raifort râpé, puis parsemez d'aneth haché. Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de panais après l'étape 2. Mixez-le très finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de velouté de panais après l'étape 4. Ajoutez un peu d'aneth haché." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g de velouté de panais après l'étape 4. Ajoutez un peu d'aneth haché." },
      { maxAge: 12, text: "Morceaux : Récupérez 180 g de velouté de panais après l'étape 5." }
    ]
  },
  {
    id: 51,
    category: "Œufs & Fromages",
    title: "Œufs cocotte aux champignons",
    image: "",
    time: "20 min",
    ingredients: ["4 gros œufs", "5 gros champignons de Paris", "1 grosse échalote", "20 cl crème liquide", "1 botte ciboulette", "1 salade verte", "beurre", "huile de noisette", "sel et poivre"],
    adultSteps: [
      "Épluchez et émincez l'échalote. Épluchez et taillez les champignons en fines lamelles. Réservez 12 belles lamelles pour la salade.",
      "Dans une poêle, faites fondre une noix de beurre et faites revenir l'échalote et les champignons 3 à 4 min.",
      "Ajoutez la crème et laissez réduire 5 min.",
      "Répartissez les champignons à la crème dans 4 ramequins individuels légèrement beurrés.",
      "Cassez les œufs en séparant le blanc du jaune. Déposez les blancs dans les ramequins. Enfournez pour 5 à 6 min à 210 °C. Ajoutez les jaunes et laissez cuire 1 à 2 min.",
      "Accompagnez de la salade verte aux lamelles de champignons frais."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de champignons après l'étape 1. Faites-les cuire et mixez-les finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de champignons (étape 1). Mixez-les finement et ajoutez 5 g de MG. Faites cuire 1 œuf 9 min et récupérez 10 g." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g de champignons (étape 2). Moulinez finement + 5 g de MG. Ajoutez 20 g d'œuf dur (cuit 9 min)." },
      { maxAge: 12, text: "Morceaux : Servez 1/2 œuf cocotte. Faites cuire le jaune d'œuf un peu plus longtemps pour qu'il ne coule plus." }
    ]
  },
  {
    id: 52,
    category: "Œufs & Fromages",
    title: "Oeufs brouillés à l'échalote et salade d'épinards",
    image: "",
    time: "15 min",
    ingredients: ["10 œufs", "4 échalotes", "300 g pousses d'épinards", "1 botte ciboulette", "10 cl crème liquide", "beurre", "huile", "sel et poivre"],
    adultSteps: [
      "Épluchez et émincez finement les échalotes. Ciselez la ciboulette.",
      "Dans un saladier, battez les œufs.",
      "Faites revenir les échalotes avec du beurre 3 à 4 min à la poêle. Ajoutez les œufs battus et faites cuire en remuant vigoureusement 3 min.",
      "Versez la crème en mélangeant dès que vous souhaitez arrêter la cuisson.",
      "Assaisonnez et parsemez de ciboulette.",
      "Accompagnez d'une salade de pousses d'épinards assaisonnée d'huile."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g d'épinards. Faites-les cuire à l'eau et mixez-les finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g d'épinards cuits à l'eau, mixez-les avec 5 g de MG. Mixez 10 g d'œufs brouillés bien cuits." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g d'épinards cuits, moulinez-les avec 5 g de MG. Hachez 20 g d'œufs brouillés bien cuits." },
      { maxAge: 12, text: "Morceaux : Récupérez 150 g d'épinards hachés. Servez avec 30 g d'œufs brouillés bien cuits en morceaux." }
    ]
  },
  {
    id: 53,
    category: "Œufs & Fromages",
    title: "Omelette à la betterave, au cresson et à la feta",
    image: "",
    time: "15 min",
    ingredients: ["10 œufs", "4 petites betteraves cuites", "1 botte cresson", "15 cl crème liquide", "1 gousse ail", "150 g de feta", "beurre", "huile d'olive", "sel et poivre"],
    adultSteps: [
      "Égouttez et coupez les betteraves et la feta en petits dés.",
      "Équeutez le cresson, lavez-le et hachez-le grossièrement. Faites-le revenir 5 min avec du beurre. Égouttez et réservez.",
      "Battez les œufs avec la crème et l'ail épluché et haché.",
      "Faites cuire les œufs battus à la crème 3 min dans une poêle huilée.",
      "Ajoutez le cresson, la feta et déposez les dés de betterave dessus.",
      "Faites cuire l'omelette selon vos goûts. Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de betterave (étape 1). Mixez-la finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de betteraves (étape 1). Mixez-les avec 5 g de MG et 10 g d'omelette." },
      { maxAge: 8, text: "Mouliné : Récupérez 100 g de betteraves et 100 g de cresson (étape 2). Hachez le tout avec 5 g de MG et 20 g d'omelette." },
      { maxAge: 12, text: "Morceaux : Récupérez 150 g d'omelette à la betterave et au cresson après l'étape 6." }
    ]
  },
  {
    id: 54,
    category: "Plats Végétariens",
    title: "Blésotto aux champignons",
    image: "",
    time: "20 min",
    ingredients: ["2 verres blé précuit (type Ébly)", "400 g champignons de Paris", "2 échalotes", "1 bouquet persil", "1 l bouillon", "50 g parmesan", "huile de tournesol", "30 cl crème liquide", "sel et poivre"],
    adultSteps: [
      "Épluchez et émincez les échalotes. Hachez le persil.",
      "Faites revenir les champignons épluchés et taillés en lamelles dans une poêle huilée.",
      "Dans une sauteuse, faites revenir le blé avec l'huile et les échalotes. Versez le bouillon à hauteur et cuisez par absorption.",
      "Ajoutez le parmesan râpé, les champignons et la crème. Laissez cuire encore 5 min en remuant.",
      "Parsemez de persil haché et assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de champignons épluchés. Faites-les cuire et mixez-les finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de champignons après l'étape 2. Mixez-les finement et ajoutez 5 g de matière grasse." },
      { maxAge: 8, text: "Mouliné : Récupérez 150 g de champignons (étape 2). Mixez-les avec 50 g de blésotto aux champignons. Ajoutez 5 g de MG." },
      { maxAge: 12, text: "Morceaux : Récupérez 150 g de blésotto aux champignons." }
    ]
  },
  {
    id: 55,
    category: "Plats Végétariens",
    title: "Chaussons aux épinards et au gorgonzola",
    image: "",
    time: "20 min",
    ingredients: ["2 pâtes feuilletées", "250 g épinards cuits et égouttés", "150 g gorgonzola", "2 gousses ail", "1 bouquet persil", "huile", "1 jaune d'œuf", "sel et poivre"],
    adultSteps: [
      "Hachez l'ail et le persil.",
      "Faites revenir les épinards égouttés dans un filet d'huile avec l'ail et le persil pendant 5 min. Égouttez de nouveau.",
      "Découpez 2 disques dans chaque pâte feuilletée. Garnissez avec les épinards et le gorgonzola. Collez les bords pour former des chaussons.",
      "Dorez-les avec le jaune d'œuf et enfournez pour 5 à 10 min à 200 °C.",
      "Assaisonnez et servez chaud."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g d'épinards cuits. Réchauffez-les et mixez-les finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g d'épinards cuits. Mixez-les finement et rajoutez 5 g de matière grasse." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g d'épinards cuits (étape 2). Hachez-les grossièrement et rajoutez 5 g de matière grasse." },
      { maxAge: 12, text: "Morceaux : Servez à bébé 1 petit chausson aux épinards." }
    ]
  },
  {
    id: 56,
    category: "Plats Végétariens",
    title: "Crêpes aux épinards",
    image: "",
    time: "20 min",
    ingredients: ["400 g pousses d'épinards", "400 g lait entier", "4 œufs", "60 g comté râpé pasteurisé", "250 g farine", "80 g beurre", "huile", "sel et poivre"],
    adultSteps: [
      "Plongez les épinards dans l'eau bouillante 1 ou 2 min pour les attendrir. Égouttez-les.",
      "Dans un mixeur, déposez les épinards, le lait, les œufs, le comté et mixez fortement.",
      "Dans un saladier, déposez la farine et versez le lait aux épinards petit à petit en remuant.",
      "Ajoutez le beurre fondu et mélangez. La pâte doit être lisse.",
      "Graissez une poêle et faites cuire comme des crêpes traditionnelles.",
      "Assaisonnez selon vos goûts."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g d'épinards après l'étape 1. Mixez-les finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g d'épinards après l'étape 1. Mixez-les finement." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g d'épinards après l'étape 1. Mixez-les finement avec un peu de comté pasteurisé." },
      { maxAge: 12, text: "Morceaux : Récupérez 100 g d'épinards après l'étape 1 et un peu de comté pasteurisé. Servez avec 1 belle crêpe aux épinards coupée en morceaux." }
    ]
  },
  {
    id: 57,
    category: "Plats Végétariens",
    title: "Bonbons réunionnais",
    image: "",
    time: "25 min",
    ingredients: ["250 g haricots secs trempés", "1 c. à café curcuma, cumin et sel", "1 botte cébettes", "1/2 bouquet persil", "1/2 bouquet coriandre", "50 g de gingembre frais", "2 petits piments rouges", "1 l d'huile de friture"],
    adultSteps: [
      "Mixez les haricots préalablement trempés jusqu'à obtenir une purée assez fine.",
      "Ajoutez le curcuma, le cumin, le vert des cébettes, le persil et la coriandre hachés, puis le gingembre râpé. Mélangez vivement.",
      "Ajoutez le sel et les piments hachés. Mélangez de nouveau. La pâte doit être collante, mais assez compacte.",
      "Faites chauffer la friteuse à 180 °C.",
      "Dans la paume de votre main légèrement graissée, formez une petite boule de pâte et aplatissez-la légèrement. Faites-en plusieurs et plongez-les dans la friteuse jusqu'à ce qu'elles soient dorées.",
      "Débarrassez-les sur un papier absorbant. Laissez-les bien refroidir avant de les servir."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Recette non adaptée à cet âge (friture et légumes secs)." },
      { maxAge: 8, text: "Recette non adaptée à cet âge." },
      { maxAge: 12, text: "Recette non adaptée avant 15 mois." },
      { maxAge: 999, text: "Morceaux (Dès 15 mois) : Façonnez 3 boulettes avec la pâte après l'étape 2. Faites-les cuire à la poêle avant l'ajout des piments." }
    ]
  },
  {
    id: 58,
    category: "Plats Végétariens",
    title: "Criques de patates douces à la coriandre",
    image: "",
    time: "20 min",
    ingredients: ["500 g patates douces", "1 bouquet coriandre", "3 œufs", "1 c. à café ail en poudre", "30 g farine de châtaigne", "huile d'olive", "sel et poivre"],
    adultSteps: [
      "Dans un saladier, fouettez les œufs avec l'ail et la coriandre finement ciselée.",
      "Épluchez, rincez et râpez les patates douces.",
      "Déposez les patates douces dans le mélange aux œufs et ajoutez la farine de châtaigne. Façonnez des galettes.",
      "Dans une poêle bien chaude, versez un filet d'huile et déposez les galettes. Faites dorer sur les deux faces.",
      "Égouttez-les sur un papier absorbant au fur et à mesure. Assaisonnez et servez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de patate douce après l'étape 2. Faites-la cuire dans l'eau bouillante et mixez-la finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de patates douces après l'étape 2. Faites-les cuire dans l'eau bouillante avec une pincée de coriandre. Mixez finement." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g de crique de patates douces après l'étape 5. Écrasez-la finement avec 5 g de matière grasse." },
      { maxAge: 12, text: "Morceaux : Récupérez 1 ou 2 criques à bébé après l'étape 5. Accompagnez-les d'une salade verte avec 5 g de MG." }
    ]
  },
  {
    id: 59,
    category: "Plats Végétariens",
    title: "Flan de carottes et brocoli",
    image: "",
    time: "40 min",
    ingredients: ["500 g carottes", "1 brocoli", "20 cl crème liquide", "60 g mimolette râpée", "4 œufs", "1 gousse d'ail", "beurre", "sel et poivre"],
    adultSteps: [
      "Épluchez les carottes et coupez-les en rondelles. Faites-les cuire dans l'eau bouillante.",
      "Au bout de 10 min, ajoutez les bouquets du brocoli et l'ail épluché. Cuisez 5 min. Égouttez et mixez les légumes séparément avec du beurre.",
      "Ajoutez la mimolette à la purée de carotte et mélangez.",
      "Séparez le blanc des jaunes d'œufs. Ajoutez 2 jaunes et 10 cl de crème dans chaque purée. Montez les blancs en neige.",
      "Incorporez une moitié de blancs délicatement dans chaque purée. Assaisonnez (après avoir réservé pour bébé).",
      "Beurrez 4 moules à soufflé et remplissez-les avec la purée de brocoli, puis la purée de carottes. Enfournez 10 à 15 min à 200 °C."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de carotte après l'étape 1. Mixez-la finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de carottes (étape 1). Mixez finement + 5 g de MG. Faites cuire 1 œuf 9 min, récupérez 10 g et mixez." },
      { maxAge: 8, text: "Mouliné : Récupérez 100 g de purée de brocoli et 100 g de purée de carottes. Ajoutez 20 g d'œuf dur haché." },
      { maxAge: 12, text: "Morceaux : Servez 1 petit soufflé à bébé accompagné d'une salade verte." }
    ]
  },
  {
    id: 60,
    category: "Plats Végétariens",
    title: "Galettes de blé aux poireaux",
    image: "",
    time: "25 min",
    ingredients: ["200 g blé complet", "4 blancs de poireaux", "2 gousses ail", "1/2 bouquet persil", "2 œufs", "1 c. à soupe de farine", "huile", "sel et poivre"],
    adultSteps: [
      "Faites cuire le blé comme indiqué sur le paquet. Égouttez-le.",
      "Lavez et émincez finement les poireaux. Hachez l'ail et le persil.",
      "Faites chauffer un peu d'huile dans une poêle et faites revenir les poireaux 10 min. Laissez-les refroidir.",
      "Mélangez le blé, les poireaux, l'ail, le persil, la farine et les œufs.",
      "Faites chauffer un filet d'huile. Formez des petites galettes à l'emporte-pièce et dorez-les 2 min par face.",
      "Égouttez-les sur du papier absorbant. Assaisonnez et servez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de blancs de poireaux après l'étape 2. Faites-les cuire et mixez-les finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de blancs de poireaux après l'étape 4. Mixez-les finement avec 5 g de matière grasse." },
      { maxAge: 8, text: "Mouliné : 150 g de blancs de poireaux mixés avec 5 g de MG. Concassez grossièrement 50 g de blé (étape 1) et mélangez." },
      { maxAge: 12, text: "Morceaux : Récupérez 1 ou 2 petites galettes. Servez avec une sauce au fromage blanc et une salade verte." }
    ]
  },
  {
    id: 61,
    category: "Plats Végétariens",
    title: "Gratin de poireaux à la ricotta et au miel",
    image: "",
    time: "25 min",
    ingredients: ["1,5 kg blancs de poireaux", "250 g ricotta", "1 c. à soupe miel de romarin", "10 cl crème fraîche", "2 œufs", "1 gousse d'ail", "romarin", "60 g de gruyère râpé", "huile", "sel et poivre"],
    adultSteps: [
      "Lavez et émincez finement les poireaux.",
      "Faites-les suer 3 min dans une poêle avec un filet d'huile à feu moyen.",
      "Ajoutez le miel et l'ail haché. Laissez cuire 2 min à feu vif.",
      "Déposez les poireaux au fond d'un plat à gratin. Ajoutez quelques branches de romarin.",
      "Mélangez la ricotta, la crème, les œufs et le gruyère râpé. Versez sur les poireaux et enfournez 15 min à 200 °C.",
      "Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de blancs de poireaux (étape 1). Faites-les cuire et mixez finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de blancs de poireaux après l'étape 2. Mixez-les finement et ajoutez 5 g de MG." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g de blancs de poireaux (étape 2). Moulinez avec 10 g de ricotta et un peu de gruyère (qui remplacent la MG)." },
      { maxAge: 12, text: "Morceaux : Récupérez 200 g de gratin de poireaux après l'étape 5." }
    ]
  },
  {
    id: 62,
    category: "Plats Végétariens",
    title: "Patates douces farcies au quinoa",
    image: "",
    time: "25 min",
    ingredients: ["2 patates douces", "150 g quinoa", "150 g fromage de brebis", "60 g raisins secs", "2 oignons rouges", "1 gousse ail", "1 bouquet de coriandre", "huile d'olive", "sel et poivre"],
    adultSteps: [
      "Lavez, coupez les patates douces en deux, badigeonnez d'huile et enfournez 20 min à 200 °C (côté coupé dessus).",
      "Faites cuire le quinoa. Égouttez-le.",
      "Émincez les oignons et l'ail. Hachez la coriandre.",
      "Coupez le fromage en cubes. Mélangez-le avec raisins, oignons, ail, un filet d'huile, puis le quinoa.",
      "Creusez les patates douces cuites et déposez la farce au quinoa. Parsemez de coriandre.",
      "Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de patate douce après l'étape 1. Mixez-la finement avec du lait infantile." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de patates douces (étape 1). Mixez-les finement avec 5 g de MG." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g de patates douces (étape 5 sans la farce). Moulinez-les avec 5 g de MG." },
      { maxAge: 12, text: "Morceaux : Récupérez 160 g de patates douces avec la farce. Mélangez avec 5 g de MG." }
    ]
  },
  {
    id: 63,
    category: "Plats Végétariens",
    title: "Penne au tofu et pesto revisité",
    image: "",
    time: "20 min",
    ingredients: ["300 g penne au blé complet", "400 g tofu bien ferme", "200 g tomates cerises en grappe", "1/2 bouquet basilic", "1/2 bouquet aneth", "60 g pignons", "1 gousse d'ail", "1 citron", "huile d'olive", "sel et poivre"],
    adultSteps: [
      "Mixez l'ail, les herbes effeuillées, les pignons, du jus de citron et un bon filet d'huile pour obtenir le pesto. Réservez.",
      "Faites cuire les pâtes. Égouttez et refroidissez-les sous l'eau froide.",
      "Égouttez le tofu et coupez-le en petits cubes. Faites-le sauter à la poêle.",
      "Déposez les pâtes dans la poêle avec le tofu et versez le pesto. Mélangez à feu doux.",
      "Coupez les tomates cerises en deux et déposez-les au moment de servir. Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de tomates cerises. Faites-les cuire et mixez-les sans la peau ni pépins." },
      { maxAge: 6, text: "Lisse : 180 g de tomates cerises cuites et mixées (sans peau/pépins) avec 2 feuilles de basilic et 5 g de MG. Ajoutez 10 g de tofu haché." },
      { maxAge: 8, text: "Mouliné : 150 g de tomates mixées (avec basilic, pignons, 5 g MG). Ajoutez 50 g de pâtes en morceaux et 20 g de tofu haché." },
      { maxAge: 12, text: "Morceaux : Récupérez 150 g de penne au tofu avec pesto et tomates." }
    ]
  },
  {
    id: 64,
    category: "Plats Végétariens",
    title: "Pizza express végétarienne",
    image: "",
    time: "20 min",
    ingredients: ["1 pâte à pizza", "1 poivron rouge", "200 g coulis de tomate", "1 épi de maïs coupé", "200 g haricots rouges cuits", "1 avocat", "1 sachet de fromage râpé", "huile d'olive"],
    adultSteps: [
      "Épluchez, épépinez et taillez le poivron en lamelles. Faites-le revenir 3 min à la poêle.",
      "Déroulez la pâte, étalez la sauce tomate et garnissez avec le poivron, le maïs et les haricots rouges.",
      "Parsemez de fromage râpé et enfournez pour 10 min à 220 °C.",
      "Sortez la pizza et déposez l'avocat coupé en petits morceaux dessus. Servez tiède."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de maïs. Faites-le cuire et mixez-le finement (passé à la passoire)." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de maïs. Faites-le cuire et mixez finement avec 5 g de MG." },
      { maxAge: 8, text: "Mouliné : 100 g de poivron, 100 g de maïs et 15 g de fromage râpé. Moulinez finement le tout avec 5 g de MG." },
      { maxAge: 12, text: "Morceaux : Récupérez 1 part de pizza et coupez-la en petits morceaux. Accompagnez-la de quelques grains de maïs." }
    ]
  },
  {
    id: 65,
    category: "Plats Végétariens",
    title: "Risotto à la carotte",
    image: "",
    time: "30 min",
    ingredients: ["300 g riz à risotto", "5 carottes", "1/2 oignon", "2 l bouillon de légumes (sans sel)", "60 g mascarpone", "30 g de beurre", "150 g de parmesan râpé", "huile d'olive", "sel et poivre"],
    adultSteps: [
      "Épluchez et râpez les carottes. Émincez l'oignon.",
      "Faites revenir les carottes râpées dans l'huile et le beurre jusqu'à ce qu'elles soient fondantes.",
      "Mixez la moitié des carottes en purée et réservez le reste.",
      "Dans la même casserole, faites suer l'oignon et ajoutez le riz. Versez le bouillon à hauteur et cuisez par absorption.",
      "Ajoutez la purée de carottes, les carottes réservées, le mascarpone et le parmesan. Mélangez.",
      "Assaisonnez et servez aussitôt."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de carottes après l'étape 1. Faites-les cuire et mixez-les finement." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de purée de carottes (étape 4). Mélangez avec 5 g de matière grasse." },
      { maxAge: 8, text: "Mouliné : 150 g de purée de carottes avec 5 g de MG et 50 g de riz bien cuit." },
      { maxAge: 12, text: "Morceaux : Récupérez 150 g de risotto à la carotte avant l'assaisonnement." }
    ]
  },
  {
    id: 66,
    category: "Plats Végétariens",
    title: "Soufflé de carottes et gouda au cumin",
    image: "",
    time: "30 min",
    ingredients: ["300 g purée de carottes", "100 g gouda au cumin râpé", "1 oignon", "100 g béchamel", "4 œufs"],
    adultSteps: [
      "Faites tiédir la purée de carottes et versez-la dans un saladier.",
      "Ajoutez l'oignon haché, la béchamel et le gouda au cumin râpé.",
      "Séparez le blanc des jaunes d'œufs. Ajoutez les jaunes à la purée. Montez les blancs en neige et incorporez-les délicatement.",
      "Beurrez un moule à soufflé et tapissez de papier sulfurisé.",
      "Enfournez pour 25 min à 180 °C. Servez avec une salade verte."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de purée de carottes." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de purée de carottes et mélangez-la avec 10 g de gouda au cumin." },
      { maxAge: 8, text: "Mouliné : Servez 200 g de soufflé de carottes très tendre." },
      { maxAge: 12, text: "Morceaux : Servez 200 g de soufflé de carottes accompagné d'une petite salade verte." }
    ]
  },
  {
    id: 67,
    category: "Plats Végétariens",
    title: "Soupe de maïs façon thaïe",
    image: "",
    time: "20 min",
    ingredients: ["800 g maïs en conserve", "1 grosse pomme de terre", "50 cl crème de coco", "1 oignon", "1 gousse ail", "15 g de gingembre frais", "1 bouquet de coriandre", "2 cébettes", "huile d'olive", "50 cl de bouillon de légumes (sans sel)", "1 pincée de curry", "sel et piment d'Espelette"],
    adultSteps: [
      "Égouttez le maïs.",
      "Épluchez et hachez l'oignon, l'ail, le gingembre, la coriandre et coupez la pomme de terre en petits morceaux.",
      "Ciselez le vert des cébettes.",
      "Dans une casserole, faites revenir l'oignon, l'ail, le gingembre et la pomme de terre avec l'huile. Versez la crème de coco, cuisez 1 min. Ajoutez le bouillon, la moitié du maïs et cuisez 10 min.",
      "Ajoutez la moitié de la coriandre hachée et mixez fortement pour obtenir un velouté homogène.",
      "Ajoutez le reste du maïs et laissez cuire 3 min à feu moyen.",
      "Au moment de servir, parsemez de vert de cébettes et du reste de la coriandre.",
      "Assaisonnez de curry, piment et sel."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de maïs (étape 1) et 10 g de pomme de terre (étape 2). Faites cuire dans un peu d'eau et mixez finement. Passez à la passoire." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de soupe de maïs après l'étape 5. Passez à la passoire s'il reste des petits morceaux." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g de soupe de maïs après l'étape 6." },
      { maxAge: 12, text: "Morceaux : Récupérez 160 g de soupe de maïs après l'étape 7." }
    ]
  },
  {
    id: 68,
    category: "Plats Végétariens",
    title: "Velouté de persil",
    image: "",
    time: "20 min",
    ingredients: ["1 gros bouquet persil frisé", "500 g pommes de terre", "1 oignon", "3 gousses ail", "20 cl crème liquide", "sel et poivre"],
    adultSteps: [
      "Épluchez les pommes de terre, rincez-les et coupez-les en morceaux. Faites-les cuire dans une casserole d'eau bouillante.",
      "Équeutez le persil, épluchez l'oignon et l'ail, puis plongez-les dans la casserole avec les pommes de terre et laissez cuire en tout 15 min.",
      "Mixez le velouté et ajoutez la crème. Le velouté doit être lisse et onctueux.",
      "Assaisonnez."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de pomme de terre et de persil après l'étape 2. Mixez pour que le velouté soit bien lisse." },
      { maxAge: 6, text: "Lisse : Récupérez 200 g de velouté de persil après l'étape 3." },
      { maxAge: 8, text: "Mouliné : Récupérez 200 g de velouté de persil après l'étape 3." },
      { maxAge: 12, text: "Morceaux : Récupérez 160 g de velouté de persil après l'étape 3." }
    ]
  },
  {
    id: 69,
    category: "Desserts & Goûters",
    title: "Trifle aux pêches à la verveine",
    image: "",
    time: "15 min",
    ingredients: ["4 pêches jaunes", "4 feuilles verveine fraîche", "40 g sucre de canne", "1 paquet petits-beurres", "400 g fromage blanc"],
    adultSteps: [
      "Épluchez et taillez les pêches en petits cubes.",
      "Hachez la verveine.",
      "Dans une petite casserole, mettez le sucre, la verveine et 50 cl d'eau. Faites bouillir 3 min et versez le sirop sur les pêches.",
      "Écrasez les biscuits dans 4 petits ramequins sur 5 mm d'épaisseur, versez 1 c. à soupe du sirop dessus.",
      "Déposez le fromage blanc et les pêches confites au sirop. Réservez au frais."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de pêche (étape 1). Faites-la cuire à la vapeur ou à l'eau et mixez-la finement." },
      { maxAge: 6, text: "Lisse : Récupérez 50 g de pêche (étape 3) et 50 g de fromage blanc. Faites cuire la pêche, mixez finement et mélangez au fromage blanc." },
      { maxAge: 8, text: "Mouliné : 50 g de pêche cuite écrasée, 30 g de fromage blanc et 20 g de biscuit émietté. Mélangez le tout." },
      { maxAge: 12, text: "Morceaux : 50 g de pêche en cubes, 30 g de fromage blanc, 20 g de biscuit. Mélangez." }
    ]
  },
  {
    id: 70,
    category: "Desserts & Goûters",
    title: "Biscuits aux amandes et à la vanille",
    image: "",
    time: "25 min",
    ingredients: ["200 g amandes en poudre", "15 amandes entières", "1 gousse vanille", "100 g sucre glace", "1 œuf", "1 c. à café de levure chimique"],
    adultSteps: [
      "Mélangez les amandes en poudre, le sucre glace et la levure.",
      "Ajoutez l’œuf, 1/2 c. à café d’eau et la pulpe de la gousse de vanille grattée. Mélangez avec les doigts.",
      "Formez des petites boules de pâte et saupoudrez d’un peu de sucre glace.",
      "Aplatissez légèrement chaque boule et enfoncez 1 amande entière dessus.",
      "Enfournez pour 15 min à 180 °C. Laissez refroidir."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Dessert non adapté pour cet âge." },
      { maxAge: 8, text: "Mouliné : Retirez l'amande sur le biscuit et donnez quelques morceaux à bébé pour le goûter." },
      { maxAge: 12, text: "Morceaux : Retirez l'amande sur les biscuits et donnez-en 1 ou 2 à bébé. (Accompagnez d'une petite infusion de menthe tiède)." },
      { maxAge: 999, text: "Idéal pour toute la famille avec un thé à la menthe." }
    ]
  },
  {
    id: 71,
    category: "Desserts & Goûters",
    title: "Verrines à la framboise et à la rose",
    image: "",
    time: "15 min",
    ingredients: ["300 g framboises fraîches", "2 c. à café eau de rose", "400 g fromage blanc", "8 biscuits roses de Reims", "60 g pistaches concassées"],
    adultSteps: [
      "Dans un saladier, mélangez le fromage blanc avec l'eau de rose.",
      "Mettez 8 framboises de côté et écrasez le reste.",
      "Répartissez dans les verrines les biscuits roses de Reims, puis les framboises écrasées et terminez par le fromage blanc.",
      "Décorez avec 2 framboises par verrine et parsemez de pistaches concassées. Placez au frais."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de framboises. Faites-les cuire à la vapeur et mixez finement pour extraire le jus (mélangez avec purée de pomme)." },
      { maxAge: 6, text: "Lisse : 50 g de framboises cuites et mixées finement, mélangées à 50 g de fromage blanc." },
      { maxAge: 8, text: "Mouliné : 50 g de framboises écrasées, 30 g de fromage blanc et 20 g de biscuit rose. Mélangez." },
      { maxAge: 12, text: "Morceaux : 50 g de framboises, 30 g de fromage blanc, 20 g de biscuit rose et quelques pistaches en poudre." }
    ]
  },
  {
    id: 72,
    category: "Desserts & Goûters",
    title: "Salade de fruits exotiques",
    image: "",
    time: "15 min",
    ingredients: ["1 mangue", "200 g litchis frais", "1 fruit du dragon", "1 ananas Victoria", "1 papaye", "1 petit morceau de gingembre", "1 bâton de citronnelle", "quelques feuilles de menthe fraîche", "25 cl de jus de fruits de la Passion"],
    adultSteps: [
      "Épluchez le gingembre et hachez-le finement. Hachez également la citronnelle et la menthe.",
      "Épluchez tous les fruits et coupez la mangue en petits cubes.",
      "Coupez les autres fruits de la même taille et mélangez le tout.",
      "Ajoutez le jus de fruits de la Passion.",
      "Ajoutez le gingembre, la citronnelle et la menthe. Mélangez et placez au frais."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de mangue. Faites-la cuire à la vapeur 2 min et mixez-la très finement." },
      { maxAge: 6, text: "Lisse : Récupérez 80 à 100 g de mélange de fruits. Faites-les cuire à la vapeur 2 min et mixez finement (avec un peu de menthe/gingembre)." },
      { maxAge: 8, text: "Mouliné : Récupérez 80 à 100 g de salade de fruits et moulinez-les." },
      { maxAge: 12, text: "Morceaux : Servez 80 à 100 g de salade de fruits en petits morceaux." }
    ]
  },
  {
    id: 73,
    category: "Desserts & Goûters",
    title: "Cigares banane, fraises et chocolat",
    image: "",
    time: "25 min",
    ingredients: ["4 feuilles de brick", "3 bananes", "8 fraises", "150 g chocolat noir", "citron", "huile de pépins de raisin", "sucre glace", "glace à la pistache"],
    adultSteps: [
      "Épluchez les bananes et coupez-les en morceaux avec un filet de citron. Équeutez les fraises et coupez-les de même.",
      "Dans un saladier, mélangez les fruits.",
      "Répartissez le mélange sur les feuilles de brick et ajoutez des morceaux de chocolat.",
      "Roulez les feuilles de brick en forme de cigare et collez le bout avec de l'huile.",
      "Saupoudrez de sucre glace et enfournez pour 15 min à 180 °C.",
      "Servez tiède avec une boule de glace à la pistache."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de fraises. Faites-les cuire et mixez-les (passez à la passoire pour retirer les pépins)." },
      { maxAge: 6, text: "Lisse : 80 à 100 g de fraises mixées finement (passées à la passoire pour les pépins)." },
      { maxAge: 8, text: "Mouliné : 80 à 100 g de fruits moulinés + 1/2 feuille de brick réchauffée au four et émiettée dedans." },
      { maxAge: 12, text: "Morceaux : Servez 1 cigare (attention au chocolat) avec une petite boule de glace à la pistache." }
    ]
  },
  {
    id: 74,
    category: "Desserts & Goûters",
    title: "Pancakes à la banane (sans œuf)",
    image: "",
    time: "25 min",
    ingredients: ["2 bananes", "1/2 citron", "1 c. à café cannelle", "200 g farine", "4 c. à soupe huile de tournesol", "1/2 sachet de levure chimique"],
    adultSteps: [
      "Épluchez et mixez les bananes avec 12,5 cl d'eau, le jus du citron et la cannelle.",
      "Versez la purée dans un saladier, ajoutez la farine, l'huile et la levure. Mélangez vigoureusement au fouet.",
      "Ajoutez de l'eau si nécessaire, la pâte doit être épaisse mais pas trop.",
      "Faites cuire les pancakes dans une poêle à crêpes antiadhésive."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g de banane. Faites cuire à la vapeur avec un peu de jus de citron et mixez finement. Servez froid." },
      { maxAge: 6, text: "Lisse : 80 à 100 g de banane cuite à la vapeur (citron, cannelle) mixée finement. Servez froid." },
      { maxAge: 8, text: "Mouliné : 80 à 100 g de banane écrasée (avec citron et cannelle/vanille)." },
      { maxAge: 12, text: "Morceaux : Servez 1 ou 2 petits pancakes au bébé (max 1 fois par semaine car riche)." }
    ]
  },
  {
    id: 75,
    category: "Desserts & Goûters",
    title: "Ananas rôti au combava et à la vanille",
    image: "",
    time: "15 min",
    ingredients: ["1 ananas Victoria", "1 citron combava bio", "1 gousse vanille", "1 noix beurre"],
    adultSteps: [
      "Épluchez l'ananas et coupez-le en deux ou en quatre.",
      "Ouvrez la gousse de vanille en deux et grattez la pulpe.",
      "Dans un plat à gratin, déposez l'ananas, la vanille et quelques zestes de combava.",
      "Répartissez le beurre et enfournez pour 10 min à 200 °C.",
      "Servez tiède (idéal avec un sorbet ou une glace)."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g d'ananas cru. Faites-le cuire à la vapeur et mixez finement (passez à la passoire fine)." },
      { maxAge: 6, text: "Lisse : 80 à 100 g d'ananas cuit à la vapeur avec zestes de combava, mixé finement et passé au tamis." },
      { maxAge: 8, text: "Mouliné : 80 à 100 g d'ananas rôti (étape 5). Moulinez finement." },
      { maxAge: 12, text: "Morceaux : 80 à 100 g d'ananas rôti (étape 5). Coupez en petits morceaux et servez tiède." }
    ]
  },
  {
    id: 76,
    category: "Desserts & Goûters",
    title: "Petit-suisse à la fleur d'oranger et pommes",
    image: "",
    time: "5 min",
    ingredients: ["8 petits-suisses (au lait entier)", "1 filet eau de fleur d'oranger", "2 pommes Granny Smith", "1/2 citron", "1 gousse vanille"],
    adultSteps: [
      "Égouttez les petits-suisses et mélangez-les avec l'eau de fleur d'oranger.",
      "Épluchez et rincez les pommes. Coupez-les en cubes de 5 mm et citronnez-les.",
      "Ajoutez aux pommes la pulpe de vanille grattée.",
      "Répartissez les petits-suisses dans 4 ramequins, creusez un puits et versez les pommes à la vanille."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de pomme. Faites-la cuire à la vapeur ou à l'eau et mixez finement." },
      { maxAge: 6, text: "Lisse : 50 g de petit-suisse et 50 g de pomme cuite mixée finement avec la vanille. Mélangez l'ensemble." },
      { maxAge: 8, text: "Mouliné : 50 g de petit-suisse et 50 g de pomme cuite et écrasée avec la vanille. Mélangez." },
      { maxAge: 12, text: "Morceaux : 50 g de petit-suisse et 50 g de pomme crue (ou cuite) en très petits dés avec vanille." }
    ]
  },
  {
    id: 77,
    category: "Desserts & Goûters",
    title: "Granola maison",
    image: "",
    time: "30 min",
    ingredients: ["200 g flocons d'avoine", "1/2 c. à café cannelle", "50 g amandes émondées", "80 g noisettes émondées", "40 g raisins secs", "3 c. à soupe de sirop d'érable", "1 c. à soupe d'huile de noisette"],
    adultSteps: [
      "Dans un saladier, mélangez les flocons d'avoine avec le sirop d'érable et l'huile.",
      "Ajoutez la cannelle, les amandes et noisettes grossièrement concassées. Mélangez.",
      "Versez sur une plaque et enfournez pour 20 min à 150 °C (mélangez à mi-cuisson).",
      "Laissez complètement refroidir, puis ajoutez les raisins secs."
    ],
    babyAdaptations: [
      { maxAge: 12, text: "Non adapté avant 15 mois. Trop dur pour les gencives." },
      { maxAge: 999, text: "Morceaux (Dès 15 mois) : Servez 30 à 40 g de granola dans du fromage frais ou du lait. Attention aux gros morceaux de noisettes." }
    ]
  },
  {
    id: 78,
    category: "Desserts & Goûters",
    title: "Ma première confiture d'abricots",
    image: "",
    time: "35 min",
    ingredients: ["500 g abricots", "2 gousses vanille", "1/2 citron vert bio", "2 c. à café rases Vilpris® (pectine de pomme)", "50 g sucre de canne"],
    adultSteps: [
      "Stérilisez 2 pots à confiture.",
      "Dénoyautez et coupez les abricots en petits morceaux.",
      "Faites cuire les abricots avec un fond d'eau 5 min.",
      "Ajoutez la vanille et les zestes du citron vert.",
      "Ajoutez la pectine, le sucre en pluie et mélangez bien. Laissez cuire 10 min à feu vif en remuant.",
      "Remplissez les pots, fermez-les et retournez-les. Conservez au frais (se conserve moins longtemps qu'une confiture classique car peu sucrée)."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : Récupérez 30 g d'abricot (avant l'ajout de sucre). Mixez-les finement." },
      { maxAge: 6, text: "Lisse : Récupérez 80 à 100 g d'abricots nature cuits. Mixez-les finement." },
      { maxAge: 8, text: "Mouliné : Récupérez 80 à 100 g d'abricots nature cuits. Écrasez-les." },
      { maxAge: 12, text: "Morceaux : Servez 1 c. à café de confiture finie sur une petite tartine de pain beurrée." }
    ]
  },
  {
    id: 79,
    category: "Desserts & Goûters",
    title: "Chaussons aux pommes et à la cannelle",
    image: "",
    time: "25 min",
    ingredients: ["2 pâtes feuilletées (sans PLV si allergie)", "4 pommes sucrées", "1 pincée cannelle", "1 jaune œuf"],
    adultSteps: [
      "Épluchez, épépinez et coupez les pommes en petits cubes.",
      "Faites chauffer les pommes avec 1 verre d'eau et la cannelle jusqu'à évaporation. Laissez égoutter.",
      "Déroulez les pâtes et découpez des disques de 10 à 15 cm.",
      "Répartissez les pommes sur la moitié, badigeonnez le pourtour de jaune d'œuf et refermez en chaussons.",
      "Dorez le dessus à l'œuf et enfournez pour 20 min à 200 °C."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de pomme cuite mixée finement. Laissez bien refroidir." },
      { maxAge: 6, text: "Lisse : 80 à 100 g de pomme cuite mixée finement. Laissez bien refroidir." },
      { maxAge: 8, text: "Mouliné : 80 à 100 g de pomme cuite écrasée finement. Laissez bien refroidir." },
      { maxAge: 12, text: "Morceaux : Servez à bébé la moitié d'un petit chausson aux pommes bien froid." }
    ]
  },
  {
    id: 80,
    category: "Desserts & Goûters",
    title: "Fondant au chocolat",
    image: "",
    time: "20 min",
    ingredients: ["200 g chocolat noir", "150 g beurre", "150 g sucre de canne", "50 g farine", "3 œufs"],
    adultSteps: [
      "Faites fondre le chocolat et le beurre au bain-marie.",
      "Versez le mélange dans un saladier et ajoutez le sucre, la farine et les œufs un à un. Fouettez vigoureusement.",
      "Versez la préparation dans un moule beurré et fariné.",
      "Enfournez pour 12 ou 13 min à 180 °C. Laissez refroidir."
    ],
    babyAdaptations: [
      { maxAge: 6, text: "Non recommandé avant 6/7 mois. Vers 7 mois, vous pouvez initier le chocolat via une petite pointe de poudre cacaotée dans son lait." },
      { maxAge: 8, text: "Pas de fondant pour l'instant (trop gras/sucré)." },
      { maxAge: 12, text: "Morceaux : Servez 30 à 40 g de fondant au chocolat de temps en temps pour le goûter." },
      { maxAge: 999, text: "Le goûter adoré de tous !" }
    ]
  },
  {
    id: 81,
    category: "Desserts & Goûters",
    title: "Mon premier sablé citron",
    image: "",
    time: "20 min",
    ingredients: ["165 g farine", "60 g sucre de canne", "1 citron bio", "75 g beurre", "1 œuf"],
    adultSteps: [
      "Mélangez la farine, le sucre et les zestes du citron.",
      "Ajoutez le beurre, mélangez rapidement et incorporez l'œuf et 1 c. à soupe de jus de citron. Réservez 5 min au frais.",
      "Sur une plaque, déposez des boules de pâte et aplatissez-les avec la paume de la main.",
      "Enfournez pour 10 min à 200 °C. Conservez en boîte hermétique."
    ],
    babyAdaptations: [
      { maxAge: 8, text: "Biscuit non adapté pour le moment." },
      { maxAge: 12, text: "Morceaux : Servez 1 ou 2 sablés avec un laitage et un fruit." },
      { maxAge: 999, text: "Idéal pour tremper dans le thé !" }
    ]
  },
  {
    id: 82,
    category: "Desserts & Goûters",
    title: "Mon premier sablé cacao",
    image: "",
    time: "20 min",
    ingredients: ["1 c. à soupe cacao non sucré", "150 g farine", "60 g sucre de canne", "75 g beurre", "1 œuf"],
    adultSteps: [
      "Mélangez la farine, le sucre et le cacao.",
      "Ajoutez le beurre, mélangez et incorporez l'œuf. Réservez 5 min au frais.",
      "Faites des petites boules, aplatissez-les sur une plaque de cuisson.",
      "Enfournez pour 10 min à 200 °C. Laissez refroidir."
    ],
    babyAdaptations: [
      { maxAge: 8, text: "Biscuit non adapté pour le moment." },
      { maxAge: 12, text: "Morceaux : Servez 1 ou 2 sablés avec un laitage et un fruit." },
      { maxAge: 999, text: "Le préféré des enfants !" }
    ]
  },
  {
    id: 83,
    category: "Desserts & Goûters",
    title: "Mon premier sablé noisette",
    image: "",
    time: "15 min",
    ingredients: ["90 g noisettes en poudre", "130 g farine", "60 g sucre de canne", "130 g beurre"],
    adultSteps: [
      "Mélangez la farine, le sucre et les noisettes en poudre.",
      "Ajoutez le beurre. Mélangez rapidement et réservez au frais.",
      "Faites des petites boules, aplatissez-les sur une plaque.",
      "Enfournez pour 10 à 12 min à 175 °C. Laissez refroidir."
    ],
    babyAdaptations: [
      { maxAge: 8, text: "Biscuit non adapté pour le moment." },
      { maxAge: 12, text: "Morceaux : Servez 1 ou 2 sablés avec un laitage et un fruit." },
      { maxAge: 999, text: "Très croquant et parfumé." }
    ]
  },
  {
    id: 84,
    category: "Desserts & Goûters",
    title: "Le pain perdu",
    image: "",
    time: "15 min",
    ingredients: ["4 grosses tranches pain rassis", "2 œufs", "40 cl lait entier", "1 pincée cannelle", "1 c. à soupe sucre de canne", "2 c. à soupe de sucre en poudre", "50 g de beurre"],
    adultSteps: [
      "Mélangez les œufs, le lait, la cannelle et le sucre de canne.",
      "Faites chauffer le sucre en poudre et le beurre dans une poêle (pour faire un caramel).",
      "Trempez le pain dans le mélange au lait.",
      "Dès que le caramel apparaît, dorez le pain imbibé de chaque côté.",
      "Laissez tiédir (à servir avec des fruits frais ou de la glace)."
    ],
    babyAdaptations: [
      { maxAge: 8, text: "Dessert très riche, attendez encore un peu." },
      { maxAge: 12, text: "Morceaux : Servez 30 g de pain perdu (idéalement non caramélisé pour bébé) max 1 fois par mois." },
      { maxAge: 999, text: "Le goûter anti-gaspi et ultra gourmand." }
    ]
  },
  {
    id: 85,
    category: "Desserts & Goûters",
    title: "Financiers aux amandes et à la pistache",
    image: "",
    time: "15 min",
    ingredients: ["50 g amandes en poudre", "50 g pistaches en poudre", "30 g farine", "90 g sucre glace", "90 g beurre", "1 sachet de sucre vanillé", "1 gousse de vanille", "3 blancs d'œufs", "pistaches concassées"],
    adultSteps: [
      "Mélangez les poudres (amandes, pistaches), la farine, les sucres et la vanille grattée.",
      "Incorporez le beurre fondu.",
      "Montez les blancs en neige (juste mousseux) et incorporez-les délicatement.",
      "Versez dans des moules à financiers et saupoudrez de pistaches concassées.",
      "Enfournez 10 à 12 min à 180 °C. Laissez refroidir."
    ],
    babyAdaptations: [
      { maxAge: 8, text: "Non adapté pour le moment." },
      { maxAge: 12, text: "Morceaux : Servez 1 petit financier avec un verre de lait et un fruit." },
      { maxAge: 999, text: "La pistache donne une magnifique couleur au financier." }
    ]
  },
  {
    id: 86,
    category: "Desserts & Goûters",
    title: "Papillotes abricots, framboises et vanille",
    image: "",
    time: "20 min",
    ingredients: ["8 abricots", "200 g framboises", "1 gousse vanille", "1 c. à café miel de lavande"],
    adultSteps: [
      "Coupez et dénoyautez les abricots.",
      "Préparez 4 papillotes en papier sulfurisé.",
      "Déposez 2 abricots, des framboises et 1/4 de gousse de vanille par papillote.",
      "Arrosez de miel, fermez hermétiquement et enfournez 10 à 15 min à 180 °C. Laissez refroidir."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g d'abricot (sans peau). Cuisez et mixez finement." },
      { maxAge: 6, text: "Lisse : 80 à 100 g d'abricots (sans peau) mixés avec une pointe de vanille." },
      { maxAge: 8, text: "Mouliné : Enfournez la papillote sans miel, puis écrasez les fruits (bien froids)." },
      { maxAge: 12, text: "Morceaux : Servez 1 petite papillote (bien refroidie)." }
    ]
  },
  {
    id: 87,
    category: "Desserts & Goûters",
    title: "Crumble aux poires et 4-épices",
    image: "",
    time: "15 min",
    ingredients: ["4 poires", "1 pincée 4-épices", "70 g pistaches concassées", "50 g amandes concassées", "60 g petits flocons d'avoine", "60 g de farine", "50 g de sucre roux", "50 g de beurre"],
    adultSteps: [
      "Épluchez, épépinez et coupez les poires en fines lamelles. Mettez-les dans un plat avec le 4-épices.",
      "Mélangez les pistaches, amandes, flocons d'avoine et farine.",
      "Ajoutez le sucre et le beurre, et malaxez du bout des doigts pour faire le crumble.",
      "Répartissez sur les poires et enfournez 10 min à 200 °C. Laissez refroidir."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de poire cuite mixée finement. (Laissez refroidir)." },
      { maxAge: 6, text: "Lisse : 80 à 100 g de poires cuites avec une pincée de 4-épices. Mixez finement." },
      { maxAge: 8, text: "Mouliné : 80 à 100 g de crumble (bien froid) écrasé finement." },
      { maxAge: 12, text: "Morceaux : 80 à 100 g de crumble (bien froid)." }
    ]
  },
  {
    id: 88,
    category: "Desserts & Goûters",
    title: "Kiwis rôtis et glace à la vanille",
    image: "",
    time: "15 min",
    ingredients: ["4 kiwi gold", "4 kiwi vert", "1 gousse vanille", "40 g sucre roux", "1 pot glace à la vanille"],
    adultSteps: [
      "Épluchez et tranchez les kiwis.",
      "Déposez-les dans 4 petits ramequins.",
      "Déposez 1/4 de gousse de vanille dans chaque ramequin.",
      "Saupoudrez de sucre (facultatif) et enfournez 10 min à 200 °C.",
      "Laissez tiédir avant de déposer une boule de glace à la vanille."
    ],
    babyAdaptations: [
      { maxAge: 4, text: "Extra-lisse : 30 g de kiwi cuit mixé finement (passez à la passoire)." },
      { maxAge: 6, text: "Lisse : 80 à 100 g de kiwi cuit au four (sans sucre). Mixez finement (passez à la passoire)." },
      { maxAge: 8, text: "Mouliné : 80 à 100 g de kiwi cuit au four. Écrasez finement." },
      { maxAge: 12, text: "Morceaux : 80 à 100 g de kiwi cuit au four (vous pouvez ajouter une petite boule de glace à part)." }
    ]
  }
];
