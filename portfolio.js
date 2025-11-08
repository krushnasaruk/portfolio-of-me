// Professional Portfolio JavaScript
// Enhanced with modern animations and interactions

// Language Translations
const translations = {
    en: {
        navHome: 'Home',
        navAbout: 'About',
        navProjects: 'Projects',
        navSkills: 'Skills',
        navContact: 'Contact',
        heroTitle: 'Krushna Saruk',
        heroSubtitle: 'Computer Science Student & Developer',
        heroBadge: 'Available for Projects',
        heroDescription: 'Passionate first-year Computer Science student exploring the tech world through coding, hackathons, and building real-world projects. Currently mastering Java and C programming while creating innovative solutions that make a difference.',
        viewProjectsBtn: 'View Projects',
        getInTouchBtn: 'Get In Touch',
        aboutTitle: 'About Me',
        aboutSubtitle: 'Curious, hands-on, and always experimenting with new projects',
        aboutJourneyTitle: 'My Journey',
        aboutJourneyP1: "I'm a passionate first-year Computer Science student who recently started college. I'm exploring the tech world with strong interest in coding, hackathons, and building real-world projects that make a difference.",
        aboutJourneyP2: "Currently learning Java (focusing on understanding nested loops), practicing C programming, and working with Python for various projects. I work on programs like calculators, patterns, and small terminal-based games like Tetris. I'm curious, hands-on, and love experimenting with projects — not just learning theory.",
        aboutJourneyP3: "Beyond coding, I serve as the head of my class, demonstrating leadership skills and responsibility. I also have experience in MUN debates, which has helped me develop strong communication skills and critical thinking abilities that complement my technical skills. I've also worked on freelancing projects, creating professional websites for clients like medical professionals.",
        educationTitle: 'Education',
        statYearNum: '1st',
        statYearText: 'Year Student',
        statLangNum: '3+',
        statLangText: 'Languages',
        statProjectsNum: '4+',
        statProjectsText: 'Major Projects',
        statCuriosityNum: '∞',
        statCuriosityText: 'Curiosity',
        projectsTitle: 'My Projects',
        projectsSubtitle: 'Building clean, functional tools through personal projects and freelancing work',
        projectRoamrTitle: 'Roamr - Travel Planner',
        projectRoamrDesc: 'A travel planning application to discover new destinations and plan your trips seamlessly. Features include destination search, itinerary creation, and responsive design for on-the-go access.',
        projectMedicalTitle: 'Dr. Manisha Munde - Medical Website',
        projectMedicalDesc: 'A professional medical website for a Cardiologist & Internal Medicine Specialist featuring comprehensive services, experience timeline, contact forms, and modern responsive design.',
        projectAttendanceTitle: 'Attendance App',
        projectAttendanceDesc: 'A comprehensive web application for managing student attendance with QR code scanning, timetable management, and teacher dashboard.',
        projectDashboardTitle: 'Student Dashboard System',
        projectDashboardDesc: 'A comprehensive student management dashboard featuring attendance tracking, class schedules, extracurricular activities, and performance analytics. Built with modern UI/UX principles and responsive design.',
        projectHotelTitle: 'Hotel Management System',
        projectHotelDesc: 'A web-based hotel management system for booking rooms and managing reservations. Features a clean user interface and responsive design for a seamless booking experience.',
        projectGamesTitle: 'Terminal Games',
        projectGamesDesc: 'Small terminal-based games including Tetris, calculators, and pattern programs built with C programming.',
        projectYouTubeTitle: 'YouTube Channel - Reviewer',
        projectYouTubeDesc: 'Sharing my college life, coding journey, projects, and hackathon experiences to build a community of learners.',
        visitChannelBtn: 'Visit Channel',
        skillsTitle: 'Skills & Technologies',
        skillsSubtitle: 'Continuously learning and expanding my technical toolkit',
        skillsLanguages: 'Programming Languages',
        skillsWebDev: 'Web Development',
        skillsTools: 'Tools & Platforms',
        hackathonsTitle: 'Hackathons & Events',
        hackathonsSubtitle: 'Learning through real-world teamwork and problem-solving',
        hackathonSIHTitle: 'Smart India Hackathon',
        hackathonSIHDesc: 'Successfully participated in the prestigious Smart India Hackathon, showcasing innovative problem-solving skills and technical expertise',
        statusCompleted: 'Completed',
        hackathonThalesTitle: 'Thales GenTech India Hackathon 2025',
        hackathonThalesDesc: 'Planning to participate to showcase coding and problem-solving skills',
        statusUpcoming: 'Upcoming',
        leadershipTitle: 'Leadership & Activities',
        leadershipSubtitle: 'Building skills beyond coding through leadership and debate',
        leadershipClassHeadTitle: 'Class Head',
        leadershipClassHeadDesc: 'Currently serving as the head of my class, demonstrating leadership skills, responsibility, and the ability to coordinate with peers and faculty',
        statusActive: 'Active',
        leadershipMUNTitle: 'MUN Debate Experience',
        leadershipMUNDesc: 'Experienced in Model United Nations debates, developing strong communication skills, critical thinking, and the ability to present arguments effectively',
        statusExperience: 'Experience',
        contactTitle: "Let's Connect",
        contactSubtitle: 'Always excited to collaborate on projects and learn together',
    },
    mr: {
        navHome: 'मुख्यपृष्ठ',
        navAbout: 'माझ्याबद्दल',
        navProjects: 'प्रकल्प',
        navSkills: 'कौशल्ये',
        navContact: 'संपर्क',
        heroTitle: 'कृष्णा सारुक',
        heroSubtitle: 'संगणक विज्ञान विद्यार्थी आणि डेव्हलपर',
        heroBadge: 'प्रकल्पांसाठी उपलब्ध',
        heroDescription: 'कोडिंग, हॅकेथॉन आणि वास्तविक-जगातील प्रकल्प तयार करून तंत्रज्ञान जग शोधणारा एक उत्साही प्रथम-वर्ष संगणक विज्ञान विद्यार्थी. सध्या जावा आणि सी प्रोग्रामिंगमध्ये प्राविण्य मिळवत आहे आणि नाविन्यपूर्ण उपाय तयार करत आहे.',
        viewProjectsBtn: 'प्रकल्प पहा',
        getInTouchBtn: 'संपर्क साधा',
        aboutTitle: 'माझ्याबद्दल',
        aboutSubtitle: 'जिज्ञासू, प्रयोगशील आणि नेहमी नवीन प्रकल्पांवर काम करणारा',
        aboutJourneyTitle: 'माझा प्रवास',
        aboutJourneyP1: "मी एक उत्साही प्रथम-वर्ष संगणक विज्ञान विद्यार्थी आहे ज्याने नुकतेच महाविद्यालयीन शिक्षण सुरू केले आहे. मला कोडिंग, हॅकेथॉन आणि वास्तविक-जगातील प्रकल्प तयार करण्यात खूप रस आहे.",
        aboutJourneyP2: "सध्या मी जावा (नेस्टेड लूप समजण्यावर लक्ष केंद्रित करत आहे), सी प्रोग्रामिंगचा सराव करत आहे आणि विविध प्रकल्पांसाठी पायथनवर काम करत आहे. मी कॅल्क्युलेटर, पॅटर्न आणि टेट्रिससारखे छोटे टर्मिनल-आधारित गेम तयार करतो. मी केवळ सिद्धांत शिकण्याऐवजी प्रकल्पांवर प्रयोग करण्यास प्राधान्य देतो.",
        aboutJourneyP3: "कोडिंगच्या पलीकडे, मी माझ्या वर्गाचा प्रमुख म्हणून काम करतो, ज्यामुळे नेतृत्व कौशल्ये आणि जबाबदारी दिसून येते. मला MUN वादविवादांचा अनुभव आहे, ज्यामुळे माझी संवाद कौशल्ये आणि गंभीर विचार करण्याची क्षमता विकसित झाली आहे. मी वैद्यकीय व्यावसायिकांसारख्या क्लायंटसाठी व्यावसायिक वेबसाइट्स तयार करण्याचे फ्रीलान्सिंग प्रकल्प देखील केले आहेत.",
        educationTitle: 'शिक्षण',
        statYearNum: '१ला',
        statYearText: 'वर्ष विद्यार्थी',
        statLangNum: '३+',
        statLangText: 'भाषा',
        statProjectsNum: '४+',
        statProjectsText: 'प्रमुख प्रकल्प',
        statCuriosityNum: '∞',
        statCuriosityText: 'जिज्ञासा',
        projectsTitle: 'माझे प्रकल्प',
        projectsSubtitle: 'वैयक्तिक प्रकल्प आणि फ्रीलान्सिंग कामातून स्वच्छ, कार्यक्षम साधने तयार करणे',
        projectRoamrTitle: 'रोमर - प्रवास नियोजक',
        projectRoamrDesc: 'नवीन ठिकाणे शोधण्यासाठी आणि आपल्या सहलींचे अखंडपणे नियोजन करण्यासाठी एक प्रवास नियोजन ॲप्लिकेशन. यात गंतव्य शोध, प्रवास योजना निर्मिती आणि प्रवासात वापरासाठी प्रतिसाद देणारी रचना समाविष्ट आहे.',
        projectMedicalTitle: 'डॉ. मनीषा मुंडे - वैद्यकीय वेबसाइट',
        projectMedicalDesc: 'एका हृदयरोगतज्ज्ञ आणि अंतर्गत औषध तज्ञांसाठी एक व्यावसायिक वैद्यकीय वेबसाइट, ज्यात सर्वसमावेशक सेवा, अनुभव टाइमलाइन, संपर्क फॉर्म आणि आधुनिक प्रतिसाद देणारी रचना आहे.',
        projectAttendanceTitle: 'उपस्थिती ॲप',
        projectAttendanceDesc: 'क्यूआर कोड स्कॅनिंग, वेळापत्रक व्यवस्थापन आणि शिक्षक डॅशबोर्डसह विद्यार्थ्यांच्या उपस्थितीचे व्यवस्थापन करण्यासाठी एक व्यापक वेब ॲप्लिकेशन.',
        projectDashboardTitle: 'विद्यार्थी डॅशबोर्ड प्रणाली',
        projectDashboardDesc: 'उपस्थिती ट्रॅकिंग, वर्ग वेळापत्रक, अतिरिक्त क्रियाकलाप आणि कामगिरी विश्लेषणासह एक सर्वसमावेशक विद्यार्थी व्यवस्थापन डॅशबोर्ड. आधुनिक UI/UX तत्त्वे आणि प्रतिसाद देणाऱ्या रचनेसह तयार केलेले.',
        projectHotelTitle: 'हॉटेल व्यवस्थापन प्रणाली',
        projectHotelDesc: 'खोल्या बुक करण्यासाठी आणि आरक्षणाचे व्यवस्थापन करण्यासाठी एक वेब-आधारित हॉटेल व्यवस्थापन प्रणाली. यात स्वच्छ वापरकर्ता इंटरफेस आणि अखंड बुकिंग अनुभवासाठी प्रतिसाद देणारी रचना आहे.',
        projectGamesTitle: 'टर्मिनल गेम्स',
        projectGamesDesc: 'सी प्रोग्रामिंगसह तयार केलेले टेट्रिस, कॅल्क्युलेटर आणि पॅटर्न प्रोग्राम्ससह छोटे टर्मिनल-आधारित गेम्स.',
        projectYouTubeTitle: 'यूट्यूब चॅनेल - रिव्ह्यूअर',
        projectYouTubeDesc: 'शिकणाऱ्यांचा समुदाय तयार करण्यासाठी माझे महाविद्यालयीन जीवन, कोडिंग प्रवास, प्रकल्प आणि हॅकेथॉन अनुभव शेअर करणे.',
        visitChannelBtn: 'चॅनेलला भेट द्या',
        skillsTitle: 'कौशल्ये आणि तंत्रज्ञान',
        skillsSubtitle: 'सतत शिकत आहे आणि माझे तांत्रिक ज्ञान वाढवत आहे',
        skillsLanguages: 'प्रोग्रामिंग भाषा',
        skillsWebDev: 'वेब डेव्हलपमेंट',
        skillsTools: 'साधने आणि प्लॅटफॉर्म',
        hackathonsTitle: 'हॅकेथॉन आणि कार्यक्रम',
        hackathonsSubtitle: 'वास्तविक-जगातील सांघिक कार्य आणि समस्यानिवारणातून शिकणे',
        hackathonSIHTitle: 'स्मार्ट इंडिया हॅकेथॉन',
        hackathonSIHDesc: 'प्रतिष्ठित स्मार्ट इंडिया हॅकेथॉनमध्ये यशस्वीरित्या भाग घेतला, ज्यात नाविन्यपूर्ण समस्यानिवारण कौशल्ये आणि तांत्रिक कौशल्ये प्रदर्शित केली.',
        statusCompleted: 'पूर्ण झाले',
        hackathonThalesTitle: 'थेल्स जेनटेक इंडिया हॅकेथॉन २०२५',
        hackathonThalesDesc: 'कोडिंग आणि समस्यानिवारण कौशल्ये प्रदर्शित करण्यासाठी सहभागी होण्याची योजना आहे',
        statusUpcoming: 'आगामी',
        leadershipTitle: 'नेतृत्व आणि क्रियाकलाप',
        leadershipSubtitle: 'नेतृत्व आणि वादविवादातून कोडिंगच्या पलीकडे कौशल्ये तयार करणे',
        leadershipClassHeadTitle: 'वर्ग प्रमुख',
        leadershipClassHeadDesc: 'सध्या माझ्या वर्गाचा प्रमुख म्हणून काम करत आहे, नेतृत्व कौशल्ये, जबाबदारी आणि सहकारी आणि प्राध्यापकांशी समन्वय साधण्याची क्षमता प्रदर्शित करत आहे',
        statusActive: 'सक्रिय',
        leadershipMUNTitle: 'MUN वादविवाद अनुभव',
        leadershipMUNDesc: 'मॉडेल युनायटेड नेशन्स वादविवादांमध्ये अनुभवी, मजबूत संवाद कौशल्ये, गंभीर विचार आणि प्रभावीपणे युक्तिवाद सादर करण्याची क्षमता विकसित केली आहे',
        statusExperience: 'अनुभव',
        chatbotTitle: 'चॅट सहाय्यक',
        footerTitle: 'कृष्णा सारुक',
        footerSubtitle: 'कोड आणि सर्जनशीलतेद्वारे भविष्य घडवणारा उत्साही CS विद्यार्थी.',
        footerQuickLinks: 'द्रुत दुवे',
        footerProjects: 'प्रकल्प',
        footerRights: '© २०२५ कृष्णा सारुक. सर्व हक्क राखीव.'
    }
};

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced navbar background on scroll
let lastScrollTop = 0; // Keep track of scroll position

const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add scrolled class
    navbar.classList.toggle('scrolled', scrollTop > 50);

    // Hide/show navbar on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > 200) { // Scrolling down
        navbar.classList.add('hidden');
    } else { // Scrolling up
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
};

// Professional Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            // Add staggered animation for multiple elements
            const siblings = Array.from(entry.target.parentNode.children);
            const index = siblings.indexOf(entry.target);
            entry.target.style.animationDelay = `${index * 0.1}s`;
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-item, .stat-item, .hackathon-item, .leadership-item, .contact-item').forEach(el => {
    observer.observe(el);
});

// Enhanced skill bars animation
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, index * 200);
    });
};

// Animate skill bars when skills section is visible
const skillsSection = document.querySelector('.skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Enhanced hover effects for project cards (desktop only)
if (window.innerWidth > 768) {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Professional ripple effect for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            z-index: 1;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Professional loading animation
const initApp = () => {
    // Hide preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }

    // Attach scroll listener
    window.addEventListener('scroll', debounce(handleScroll, 10));

    // Initialize language toggle
    const languageToggle = document.getElementById('language-toggle');
    let currentLang = localStorage.getItem('language') || 'en';

    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            } else if (translations['en'][key]) {
                el.textContent = translations['en'][key]; // Fallback to English
            }
        });
    };

    languageToggle.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'mr' : 'en'));
    setLanguage(currentLang);
};

// Chatbot Functionality
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');

const toggleChatbot = (show) => {
    chatbotWindow.classList.toggle('hidden', !show);
};

chatbotIcon.addEventListener('click', () => {
    toggleChatbot(true);
    displayWelcomeMessage();
});
chatbotClose.addEventListener('click', () => toggleChatbot(false));

const addMessage = (text, sender, isNav = false) => {
    const messageElement = document.createElement('div');
    messageElement.className = `chatbot-message ${sender}`;
    
    if (isNav) {
        messageElement.innerHTML = text;
        messageElement.querySelectorAll('.nav-option').forEach(option => {
            option.addEventListener('click', () => {
                const sectionId = option.getAttribute('data-section');
                const target = document.querySelector(sectionId);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    addMessage(`Navigating to ${option.textContent}...`, 'bot');
                    setTimeout(() => toggleChatbot(false), 1000);
                }
            });
        });
    } else {
        messageElement.textContent = text;
    }
    
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
};

const displayWelcomeMessage = () => {
    chatbotMessages.innerHTML = '';
    setTimeout(() => {
        addMessage("Hello! I'm your navigation assistant. How can I help you today?", 'bot');
    }, 300);
    setTimeout(() => {
        const navOptions = `
            Where would you like to go?
            <span class="nav-option" data-section="#about">About Me</span>
            <span class="nav-option" data-section="#projects">My Projects</span>
            <span class="nav-option" data-section="#skills">My Skills</span>
            <span class="nav-option" data-section="#contact">Contact Me</span>
        `;
        addMessage(navOptions, 'bot', true);
    }, 1200);
};

// Initialize EmailJS with your public key
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init('G60uS9bPFHYpkaPu7');
    } else {
        console.warn('EmailJS SDK failed to load.');
    }
})();

// Enhanced contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Enhanced validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Prepare email parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'krushnasaruk55@gmail.com'
        };
        
        // Send email using EmailJS
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        
        emailjs.send('service_6mh45qi', 'template_c7ft3n4', templateParams)
            .then(function(response) {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, function(error) {
                showNotification('Failed to send message. Please try again or email me directly.', 'error');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            });
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Professional notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add professional styles
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add professional notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(notificationStyles);

// Professional scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #0099cc);
    z-index: 10001;
    transition: width 0.1s ease;
`;

document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Professional console message
console.log(`
🚀 Krushna Saruk's Professional Portfolio
📧 Contact: krushnasaruk55@gmail.com
💻 GitHub: github.com/krushnasaruk
📺 YouTube: youtube.com/@thereviewerb4u
🎨 Built with modern web technologies
`);

// Easter egg - Professional Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification('🎉 Konami Code activated! You found the easter egg!', 'success');
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        konamiCode = [];
    }
});

// Professional rainbow animation for easter egg
const rainbowStyles = document.createElement('style');
rainbowStyles.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyles);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('load', initApp);

// Professional page visibility API
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when page becomes visible
        document.body.style.animationPlayState = 'running';
    }
});

// Professional error handling
window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.error);
    // Could send error reports to analytics here
});

// Professional unhandled promise rejection handling
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
    // Could send error reports to analytics here
});