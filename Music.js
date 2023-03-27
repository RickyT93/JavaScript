  var orchestra = {
        name: "Barbershop",
        instruments: [
          { name: "violin", section: "woodwind" },
          { name: "cello", section: "woodwind" },
          { name: "bass", section: "strings" },
          { name: "viola", section: "strings" },
          { name: "trumpet", section: "brass" },
        ],
        director: "Ricky",
      };

      var woodwindItems = filterInstruments();
      console.log(woodwindItems);

      function filterInstruments() {
        var filteredWoodInstruments = orchestra.instruments.filter(
          filteringWoodInstrument
        );
        return filteredWoodInstruments;
      }
      function filteringWoodInstrument(instrument) {
        if (instrument.section === "woodwind") {
          return true;
        }
      }

      function logInstruments() {
        for (let index = 0; index < orchestra.instruments.length; index++) {
          var nameOfInstrument = orchestra.instruments[index];
          if (nameOfInstrument.section === "woodwind") {
            console.log(nameOfInstrument.name);
          }
        }
      }

      var myEvents = [
        {
          name: "concert",
          isFree: true,
          cost: 0,
          id: 123,
          location: { address: "lindsey", zipCode: "28540" },
        },

        {
          name: "concert",
          isFree: true,
          cost: 0,
          id: 234,
          location: { address: "nasworthy", zipCode: "77375" },
        },

        {
          name: "concert",
          isFree: false,
          cost: 5,
          id: 567,
          location: { address: "buckStreet", zipCode: "28547" },
        },

        {
          name: "concert",
          isFree: false,
          cost: 5,
          id: 891,
          location: { address: "duckStreet", zipCode: "28544" },
        },

        {
          name: "concert",
          isFree: false,
          cost: 5,
          id: 198,
          location: { address: "deerStreet", zipCode: "28577" },
        },
      ];
      console.log(myEvents);

      var flatEvents = getFlatEvents();
      console.log(flatEvents);

      function getFlatEvents() {
        var mappedFlatEvents = myEvents.map(mappingFlatEvents);
        return mappedFlatEvents;
      }

      function mappingFlatEvents(event) {
        newEventObj = {
          address: event.location.address,
          cost: event.cost,
          id: event.id,
        };
        return newEventObj;
        console.log(newEventObj);
      }

      var freeEvents = getFreeEvents();

      console.log(freeEvents);

      function getFreeEvents() {
        var filteredEvents = myEvents.filter(filteringEvents);
        return filteredEvents;
      }

      function filteringEvents(event) {
        // var freeEvent = event.isFree;
        // var costFree = event.cost;
        if (event.isFree === true && event.cost === 0) {
          // console.log(event.cost);
          // console.log(event.isFree);
          return true;
        }
      }

      function getFreeEvents() {
        var filteredEvents = myEvents.filter((event) => {
          if (event.isFree === true && event.cost === 0) {
            return true;
          }
        });
        return filteredEvents;
      }

      var mappedInstruments = getMappedInstruments();
      console.log(mappedInstruments);

      function getMappedInstruments() {
        var mappedOrchestraInstruments = orchestra.instruments.map(
          mappingOrchestraInstruments
        );
        return mappedOrchestraInstruments;
      }

      function mappingOrchestraInstruments(instrument) {
        var orchestraInstrument = {
          description: `${instrument.name} ${instrument.section}`,
        };

        return orchestraInstrument;
      }
