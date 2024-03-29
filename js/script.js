var url = 'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&rows=15';


var App = new Vue({

    el: '#app',
    data: {
        events: null,
        label: "",
    },
    created: function(){
        this.initialize();
    },
    methods : {
        initialize: function(){
            var self = this;
            axios.get(url)
                .then(function(response){
                    self.events = response.data.records;
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                })
                .finally(function (data) {
                })
        }

    },
    computed: {
        filteredEvents: function(){
            var eventsF = this.events,
                nom = this.label;

            if(!nom){
                return eventsF;
            }

            nom = nom.trim().toLowerCase();

            eventsF = eventsF.filter(function(item){
                if(item.fields.nom.toLowerCase().indexOf(nom) !== -1){
                    return item;
                }
            });
            // Return an array with the filtered data.
            return eventsF;
        }
    }


});

