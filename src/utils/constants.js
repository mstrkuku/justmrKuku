//TODO: ADD <,'blog', 'request', 'store'> TO <NAV_ARRAY>
module.exports = Object.freeze({
    NAV_ARRAY:['info','gallery','request','comics','store'],
    FB_URL: 'https://www.facebook.com/mstrkuku/',
    IG_URL: 'https://www.instagram.com/mstrkuku/',
    LOADING_IMG: './src/assets/img/ku-anim.gif',
    THEKUS: './src/assets/img/theKus.png',
    ARTFAM: './src/assets/img/ArtFam-opaque.png',
    MR_KUKU_RUN_IMG: './src/assets/img/ku-anim.gif',
    MR_KUKU_TAG_IMG: './src/assets/img/mrkuku-alt.png',
    MR_KUKU_ORIG_IMG: './src/assets/img/mstrkuku-orig.png',
    MR_KUKU_COMING_SOON: './src/assets/misc/mstrkuku-coming-soon.mp4',
    CHAT_ICON: './src/assets/icons/chat.svg',
    REQUEST_ICON: './src/assets/icons/clipboard.svg',
    LEFT_ARROW: './src/assets/icons/left-arrow.svg',
    MY_NAME: 'Muki Kuku',
    REQUEST_EMAIL: 'What is your email address?',
    REQUEST_Q1: 'Generally, what do you want?',
    REQUEST_Q2: 'What do you want people to think when they see this design? ',
    REQUEST_Q3: 'If applicable, what business or people do what you\'re trying to do; who are your competitors?',
    REQUEST_Q4: 'What are 3 words that describe your logo/business/design?',
    REQUEST_Q5: 'Do you have colors you\'d suggest using?',
    REQUEST_Q6: 'Budget?',
    REQUEST_QUESTIONS: [
        'What is your email?',
        'Generally, what do you want?',
        'What do you want people to think when they see this design? ',
        'If applicable, what business or people do what you\'re trying to do; who are your competitors?',
        'What are 3 words that describe your logo/business/design?',
        'Do you have colors you\'d suggest using?',
        'Budget?',
    ],
    REQUEST_FORM_QUESTIONS: [
        {
            id: 1,
            type: 'email',
            question: 'What is your email?',
            title: 'Question 1'
        },
        {
            id: 2,
            type: 'textarea',
            question: 'Generally, what do you want?',
            title: 'Question 2'

        },
        {
            id: 3,
            type: 'textarea',
            question: 'What do you want people to think when they see this design? ',
            title: 'Question 3'

        },
        {
            id: 4,
            type: 'textarea',
            question: 'If applicable, what business or people do what you\'re trying to do; who are your competitors?',
            title: 'Question 4'

        },
        {
            id: 5,
            type: 'textarea',
            question: 'What are 3 words that describe your logo/business/design?',
            title: 'Question 5'

        },
        {
            id: 6,
            type: 'textbox',
            // option1: '<input type="textbox" placeholder="Write here..." />',
            disclaimer: 'if not applicable, write "N/A"',
            question: 'Do you have colors you\'d suggest using?',
            title: 'Question 6'

        },
        {
            id: 7,
            type: 'number',
            // option1: '<input type="textbox" placeholder="Write here..." />',
            disclaimer: 'if not applicable, write "N/A"',
            question: 'Budget?',
            title: 'Question 7'

        },
    ],

});
