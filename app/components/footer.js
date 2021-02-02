import Component from '@glimmer/component';
import { shuffle } from "d3-array";

export default class FooterComponent extends Component {
  get logos() {
    const shuffledCountries = shuffle([
      {
        website: "https://www.sjch.cz/en/",
        name: "chalupecky",
      },
      {
        website: "https://new-york.czechcentres.cz",
        name: "czech",
      },
      {
        website: "https://newyork.mfa.ee/",
        name: "estonia-consulate",
      },
      {
        website: "https://www.visitestonia.com/en/what-to-see-do/history-and-culture/",
        name: "estonia",
      },
      {
        website: "https://flandersintheusa.org/",
        name: "flanders",
      },
      {
        website: "https://www.goethe.de/ins/us/en/sta/ney.html",
        name: "german",
      },
      {
        website: "http://www.h-r-s.cz",
        name: "hope",
      },
      {
        website: "https:/english.lithuanianculture.lt/",
        name: "lithuania",
      },
      {
        website: "https://artscouncilmalta.org",
        name: "malta",
      },
      {
        website: "http://instytutpolski.pl/newyork/",
        name: "poland",
      },
      {
        website: "http://www.rciusa.info",
        name: "romanian",
      },
      {
        website: "http://wallonia.us/en",
        name: "wallonia"
      }
    ]);
    // Austria has to be one of the first 8 logos.
    shuffledCountries.splice(Math.floor(Math.random() * 8), 0, {
      website: "https://www.acfny.org/",
      name: "austria",
      extraClass: "row-span-2",
    });
    // EUNIC has to be index 13.
    shuffledCountries.splice(13, 0, {
      website: "https://eunicglobal.eu",
      name: "eunic-eu",
      extraClass: "col-span-2 md:col-span-2",
    });

    return shuffledCountries;
  }
}
