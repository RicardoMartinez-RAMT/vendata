// constants/SmallConstants.js
var keyMirror = require('keymirror');

var APIRoot    = "http://localhost:3000/api/";
var APIVersion = "v1";
var Root       = APIRoot + APIVersion;

module.exports = {

  API_URL: Root,

  APIEndpoints: {
    // Auth
    LOGIN:        Root + "/auth/sign_in",
    REGISTRATION: Root + "/auth",

    // Schemata
    SCHEMATA:              Root + "/schemata",              // GET
    SCHEMATA_COLLECTIONS:  Root + "/schemata/collections",  // GET
    SCHEMATA_DESCRIPTIONS: Root + "/schemata/descriptions", // GET
    SCHEMATA_PARENTHOOD:   Root + "/schemata/parenthood",   // GET
    SCHEMATA_INHERITANCE:  Root + "/schemata/inheritance",  // GET
    SCHEMATA_CONSTRAINTS:  Root + "/schemata/constraints",  // GET

    // Scrapping
    SCRAPPING_GET_DOC_FOR_SCRAPPING:  Root + "/scrapping/new.json",          // GET
    SCRAPPING_POST_SCRAPPED_DOC:      Root + "/scrapping/new",               // POST
    SCRAPPING_GET_DOC_FOR_VALIDATING: Root + "/scrapping/validate/new.json", // GET
    SCRAPPING_POST_VALIDATED_DOC:     Root + "/scrapping/validate/new"       // POST
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    // Session
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null,
    LOGOUT: null,

    // Routes
    REDIRECT: null,

    // Scrapping
    LOAD_SCHEMATA: null,
    RECEIVE_SCHEMATA: null,
    LOAD_DOC_FOR_SCRAPPING: null,
    RECEIVE_DOC_FOR_SCRAPPING: null,
    LOAD_DOC_FOR_VALIDATION: null,
    RECEIVE_DOC_FOR_VALIDATION: null,
    CREATE_DOC: null,
    RECEIVE_CREATED_DOC: null,
    VALIDATE_DOC: null,
    RECEIVE_VALIDATED_DOC: null
  }),

  DocumentCloud : {
    params: {
        "height":           750,
        "width":            600,
        "showAnnotations":  false,

        //"maxheight":        750,
        //"maxwidth":         600,
        "container":        "#document-visor",
        "notes":            false,
        "text":             true,
        "zoom":             true,
        "search":           true,
        "sidebar":          false,
        "pdf":              true,
        "responsive":       false,
        //"responsiveOffset": 50,
        "default_page":     1
    }
  },

  Strings: {
    LOADING: "Cargando...",
    SCRAP_NEW: "Nuevo documento",
    VALIDATE_NEW: "Validar nuevo"
  }

};