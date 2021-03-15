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
          url: "https://i.imgur.com/kMFr1gf.jpeg",
          credit: "Norbert Attard"
        },
        {
          description: "wooden spiky table",
          url: "https://i.imgur.com/JPMD94n.jpeg",
          credit: "Norbert Attard"
        },
        {
          description: "portrait",
          url: "https://i.imgur.com/JUdoAfw.jpeg"
        },
      ]
    },
    { name: "Alex Mirutziu",
      photos: [
        {
          description: "wide stance pose",
          credit: "Alex Mirutziu",
          url: "https://i.imgur.com/mBWjmVF.jpeg"
        },
        {
          description: "dabbing",
          credit: "Alex Mirutziu",
          url: "https://i.imgur.com/xauOFdI.jpeg"
        },
      ]
    },
    { name: "Barbara Maria Neu",
      photos: [
        {
          description: "sitting in booth with clarinet lying on table",
          url: "https://i.imgur.com/ij3o3tL.jpeg",
          credit: "Igor Ripak"
        },
        {
          description: "leaning against pool table",
          url: "https://i.imgur.com/BQJ12vq.jpeg",
          credit: "Igor Ripak"
        },
        {
          description: "leaning into ivy-covered wall",
          url: "https://i.imgur.com/xa7KrO7.jpeg",
          credit: "Tasha Hauber"
        },
      ]
    },
    { name: "Emmanuel Massillon",
      photos: [
        {
          description: "standing among work, US flag",
          url: "https://i.imgur.com/vFEKNug.jpeg",
          credit: "Ryan Cosbert"
        },
        {
          description: "using sander",
          url: "https://i.imgur.com/3qes8GB.jpeg",
          credit: "Ryan Cosbert"
        },
        {
          description: "with gloves, making something black",
          url: "https://i.imgur.com/3xAxCMN.jpeg",
          credit: "Ryan Cosbert"
        },
      ]
    },
    { name: "Emily Shanahan",
      photos: [
        {
          description: "rooftop portrait",
          url: "https://i.imgur.com/7P7PSqC.jpeg",
          credit: "Michael Faciejew"
        },
        {
          description: "Siri bracelet",
          credit: "Emily Shanahan",
          url: "https://i.imgur.com/upSuZpe.jpeg"
        },
        {
          description: "vents among ivy wall",
          credit: "Emily Shanahan",
          url: "https://i.imgur.com/Tkdxw8h.jpeg"
        },
      ]
    },
    { name: "Eren Aksu",
      photos: [
        {
          description: "Eren holding boom mic",
          credit: "Eren Aksu",
          url: "https://i.imgur.com/avTE4sQ.jpeg"
         },
        {
          description: "Still from film of people on beach",
          credit: "Eren Aksu",
          url: "https://i.imgur.com/wUgI5AT.jpeg"
        },
        {
          description: "Eren looking into screen",
          credit: "Eren Aksu",
          url: "https://i.imgur.com/avTE4sQ.jpeg"
        },
      ]
    },
    { name: "FOQL",
      photos: [
        {
          description: "purple background djing",
          url: "https://i.imgur.com/ayB5T7U.jpeg",
          credit: "Philipp Schewe"
        },
        {
          description: "b/w djing",
          url: "https://i.imgur.com/QgCldr0.jpeg",
          credit: "Slavinsky Vasiliy"
        },
      ]
    },
    { name: "Gabrielė Gervickaitė",
      photos: [
        {
          description: "portrait among people in swimsuits",
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/Mj1vCsg.jpeg"
        },
        {
          description: "plastic arms",
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/Wl2AnGR.jpeg"
        },
        {
          description: "legs photo",
          credit: "Gabrielė Gervickaitė",
          url: "https://i.imgur.com/b4ifpY4.jpeg"
        },
      ]
    },
    { name: "H. Lan Thao Lam",
      photos: [
        {
          description: "with figurine",
          credit: "H. Lan Thao Lam",
          url: "https://i.imgur.com/lhl0Tqu.jpeg"
        },
        {
          description: "sawing wood",
          url: "https://i.imgur.com/4ShNRSH.jpeg",
          credit: "Lana Lin"
        },
      ]
    },
    { name: "Kyle Hittmeier",
      photos: [
        {
          description: "b/w closeup portrait",
          credit: "Kyle Hittmeier",
          url: "https://i.imgur.com/HbAWLVM.jpeg"
        },
        {
          description: "paper trumpets in iron fence",
          credit: "Kyle Hittmeier",
          url: "https://i.imgur.com/FBbSyKt.jpeg"
        },
        {
          description: "mosaic padlock",
          credit: "Kyle Hittmeier",
          url: "https://i.imgur.com/vbjN0tL.jpeg"
        },
      ]
    },
    { name: "Kris Grey",
      photos: [
        {
          description: "balancing book on head",
          url: "https://i.imgur.com/1SJ8yS8.jpeg",
          credit: "Courtesy the artist with Daniel King"
        },
        {
          description: "nude",
          url: "https://i.imgur.com/TMdYmSe.jpeg",
          credit: "Courtesy the artist with Sara Jimenez"
        },
        {
          description: "with wedding dress",
          url: "https://i.imgur.com/bJHGYq4.jpeg",
          credit: "Courtesy the artist in collaboration with Maya Ciarrocchi"
        },
      ]
    },
    { name: "Marie Lukáčová",
      photos: [
        {
          description: "hanging out",
          credit: "Marie Lukáčová",
          url: "https://i.imgur.com/MvVOfpV.jpeg"
        },
        {
          description: "silver pearl thing",
          credit: "Marie Lukáčová",
          url: "https://i.imgur.com/ZH06xOI.jpeg"
        },
        {
          description: "feet",
          credit: "Marie Lukáčová",
          url: "https://i.imgur.com/xZotVtI.jpeg"
        },
      ]
    },
    { name: "Mo Kong",
      photos: [
        {
          description: "portrait doing work",
          credit: "Mo Kong",
          url: "https://i.imgur.com/p1HDNCM.jpeg"
        },
        {
          description: "domestic development art",
          credit: "Mo Kong",
          url: "https://i.imgur.com/TWSv0wg.jpeg"
        },
        {
          description: "sand america?",
          credit: "Mo Kong",
          url: "https://i.imgur.com/o3Fx5ig.jpeg"
        },
      ]
    },
    { name: "Olesja Katšanovskaja-Münd",
      photos: [
        {
          description: "closeup portrait with plastic wrap",
          url: "https://i.imgur.com/t0ntPh6.jpeg",
          credit: "Roman Münd"
        },
        {
          description: "among wrapped things",
          url: "https://i.imgur.com/xZbmcqd.jpeg",
          credit: "Roman Münd"
        },
        {
          description: "with clay mask",
          url: "https://i.imgur.com/EOPIESt.jpeg",
          credit: "Roman Münd"
        },
      ]
    },
    { name: "Sanne De Wilde",
      photos: [
        {
          description: "color blind island",
          credit: "Sanne De Wilde",
          url: "https://i.imgur.com/b4i70kn.jpeg"
        },
        {
          description: "flash photograph", 
          credit: "Sanne De Wilde",
          url: "https://i.imgur.com/tc9bQz3.jpeg"
        },
        {
          description: "in covid mask", 
          credit: "Sanne De Wilde",
          url: "https://i.imgur.com/hua3Uej.jpeg"
        },
      ]
    },
    { name: "Sheila Maldonado",
      photos: [
        {
          description: "on bicycle",
          credit: "Sheila Maldonado",
          url: "https://i.imgur.com/pAv41eI.jpeg"
        },
        {
          description: "reading",
          credit: "Sheila Maldonado",
          url: "https://i.imgur.com/O0nWO3k.jpeg"
        },
        {
          description: "dancing",
          url: "https://i.imgur.com/Gk1c1ms.jpeg",
          credit: "Ying Liu",
        },
      ]
    },
    { name: "Sophie Guisset",
      photos: [
        {
          description: "two people grieving",
          credit: "Sophie Guisset",
          url: "https://i.imgur.com/xqBZwfF.jpeg"
        },
        {
          description: "playing tennis",
          url: "https://i.imgur.com/466gWk5.jpeg",
          credit: "Fani Bihr"
        },
        {
          description: "closeup portrait",
          url: "https://i.imgur.com/JMIjzJ2.jpeg",
          credit: "Julien Carlier"
        },
      ]
    },
    { name: "Sydney Shavers",
      photos: [
        {
          description: "pointing butt at window",
          url: "https://i.imgur.com/8REhqXY.jpeg",
          credit: "Lyric Wills",
        },
        {
          description: "in Marie Antoinette wig",
          credit: "Sydney Shavers",
          url: "https://i.imgur.com/JEVMvAh.jpeg"
        },
      ]
    },
    { name: "Will Calhoun",
      photos: [
        {
          description: "holding iphone at drum kit",
          credit: "Will Calhoun",
          url: "https://i.imgur.com/Q3qycC7.jpeg"
        },
        {
          description: "happy playing drums",
          credit: "Will Calhoun",
          url: "https://i.imgur.com/GoGO3Di.jpeg"
        },
        {
          description: "relaxing",
          credit: "Will Calhoun",
          url: "https://i.imgur.com/es4N75s.jpeg"
        },
      ]
    },
    { name: "Yi Hsuan Lai",
      photos: [
        {
          description: "exhibition shot",
          url: "https://i.imgur.com/uMWF5JJ.jpeg",
          credit: "Tooraj Khamenehzadeh",
        },
        {
          description: "small figurines",
          credit: "Yi Hsuan Lai",
          url: "https://i.imgur.com/LGoiY4d.jpeg"
        },
        {
          description: "portrait holding figurine",
          credit: "Yi Hsuan Lai",
          url: "https://i.imgur.com/hlSPRv1.jpeg"
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
