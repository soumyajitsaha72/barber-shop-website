import { Injectable } from '@angular/core';
import { Barber } from '../model/barber';
import { Service } from '../model/service';

@Injectable({ providedIn: 'root' })
export class BarberShop {
  firstName = 'Jack';
  lastName = 'Robinson';
  tagLine = "Let's make you Handsome!";

  landingPageServices = [
    {
      name: 'Haircut',
      imgUrl: '/assets/sissors.png',
      price: 55,
    },
    {
      name: 'Shave',
      imgUrl: '/assets/razor.png',
      price: 65,
    },
    {
      name: 'Facial',
      imgUrl: '/assets/comb.png',
      price: 155,
    },
  ];

  barbers = [
    new Barber(
      1,
      'John Stone',
      '/assets/background.png',
      'Shave',
      '/assets/razor.png',
      "John is very good in shaving. He has over 20 Years of experience. He is also good in music. He has numerous awards in that field.\nLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Khepa",
      undefined,
      undefined,
      "C/O Sabarno Sarkar, Buddhihin Park,Kolkata 700001"
    ),
    new Barber(
      2,
      'Jack Dawson',
      'data:image/jpeg;base64,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',
      'Haircut',
      '/assets/sissors.png',
      'John is very good in shaving. He has over 20 Years of experience. He is also good in music. He has numerous awards in that field.',
      "Lelha",
      29,
      undefined,
      "C/O Sabarno Sarkar, Buddhihin Park,Kolkata 700001"
    ),
    new Barber(
      3,
      'Willam Mitchell',
      'https://i.pinimg.com/originals/89/90/e0/8990e0304c44794197af164ab0138011.jpg',
      'Facial',
      '/assets/comb.png',
      'John is very good in shaving. He has over 20 Years of experience. He is also good in music. He has numerous awards in that field.',
      "Babu",
      undefined,
      1234567890,
      "C/O Sabarno Sarkar, Buddhihin Park,Kolkata 700001"
    ),
  ];

  services = [
    new Service(
      '/assets/cut.jpeg',
      'The Cut',
      50,
      'THE BEST SHAVE OF YOUR LIFE!',
      "Let our barbers wash away the outside stresses, rest your feet and enjoy a great ambiance and excellent service from our barbers. \n Whether you know the look you want or need a bit of guidance, our barbers will hook it up. Our blades are as sharp as their handlers, and believe us - there is nothing they can't handle."
    ),
    new Service(
      '/assets/shave.jpeg',
      'The Shave',
      60,
      'THE BEST SHAVE OF YOUR LIFE!',
      'There is nothing wrong with men getting a bit of pampering and grooming. This classic treatment will give you just that. Our barbers will hook you up with a mean shave using traditional razors giving you an immaculate shave.\nNeck fluff cleaned up and eyebrows trimmed. All of this is then topped off with a hot towel treatment, which leaves a smooth sensation on your face.'
    ),
    new Service(
      '/assets/cut-design.jpeg',
      'The Cut & Design starting at',
      50,
      'SHOW YOUR PERSONALITY',
      "Let our barbers bring your unique personality to life with a clean cut and some bad ass design. Whether you know what you're going for, or you want to let our trend setting barbers give you a bit of guidance, our barbers will hook it up.\nOur blades are as sharp as their handlers, and believe us - there is nothing they can't handle."
    ),
    new Service(
      '/assets/facial.jpeg',
      'The Facial',
      100,
      'GO ALL OUT AND GET PAMPERED',
      'There is nothing wrong with treating yourself to some much needed relaxation and the ultimate grooming service. Rest your feet and let our barbers hook you up with a clean cut, and a mean shave using traditional razors.\nYou will get all your neck fluff cleaned up, eyebrows and ears trimmed. All of this is then topped off with a hot towel treatment, which leaves a smooth sensation on your face.'
    ),
  ];

  contactUs = {
    address : "Buddhisodon Park, Sabarnor Barir Samne, Belur, Howrah, India - 700001",
    email : "xyz@gmail.com",
    mobile : "1234567890"
  }

  socialMediaLinks = {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    github: '#',
  };
}
