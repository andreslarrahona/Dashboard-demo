const { DateTime } = luxon;

const app = Vue.createApp({
  data() {
    return {
      filtro: "",
      instrumentos: [
        { id: 1, nombre: "Multímetro", modelo: "Fluke 8508A", fecha: "2024-01-12" },
        { id: 2, nombre: "Osciloscopio", modelo: "Tektronix MCA3027", fecha: "2024-03-08" },
        { id: 3, nombre: "Fuente de Alimentación", modelo: "Fluke 5522A", fecha: "2023-12-20" }
      ],
      certificados: [],
      cargandoCertificados: false // Indicador de carga
    };
  },
  computed: {
    // Filtra los instrumentos en tiempo real según el texto ingresado
    instrumentosFiltrados() {
      return this.instrumentos.filter(instr =>
        instr.nombre.toLowerCase().includes(this.filtro.toLowerCase()) ||
        instr.modelo.toLowerCase().includes(this.filtro.toLowerCase())
      );
    }
  },
  methods: {
    // Simula la carga de certificados con un pequeño delay
    verCertificados(idInstrumento) {
      this.certificados = []; // Limpia la lista para efecto de carga
      this.cargandoCertificados = true;

      // Simula una "carga real" de datos
      setTimeout(() => {
        this.certificados = [
          { id: 101, nombre: "Certificado 7195/25", fecha: "2024-02-15" },
          { id: 102, nombre: "Certificado 5487/23", fecha: "2024-05-10" }
        ];
        this.cargandoCertificados = false;

        // Agrega animación de fade-in
        this.$nextTick(() => {
          document.querySelectorAll('.certificado-item').forEach(el => {
            el.classList.add('fade-in');
          });
        });

      }, 800);
    },

    // Formatea la fecha para que se vea más clara
    formatoFecha(fecha) {
      return DateTime.fromISO(fecha).toLocaleString(DateTime.DATE_MED);
    }
  }
});

app.mount("#app");
