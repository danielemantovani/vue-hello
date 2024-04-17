const  { createApp } = Vue;

createApp ({
    data () {
        return {
            greeting: "ACCESSO NON AUTORIZZATO!!! CHIUDI IMMEDIATAMENTE LA PAGINA!!!!!",
            istruction: "MA SOPRATTUTTO NON PREMERE SUL PULSANTE QUI SOTTO O DOVRAI VEDERTELA CON LUI.....",
            question: "Se proprio vuoi proseguire e accettare il rischio prova a indovinare di chi sto parlando",
            guessWho: "",
            wrong: "",
            colorText: "red-text",
            image: "imgWTR.jpg",
            showImage: false,
        }
    },
    methods: {
        // hereItIs: function(){
        //     this.wrong = "TI AVEVO AVVISATO DI NON FARLO"
        //     this.guessWho = ""
        // },
        toggleImage: function() {
            this.showImage = !this.showImage;
            this.wrong = "SBAGLIATO, TI AVEVO AVVISATO DI NON FARLO";
            this.guessWho = "";
        }

    }

}).mount("#app");
