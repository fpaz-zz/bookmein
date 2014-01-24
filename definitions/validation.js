
// Global validation
framework.onValidation = function(name, value) {
    switch (name) {
        case 'Name':
        case 'Message':
            return value.length > 0;
        case 'Email':
            return value.isEmail();
    }
};