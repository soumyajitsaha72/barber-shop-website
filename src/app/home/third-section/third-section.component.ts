import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.css']
})
export class ThirdSectionComponent implements OnInit {

  services = [
    {
      img:"/assets/cut.jpeg",
      name: "The Cut",
      price: 50,
      tag:"THE CLASSIC CUT WITH EXPERT STYLING",
      description: "Let our barbers wash away the outside stresses, rest your feet and enjoy a great ambiance and excellent service from our barbers. \n Whether you know the look you want or need a bit of guidance, our barbers will hook it up. Our blades are as sharp as their handlers, and believe us – there is nothing they can’t handle."
    },
    {
      img:"/assets/shave.jpeg",
      name: "The Shave",
      price: 60,
      tag:"THE BEST SHAVE OF YOUR LIFE!",
      description: "There is nothing wrong with men getting a bit of pampering and grooming. This classic treatment will give you just that. Our barbers will hook you up with a mean shave using traditional razors giving you an immaculate shave.\n Neck fluff cleaned up and eyebrows trimmed. All of this is then topped off with a hot towel treatment, which leaves a smooth sensation on your face."
    },
    {
      img:"/assets/cut-design.jpeg",
      name: "The Cut & Design starting at",
      price: 50,
      tag:"SHOW YOUR PERSONALITY",
      description: "Let our barbers bring your unique personality to life with a clean cut and some bad ass design. Whether you know what you're going for, or you want to let our trend setting barbers give you a bit of guidance, our barbers will hook it up.\n Our blades are as sharp as their handlers, and believe us – there is nothing they can’t handle."
    },
    {
      img:"/assets/facial.jpeg",
      name: "The Facial",
      price: 100,
      tag:"GO ALL OUT AND GET PAMPERED",
      description: "There is nothing wrong with treating yourself to some much needed relaxation and the ultimate grooming service. Rest your feet and let our barbers hook you up with a clean cut, and a mean shave using traditional razors.\n You will get all your neck fluff cleaned up, eyebrows and ears trimmed. All of this is then topped off with a hot towel treatment, which leaves a smooth sensation on your face."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
