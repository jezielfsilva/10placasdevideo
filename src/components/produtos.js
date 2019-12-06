import React from 'react';


class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videocards: [
                {
                   img: 'https://images6.kabum.com.br/produtos/fotos/84136/84136_index_gg.jpg',
                   title:'Gigabyte NVIDIA GeForce GTX 1050 Ti D5 4G',
                   text: 'R$ 619,90 Experimente uma performance incrível em games de alta definição, impulsionados pela Nvidia Pascal - o GPU com arquitetura mais avançada até o momento.' 
                },

                {
                    img: 'https://images5.kabum.com.br/produtos/fotos/87425/87425_index_gg.jpg',
                    title: 'XFX AMD Radeon RX 580 GTS XXX OC+ 8GB, GDDR5',
                    text: 'R$ 809,09 Placa com construção muito boa, e custo benefício sensacional,e o suporte da AMD é fundamental pra experiência do consumidor.'
                },

                {
                    img: 'https://images8.kabum.com.br/produtos/fotos/101518/placa-de-video-gigabyte-nvidia-geforce-gtx-1650-gaming-oc-4g-gddr5-gv-n1650gaming-oc-4gd_placa-de-video-gigabyte-nvidia-geforce-gtx-1650-gaming-oc-4g-gddr5-gv-n1650gaming-oc-4gd_1556195673_gg.jpg',
                    title: 'Gigabyte NVIDIA GeForce GTX 1650 Gaming OC 4G, GDDR5',
                    text: 'R$ 849,90 O sistema de arrefecimento WINDFORCE 2X possui 2x ventiladores de lâmina exclusivos de 100mm, ventilador giratório alternativo, 2 tubos de calor de cobre composto com GPU de toque direto e ventilador ativo 3D, proporcionando uma dissipação de calor efetiva'
                },

                {
                    img: 'https://images9.kabum.com.br/produtos/fotos/85819/85819_index_gg.jpg',
                    title: 'Gigabyte NVIDIA GeForce GTX 1060 WindForce OC 3G, GDDR5',
                    text: 'R$ 949,90 Fique pronto para o jogo com GeForce® GTX. GeForce GTX oferece o desempenho, com as tecnologias mais avançadas para os Games (NVIDIA GameWorks ™) e o melhor ecossistema para os Games (Experiência GeForce ™) .'
                },

                {
                    img: 'https://images9.kabum.com.br/produtos/fotos/94209/94209_1513948522_index_gg.jpg',
                    title: 'GIGABYTE GEFORCE GT 1030 2GB OC GDDR5',
                    text: 'R$ 453,06 Características:Marca: Gigabyte, Modelo: GV-N1030OC-2GI, Peso: 465 gramas (bruto com embalagem)'
                },

                {
                    img: 'https://images2.kabum.com.br/produtos/fotos/102832/placa-de-video-asrock-phantom-gaming-d-radeon-rx570-8g-oc-gddr5_1564691688_gg.jpg',
                    title: 'Asrock Phantom Gaming D Radeon RX570 8G OC, GDDR5',
                    text: 'R$ 829,90 Prepare-se para ter o desempenho nos jogos que você sempre sonhou, a placa de vídeo Asrock Phantom Gaming RX 570 vem equipada com dois ventiladores que proporcionam um forte poder de resfriamento e deixam seu equipamento preparado para processar o que você desejar. Além disso, é otimizada para oferecer excelente experiência de jogo incrível, com design elegante e aerodinâmico.'
                },

                {
                    img: 'https://images1.kabum.com.br/produtos/fotos/101521/placa-de-video-gigabyte-gv-n1650ixoc-4gd_placa-de-video-gigabyte-gv-n1650ixoc-4gd_1558121248_gg.jpg',
                    title: 'Gigabyte NVIDIA GeForce GTX 1650 OC 4G, GDDR5',
                    text: 'R$ 799,90 O sistema de arrefecimento personalizado apresenta uma ventoinha de 80 mm para proporcionar uma capacidade de dissipação de calor eficaz para um desempenho superior a temperaturas mais baixas.'
                },

                {
                    img: 'https://images6.kabum.com.br/produtos/fotos/98846/98846_1539979912_index_gg.jpg',
                    title: 'PCYes NVIDIA GeForce GTX 550 Ti 1GB, GDDR5',
                    text: 'R$ 332,41 A PCYES GeForce GTX 550 Ti oferece mais de 2.5 vezes o poder de poder de processamento geométrico do DirectX 11. Surpreenda-se com a evolução do visual e dos gráficos que você irá vivenciar com esse processador.'
                },

                {
                    img: 'https://images-americanas.b2w.io/spacey/2019/11/28/v2__REDFRIDAY__DESK__header__cupom.png',
                    title: 'Geforce Chipset Vídeo GT610 1GB DDR2',
                    text: 'R$ 249,84 ficha técnica: Código-187933483 peso-0.315'
                },

                {
                    img: 'https://http2.mlstatic.com/placa-de-video-radeon-hd6570-1gb-gddr5-128-bits-gamer-barato-ddr5-hdmi-lol-fortnite-gta-cuda-quadro-cad-sketchup-k771-D_NQ_NP_761478-MLB32059833362_092019-O.webp',
                    title: 'Radeon Hd6570 1gb Gddr5 128 Bits Ddr5',
                    text: 'O barramento PCI Express x16 é um sistema presente na Placa mãe designado especialmente para placas de vídeo.'
                }
            ]
        }
    }

    render () {
        return (
            <div>
                {this.state.videocards.map(produto => {
                    return (
                        <div>
                            <img src = {produto.img} />
                            <h1>{produto.title}</h1>
                            <p>{produto.text}</p>
                        </div>
                    )
                }
                )}
            </div>
        )
    }
}

export default Products; 