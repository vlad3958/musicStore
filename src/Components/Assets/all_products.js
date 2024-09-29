import guitars_1 from './guitars_1.png'
import guitars_2 from './guitars_2.png'
import guitars_3 from './guitars_3.png'
import guitars_4 from './guitars_4.png'

import amp_1 from './amp_1.png'
import amp_2 from './amp_2.png'
import amp_3 from './amp_3.png'
import amp_4 from './amp_4.jpg'

import synthesizers_1 from './synthesizers_1.jpg'
import synthesizers_2 from './synthesizers_2.jpg'
import synthesizers_3 from './synthesizers_3.jpg'
import synthesizers_4 from './synthesizers_4.jpg'

const all_products = [
    // Category 1: Guitars
    { id: 1, name: 'Fender Blues Junior IV', image: guitars_1, price: 799, category: 'guitars' },
    { id: 2, name: 'Gibson Les Paul Standard', image: guitars_2, price: 2499, category: 'guitars' },
    { id: 3, name: 'Ibanez RG550', image: guitars_3, price: 999, category: 'guitars' },
    { id: 4, name: 'PRS SE Custom 24', image: guitars_4, price: 850, category: 'guitars' },
    { id: 5, name: 'Epiphone SG Standard', image: guitars_1, price: 429, category: 'guitars' },
    { id: 6, name: 'Gretsch G2622 Streamliner', image: guitars_2, price: 549, category: 'guitars' },
    { id: 7, name: 'Jackson Soloist SLX', image: guitars_3, price: 599, category: 'guitars' },
    { id: 8, name: 'Yamaha Pacifica 112V', image: guitars_4, price: 299, category: 'guitars' },
    { id: 9, name: 'Fender Player Telecaster', image: guitars_1, price: 799, category: 'guitars' },
    { id: 10, name: 'Gibson SG Tribute', image: guitars_2, price: 1199, category: 'guitars' },
    { id: 11, name: 'Ibanez Artcore AS73', image: guitars_3, price: 499, category: 'guitars' },
    { id: 12, name: 'PRS S2 Vela', image: guitars_4, price: 1499, category: 'guitars' },

    // Category 2: Amplifiers
    { id: 13, name: 'Marshall DSL40CR', image: amp_1, price: 749, category: 'amplifiers' },
    { id: 14, name: 'Fender Hot Rod Deluxe IV', image: amp_2, price: 999, category: 'amplifiers' },
    { id: 15, name: 'Vox AC30C2', image: amp_3, price: 1199, category: 'amplifiers' },
    { id: 16, name: 'Orange Rocker 32', image: amp_4, price: 999, category: 'amplifiers' },
    { id: 17, name: 'Boss Katana-100 MkII', image: amp_1, price: 399, category: 'amplifiers' },
    { id: 18, name: 'Blackstar HT Club 40 MkII', image: amp_2, price: 699, category: 'amplifiers' },
    { id: 19, name: 'Supro Delta King 12', image: amp_3, price: 599, category: 'amplifiers' },
    { id: 20, name: 'Fender Mustang GTX100', image: amp_4, price: 499, category: 'amplifiers' },
    { id: 21, name: 'Peavey 6505 Plus', image: amp_1, price: 1199, category: 'amplifiers' },
    { id: 22, name: 'Line 6 Spider V 240HC MkII', image: amp_2, price: 449, category: 'amplifiers' },
    { id: 23, name: 'Mesa Boogie Rectifier', image: amp_3, price: 1999, category: 'amplifiers' },
    { id: 24, name: 'Orange Crush 35RT', image: amp_4, price: 299, category: 'amplifiers' },

    // Category 3: audio_interfaces
    { id: 25, name: 'Boss DS-1 Distortion', image: 'audio_interfaces_25', price: 59, category: 'audio interfaces' },
    { id: 26, name: 'Electro-Harmonix Big Muff Pi', image: 'audio_interfaces_26', price: 89, category: 'audio interfaces' },
    { id: 27, name: 'MXR M169 Carbon Copy', image: 'audio_interfaces_27', price: 149, category: 'audio interfaces' },
    { id: 28, name: 'TC Electronic Hall of Fame 2', image: 'audio_interfaces_28', price: 129, category: 'audio interfaces' },
    { id: 29, name: 'Strymon Timeline', image: 'audio_interfaces_29', price: 449, category: 'audio interfaces' },
    { id: 30, name: 'EarthQuaker Devices Avalanche Run', image: 'audio_interfaces_30', price: 299, category: 'audio interfaces' },
    { id: 31, name: 'Wampler Tumnus', image: 'audio_interfaces_31', price: 179, category: 'audio interfaces' },
    { id: 32, name: 'Ibanez Tube Screamer TS808', image: 'audio_interfaces_32', price: 179, category: 'audio interfaces' },
    { id: 33, name: 'Boss RC-5 Loop Station', image: 'audio_interfaces_33', price: 229, category: 'audio interfaces' },
    { id: 34, name: 'Walrus Audio Slo', image: 'audio_interfaces_34', price: 199, category: 'audio interfaces' },
    { id: 35, name: 'JHS Morning Glory V4', image: 'audio_interfaces_35', price: 199, category: 'audio interfaces' },
    { id: 36, name: 'Keeley Caverns V2', image: 'audio_interfaces_36', price: 179, category: 'audio interfaces' },

    // Category 4: Accessories
    { id: 37, name: 'D\'Addario EXL110 Strings', image: 'accessories_37', price: 6, category: 'accessories' },
    { id: 38, name: 'Ernie Ball 2221 Regular Slinky', image: 'accessories_38', price: 7, category: 'accessories' },
    { id: 39, name: 'Jim Dunlop Tortex Standard Picks', image: 'accessories_39', price: 4, category: 'accessories' },
    { id: 40, name: 'Fender FT-1 Pro Clip-On Tuner', image: 'accessories_40', price: 15, category: 'accessories' },
    { id: 41, name: 'Planet Waves Guitar Cable', image: 'accessories_41', price: 19, category: 'accessories' },
    { id: 42, name: 'Levy\'s Leather Strap', image: 'accessories_42', price: 45, category: 'accessories' },
    { id: 43, name: 'D\'Addario Planet Waves Capo', image: 'accessories_43', price: 29, category: 'accessories' },
    { id: 44, name: 'Jim Dunlop Cry Baby Wah', image: 'accessories_44', price: 129, category: 'accessories' },
    { id: 45, name: 'Korg Pitchblack Tuner', image: 'accessories_45', price: 69, category: 'accessories' },
    { id: 46, name: 'Fender Custom Shop Tool Kit', image: 'accessories_46', price: 60, category: 'accessories' },
    { id: 47, name: 'D\'Addario Pro-Winder', image: 'accessories_47', price: 10, category: 'accessories' },
    { id: 48, name: 'Gator Frameworks Guitar Stand', image: 'accessories_48', price: 39, category: 'accessories' },

    // Category 5: synthesizers
    { id: 49, name: 'Yamaha P-125 Digital Piano', image: synthesizers_1, price: 649, category: 'synthesizers' },
    { id: 50, name: 'Roland FP-30X', image: synthesizers_2, price: 749, category: 'synthesizers' },
    { id: 51, name: 'Korg B2SP Digital Piano', image: synthesizers_3, price: 549, category: 'synthesizers' },
    { id: 52, name: 'Casio Privia PX-770', image: synthesizers_4, price: 799, category: 'synthesizers' },
    { id: 53, name: 'Nord Piano 4', image:synthesizers_1, price: 2899, category: 'synthesizers' },
    { id: 54, name: 'Roland RD-88', image: synthesizers_2, price: 1199, category: 'synthesizers' },
    { id: 55, name: 'Yamaha YDP-144', image: synthesizers_3, price: 999, category: 'synthesizers' },
    { id: 56, name: 'Casio CT-S300', image:synthesizers_4, price: 149, category: 'synthesizers' },
    { id: 57, name: 'Korg Grandstage', image: synthesizers_1, price: 2299, category: 'synthesizers' },
    { id: 58, name: 'Roland FP-90X', image: synthesizers_2, price: 1999, category: 'synthesizers' },
    { id: 59, name: 'Yamaha CP88', image: synthesizers_3, price: 2499, category: 'synthesizers' },
    { id: 60, name: 'Korg SV-2S', image: synthesizers_4, price: 2199, category: 'synthesizers' }
];

export default all_products;

