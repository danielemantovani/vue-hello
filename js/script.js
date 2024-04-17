const  { createApp } = Vue;

createApp ({
    data () {
        return {
            greeting: "ACCESSO NON AUTORIZZATO!!! CHIUDI IMMEDIATAMENTE LA PAGINA!!!!!",
            istruction: "MA SOPRATTUTTO NON PREMERE SU QUESTO PULSANTE O DOVRAI VEDERTELA CON LUI.....",
            question: "Se proprio vuoi proseguire e accettare il rischio prova a indovinare di chi sto parlando"
        }
    },
    methods: {

    }

}).mount("#app");
