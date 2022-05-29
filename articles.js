db.articles.insertMany([
    {
        "title": "Cyber threats",
        "authors": ["Diana Kulishov"],
        "publication_date": new Date("2018.05.05"),
        "contents": "A cyber threat is a threat of malicious penetration into a virtual space to achieve political, social or other goals.",
        "tags": ["сyberattacks", "cybersecurity"],
        "review": [
            {
                "name": "Richard Boone",
                "message": "I would like more specifics.",
                "rating": 8
            },
            {
                "name": "Lily Arnold",
                "message": "Interesting article.",
                "rating": 10
            }
        ]
    },
    {
        "title": "Motivation of students to study",
        "authors": ["Ethlan Hines"],
        "publication_date": new Date("2010.01.21"),
        "contents": "Motivation is an incentive to action and an integral part of any professional and personal growth.",
        "tags": ["sociology", "study"],
        "review": [
            {
                "name": "Anna Andrews",
                "message": "It was quite an interesting article.",
                "rating": 10
            }
        ]
    },
    {
        "title": "Remote - not an employee?",
        "authors": ["Irene Sharp"],
        "publication_date": new Date("2020.08.12"),
        "contents": "Remote work and freelancing are increasingly invading the field of employment.",
        "tags": ["freelancing", "remote"],
        "review": [
            {
                "name": "Lydia Allison",
                "message": "The right article in our time.",
                "rating": 10
            },
            {
                "name": "Paul Campbell",
                "message": "I feel some kind of incompleteness in this article.",
                "rating": 8
            },
            {
                "name": "I agree with the author",
                "message": "I need more articles like this.",
                "rating": 10
            }
        ]
    },
    {
        "title": "Secrets of the most ancient teaching",
        "authors": ["Harry Phelps"],
        "publication_date": new Date("2006.03.09"),
        "contents": "One of the most ancient and mysterious beliefs on our planet is considered to be the Tibetan bon religion, which has existed for almost 20 millennia.",
        "tags": ["history", "religion","traditions"],
        "review": [
            {
                "name": "Emrys Sanders",
                "message": "Didn't find anything new for myself here.",
                "rating": 6
            },
            {
                "name": "Jake Nairn",
                "message": "I was not interested in this article.",
                "rating": 4
            }
        ]
    },
    {
        "title": "Everyone is scared of GMOs",
        "authors": ["Margaret Price"],
        "publication_date": new Date("1999.06.24"),
        "contents": "Why do people need GMO products and whether they are safe. Everything you need to know about genetically modified organisms.",
        "tags": ["selection", "biotechnologies"],
        "review": [
            {
                "name": "Rosa Robinson",
                "message": "Didn't see something interesting.",
                "rating": 3
            }
        ]
    },
    {
        "title": "Nightlife of the big city",
        "authors": ["Coleen Potter"],
        "publication_date": new Date("2017.11.28"),
        "contents": "The nightlife of St. Petersburg is a topic for a special conversation. There were a lot of wealthy entertainments for people back then, and particularly piquant pleasures were even reflected in old postcards...",
        "tags": ["society", "sociology"],
        "review": [
            {
                "name": "Jack Todd",
                "message": "It was interesting to read about such a night city.",
                "rating": 9
            },
            {
                "name": "Barbara Chase",
                "message": "Good article.",
                "rating": 9
            }
        ]
    }
   
])