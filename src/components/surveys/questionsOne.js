const json = {
    "title":"React Questionnaire","logoPosition":"right","pages":[
        {
            "name":"page1",
            "elements":[
                {
                    "type":"text",
                    "name":"question1",
                    "title":"Please enter your name",
                    "isRequired":true
                }
                ],
             "title":"Question 1"
        },
    
        {
            "name":"page2",
            "elements":[
                {
                    "type":"text",
                    "name":"question2",
                    "title":"Please enter your email",
                    "isRequired":true,
                    "inputType": "email"
                }
                ],
            "title":"Question 2"
        },

        {
            "name":"page3",
            "elements":[
                {
                    "type":"radiogroup",
                    "name":"question4",
                    "title":"Your gender",
                    "choices":[
                        {"value":"Item 1","text":"Male"},
                        {"value":"Item 2","text":"Female"},
                        {"value":"Item 3","text":"Prefer not to answer"}
                    ]
                }
                ],
                "title":"Question 3","description":"(optional)"
        },

        {
            "name":"page4",
            "elements":[
                {
                    "type":"checkbox",
                    "name":"question5",
                    "title":"Select all the social media you use",
                    "isRequired":true,
                    "choices":[
                        {"value":"Item 1","text":"Facebook"},
                        {"value":"Item 2","text":"Twitter"},
                        {"value":"Item 4","text":"Tiktok"},
                        {"value":"Item 5","text":"Instagram"}
                    ],
                    "showOtherItem":true
                }
            ],
            "title":"Question 4"
        },

        {
            "name":"page5",
            "elements":[
            {
                "type":"dropdown",
                "name":"question3",
                "title":"How old are you?",
                "choices":[
                    {"value":"Item 1","text":"Below 18"},
                    {"value":"Item 2","text":"18-25"},
                    {"value":"Item 3","text":"25-34"},
                    {"value":"Item 4","text":"35-40"},
                    {"value":"Item 5","text":"Above 40"}
                ]
            }
        ],
        "title":"Question 5","description":"(optional)"
        }
    ]
};

export default json;