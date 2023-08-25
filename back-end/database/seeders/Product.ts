import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Product.create({
      name: 'Camiseta do Brasil',
      image_url: 'https://imgnike-a.akamaihd.net/1300x1300/0228340L.jpg',
      type: 'Camiseta',
      price: 349.99,
      seller: 'Nike',
      available_sizes: ['P', 'M', 'G', 'GG'],
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sport: 'Futebol',
    })

    await Product.create({
      name: 'Regata do Chicago Bulls',
      image_url:
        'https://static.lojanba.com/produtos/camiseta-regata-nba-adidas-swingman-chicago-bulls-rose/68/D13-0209-068/D13-0209-068_zoom1.jpg?ts=1600856952',
      type: 'Regata',
      price: 499.99,
      seller: 'Adidas',
      available_sizes: ['P', 'M', 'G', 'XPP'],
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sport: 'Basquete',
    })

    await Product.create({
      name: 'Calção da Puma',
      image_url:
        'https://static.netshoes.com.br/produtos/calcao-puma-liga-core-masculino/56/NWG-1619-056/NWG-1619-056_zoom1.jpg?ts=1643646713&',
      type: 'Calção',
      price: 99.69,
      seller: 'Puma',
      available_sizes: ['P', 'M', 'G'],
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sport: 'Corrida',
    })

    await Product.create({
      name: 'Calção da Nike',
      image_url:
        'https://static.netshoes.com.br/produtos/calcao-nike-dri-fit-academy-masculino/26/HZM-0829-326/HZM-0829-326_zoom1.jpg?ts=1660657811',
      type: 'Calção',
      price: 109.69,
      seller: 'Nike',
      available_sizes: [],
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sport: 'Corrida',
    })

    await Product.create({
      name: 'Meia da Jordan',
      image_url:
        'https://artwalk.vteximg.com.br/arquivos/ids/193193-1000-1000/Meia-Nike-Jordan-Jumpman-Masculina.jpg?v=636210228372600000',
      type: 'Acessório',
      price: 119.69,
      seller: 'Jordan',
      available_sizes: ['44', '39'],
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sport: 'Basquete',
    })

    await Product.create({
      name: 'Camiseta Los Angeles Lakers',
      image_url: 'https://imgnike-a.akamaihd.net/768x768/025393ND.jpg',
      type: 'Camiseta',
      price: 599.99,
      seller: 'Nike',
      available_sizes: ['P', 'M', 'G', 'GG'],
      details: 'Descrição do produto para a camiseta dos Lakers.',
      sport: 'Basquete',
    })

    await Product.create({
      name: 'Tênis Nike Air Max',
      image_url: 'https://imgnike-a.akamaihd.net/360x360/0135655C.jpg',
      type: 'Tênis',
      price: 799.99,
      seller: 'Nike',
      available_sizes: ['37', '38', '39', '40', '41'],
      details: 'Tênis confortável e estiloso da Nike.',
      sport: 'Corrida',
    })

    await Product.create({
      name: 'Bola de Futebol Adidas',
      image_url: 'https://m.media-amazon.com/images/I/61c6nqdA33L.__AC_SX300_SY300_QL70_ML2_.jpg',
      type: 'Bola',
      price: 39.99,
      seller: 'Adidas',
      available_sizes: ['Único'],
      details: 'Bola de futebol oficial da Adidas para partidas profissionais.',
      sport: 'Futebol',
    })

    await Product.create({
      name: 'Jaqueta Corta-Vento Nike',
      image_url: 'https://imgnike-a.akamaihd.net/768x768/011917ID.jpg',
      type: 'Jaqueta',
      price: 899.99,
      seller: 'Nike',
      available_sizes: ['P', 'M', 'G'],
      details: 'Jaqueta leve e resistente para proteção contra vento e chuva.',
      sport: 'Atletismo',
    })

    await Product.create({
      name: 'Shorts de Academia Reebok',
      image_url: 'https://m.media-amazon.com/images/I/41PJMolNE7L._AC_.jpg',
      type: 'Shorts',
      price: 249.99,
      seller: 'Reebok',
      available_sizes: ['P', 'M', 'G', 'GG'],
      details: 'Shorts confortável e flexível, ideal para treinos na academia.',
      sport: 'Fitness',
    })

    await Product.create({
      name: 'Skateboard Element',
      image_url: 'https://m.media-amazon.com/images/I/713cDlR-cjL.__AC_SX300_SY300_QL70_ML2_.jpg',
      type: 'Skate',
      price: 299.99,
      seller: 'Element',
      available_sizes: ['Único'],
      details: 'Skateboard de alta qualidade para manobras radicais.',
      sport: 'Skateboarding',
    })

    await Product.create({
      name: 'Chuteira Nike Mercurial Superfly',
      image_url: 'https://imgnike-a.akamaihd.net/768x768/02260651.jpg',
      type: 'Chuteira',
      price: 799.99,
      seller: 'Nike',
      available_sizes: ['39', '40', '41', '42', '43'],
      details: 'Chuteira de alto desempenho para jogadores de futebol.',
      sport: 'Futebol',
    })

    await Product.create({
      name: 'Camiseta de Ciclismo Specialized',
      image_url: 'https://m.media-amazon.com/images/I/61fWDr2oJvL.__AC_SX300_SY300_QL70_ML2_.jpg',
      type: 'Camiseta',
      price: 149.99,
      seller: 'Specialized',
      available_sizes: ['S', 'M', 'L', 'XL'],
      details: 'Camiseta técnica para ciclistas, com tecido respirável e confortável.',
      sport: 'Ciclismo',
    })

    await Product.create({
      name: 'Bola de Basquete Spalding NBA',
      image_url: 'https://m.media-amazon.com/images/I/61td9ls-1iL.__AC_SX300_SY300_QL70_ML2_.jpg',
      type: 'Bola',
      price: 49.99,
      seller: 'Spalding',
      available_sizes: ['Único'],
      details: 'Bola oficial da NBA para partidas de basquete profissional.',
      sport: 'Basquete',
    })
  }
}
