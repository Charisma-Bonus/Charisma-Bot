import { MotherShipClassType } from '../../Types';

export const MOTHERSHIP_CLASSES: MotherShipClassType[] =
[
  {
    name: `Teamster`,
    starting: {
      sanity: 30,
      fear: 35,
      body: 30,
      armor: 35,
      speed: 5,
      strength: 5,
      intelligence: 0,
      combat: 0,
      skills: {
        guaranteed: ['Zero-G','Mechanical Repair'],
        pick: {
          list: ['Heavy Machinery', 'Piloting'],
          choose: 1
        }
      },
      skillPoints: 4
    },
    experienceGain: 'Gain 1XP whenever you first set foot on an undiscovered planet.',
    dealing: 'Once per session, a Teamster may re-roll a roll on the Panic Effect Table.'
  },
  {
    name: `Android`,
    starting: {
      sanity: 20,
      fear: 35,
      body: 30,
      armor: 35,
      speed: 5,
      intelligence: 5,
      strength: 0,
      combat: 0,
      skills: {
        guaranteed: ['Linguistics', 'Computers', 'Mathematics'],
        pick:{
          list: [],
          choose: 0
        }
      },
      skillPoints: 2
    },
    experienceGain: 'Gain 1XP whenever you interface with a piece of alien technology or with a higher intelligence.',
    dealing: 'Fear Saves made in the presence of Androids have Disadvantage.'
  },
  {
    name: `Scientist`,
    starting: {
      sanity: 40,
      fear: 35,
      body: 30,
      armor: 35,
      intelligence: 10,
      speed: 0,
      strength: 0,
      combat: 0,
      skills: {
        guaranteed: [],
        pick: {
          list: ['Biology','Hydroponics','Geology','Computers','Mathematics',"Chemistry"],
          choose: 2
        }
      },
      skillPoints: 3
    },
    experienceGain: 'Gain 1XP whenever you bring a piece of alien technology, or living organism, aboard the ship for study.',
    dealing: 'Whenever a Scientist fails a Sanity Save, every friendly player nearby gains 1 Stress.'
  },
  {
    name: `Marine`,
    starting: {
      sanity: 25,
      fear: 35,
      body: 30,
      armor: 35,
      combat: 5,
      intelligence: 0,
      speed: 0,
      strength: 0,
      skills: {
        guaranteed:['Military Training'],
        pick:{
          list: [],
          choose: 0
        }
      },
      skillPoints: 3
    },
    experienceGain: 'Gain 1 XP for killing an enemy.',
    dealing: 'Whenever a Marine Panics, every friendly player nearby must make a Fear Save'
  }
];

export const TEAMSTER_SKILLS = [
  {
    name: `**Space-Force Cadet**`,
    value: `**Zero-G:** 10% | Working in a vaccuum, vaccsuits, etc.
**Mechanical Repair:** 10% | Fixing broken machines.
**Piloting:** 10% | Operation and control of air and spacecraft.
**Military Training** 10% | Standard basic training given to all military personnel.
**Athletics:** 10% Physical sports and games.
**Astrogation:** 15% | Navigation in outer space.)`,
  },
  {
    name: `**Junker**`,
    value: `**Zero-G:** 10% |Working in a vaccuum, vaccsuits, etc.
**Mechanical Repair:** 10% | Fixing broken machines.
**Heavy Machinery:** Operation and use of large pieces of equipment (cranes, exosuits, forklifts, etc.).
**Scavenging:** 10% | Searching discarded waste for useful items.
**Jury-Rigging:** 15% | Makeshift repairs.
**1 SP banked**`,
  },
  {
    name: `**Vehicle Engineer**`,
    value: `**Zero-G:** 10% | Working in a vaccuum, vaccsuits, etc.
**Mechanical Repair:** 10% | Fixing broken machines.
**Heavy Machinery:** Operation and use of large pieces of equipment (cranes, exosuits, forklifts, etc.).
**Engineering:** 15% | design, building, and use of engines, machines, and structures.
**Vehicle Specialization:** 15% | Specialize in a specific vehicle class.`,
  },
  {
    name: `**Scoundrel**`,
    value: `**Zero-G:** 10% | Working in a vacuum, vacsuits, etc.
**Mechanical Repair:** 10% | Fixing broken machines.
**Piloting:** 10% | Operation and control of air and spacecraft.
**Athletics:** 10% Physical sports and games.
**Rimwise:** 10% | Knowledge of outer rim colonies, survival in the seedy parts of the galaxy.
**Firearms:** 15% | Operating, aiming, shooting, and maintaining guns.)`,
  },
  {
    name: `**Asteroid Miner**`,
    value: `**Zero-G:** 10% | Working in a vaccuum, vaccsuits, etc.
**Mechanical Repair:** 10% | Fixing broken machines.
**Piloting:** 10% | Operation and control of air and spacecraft.
**Geology:** 10% | The solid features of any terrestrial planet or natural satellite.
**Asteroid Mining:** 15% | Training in the tools and procedures used in mining asteroids.`,
  },
];

export const ANDROID_SKILLS = [
  {
    name: `**Hacker**`,
    value: `**Computers:** 10% | Fluent use of computers and networks.
**Mathematics:** 10% | Mathematics: The science of numbers, quantity, and space.
**Linguistics:** 10% Study of language.
**Hacking:** 15% | Unauthorized access to computer systems.`,
  },
  {
    name: `**Engineer**`,
    value: `**Computers:** 10% | Fluent use of computers and networks.
**Mathematics:** 10% | The science of numbers, quantity, and space.
**Linguistics:** 10% | Study of language.
**Engineering:** 15% | Design, building, and use of engines, machines, and structures.)`,
  },
  {
    name: `**Translator**`,
    value: `**Computers:** 10% | Fluent use of computers and networks.
**Mathematics:** 10% | The science of numbers, quantity, and space.
**Linguistics:** 10% | Study of Language.
**2 banked SP saving for Sophontology.**)`,
  },
  {
    name: `**Specialist**`,
    value: `(**Choose 2 master skills, other skills cost twice as much.**) `,
  },
];

export const SCIENTIST_SKILLS = [
  {
    name: `**Botanist**`,
    value: `**Biology:** 10% | The study of life.
**Hydroponics:** 10% | Growing plants in nutrient solutions without soil (farming in space).
**Botany:** 10% | The study of plant life.
**Geology:** 10% | The solid features of any terrestrial planet or natural satellite.)`,
  },
  {
    name: `**Biologist**`,
    value: `**Biology:** 10% | The study of life.
**Chemistry:** 10% | The identification of the substances of which matter is composed.
**Genetics:** 15% | Heredity and the variation of inherited characteristics.
**First Aid:** 10% | Emergency medical care and treatment.)`,
  },
  {
    name: `**Virologist**`,
    value: `**Biology:** 10% | The study of life.
**Chemistry:** 10% | The identification of the substances of which matter is composed.
**First Aid:** 10% | Emergency medical care and treatment.
**Pathology:** 15% | Study of the cause and effect of disease.)`,
  },
  {
    name: `**Physicist**`,
    value: `**Mathematics:** 10% | The science of numbers, quantity, and space.
**Computers:** 10% | Fluent use of computers and networks.
**Physics:** 15% | Study of nature and properties of matter and energy.
**1 SP banked**)`,
  },
  {
    name: `**Archaeologist**`,
    value: `**Biology:** 10% | The study of life.
**Archaeology:** 10% | Ancient cultures and their artifacts.
**Theology:** 10% | Study of religion.
**Art:** 10% | The expression or application of a species’ creative ability and imagination.
**Linguistics:** 10% | Study of language.)`,
  },
  {
    name: `**Psychologist**`,
    value: `**Biology:** 10% | The study of life.
**Chemistry:** 10% | The identification of the substances of which matter is composed.
**Psychology:** 15% | The study of behavior and the human mind.
**Linguistics:** 10% | Study of language.)`,
  },
  {
    name: `**Roboticist**`,
    value: `**Computers:** 10% | Fluent use of computers and networks.
**Mathematics:** 10% | The science of numbers, quantity, and space.
**Engineering:** 15% | Design, building, and use of engines, machines, and structures.
**1 SP banked** for Robotics, AI, or Cybernetics)`,
  },
  {
    name: `**Hidden Cultist**`,
    value: `**Biology:** 10% | The study of life.
**Chemistry:** 10% | The identification of the substances of which matter is composed.
**Art:** 10% | The expression or application of a species’ creative ability and imagination.
**Mysticism:** Spiritual apprehension of hidden knowledge.) Fear effects as Android once discovered.`,
  },
  {
    name: `**Savant**`,
    value: ` Choose 2 master skills, other skills cost twice as much.`,
  },
];

export const MARINE_SKILLS = [
  {
    name: `**Grunt**`,
    value: `**Military Training:** 10% | Standard basic training given to all military personnel.
**Firearms:** 15% | Operating, aiming, shooting, and maintaining guns.
**Athletics:** 10% | Physical sports and games.`,
  },
  {
    name: `**Thug**`,
    value: `**Military Training:** 10% | Standard basic training given to all military personnel.
**Rimwise:** 10% | Knowledge of outer rim colonies, survival in the seedy parts of the galaxy.
**Close-Quarters Combat:** 15% | Hand-to-hand, melee fighting.`,
  },
  {
    name: `**Paramedic**`,
    value: `**Military Training:** 10% | Standard basic training given to all military personnel.
    **First Aid:** 10% | Emergency medical care and treatment.
    **Zero-G:** 10% | Working in a vaccuum, vaccsuits, etc.
    **Athletics:** 10% | Physical sports and games.`,
  },
  {
    name: `**Officer**`,
    value: `**Military Training:** 10% | Standard basic training given to all military personnel.
**Tactics:** 15% | Maneuvering military forces in battle.
**Athletics:** 10% | Physical sports and games.`,
  },
  {
    name: `**Gunner**`,
    value: `**Military Training:** 10% | Standard basic training given to all military personnel.
    **Gunnery:** 15% | Starship weaponry.
    **Mechanical Repair:** 10% | Fixing broken machines.`,
  },
  {
    name: `**Chaplain**`,
    value: `**Military Training:** 10% | Standard basic training given to all military personnel.
**Theology:** 10% | Study of religion.
**Mysticism:** 15% | Spiritual apprehension of hidden knowledge.`,
  },
  {
    name: `**Spy**`,
    value: `**Rimwise:** 10% | Knowledge of outer rim colonies, survival in the seedy parts of the galaxy.
**Linguistics:** 10% | Study of language.
**Military Training:** 10% | Standard basic training given to all military personnel.`,
  },
];
