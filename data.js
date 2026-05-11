// TRADUCTOR AWAJÚN — data.js generado automáticamente desde Excel
const SECTORES = {

  educacion: {
    nombre: "Educación",
    descripcion: "Frases para docentes en aulas EIB",
    situaciones: [
      {
        titulo: "🏫 Inicio de clase",
        frases: [
          { esp: "Buenos días", awj: "Pujústin", pro: "pu-YOOS-tin" },
          { esp: "Siéntense, por favor", awj: "Ujuktata", pro: "u-juk-TA-ta" },
          { esp: "Saquen sus cuadernos", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Vamos a comenzar la clase", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Presten atención", awj: "Antúkta", pro: "an-TOOK-ta" },
          { esp: "Silencio, por favor", awj: "Chichakaipa", pro: "chi-cha-KAI-pa" },
        ]
      },
      {
        titulo: "📝 Durante la clase",
        frases: [
          { esp: "Voy a revisar la tarea", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Abran el libro en la página...", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Escriban en su cuaderno", awj: "Agájia", pro: "a-GA-hia" },
          { esp: "¿Entendieron?", awj: "¿Dekátmek?", pro: "de-KAT-mek" },
          { esp: "¿Tienen alguna pregunta?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Levanten la mano", awj: "Makúchin ámukta", pro: "ma-KU-chin a-MOOK-ta" },
          { esp: "Lean en voz alta", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Hagan el ejercicio", awj: "PENDIENTE", pro: "PENDIENTE" },
        ]
      },
      {
        titulo: "🤝 Reunión con padres de familia",
        frases: [
          { esp: "Buenos días, padres de familia", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Su hijo/a está progresando bien", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Su hijo/a necesita apoyo en casa", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Mañana no hay clases", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Firme aquí, por favor", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Tiene alguna consulta?", awj: "PENDIENTE", pro: "PENDIENTE" },
        ]
      },
      {
        titulo: "🎒 Recreo y salida",
        frases: [
          { esp: "Es la hora del recreo", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Regresen al salón", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Se terminó la clase", awj: "Amuekae", pro: "a-mue-KA-e" },
          { esp: "Hasta mañana", awj: "Ajum wainiami", pro: "a-JOOM wai-NIA-mi" },
          { esp: "Recojan su basura", awj: "PENDIENTE", pro: "PENDIENTE" },
        ]
      },
    ]
  },

  salud: {
    nombre: "Salud",
    descripcion: "Frases para personal de salud en comunidades",
    situaciones: [
      {
        titulo: "🩺 Consulta médica",
        frases: [
          { esp: "¿Qué le pasa?", awj: "¿Tuke nankamait?", pro: "TU-ke nan-ka-MAIT" },
          { esp: "¿Dónde le duele?", awj: "¿Nuka nakitmawait?", pro: "NU-ka na-kit-ma-WAIT" },
          { esp: "¿Desde cuándo está así?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Tiene fiebre?", awj: "¿Yuminmauwait?", pro: "yu-min-mau-WAIT" },
          { esp: "¿Ha vomitado?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Muéstreme dónde le duele", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Puede caminar?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Respire profundo", awj: "Iwiakmata", pro: "i-wiak-MA-ta" },
        ]
      },
      {
        titulo: "💊 Medicamentos",
        frases: [
          { esp: "Tome este medicamento", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Tómelo tres veces al día", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Con el almuerzo", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "No tome alcohol con este medicamento", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Regrese en tres días", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Tome bastante agua", awj: "Yumi yuata", pro: "YU-mi yu-A-ta" },
        ]
      },
      {
        titulo: "👶 Atención materno-infantil",
        frases: [
          { esp: "¿Cuántos meses tiene de gestación?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿El bebé se mueve bien?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Debe venir a sus controles", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Está dando de lactar?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "El niño está bien de peso", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "El niño necesita vacunas", awj: "PENDIENTE", pro: "PENDIENTE" },
        ]
      },
      {
        titulo: "🚨 Emergencias",
        frases: [
          { esp: "Necesitamos llevarlo al hospital", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Es urgente", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "No se mueva", awj: "Weatsuk pujuata", pro: "we-at-SOOK pu-jua-TA" },
          { esp: "Estamos ayudándole", awj: "Aidaujai", pro: "ai-DAU-jai" },
          { esp: "¿Es alérgico a algún medicamento?", awj: "PENDIENTE", pro: "PENDIENTE" },
        ]
      },
    ]
  },

  mimp: {
    nombre: "MIMP",
    descripcion: "Frases para trabajo con mujer, niñez y familia",
    situaciones: [
      {
        titulo: "👩 Protección de la mujer",
        frases: [
          { esp: "Estoy aquí para ayudarle", awj: "Aidauttajai", pro: "ai-daut-TA-jai" },
          { esp: "Lo que me diga es confidencial", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Le ha hecho daño alguien?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Está segura en su casa?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Tiene derechos como mujer", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Podemos protegerle", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "No está sola", awj: "Timiatrus pujawaitme", pro: "ti-mia-TROOS pu-ja-WAIT-me" },
        ]
      },
      {
        titulo: "🧒 Trabajo con niños y adolescentes (DEMUNA)",
        frases: [
          { esp: "¿Cómo te llamas?", awj: "¿Amiina daagmish yaita?", pro: "a-MI-na daag-MISH yai-TA" },
          { esp: "¿Cuántos años tienes?", awj: "¿Yama chichamtai?", pro: "YA-ma chi-CHAM-tai" },
          { esp: "¿Estás yendo a la escuela?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Puedes contarme lo que pasó", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Nadie tiene derecho a hacerte daño", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Vamos a hablar con tus padres", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Estás bien, estás a salvo", awj: "PENDIENTE", pro: "PENDIENTE" },
        ]
      },
      {
        titulo: "👨‍👩‍👧 Orientación familiar",
        frases: [
          { esp: "Buenos días, ¿en qué le puedo ayudar?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Cuál es el problema en su familia?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Es importante que dialogue con su pareja", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Sus hijos necesitan su apoyo", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Podemos buscar una solución juntos", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Firme este documento, por favor", awj: "PENDIENTE", pro: "PENDIENTE" },
        ]
      },
    ]
  },

  inei: {
    nombre: "INEI",
    descripcion: "Frases para censo y encuestas en comunidades",
    situaciones: [
      {
        titulo: "📋 Presentación e inicio",
        frases: [
          { esp: "Buenos días, soy del INEI", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Vengo a realizarle unas preguntas", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Esto es confidencial", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Su información es importante", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "No le tomará mucho tiempo", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Me puede atender un momento?", awj: "PENDIENTE", pro: "PENDIENTE" },
        ]
      },
      {
        titulo: "👨‍👩‍👧 Censo de población",
        frases: [
          { esp: "¿Cuántas personas viven en esta casa?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Cuál es su nombre completo?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Cuántos años tiene?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Dónde nació usted?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Habla usted awajún?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Tiene usted DNI?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Sabe leer y escribir?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Hasta qué grado estudió?", awj: "PENDIENTE", pro: "PENDIENTE" },
        ]
      },
      {
        titulo: "🌾 Encuesta agropecuaria",
        frases: [
          { esp: "¿Tiene usted chacra?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Qué cultiva en su chacra?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Cuántos animales tiene?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Vende sus productos?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Tiene acceso a agua potable?", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "¿Tiene luz eléctrica en su casa?", awj: "PENDIENTE", pro: "PENDIENTE" },
        ]
      },
      {
        titulo: "✅ Cierre de encuesta",
        frases: [
          { esp: "Muchas gracias por su tiempo", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Sus respuestas son muy valiosas", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Ya terminamos", awj: "PENDIENTE", pro: "PENDIENTE" },
          { esp: "Hasta luego", awj: "PENDIENTE", pro: "PENDIENTE" },
        ]
      }
    ]
  }

};
