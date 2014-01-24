
// Add the schema
builders.schema('contactform', { Name: String, Email: String, Message: String, DateCreated: Date }, function (name) {
	if (name === 'DateCreated')
		return new Date();
});


// Add the validation properties
builders.validation('contactform', ['Name', 'Email', 'Message']);