import Character from './character.js';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 40;
    this.defens = 10;
  }
}
