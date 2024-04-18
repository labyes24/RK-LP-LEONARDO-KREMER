/**
 * The property info
 * @typedef {Object} Property
 * @property {string} id - indicates the unique identifier of the property.
 * @property {string} brokerId - indicates the broker identifier of the property.
 * @property {string} RKCode - indicates the property code on RK Imóveis website.
 * @property {string} title - indicates the title of the property.
 * @property {string} region - indicates the region of the property.
 * @property {string} description - indicates the description of the property.
 * @property {string} price - indicates the price of the property.
 * @property {Object} details - indicates the details of the property.
 * @property {string} details.square - The square meters of the property.
 * @property {string} details.rooms - The rooms of the property.
 * @property {string} details.bathrooms - The bathrooms of the property.
 * @property {string} details.garage - The garage of the property.
 * @property {Array<string>} pictures - indicates the URL of the pictures of the property.
 */

const BROKER_ID = crypto.randomUUID()

const properties = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9805',
    title: 'Netuno',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Cobertura mobiliada, em excelente condomínio próximo ao mar com hidromassagem e frente Leste.\n\n Possui 2 dormitórios sendo uma suíte, 2 vagas de garagem cobertas, hobby box, hidromassagem, móveis sob medida, gás central, próximo a bares, restaurantes, mercados, farmácias e comércio local.',
    price: 'R$ 925.000,00',
    details: {
      square: '156,60 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '2',
    },
    pictures: [
      './properties/netuno-f01.jpg',
      './properties/netuno-f02.jpg',
      './properties/netuno-f03.jpg',
      './properties/netuno-f04.jpg',
      './properties/netuno-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '8929',
    title: 'Jardim Ingleses',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Quer morar em uma linda residência com o conforto e a praticidade de uma casa de dois pisos, mas não abre mão da imponência de uma fachada moderna?\n\n Venha conhecer este maravilhoso projeto!\n\n Planejada e construída em um condomínio de alto padrão, essa casa é pensada em duas formas.\n\n No térreo ambientes integrados para o lazer e o convívio em família.\n\n No andar superior o conforto dos dormitórios e uma linda vista externa.',
    price: 'R$ 3.100.000,00',
    details: {
      square: '259,30 m²',
      rooms: '4',
      bathrooms: '4',
      garage: '2',
    },
    pictures: [
      './properties/ingleses-f04.jpg',
      './properties/ingleses-f01.jpg',
      './properties/ingleses-f02.jpg',
      './properties/ingleses-f03.jpg',
      './properties/ingleses-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9808',
    title: 'Porto das Águas',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA!**\n\n Apartamento com vista mar, mobiliado, possui 02 dormitórios, sendo 01 suíte, banheiro social, sala de estar, cozinha e área de serviço sacada com sistema Heiki, churrasqueira e vaga de garagem coberta.\n\n POSIÇÃO SOLAR NORTE\n\n Ótimo imóvel localizado na região nobre dos Ingleses, a apenas 50 metros da praia, próximo a supermercado, farmácia e ponto de ônibus.\n\n Condomínio muito bom com portaria 24 horas e área de lazer.',
    price: 'R$ 850.000,00',
    details: {
      square: '70,83 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      './properties/porto-f01.jpg',
      './properties/porto-f02.jpg',
      './properties/porto-f03.jpg',
      './properties/porto-f04.jpg',
      './properties/porto-f05.jpg',
    ],
  },
]

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  return properties
}
