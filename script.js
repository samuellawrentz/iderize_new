var servicesContent = [
    {
        name: 'Software Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        listItems : ['Python Backend', 'Frontend Engineering', 'DB Design', 'Product Architecture', 'Site Development'],
        additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        name: 'Product Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        listItems : ['Design Thinking', 'UX/UI Design', 'Wireframing', 'User Centric Design', 'Market Research'],
        additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        name: 'Software Testing',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        listItems : ['A/B Testing', 'Selenium', 'Test Cases', 'Regression Testing', 'Manual Stage Testing'],
        additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        name: 'Innovation',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        listItems : ['Home Automation', 'Drones', 'i Toys', 'Epayment', 'Bio Tech'],
        additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        name: 'Salesforce',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        listItems : ['Analytics', 'Data Mining', 'Hadoop', 'Tie2', 'SFC PRogram'],
        additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
]

var contactItems = servicesContent.map(item => item.name);
contactItems.push('Other');
var currentServiceItem = ko.observable('Software Development');
var checkedItems = ko.observableArray([]);

function getServicesContent(){
return ko.utils.arrayFirst(servicesContent, function(item){
    return item.name === currentServiceItem();
});
}

var vm = {
    currentServiceItem: currentServiceItem,
    getServicesContent: getServicesContent,
    servicesContent: servicesContent,
    contactItems: contactItems,
    checkedItems: checkedItems
}

window.ko.applyBindings(vm);

window.slide = new SlideNav();


$('#send').click(function(){
    $.ajax({
        type: 'POST',
        url: 'https://hooks.zapier.com/hooks/catch/4589797/vihdva/',
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#contact').val(),
            message: $('#message').val()
        }
       }).done(function(response) {
         console.log(response);
       });
})