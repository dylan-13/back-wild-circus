'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('student', [
      {
        id: 1,
        firstName: "Alexandre",
        lastName: "Guidat",
        show: "Alexandre is the godfather of Marseille, he know a lot of bad guys to deal with, so dont hurt him, you will not win",
        linkedIn: "https://www.linkedin.com/in/alexandreguidat/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        firstName: "Sylvain",
        lastName: "Moreno",
        show: "Sylvain is the strongest to do sexual Kung Fu, don't get too close, you risk getting your nipples touched",
        linkedIn: "https://www.linkedin.com/in/sylvainmoreno/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        firstName: "Anthony",
        lastName: "Portier",
        show: "Anthony has too big fingers to type on his computer, but he does not despair, come and admire his huge members",
        linkedIn: "https://www.linkedin.com/in/anthony-portier-8a578994/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        firstName: "Solène",
        lastName: "Tellier",
        show: "Solène is the mascot of the Wild, totally gullible and susceptible you can make her believe anything",
        linkedIn: "https://www.linkedin.com/in/sol%C3%A8ne-tellier-84b742154/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        firstName: "Stevie",
        lastName: "Cutman",
        show: "A simple thought can cause it to twerk, never say twerk in front of her\n",
        linkedIn: "https://www.linkedin.com/in/steviecutman/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        firstName: "Alexis",
        lastName: "Archer",
        show: "Alexis is a phenomenon, he writes code that works but we don't know how",
        linkedIn: "https://www.linkedin.com/in/alexis-archer-151179138/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        firstName: "Kevin",
        lastName: "Thomann",
        show: "Cartoon voice imitator, sometimes he screams, we think he may have tourette's syndrome !\n",
        linkedIn: "https://www.linkedin.com/in/kevinthomann/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        firstName: "Issam",
        lastName: "Adam",
        show: "Issam will always have a quirky joke with the main subject ",
        linkedIn: "https://www.linkedin.com/in/issam-adam/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        firstName: "Jean",
        lastName: "Nicolas de lamballerie",
        show: "Jean is the source, just like Google, ask him a question and he will give you the answer\n",
        linkedIn: "https://www.linkedin.com/in/jean-nicolasdelamballerie/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        firstName: "Loic",
        lastName: "Folio",
        show: "Loic is BodyBuilder training, even the large muscles of Antho can do nothing",
        linkedIn: "https://www.linkedin.com/in/loic-folio/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        firstName: "Ouahid",
        lastName: "Aqodad",
        show: "Ouahid doesn't give you a chance to make a mistake, the slightest misstep and he fires live ammunition",
        linkedIn: "https://www.linkedin.com/in/oaqodad/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        firstName: "Florian",
        lastName: "Plot",
        show: "Florian is a real AI, he can work and search without interruption, but his face is devoid of emotion\n",
        linkedIn: "https://www.linkedin.com/in/florian-plot/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        firstName: "Dylan",
        lastName: "Berthier",
        show: "Dylan only knows Ctrl + C / Ctrl + V, so he codes faster than his shadow, but he doesn't really know what he's doing",
        linkedIn: "https://www.linkedin.com/in/dylan-berthier/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        firstName: "Ornella",
        lastName: "Gristi",
        show: "Ornella is super good audience, in her presence, no joke will remain without laughter\n",
        linkedIn: "https://www.linkedin.com/in/ornella-gristi/",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {

  }
};