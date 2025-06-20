import { Planet } from '../types/game';

export const planetsData: Planet[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    description: 'The smallest planet and closest to the Sun',
    distanceFromSun: '58 million km',
    diameter: '4,879 km',
    dayLength: '59 Earth days',
    yearLength: '88 Earth days',
    moons: 0,
    color: '#8C7853',
    size: 8,
    position: { x: 15, y: 50 },
    quiz: [
      {
        id: 1,
        question: 'How long is one day on Mercury?',
        options: ['24 hours', '59 Earth days', '88 Earth days', '1 Earth day'],
        correctAnswer: 1,
        explanation: 'Mercury rotates very slowly, taking 59 Earth days to complete one rotation.'
      },
      {
        id: 2,
        question: 'What is Mercury\'s position from the Sun?',
        options: ['Second', 'Third', 'First', 'Fourth'],
        correctAnswer: 2,
        explanation: 'Mercury is the closest planet to the Sun in our solar system.'
      },
      {
        id: 3,
        question: 'How many moons does Mercury have?',
        options: ['1', '2', '0', '3'],
        correctAnswer: 2,
        explanation: 'Mercury has no moons, likely because it\'s too close to the Sun\'s gravitational influence.'
      }
    ]
  },
  {
    id: 'venus',
    name: 'Venus',
    description: 'The hottest planet with a thick, toxic atmosphere',
    distanceFromSun: '108 million km',
    diameter: '12,104 km',
    dayLength: '243 Earth days',
    yearLength: '225 Earth days',
    moons: 0,
    color: '#FFC649',
    size: 12,
    position: { x: 25, y: 45 },
    quiz: [
      {
        id: 1,
        question: 'Why is Venus the hottest planet in our solar system?',
        options: ['It\'s closest to the Sun', 'Thick atmosphere traps heat', 'It has many volcanoes', 'It spins very fast'],
        correctAnswer: 1,
        explanation: 'Venus has a thick atmosphere made mostly of carbon dioxide that traps heat, creating a runaway greenhouse effect.'
      },
      {
        id: 2,
        question: 'What is unique about Venus\'s rotation?',
        options: ['It doesn\'t rotate', 'It rotates backwards', 'It rotates very fast', 'It wobbles'],
        correctAnswer: 1,
        explanation: 'Venus rotates backwards (retrograde) compared to most other planets in our solar system.'
      },
      {
        id: 3,
        question: 'What is Venus often called?',
        options: ['The Red Planet', 'The Blue Planet', 'The Morning/Evening Star', 'The Ringed Planet'],
        correctAnswer: 2,
        explanation: 'Venus is often called the Morning Star or Evening Star because it\'s very bright and visible from Earth.'
      }
    ]
  },
  {
    id: 'earth',
    name: 'Earth',
    description: 'Our home planet, the only known planet with life',
    distanceFromSun: '150 million km',
    diameter: '12,756 km',
    dayLength: '24 hours',
    yearLength: '365.25 days',
    moons: 1,
    color: '#6B93D6',
    size: 12,
    position: { x: 35, y: 55 },
    quiz: [
      {
        id: 1,
        question: 'What percentage of Earth\'s surface is covered by water?',
        options: ['50%', '60%', '71%', '80%'],
        correctAnswer: 2,
        explanation: 'About 71% of Earth\'s surface is covered by water, which is why it\'s called the "Blue Planet".'
      },
      {
        id: 2,
        question: 'What makes Earth unique in our solar system?',
        options: ['It has rings', 'It supports life', 'It\'s the largest planet', 'It has the most moons'],
        correctAnswer: 1,
        explanation: 'Earth is the only known planet in our solar system that supports life, thanks to its atmosphere, water, and perfect distance from the Sun.'
      },
      {
        id: 3,
        question: 'What is Earth\'s natural satellite called?',
        options: ['Luna', 'The Moon', 'Satellite-1', 'Both A and B'],
        correctAnswer: 3,
        explanation: 'Earth\'s natural satellite is called both Luna and the Moon. Luna is its scientific name.'
      }
    ]
  },
  {
    id: 'mars',
    name: 'Mars',
    description: 'The Red Planet with the largest volcano in the solar system',
    distanceFromSun: '228 million km',
    diameter: '6,792 km',
    dayLength: '24.6 hours',
    yearLength: '687 Earth days',
    moons: 2,
    color: '#CD5C5C',
    size: 10,
    position: { x: 45, y: 40 },
    quiz: [
      {
        id: 1,
        question: 'Why is Mars called the Red Planet?',
        options: ['It\'s very hot', 'Iron oxide (rust) on its surface', 'It has red clouds', 'It\'s made of red rocks'],
        correctAnswer: 1,
        explanation: 'Mars appears red because its surface contains iron oxide (rust), giving it a reddish appearance.'
      },
      {
        id: 2,
        question: 'What are the names of Mars\' two moons?',
        options: ['Titan and Europa', 'Phobos and Deimos', 'Io and Ganymede', 'Callisto and Amalthea'],
        correctAnswer: 1,
        explanation: 'Mars has two small moons: Phobos (fear) and Deimos (panic), named after the sons of the Greek god Ares.'
      },
      {
        id: 3,
        question: 'What is the largest volcano in the solar system located on Mars?',
        options: ['Mount Vesuvius', 'Olympus Mons', 'Mauna Loa', 'Mount Everest'],
        correctAnswer: 1,
        explanation: 'Olympus Mons on Mars is the largest volcano in the solar system, standing about 21 km (13 miles) high.'
      }
    ]
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    description: 'The largest planet with a Great Red Spot storm',
    distanceFromSun: '778 million km',
    diameter: '142,984 km',
    dayLength: '9.9 hours',
    yearLength: '12 Earth years',
    moons: 95,
    color: '#D8CA9D',
    size: 25,
    position: { x: 60, y: 50 },
    quiz: [
      {
        id: 1,
        question: 'What is Jupiter\'s Great Red Spot?',
        options: ['A volcano', 'A giant storm', 'A moon', 'A crater'],
        correctAnswer: 1,
        explanation: 'The Great Red Spot is a giant storm on Jupiter that has been raging for hundreds of years.'
      },
      {
        id: 2,
        question: 'How many known moons does Jupiter have?',
        options: ['4', '79', '95', '67'],
        correctAnswer: 2,
        explanation: 'Jupiter has 95 known moons, making it like a mini solar system. The four largest are called the Galilean moons.'
      },
      {
        id: 3,
        question: 'What is Jupiter mostly made of?',
        options: ['Rock and metal', 'Ice and rock', 'Hydrogen and helium', 'Carbon dioxide'],
        correctAnswer: 2,
        explanation: 'Jupiter is a gas giant composed mostly of hydrogen and helium, similar to the Sun.'
      }
    ]
  },
  {
    id: 'saturn',
    name: 'Saturn',
    description: 'The ringed planet with spectacular ice rings',
    distanceFromSun: '1.4 billion km',
    diameter: '120,536 km',
    dayLength: '10.7 hours',
    yearLength: '29 Earth years',
    moons: 146,
    color: '#FAD5A5',
    size: 22,
    position: { x: 75, y: 45 },
    quiz: [
      {
        id: 1,
        question: 'What are Saturn\'s rings made of?',
        options: ['Gas and dust', 'Ice and rock particles', 'Liquid water', 'Metal fragments'],
        correctAnswer: 1,
        explanation: 'Saturn\'s rings are made mostly of ice particles and rocky debris, ranging from tiny grains to large chunks.'
      },
      {
        id: 2,
        question: 'What makes Saturn unique among the gas giants?',
        options: ['It\'s the coldest', 'It has the most spectacular rings', 'It\'s the smallest gas giant', 'It rotates backwards'],
        correctAnswer: 1,
        explanation: 'While all gas giants have rings, Saturn\'s are by far the most spectacular and visible.'
      },
      {
        id: 3,
        question: 'What is Saturn\'s largest moon?',
        options: ['Europa', 'Titan', 'Ganymede', 'Io'],
        correctAnswer: 1,
        explanation: 'Titan is Saturn\'s largest moon and the second-largest moon in the solar system, with a thick atmosphere.'
      }
    ]
  },
  {
    id: 'uranus',
    name: 'Uranus',
    description: 'The tilted ice giant that rolls on its side',
    distanceFromSun: '2.9 billion km',
    diameter: '51,118 km',
    dayLength: '17.2 hours',
    yearLength: '84 Earth years',
    moons: 27,
    color: '#4FD0E7',
    size: 18,
    position: { x: 85, y: 35 },
    quiz: [
      {
        id: 1,
        question: 'What is unique about Uranus\'s rotation?',
        options: ['It doesn\'t rotate', 'It rotates on its side', 'It rotates backwards', 'It rotates very slowly'],
        correctAnswer: 1,
        explanation: 'Uranus rotates on its side with an axial tilt of about 98 degrees, likely due to a collision long ago.'
      },
      {
        id: 2,
        question: 'What gives Uranus its blue-green color?',
        options: ['Copper', 'Methane in its atmosphere', 'Water ice', 'Nitrogen'],
        correctAnswer: 1,
        explanation: 'Methane in Uranus\'s atmosphere absorbs red light and reflects blue-green light, giving it its distinctive color.'
      },
      {
        id: 3,
        question: 'How long does it take Uranus to orbit the Sun?',
        options: ['42 Earth years', '84 Earth years', '164 Earth years', '29 Earth years'],
        correctAnswer: 1,
        explanation: 'Uranus takes about 84 Earth years to complete one orbit around the Sun.'
      }
    ]
  },
  {
    id: 'neptune',
    name: 'Neptune',
    description: 'The windiest planet with supersonic storms',
    distanceFromSun: '4.5 billion km',
    diameter: '49,528 km',
    dayLength: '16.1 hours',
    yearLength: '165 Earth years',
    moons: 16,
    color: '#4B70DD',
    size: 17,
    position: { x: 95, y: 60 },
    quiz: [
      {
        id: 1,
        question: 'What is Neptune famous for?',
        options: ['Being the hottest planet', 'Having the strongest winds', 'Having the most rings', 'Being the largest planet'],
        correctAnswer: 1,
        explanation: 'Neptune has the strongest winds in the solar system, reaching speeds of up to 2,100 km/h (1,300 mph).'
      },
      {
        id: 2,
        question: 'How was Neptune discovered?',
        options: ['By telescope observation', 'By mathematical prediction', 'By space probe', 'By accident'],
        correctAnswer: 1,
        explanation: 'Neptune was the first planet discovered through mathematical prediction rather than observation, based on Uranus\'s orbital irregularities.'
      },
      {
        id: 3,
        question: 'What is Neptune\'s largest moon?',
        options: ['Triton', 'Titan', 'Europa', 'Ganymede'],
        correctAnswer: 0,
        explanation: 'Triton is Neptune\'s largest moon and is unique because it orbits in the opposite direction to Neptune\'s rotation.'
      }
    ]
  }
];