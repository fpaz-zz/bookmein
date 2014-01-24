var mail = require('partial.js/mail');

exports.install = function(framework) {
    framework.route('/', view_homepage);
    framework.route('/services/', view_services);
    framework.route('/about/', view_about);
    framework.route('/references/', view_references);
    framework.route('/contact/', view_contact);
    framework.route('/contact/', post_contact, ['post', 'xhr']);
};

function view_homepage() {
    var self = this;
    self.view('homepage');
}

function view_services() {
    var self = this;
    self.view('services');
}

function view_about() {
    var self = this;
    self.view('about');
}

function view_references() {
    var self = this;
    self.view('references');
}

function view_contact() {
    var self = this;
    self.view('contact', { Email: '@' });
}

// POST /contact/
function post_contact() {

    var self = this;

    // prepare form by the schema
    // definitions/models.js
    var model = builders.prepare('contactform', self.post);

    var validation = self.validate(model, 'contactform', 'form-');

    if (validation.hasError()) {
        self.json(validation);
        return;
    }

    model.DateCreated = new Date();

    // save to DB
    self.database('contact').insert(model);

    // replace new line
    model.Message = model.Message.htmlEncode().replace(/\n/g, '<br />');

    // read the e-mail template and render into the string
    var template = self.view('~/email/contact', model, true);

    // create the e-mail message
    var message = new mail.Message('Contact form', template);

    message.to(self.config['mail']);
    message.reply(model.Email);
    message.from(self.config['mail'], self.config['name']);

    message.send('smtp.gmail.com', { port: 465, secure: true, user: 'YOUR_GMAIL_EMAIL', password: 'YOUR_GMAIL_PASSWORD' });

    self.json({ r: true });
}
