function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {

    get: function () {
      console.log('get!');

      return temperature;
    },
    set: function (value) {
      console.log('set!')
      console.log(this)
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function () { return archive; };
}

var arc = new Archiver();
//arc.temperature;
arc.temperature = 11;
arc.temperature = 13;
//console.log(arc.getArchive());
//console.log(arc.temperature.set)