const samurai = {
  health: 100,
  arrows: 10,
  stamina: 100,
  speed: 10,
  enemyHealth: 100,
  katana: {
    damage: 15,
    state: 40,
  },
  horse: {
    speed: 120,
    health: 100,
  },
  armor: {
    type: "light",
    color: "black",
  },
  run() {
    if (this.stamina > 0) {
      (this.stamina -= 10), (this.speed += 10);
    } else if (stamina === 0) {
      console.log("hero is tired!");
    }
  },
  attack() {
    if (this.katana.state > 0 && this.enemyHealth > 0 && this.stamina > 0) {
      this.enemyHealth -= 15;
      this.stamina -= 25;
    } else if (this.katana.state === 0) {
      console.log("Katana is broken! Need a perair");
    } else if (this.enemyHealth <= 0) {
      console.log("Enemy is died! Samurai finished his way");
    } else if (this.stamina <= 0) {
      console.log("Samurai is tired!Need relax.");
    }
  },
  specialAttack() {
    if (this.stamina >= 15 && this.enemyHealth > 0 && this.stamina > 0) {
      this.enemyHealth -= 30;
      this.stamina -= 40;
    } else if (this.stamina === 0) {
      console.log("Need more stamina!");
    } else if (this.enemyHealth <= 0) {
      console.log("Enemy is died! Samurai finished his way");
    } else if (this.stamina <= 0) {
      console.log("Samurai is tired!Need relax.");
    }
  },
  enemyAttack() {
    if (this.health > 0) {
      this.health -= 40;
    } else if (this.health <= 0) {
      console.log("You died! HA-HA-HA!");
    }
  },
  useHeavyArmor() {
    if ((this.armor = "light armor")) {
      (this.armor = "heavy armor"), (this.health = 140), (this.speed = 5);
    }
  },
  useLightArmor() {
    if ((this.armor = "heavy armor")) {
      (this.armor = "ligh armor"), (this.health = 100), (this.speed = 10);
    }
  },
  useBow() {
    if (this.enemyHealth > 0 && this.arrows > 0) {
      this.enemyHealth -= 5;
      this.arrows -= 1;
    } else if (arrows === 0) {
      console.log("No more arrows!");
    }
  },
  getInfo() {
    console.log(
      `Samurai Health and stamina:${this.health} ${this.stamina}, Enemy Health:${this.enemyHealth}`
    );
  },
};
