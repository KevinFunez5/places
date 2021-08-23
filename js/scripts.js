function Places() {
  this.locations = {};
  this.currentId = 0;
}

Places.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations[location.id] = location;
};

Places.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}; 

Places.prototype.findLocation = function(id) {
  if (this.locations[id] != undefined) {
    return this.locations[id];
  }
  return false;
}

Places.prototype.deleteLocation = function(id) {
  if (this.locations[id] === undefined) {
    return false
  }
  delete this.locations[id];
  return true;
}

function Location(locationName, state, timeOfYear, landMarks, weather) {
  this.locationName = locationName;
  this.state= state;
  this.timeOfYear = timeOfYear;
  this.landMarks = landMarks;
  this.weather = weather;
}

Location.prototype.info = function(){
  return this.locationName + " " + this.state;
}


// let places = new Places();
// let location1 = new Location("Portland", "Oregon", "Winter", "Mt. hood", "rainy");
// let location2 = new Location("Poland", "N/A", "Summer", "Gdansk", "temperate.");
// places.addLocation(location1);
// places.addLocation(location2);
// Places.locations;