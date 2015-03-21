Router.configure({
    notFoundTemplate: 'pageNotFound',
    layoutTemplate: 'masterLayout',
    yieldTemplates: {
        nav: {
            to: 'nav'
        },
        footer: {
            to: 'footer'
        },
    }
});

Router.map(function() {

    this.route('home', {
        path: '/',
        template: 'home',
        onBeforeAction: function(){
            AccountsTemplates.setState('signIn');
            this.next();
        }
    });
});
