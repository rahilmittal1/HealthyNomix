const HEADER = "HealthyNomix";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#services", label: "Services" },
  { id: 3, url: "#about-us", label: "About us" },
  { id: 4, url: "#testimonials", label: "Testimonials" },
  { id: 5, url: "#footer", label: "Contacts" }
];
const BANNER_DATA = {
  HEADING: "Healing Healthcare With HealthyNomix",
  DECRIPTION:
    "At Healthynomix, we’re committed to providing you with the most exceptional care in a compassionate and friendly atmosphere.",
  TUTORIAL_URL:
    "https://youtu.be/dQw4w9WgXcQ",
  WATCH_TUTORIAL: "Book An Appointment"
};
const SERVICE_DATA = {
  HEADING: "Our Services",
  ALL_SERVICES: "All Services",
  SERVICE_LIST: [
    {
      LABEL: "Appointment Booking System",
      DESCRIPTION:
        "At Healthynomix, we want to improve patient access to care and care quality, which is why we place such an emphasis on providing access to our dedicated Same-Day Appointment Booking System. You can now book an appointment through the website or through our app",
      URL: "images/service1.png"
    },
    {
      LABEL: "On-call Providers",
      DESCRIPTION:
        "Our On-Call Providers makes the patient experience much easier and our care services more effective. We emphasize convenience for all our patients to ensure that visiting us is something you want to do. We connect you with medical experts and professionals to cater to your needs on call without any hassle. You can contact us to find more.",
      URL: "images/service2.png"
    },
    {
      LABEL: "Patient Portal",
      DESCRIPTION:
        "We know how frustrating it can be when you need to see an expert or get answers and none are available. We provide our Patient Portal to help our patients feel better, sooner. Try the Healthynomix app  difference for yourself or scroll through the website for more information.",
      URL: "images/service3.png"
    }
  ]
};

const ABOUT_DATA = {
  HEADING: "Why choose us?",
  TITLE: "Why we're different",
  IMAGE_URL: "images/network.png",
  WHY_CHOOSE_US_LIST: [
    "At Healthynomix, we’re committed to providing you with the most exceptional care in a compassionate and friendly atmosphere. ",
    "We aim to cover 3 main Sustainable Development Goals: Good Health and Well-Being, Gender Equality and Economic Growth and prosperity.",
    "Since the very beginning, we have had the philosophy that our patients come first. ",
    "Allow us to connect you with suitable medical experts to care for you.",
    "Find out more about our providers and let us take care of you.",
    
  ]
};
const TESTIMONIAL_DATA = {
  HEADING: "What clients say?",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      IMAGE_URL: "images/user1.jpg",
      NAME: "Julia hawkins",
      DESIGNATION: "Co-founder at ABC"
    },
    {
      DESCRIPTION:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      IMAGE_URL: "images/user2.jpg",
      NAME: "John Smith",
      DESIGNATION: "Co-founder at xyz"
    }
  ]
};

const SOCIAL_DATA = {
  HEADING: "Find us on social media",
  IMAGES_LIST: [
    "images/facebook-icon.png",
    "images/instagram-icon.png",
    "images/whatsapp-icon.png",
    "images/twitter-icon.png",
    "images/linkedin-icon.png",
    "images/snapchat-icon.png"
  ]
};

const FOOTER_DATA = {
  DESCRIPTION:
    "At Healthynomix, we’re committed to providing you with the most exceptional care in a compassionate and friendly atmosphere.",
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    ADDRESS: "La trobe street docklands, Melbourne",
    MOBILE: "+1 61234567890",
    EMAIL: "rahilmittal1@gmail.com"
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe to our newsletter to keep up to date with our latest developments",
  SUBSCRIBE: "Subscribe"
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA
};
export default MOCK_DATA;
