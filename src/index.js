const impl = require('./cola');
const cola = require("../webcola-wasm-dist/cola.umd.development");
// registers the extension on a cytoscape lib ref
let register = function( cytoscape ){
  if( !cytoscape ){ return; } // can't register if cytoscape unspecified

  cytoscape( 'layout', 'cola', impl ); // register with cytoscape.js
};

if( typeof cytoscape !== 'undefined' ){ // expose to global cytoscape (i.e. window.cytoscape)
  register( cytoscape );
}
register.cola = cola;

module.exports = register;
