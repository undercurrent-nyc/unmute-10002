import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { toLeft } from 'ember-animated/transitions/move-over';

export default class CarouselBackgroundComponent extends Component {

  artistPhotos = [
    { name: "Aaron Bezzina",
      photos: [
        {
          url: "https://i.imgur.com/uofIkmn.jpg",
          credit: "Norbert Attard"
        },
        {
          url: "https://i.imgur.com/his1nV2.jpg",
          credit: "Norbert Attard"
        },
      ]
    },
    { name: "Alex Mirutziu",
      photos: [
        {
          credit: "Alex Mirutziu",
          url: "https://i.imgur.com/UED7QKl.jpg"
        },
        {
          credit: "Alex Mirutziu",
          url: "https://i.imgur.com/DZHjND3.jpg"
        },
      ]
    },
    { name: "Barbara Maria Neu",
      photos: [
        {
          url: "https://i.imgur.com/Tmqjbny.jpg",
          credit: "Igor Ripak"
        },
        {
          url: "https://i.imgur.com/pwky5wg.jpg",
          credit: "Igor Ripak"
        },
        {
          url: "https://i.imgur.com/wkOtt1e.jpg",
          credit: "Igor Ripak"
        },
        {
          url: "https://i.imgur.com/ZQdDRYA.jpg",
          credit: "Tasha Hauber"
        },
      ]
    },
    { name: "Emmanuel Massillon",
      photos: [
        {
          url: "https://i.imgur.com/71g48Zb.jpg",
          credit: "Ryan Cosbert"
        },
        {
          url: "https://i.imgur.com/TuYDX5J.jpg",
          credit: "Ryan Cosbert"
        },
        {
          url: "https://i.imgur.com/v1wQwFu.jpg",
          credit: "Ryan Cosbert"
        },
        {
          url: "https://i.imgur.com/6VqFNhL.jpg",
          credit: "Ryan Cosbert"
        },
      ]
    },
    { name: "Emily Shanahan",
      photos: [
        {
          credit: "Emily Shanahan",
          url: "https://i.imgur.com/O1k2ZjU.jpg"
        },
        {
          url: "https://i.imgur.com/CIQiEN1.jpg",
          credit: "Michael Faciejew"
        },
      ]
    },
    { name: "Eren Aksu",
      photos: [
        {
          credit: "Eren Aksu",
          url: "https://i.imgur.com/7pMJGvf.jpg"
        },
        {
          credit: "Eren Aksu",
          url: "https://i.imgur.com/6VqFNhL.jpg"
        },
      ]
    },
    { name: "FOQL",
      photos: [
        {
          url: "https://i.imgur.com/aOAZg62.jpg",
          credit: "Philipp Schewe"
        },
        {
          url: "https://i.imgur.com/63pjW1Y.jpg",
          credit: "Slavinsky Vasiliy"
        },
      ]
    },
    { name: "Gabrielė Gervickaitė",
      photos: [
        {
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/igeNpd9.jpg"
        },
        {
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/CM4TKJV.jpg"
        },
        {
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/Tzsklra.jpg"
        },
      ]
    },
    { name: "H. Lan Thao Lam",
      photos: [
        {
          credit: "H. Lan Thao Lam",
          url: "https://i.imgur.com/Ds2kyoR.jpg"
        },
        {
          url: "https://i.imgur.com/MuH12IH.jpg",
          credit: "Lana Lin"
        },
      ]
    },
    { name: "Kyle Hittmeier",
      photos: [
        {
          credit: "Kyle Hittmeier",
          url: "https://i.imgur.com/RjvEHpS.jpg"
        },
        {
          credit: "Kyle Hittmeier",
          url: "https://i.imgur.com/qYQmLOI.jpg"
        },
        {
          credit: "Kyle Hittmeier",
          url: "https://i.imgur.com/LvD2ACO.jpg"
        },
      ]
    },
    { name: "Kris Grey",
      photos: [
        {
          url: "https://i.imgur.com/wrlhzzW.jpg",
          credit: "Courtesy the artist with Daniel King"
        },
        {
          url: "https://i.imgur.com/qi7KzBt.jpg",
          credit: "Courtesy the artist with Sara Jimenez"
        },
        {
          url: "https://i.imgur.com/UvrQxiT.jpg",
          credit: "Courtesy the artist in collaboration with Maya Ciarrocchi"
        },
      ]
    },
    { name: "Marie Lukáčová",
      photos: [
        {
          credit: "Marie Lukáčová",
          url: "https://i.imgur.com/J2UoOUg.jpg"
        },
        {
          credit: "Marie Lukáčová",
          url: "https://i.imgur.com/I6YsklN.jpg"
        },
        {
          credit: "Marie Lukáčová",
          url: "https://i.imgur.com/Mln4MpK.jpg"
        },
      ]
    },
    { name: "Mo Kong",
      photos: [
        {
          credit: "Mo Kong",
          url: "https://i.imgur.com/2ZVYhnj.jpg"
        },
        {
          credit: "Mo Kong",
          url: "https://i.imgur.com/z1S5tLi.jpg"
        },
        {
          credit: "Mo Kong",
          url: "https://i.imgur.com/UqVhPeA.jpg"
        },
      ]
    },
    { name: "Olesja Katšanovskaja-Münd",
      photos: [
        {
          url: "https://i.imgur.com/pB8Wzu8.jpg",
          credit: "Roman Münd"
        },
        {
          url: "https://i.imgur.com/fLMBi8S.jpg",
          credit: "Roman Münd"
        },
        {
          credit: "Olesja Katšanovskaja-Münd",
          url: "https://i.imgur.com/VOGQgPF.jpg"
        },
      ]
    },
    { name: "Sanne De Wilde",
      photos: [
        {
          credit: "Sanne De Wilde",
          url: "https://i.imgur.com/wYNAQqZ.jpg"
        },
        {
          credit: "Sanne De Wilde",
          url: "https://i.imgur.com/tXJUrmS.jpg"
        },
        {
          credit: "Sanne De Wilde",
          url: "https://i.imgur.com/aASe0CN.jpg"
        },
      ]
    },
    { name: "Sheila Maldonado",
      photos: [
        {
          credit: "Sheila Maldonado",
          url: "https://i.imgur.com/8GoEEuj.jpg"
        },
        {
          credit: "Sheila Maldonado",
          url: "https://i.imgur.com/WTfu5z0.jpg"
        },
        {
          url: "https://i.imgur.com/ob1tUdE.jpg",
          credit: "Ying Liu",
        },
      ]
    },
    { name: "Sophie Guisset",
      photos: [
        {
          credit: "Sophie Guisset",
          url: "https://i.imgur.com/cxfFnp4.jpg"
        },
        {
          url: "https://i.imgur.com/L7lHeTy.jpg",
          credit: "Fani Bihr"
        },
        {
          url: "https://i.imgur.com/BALAwIA.jpg",
          credit: "Julien Carlier"
        },
      ]
    },
    { name: "Sydney Shavers",
      photos: [
        {
          url: "https://i.imgur.com/sn9FWBG.jpg",
          credit: "Lyric Wills",
        },
        {
          credit: "Sydney Shavers",
          url: "https://i.imgur.com/JbgDC4i.jpg"
        },
        {
          credit: "Sydney Shavers",
          url: "https://i.imgur.com/Smuchx2.jpg"
        },
      ]
    },
    { name: "Will Calhoun",
      photos: [
        {
          credit: "Will Calhoun",
          url: "https://i.imgur.com/FispKT1.jpg"
        },
        {
          credit: "Will Calhoun",
          url: "https://i.imgur.com/lD6qppw.jpg"
        },
        {
          credit: "Will Calhoun",
          url: "https://i.imgur.com/sKfkp7g.jpg"
        },
      ]
    },
    { name: "Yi Hsuan Lai",
      photos: [
        {
          url: "https://i.imgur.com/7kpUHMj.jpg",
          credit: "Tooraj Khamenehzadeh",
        },
        {
          credit: "Yi Hsuan Lai",
          url: "https://i.imgur.com/nprfuua.jpg"
        },
        {
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
