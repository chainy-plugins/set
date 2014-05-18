(function(){
	"use strict";

	// Import
	var expect = require('chai').expect,
		joe = require('joe')

	// Test
	joe.describe('set plugin', function(describe,it){
		var Chainy = require('chainy-core').subclass().addExtension('set', require('../'))
		it("should work", function(next){
			var a = {id:1, name:1}
			Chainy.create()
				.set(a)
				.done(function(err, result){
					if (err)  return next(err)
					expect(result).to.deep.equal(a)
					// ^ shallow comparison, so checks to see if the object is actually the same object
					return next()
				})
		})
	})
})()