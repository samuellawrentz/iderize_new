var servicesContent = [
    {
        name: 'Software Development',
        desc: 'We combine a creative design approach with the latest software and hardware engineering principles to ensure a spectacular result.',
        listItems : ['Python Backend', 'Frontend Engineering', 'DB Design', 'Product Architecture', 'Site Development'],
        additionalText: 'Using proven methods combined with today’s most advanced tools and data, we can provide you with the edge you need to dominate your niche.'
    },
    {
        name: 'Product Development',
        desc: 'For a business to succeed in today’s fast-paced market, agility is number one. We give you the tools you need to move forward with confidence, fully customized to your needs.',
        listItems : ['Design Thinking', 'UX/UI Design', 'Wireframing', 'User Centric Design', 'Market Research'],
        additionalText: 'Support your teams with systems that make sense. Delight your customers by giving them what they want. It’s all possible.'
    },
    {
        name: 'Software Testing',
        desc: 'Testing and quality assurance are critical aspects of software and hardware development. Our testing suite leaves nothing to chance, ensuring your products perform exactly as they should.',
        listItems : ['A/B Testing', 'Selenium', 'Test Cases', 'Regression Testing', 'Manual Stage Testing'],
        additionalText: 'Most software failures that occur could have been easily avoided with performance testing. Testing reduces downtime, identifies vulnerabilities, and assures quality from day one.t'
    },
    {
        name: 'Innovation',
        desc: 'Today’s most advanced tools and technologies can be applied to your business, improving processes from manufacturing to logistics to customer service, and more besides.',
        listItems : ['Home Automation', 'Drones', 'i Toys', 'Epayment', 'Bio Tech'],
        additionalText: 'Discover what these innovations can do to elevate your business processes and support scale.'
    },
    {
        name: 'Salesforce',
        desc: 'Salesforce is one of the most powerful CRMs on the market today, but it reaches its full potential only when it is customized to integrate with your business systems.',
        listItems : ['Analytics', 'Data Mining', 'Hadoop', 'Tie2', 'SFC PRogram'],
        additionalText: 'Working closely with you, we will design, configure, and help you implement a dynamic Salesforce workflow.'
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
});

$(window).scroll(()=>{
        $('.navbar').toggleClass('transparent', $(window).scrollTop() < 30);
        $('.navbar-brand').toggleClass('hide', !($(window).scrollTop() > $('.title').offset().top));
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({items: 1, margin: 22, stagePadding: 30});
  });