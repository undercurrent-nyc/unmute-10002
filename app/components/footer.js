import Component from '@glimmer/component';
import { shuffle } from "d3-array";

export default class FooterComponent extends Component {
  get logos() {
    const shuffledCountries = shuffle([
      {
        website: "",
        name: "chalupecky",
      },
      {
        website: "",
        name: "czech",
      },
      {
        website: "https://kul.ee/en",
        name: "estonia",
      },
      {
        website: "https://flandersintheusa.org/",
        name: "flanders",
      },
      {
        website: "",
        name: "german",
      },
      {
        website: "",
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
        website: "https://www.instytutpolski.pl/newyork/",
        name: "poland",
      },
      {
        website: "",
        name: "romanian",
      },
      {
        website: "",
        name: "wallonia"
      }
    ]);
    // Austria has to be one of the first 8 logos.
    shuffledCountries.splice(Math.floor(Math.random() * 8), 0, {
      website: "https://www.acfny.org/",
      name: "austria",
      extraClass: "row-span-2",
    });
    // EUNIC has to be index 11.
    shuffledCountries.splice(11, 0, {
      website: "https://eunicglobal.eu",
      name: "eunic-eu",
      extraClass: "col-span-2 md:col-span-3",
    });

    return shuffledCountries;
  }
}
