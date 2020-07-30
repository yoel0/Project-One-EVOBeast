# EVO Beast

EVO Beast was an original game idea, birthed by Yoel Morad from the duress and toils of the roughest cohort to exist in Software Engineering Imersives the 713 Cutthroats, this is the Blueprint of what may quite possibly be the greatest browser window game to grace the pixels on your screen babes.

## EVO Beast Story

Our Story features the "Evo Beast", a heroine protagonist who traverses the world devouring rabbit's, to gain power and evolve in to her stronger form so that she can combat the "Hunter" the human evil that wants to destroy the Evo Beast for no real reason other than the misconception that the Evo Beast is evil, lets think about that for a minute..
how do you think the concept of our game touches on real societal issues? #FoodForMunching.

## Built With Languages

- HTML5
- HTML5 Canvas
- CSS3
- JavaScript

### Cool Code Snippets of Delicious

CSS3 Rotate/Vert Manipulation for .hack psuedo Matrix Game Title

```css
h4 {
  font-family: "didot";
  color: whitesmoke;
  font-size: 20px;
  margin: 0;
  writing-mode: vertical-lr;
  text-align: center;
  line-height: 0.9;
}

.rotate {
  transform: rotate(180deg);
}

.game-title {
  display: grid;
  height: 20vh;
  justify-content: center;
  align-content: center;
  grid-template-columns: max-content max-content;
}
```

HTML5 Canvas, most tend to overlook how beautiful the simplicity in this DoubleDecker cake is

```html
<canvas id="game"><!-- play it, a game --></canvas>
```

The moment our girl evolves lets breathe the essence of that in darling

```javascript
// if the hero's bottom value is > rabbit's top value
if (
  hero.x + hero.width > rabbit.x &&
  hero.x < rabbit.x + rabbit.width &&
  hero.y + hero.height > rabbit.y &&
  hero.y < rabbit.y + rabbit.height
) {
  rabbit.alive = false;
  // add killcounter
  killcounter++;
  // when killcounter = 8 then evolve
  if (killcounter >= 8) {
    hero.evolved = true;
  }
}
```

## Deployment

This Game Project was deployed using github.io [EVOBeast](https://yoel0.github.io/Project-One-EVOBeast/)

## Contributing

This game project is absolutely created by the gamer for the gamers! Open source, and FREE for anyone that wants to contribute or submit pull requests, lets turn EVOBeast in to a sensational piece of pie, what I present to you is the skeletal frame of which we can build Rome on!

## Versioning

We are currently at Version 0.0 lets make that bad-boy 0.1 😈

## Authors

- **Yoel Morad** - _Initial work_ - [yoel0](https://github.com/yoel0)

## License

This project is license FREE let me get that drumroll for the PEOPLE, yea boi.

## Acknowledgments

- Hat tip to Rome the General of the Carpatian Mountains! for contributing the "Spawn Rabbits" function concept.<br />
  [RomeBell](https://github.com/romebell)

- Full on courtsies and bowdowns to my Coding Heroine, Lemon Squeezy The REAL YEEZY Garrett, for contributing styling knowledge bombs and letting me know that I can truly be the best nerd possible, contingent I accept and let my inner nerd HOWL. rawr~ <br />
  [LemonMarieGarrett](https://github.com/egarrett94)

- Hommage to Sensei TAYTAY for her priceless feedback and input upon the Journey of Evo Beast, if not for her Evo Beast may have never been taken by the horns and rid like the bull it truly is, she pushed me and believed in me and for that no thanks can be thanks enough.<br />
  [TaylorDarneille](https://github.com/TaylorDarneille)

- What can I really say next about this TITAN in the water, other then why this man is not the Tech Lead for every company out there in existence baffles me, his technical approach and capacity to withstand hordes of complexities while shuffling through them like he was born for this should have earned him the Medal of Honor at this point.<br />
  [PeteFitton](https://github.com/petefitton)

- And lastly we have the CSS Sorcerer the Gaming Berserker the one the only the truest Bublbasaur out there Adam motherbleeping Honore drop that mic!!! this man has inspired my thought process and flow so much that there are not enough words to describe it, he has been the catalyst and conduit that birthed my creative fire, his a monster but most importantly a Legend.<br />
  [AdamHonore](https://github.com/ahonore42)
