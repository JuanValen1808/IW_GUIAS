// Usamos imágenes locales o representativas de Ñuble
import imgQueso from '../assets/img/quesos-chillan.jpg'
import imgMiel from '../assets/img/miel-chillan.jpg'
import imgTejidos from '../assets/img/tejidos-chillan.jpg'

export const productos = [
  {
    id: 1,
    nombre: 'Queso Chanco de San Carlos',
    precio: 4500,
    categoria: 'Lácteos',
    imagen: imgQueso,
    descripcion: 'Queso artesanal de vaca, maduración media, tradicional de la provincia de Punilla.'
  },
  {
    id: 2,
    nombre: 'Miel de Quillón',
    precio: 3500,
    categoria: 'Miel',
    imagen: imgMiel,
    descripcion: 'Miel multifloral de productores locales del Valle del Sol, 100% natural.'
  },
  {
    id: 3,
    nombre: 'Poncho tejido de Coihueco',
    precio: 22000,
    categoria: 'Textil',
    imagen: imgTejidos,
    descripcion: 'Poncho de lana natural, tejido a telar por artesanas de la zona cordillerana.'
  },
  // 4° Producto adicional requerido por el desafío de la guía
  {
    id: 4,
    nombre: 'Greda Negra de Quinchamalí',
    precio: 12500,
    categoria: 'Artesanía',
    imagen: imgTejidos, // Reutiliza la imagen base mientras agregas una propia
    descripcion: 'Pieza de greda negra modelada y pulida a mano con guitarrera tradicional, Patrimonio Cultural de Ñuble.'
  }
]