/**
 * New node file
 */
var facets = require("facets")();

print( facets.mavenfacet.localRepositoryDirectory );

//facets.mavenfacet.executeMaven( ["clean"] );

facets.mavenfacet.executeMaven( ["clean",  "package"] );
