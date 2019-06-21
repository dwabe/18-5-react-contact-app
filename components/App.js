var contacts = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com',
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziol',
        email: 'zbigniew.koziol@example.com',
    },
    {
        id: 4,
        firstName: 'Wiktor',
        lastName: 'Traktor',
        email: 'wiktor@traktor.com',
    },
    {
        id: 5,
        firstName: 'Ping',
        lastName: 'Pong',
        email: 'pingpong@pongping.com',
    },
    {
        id: 6,
        firstName: 'Werner',
        lastName: 'Wener',
        email: 'werner.wener@spasmus.de'
    }
];
  
var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {className: 'app'},
                React.createElement(ContactForm, {contact: contactForm}),
                React.createElement(Contacts, {items: contacts}, {})
            )
        );
    }
});