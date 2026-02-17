import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true, 
  imports: [CommonModule, ProductCardComponent], 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
    description: 'Новейший флагман 2026 года с титановым корпусом и улучшенной камерой.',
    price: 745000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
    images: ['https://images.kz.prom.st/236113695_w640_h640_smartfon-apple-iphone.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    description: 'Dynamic Island, камера 48 Мп и разъем USB-C.',
    price: 345000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559224311838.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    description: 'Классический дизайн и отличная автономность.',
    price: 265000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/64378385219614.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
  },
  {
    id: 4,
    name: 'Ноутбук Apple MacBook Air 13 2020 MGN63RU/A',
    description: 'Легендарный чип M1, 8 Гб ОЗУ и SSD 256 Гб.',
    price: 365000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/'
  },
  {
    id: 5,
    name: 'Ноутбук Apple MacBook Air 13 2025 MW123',
    description: 'Новинка 2025 года с увеличенной оперативной памятью 16 Гб.',
    price: 685000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/h4a/84964642226206.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000'
  },
  {
    id: 6,
    name: 'Ноутбук Apple MacBook Air 13 2022 MC7X4',
    description: 'Чип M2, обновленный дизайн и MagSafe зарядка.',
    price: 495000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h71/h74/64402636931102.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4-133963854/?c=750000000'
  },
  {
    id: 7,
    name: 'Стайлер Dyson Airwrap HS05 Long',
    description: 'Синий/медный стайлер с дорожным чехлом для длинных волос.',
    price: 285000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hd6/82992821239838.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h01/h3b/65203387858974.jpg'],
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-hs05-long-s-dorozhnym-chehlom-i-rascheskami-stailer-sinii-mednyi-112707564/?c=750000000'
  },
  {
    id: 8,
    name: 'Выпрямитель Dyson Airstrait HT01',
    description: 'Паровой выпрямитель для сушки и выпрямления волос одновременно.',
    price: 245000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/he9/86180844503070.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h30/81180295233566.jpg'],
    link: 'https://kaspi.kz/shop/p/dyson-airstrait-ht01-s-rascheskami-i-chehlom-parovoi-vyprjamitel--120012746/?c=750000000'
  },
  {
    id: 9,
    name: 'Стайлер Dyson Airwrap id HS08',
    description: 'Розовое золото, интеллектуальная система завивки.',
    price: 315000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pa2/65259706.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h9d/h67/83812234035230.jpg'],
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-id-hs08-601848-01-rozovoe-zoloto-stailer-rozovyi-145797988/?c=750000000'
  },
  {
    id: 10,
    name: 'Фен Dyson Supersonic HD08 серый/розовый',
    description: 'Мощный цифровой двигатель и интеллектуальный контроль температуры для блеска волос.',
    price: 215000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/hbf/86283948130334.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h23/h3d/81180295233566.jpg'],
    link: 'https://kaspi.kz/shop/p/dyson-supersonic-hd08-fen-seryi-rozovyi-107135219/?c=750000000'
  }
];
}