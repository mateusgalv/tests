const mage = {
	healthPoints: 130,
	intelligence: 45,
	mana: 125,
	damage: undefined,
};

const warrior = {
	healthPoints: 200,
	strength: 30,
	weaponDmg: 2,
	damage: undefined,
};

const dragon = {
	healthPoints: 350,
	strength: 50,
	damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
	return Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15
}
const warriorDamage = (warrior) => {
	return Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1)) + warrior.strength
}
const mageSpell = (mage) => {
	if (mage.mana < 15) return 'not enough mana to cast spell'
	return {
		mageDamage: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1)) + mage.intelligence,
		manaSpent: 15,
	}
}

const gameActions = {
	warriorTurn: (warriorDamage, warrior, dragon) => {
		const dmg = warriorDamage(warrior)
		dragon.healthPoints -= dmg
		warrior.damage = dmg
	},
	mageTurn: (mageSpell, mage, dragon) => {
		const castSpell = mageSpell(mage)
		dragon.healthPoints -= castSpell.mageDamage
		mage.damage = castSpell.mageDamage
		mage.mana -= castSpell.manaSpent
	},
	dragonTurn: (dragonDamage, dragon, mage, warrior) => {
		const dmg = dragonDamage(dragon)
		dragon.damage = dmg
		mage.healthPoints -= dmg
		warrior.healthPoints -= dmg
	},
	endResult: () => battleMembers
}

gameActions.mageTurn(mageSpell, mage, dragon)
gameActions.warriorTurn(warriorDamage, warrior, dragon)
gameActions.dragonTurn(dragonDamage, dragon, mage, warrior)

console.log(gameActions.endResult())