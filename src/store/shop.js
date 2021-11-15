const example = {
  state() {
    return {
      shopList: [
        {
          id: 1,
          title: 'Nike red',
          description:
            'это текст- "рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
          img: require('@/assets/img/item-1-1.png'),
          gallery: [require('@/assets/img/item-1-1.png'), require('@/assets/img/item-1-2.png'), require('@/assets/img/item-1-3.png')],
        },
        {
          id: 2,
          title: 'Nike default',
          description:
            'это текст- "рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
          img: require('@/assets/img/item-2-1.png'),
          gallery: [require('@/assets/img/item-2-1.png'), require('@/assets/img/item-2-2.png'), require('@/assets/img/item-2-3.png')],
        },
        {
          id: 3,
          title: 'Nike street',
          description:
            'это текст- "рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
          img: require('@/assets/img/item-3-1.png'),
          gallery: [require('@/assets/img/item-3-1.png'), require('@/assets/img/item-3-2.png'), require('@/assets/img/item-3-3.png')],
        },
        {
          id: 4,
          title: 'Nike home',
          description:
            'это текст- "рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
          img: require('@/assets/img/item-4-1.png'),
          gallery: [require('@/assets/img/item-4-1.png'), require('@/assets/img/item-4-2.png'), require('@/assets/img/item-4-3.png')],
        },
      ],
    };
  },
  mutations: {},
  actions: {},
  getters: {
    getShopList: (state) => state.shopList,
    getProductById: (state) => (id) => {
      return state.shopList.find((product) => product.id === Number(id));
    },
  },
};

export default example;
