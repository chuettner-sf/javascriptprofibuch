function Mitarbeiter(name, nachname, mitarbeiterID) {
    this._name = name;
    this._nachname = nachname;
    this._mitarbeiterID = mitarbeiterID;
}
Mitarbeiter.prototype.getName = function() {
    return this._name;
};
Mitarbeiter.prototype.getNachname = function() {
    return this._nachname;
};
Mitarbeiter.prototype.getMitarbeiterID = function() {
    return this._mitarbeiterID;
};
Mitarbeiter.prototype.print = function() {
  return this.getName() + ' ' + this.getNachname() + ' (' + this.getMitarbeiterID() + ')';
};
var max = new Mitarbeiter('Max', 'Mustermann', 2345);
max._name = 'Moritz';
console.log(max.getName()); // Moritz
console.log(max.getNachname()); // Mustermann
console.log(max.getMitarbeiterID()); // 2345
console.log(max.print());