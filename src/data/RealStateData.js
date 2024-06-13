import { useTranslation } from 'react-i18next'

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

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesPT = [
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

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesES = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9805',
    title: 'Netuno',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\n Penthouse amueblado, en excelente condominio cerca del mar con jacuzzi y frente Este.\n\n Cuenta con 2 dormitorios, una suite, 2 estacionamientos techados, hobby box, jacuzzi, muebles a medida, gas central, cerca de bares, restaurantes, mercados, farmacias y comercios locales.',
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
      '**PROPIEDAD CON REGISTRO**\n\n ¿Quieres vivir en una hermosa residencia con la comodidad y practicidad de una casa de dos pisos, pero no renunciar a la grandeza de una fachada moderna?\n\n ¡Ven y descubre este maravilloso proyecto!\n\n Planificada y construida en un condominio de alto nivel, esta casa está diseñada de dos maneras.\n\n En la planta baja se integran espacios para el ocio y las reuniones familiares.\n\n En la planta alta, la comodidad de los dormitorios y una hermosa vista exterior.',
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
      '**PROPIEDAD CON REGISTRO**\n\n Apartamento con vista al mar, amueblado, cuenta con 02 habitaciones, 01 suite, baño de visitas, sala, cocina y área de lavado, balcón con sistema Heiki, asador y estacionamiento techado.\n\n POSICIÓN SOLAR NORTE\n\n Gran propiedad ubicada en la privilegiada región de los Ingleses, a sólo 50 metros de la playa, cerca de supermercado, farmacia y parada de autobús.\n\n Muy buen condominio con conserjería 24 horas y zona de ocio.',
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
 * The Properties data
 * @typedef {Object} PropertiesData
 * @property {Array<Property>} pt - The Portuguese property data.
 * @property {Array<Property>} es - The Spanish property data.
 */

/** @type {PropertiesData} The properties data */
const properties = {
  pt: propertiesPT,
  es: propertiesES,
}

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  const {
    i18n: { language },
  } = useTranslation()

  if (properties[language]) {
    return properties[language]
  } else {
    return properties['pt']
  }
}
