import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { toLeft } from 'ember-animated/transitions/move-over';

export default class CarouselBackgroundComponent extends Component {

  artistPhotos = [
    { name: "Aaron Bezzina",
      photos: [
        {
          description: "wooden weight room",
          url: "https://i.imgur.com/uofIkmn.jpg",
          credit: "Norbert Attard"
        },
        {
          description: "wooden spiky table",
          url: "https://i.imgur.com/his1nV2.jpg",
          credit: "Norbert Attard"
        },
      ]
    },
    { name: "Alex Mirutziu",
      photos: [
        {
          description: "wide stance pose",
          credit: "Alex Mirutziu",
          url: "https://i.imgur.com/UED7QKl.jpg"
        },
        {
          description: "dabbing",
          credit: "Alex Mirutziu",
          url: "https://i.imgur.com/DZHjND3.jpg"
        },
      ]
    },
    { name: "Barbara Maria Neu",
      photos: [
        {
          description: "sitting in booth with clarinet lying on table",
          url: "https://i.imgur.com/Tmqjbny.jpg",
          credit: "Igor Ripak"
        },
        {
          description: "leaning against pool table",
          url: "https://i.imgur.com/pwky5wg.jpg",
          credit: "Igor Ripak"
        },
        {
          description: "sitting in booth with clarinet *standing* on table",
          url: "https://i.imgur.com/wkOtt1e.jpg",
          credit: "Igor Ripak"
        },
        {
          description: "leaning into ivy-covered wall",
          url: "https://i.imgur.com/ZQdDRYA.jpg",
          credit: "Tasha Hauber"
        },
      ]
    },
    { name: "Emmanuel Massillon",
      photos: [
        {
          description: "holding work",
          url: "https://i.imgur.com/71g48Zb.jpg",
          credit: "Ryan Cosbert"
        },
        {
          description: "standing among work, US flag",
          url: "https://i.imgur.com/TuYDX5J.jpg",
          credit: "Ryan Cosbert"
        },
        {
          description: "using sander",
          url: "https://i.imgur.com/v1wQwFu.jpg",
          credit: "Ryan Cosbert"
        },
        {
          description: "with gloves, making something black",
          url: "https://i.imgur.com/MAbYOFm.jpg",
          credit: "Ryan Cosbert"
        },
      ]
    },
    { name: "Emily Shanahan",
      photos: [
        {
          description: "rooftop portrait",
          url: "https://i.imgur.com/CIQiEN1.jpg",
          credit: "Michael Faciejew"
        },
        {
          description: "Siri bracelet",
          credit: "Emily Shanahan",
          url: "https://i.imgur.com/ZzGUOSP.jpg"
        },
        {
          description: "vents among ivy wall",
          credit: "Emily Shanahan",
          url: "https://i.imgur.com/tZKPrU4.jpg"
        },
      ]
    },
    { name: "Eren Aksu",
      photos: [
        {
          description: "Eren looking into screen",
          credit: "Eren Aksu",
          url: "https://i.imgur.com/7pMJGvf.jpg"
        },
        {
          description: "Eren holding boom mic",
          credit: "Eren Aksu",
          url: "https://i.imgur.com/6VqFNhL.jpg"
        },
      ]
    },
    { name: "FOQL",
      photos: [
        {
          description: "purple background djing",
          url: "https://i.imgur.com/aOAZg62.jpg",
          credit: "Philipp Schewe"
        },
        {
          description: "b/w djing",
          url: "https://i.imgur.com/63pjW1Y.jpg",
          credit: "Slavinsky Vasiliy"
        },
      ]
    },
    { name: "Gabrielė Gervickaitė",
      photos: [
        {
          description: "portrait among people in swimsuits",
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/VSwH22k.jpg"
        },
        {
          description: "portrait in snow, facing camera",
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/CM4TKJV.jpg"
        },
        {
          description: "portrait in snow, facing away",
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/Tzsklra.jpg"
        },
        {
          description: "barn slats photo",
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/O1nXkds.jpg"
        },
        {
          description: "face wrapped in bandages",
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/6FUDTso.jpg"
        },
        {
          description: "plastic arms",
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/7LoFg5I.jpg"
        },
        {
          description: "legs photo",
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/qA9YrIR.jpg"
        },
      ]
    },
    { name: "H. Lan Thao Lam",
      photos: [
        {
          description: "with figurine",
          credit: "H. Lan Thao Lam",
          url: "https://i.imgur.com/Ds2kyoR.jpg"
        },
        {
          description: "sawing wood",
          url: "https://i.imgur.com/MuH12IH.jpg",
          credit: "Lana Lin"
        },
      ]
    },
    { name: "Kyle Hittmeier",
      photos: [
        {
          description: "b/w closeup portrait",
          credit: "Kyle Hittmeier",
          url: "https://i.imgur.com/RjvEHpS.jpg"
        },
        {
          description: "paper trumpets in iron fence",
          credit: "Kyle Hittmeier",
          url: "https://i.imgur.com/qYQmLOI.jpg"
        },
        {
          description: "mosaic padlock",
          credit: "Kyle Hittmeier",
          url: "https://i.imgur.com/LvD2ACO.jpg"
        },
      ]
    },
    { name: "Kris Grey",
      photos: [
        {
          description: "balancing book on head",
          url: "https://i.imgur.com/wrlhzzW.jpg",
          credit: "Courtesy the artist with Daniel King"
        },
        {
          description: "nude",
          url: "https://i.imgur.com/qi7KzBt.jpg",
          credit: "Courtesy the artist with Sara Jimenez"
        },
        {
          description: "with wedding dress",
          url: "https://i.imgur.com/UvrQxiT.jpg",
          credit: "Courtesy the artist in collaboration with Maya Ciarrocchi"
        },
      ]
    },
    { name: "Marie Lukáčová",
      photos: [
        {
          description: "hanging out",
          credit: "Marie Lukáčová",
          url: "https://i.imgur.com/J2UoOUg.jpg"
        },
        {
          description: "silver pearl thing",
          credit: "Marie Lukáčová",
          url: "https://i.imgur.com/I6YsklN.jpg"
        },
        {
          description: "feet",
          credit: "Marie Lukáčová",
          url: "https://i.imgur.com/Mln4MpK.jpg"
        },
      ]
    },
    { name: "Mo Kong",
      photos: [
        {
          description: "portrait doing work",
          credit: "Mo Kong",
          url: "https://i.imgur.com/2ZVYhnj.jpg"
        },
        {
          description: "domestic development art",
          credit: "Mo Kong",
          url: "https://i.imgur.com/z1S5tLi.jpg"
        },
        {
          description: "sand america?",
          credit: "Mo Kong",
          url: "https://i.imgur.com/UqVhPeA.jpg"
        },
      ]
    },
    { name: "Olesja Katšanovskaja-Münd",
      photos: [
        {
          description: "closeup portrait with plastic wrap",
          url: "https://i.imgur.com/GLQDvdx.jpg",
          credit: "Roman Münd"
        },
        {
          description: "among wrapped things",
          url: "https://i.imgur.com/CYXfddT.jpg",
          credit: "Roman Münd"
        },
        {
          description: "with clay mask",
          url: "https://i.imgur.com/ZoGNzfs.jpg",
          credit: "Roman Münd"
        },
      ]
    },
    { name: "Sanne De Wilde",
      photos: [
        {
          description: "color blind island",
          credit: "Sanne De Wilde",
          url: "https://i.imgur.com/wYNAQqZ.jpg"
        },
        {
          description: "in covid mask", 
          credit: "Sanne De Wilde",
          url: "https://i.imgur.com/aASe0CN.jpg"
        },
      ]
    },
    { name: "Sheila Maldonado",
      photos: [
        {
          description: "on bicycle",
          credit: "Sheila Maldonado",
          url: "https://i.imgur.com/8GoEEuj.jpg"
        },
        {
          description: "reading",
          credit: "Sheila Maldonado",
          url: "https://i.imgur.com/WTfu5z0.jpg"
        },
        {
          description: "dancing",
          url: "https://i.imgur.com/ob1tUdE.jpg",
          credit: "Ying Liu",
        },
      ]
    },
    { name: "Sophie Guisset",
      photos: [
        {
          description: "two people grieving",
          credit: "Sophie Guisset",
          url: "https://i.imgur.com/cxfFnp4.jpg"
        },
        {
          description: "playing tennis",
          url: "https://i.imgur.com/L7lHeTy.jpg",
          credit: "Fani Bihr"
        },
        {
          description: "closeup portrait",
          url: "https://i.imgur.com/BALAwIA.jpg",
          credit: "Julien Carlier"
        },
      ]
    },
    { name: "Sydney Shavers",
      photos: [
        {
          description: "pointing butt at window",
          url: "https://i.imgur.com/sn9FWBG.jpg",
          credit: "Lyric Wills",
        },
        {
          description: "in Marie Antoinette wig",
          credit: "Sydney Shavers",
          url: "https://i.imgur.com/JbgDC4i.jpg"
        },
        {
          description: "on green chair",
          credit: "Sydney Shavers",
          url: "https://i.imgur.com/Smuchx2.jpg"
        },
      ]
    },
    { name: "Will Calhoun",
      photos: [
        {
          description: "holding iphone at drum kit",
          credit: "Will Calhoun",
          url: "https://i.imgur.com/FispKT1.jpg"
        },
        {
          description: "happy playing drums",
          credit: "Will Calhoun",
          url: "https://i.imgur.com/lD6qppw.jpg"
        },
        {
          description: "relaxing",
          credit: "Will Calhoun",
          url: "https://i.imgur.com/sKfkp7g.jpg"
        },
      ]
    },
    { name: "Yi Hsuan Lai",
      photos: [
        {
          description: "exhibition shot",
          url: "https://i.imgur.com/7kpUHMj.jpg",
          credit: "Tooraj Khamenehzadeh",
        },
        {
          description: "small figurines",
          credit: "Yi Hsuan Lai",
          url: "https://i.imgur.com/nprfuua.jpg"
        },
        {
          description: "portrait holding figurine",
          credit: "Yi Hsuan Lai",
          url: "https://i.imgur.com/WY6Dh3D.jpg"
        },
      ]
    },
  ]

  @tracked
  activePhoto = this.randomPhoto;

  @action
  rules() {
    return toLeft;
  }

  get randomPhoto() {
    const artist = this.artistPhotos[Math.floor(Math.random() * this.artistPhotos.length)];
    return artist.photos[Math.floor(Math.random() * artist.photos.length)];
  }

  get delay() {
    return Math.floor(Math.random() * 5000 + 1000 + this.transitionDuration);
  }

  transitionDuration = 900;

  @action
  startCarousel() {
    setTimeout(() => {
      this.activePhoto = this.randomPhoto;
      this.startCarousel();
    }, this.delay)
  }
}
