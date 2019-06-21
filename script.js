var servicesContent = [
    {
        name: 'Software Development',
        desc: 'We combine a creative design approach with the latest software and hardware engineering principles to ensure a spectacular result.',
        listItems : ['Design Thinking', 'UX/UI Design', 'Wireframing', 'User Centric Design', 'Market Research'],
        additionalText: 'Using proven methods combined with today’s most advanced tools and data, we can provide you with the edge you need to dominate your niche.'
    },
    {
        name: 'Product Development',
        desc: 'For a business to succeed in today’s fast-paced market, agility is number one. We give you the tools you need to move forward with confidence, fully customized to your needs.',
        listItems : ['Frontend Development', 'Backend Development', 'Mobile App Development', 'ERP Systems', 'APIs & Web Services'],
        additionalText: 'Support your teams with systems that make sense. Delight your customers by giving them what they want. It’s all possible.'
    },
    {
        name: 'Software Testing',
        desc: 'Testing and quality assurance are critical aspects of software and hardware development. Our testing suite leaves nothing to chance, ensuring your products perform exactly as they should.',
        listItems : ['Functional QA & Testing', 'Mobile Testing', 'In-Sprint Automation', 'Performance Testing', 'Security Testing'],
        additionalText: 'With robust testing reduce downtime, identify vulnerabilities, envision performace and build quality from day one.'
    },
    {
        name: 'Innovation',
        desc: 'Today’s most advanced tools and technologies can be applied to your business, improving processes from manufacturing to logistics to customer service, and more besides.',
        listItems : ['Blockchain', 'Machine Learning', 'Artificial Intelligence', 'Internet of Things', 'Chatbots and Virtual Assistants'],
        additionalText: 'Discover what these innovations can do to elevate your business processes and support scale.'
    },
    {
        name: 'Salesforce',
        desc: 'Salesforce is one of the most powerful CRMs on the market today, but it reaches its full potential only when it is customized to integrate with your business systems.',
        listItems : ['Lightning Implementation & Migration', 'Admin, Development & Support Services', 'Sales, Service & Marketing Cloud Implementation', 'Pardot Marketing Automation', 'Nintex Drawloop & DocuSign Integrations'],
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

// https://stackoverflow.com/a/37113430/8252164
// 100vh not constant in mobile fix
$(window).resize(()=>{
    $('.main-logo').height($(window).height());
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({items: 1, margin: 22, stagePadding: 20});
  });

  $('#nav-toggle').click(function(){
      $(this).toggleClass('active');
      $('.menu').toggleClass('hide');
      $('.site-content').toggleClass('hide');
  });

$('.menu li').click(function(){
    $('.menu').addClass('hide');
    $('.bars').removeClass('hide');
});