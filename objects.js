var Twins = {
    season: 1987,
    homeState: "Minnesota",
    mascot: "Twins",
    seasonOutcome: "World Champions",
    firstBase: "Kent Hrbek",
    centerField: "Kirby Puckett",
    manager: "Tom Kelly",

    homeField: "Metrodome",
    pitcher: "Bert Blyleven",
    swag: "Homer Hanky",


    cheer: function() {
        return "'Go Twins!'"
    },
    get fullName() {
      return "Hubert H. Humphrey " + this.homeField;
    },
    set addSeason(x) {
      this.season = this.season.toString() + "and" + x.toString();
    },
    printThis: function() {
      return console.log("The " + this.season + " " + this.homeState + " " + this.mascot + " were the " + this.seasonOutcome + ". The manager was " +
      this.manager + ". The star players included " + this.firstBase + ", " + this.centerField + " and " + this.pitcher + ". The " + this.mascot +
      " played their home games in the " + this.homeField + ", also known as " + this.fullName + ". Everyone in the building would wave a " + this.swag + " and shout " + this.cheer() + ".")
    }

}





Twins.printThis();
