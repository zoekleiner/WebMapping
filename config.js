var config = {
    style: 'mapbox://styles/zoekleiner/clw6qgzxk01em01ob0og741by',
    accessToken: 'pk.eyJ1Ijoiem9la2xlaW5lciIsImEiOiJjbHVsaGxtZDIxMmZ6MnBudXkxaWU0dW9qIn0.evoQWx2EE6vs2yGaEqg23g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Reclaimed Oregon',
    subtitle: 'Renamed Features of Oregon with Indigenous Significance',
    byline: 'Cartographer: Zoë Kleiner',
    footer: 'Sources: <br> https://www.cowcreek-nsn.gov/sites-in-oregon-renamed-for-cow-creek-umpqua-culture/ <br> https://www.kiro7.com/news/local/washington-changes-9-derogatory-place-names-ones-proposed-by-tribes/26KWCLGJYNHT7G3MFPG2RT5XE4/#:~:text=The%20pair%20of%20Columbia%20River,islands%20in%20the%20Wishxam%20language., <br> https://en.wikipedia.org/wiki/Cedar_Valley_(Oregon), <br> https://en.wikipedia.org/wiki/Moolack_Beach, <br> https://upload.wikimedia.org/wikipedia/commons/f/ff/Takelma_texts_%28IA_cu31924027108962%29.pdf, <br> https://dotycoyote.com/writing/acorn_woman.html, <br> https://www.ohs.org/about-us/affiliates-and-partners/oregon-geographic-names-board/upload/Kailapa_Maountain_proposal-30Mar2021.pdf, <br> https://www.cowcreekeducation.com/takelma-language/, <br> https://www.opb.org/article/2022/04/22/pacific-northwest-places-derogatory-slur-replacement-names/, <br> https://www.ohs.org/about-us/affiliates-and-partners/oregon-geographic-names-board/upload/USBGN_OR_proposals_June_2018.pdf, <br> https://www.cowcreek-nsn.gov/tribal-story/, <br> https://www.oregonhistoryproject.org/articles/historical-records/william-rumley/, <br> https://www.ohs.org/about-us/affiliates-and-partners/oregon-geographic-names-board/upload/USBGN_OR_proposals_June_2018.pdf,<br> <br> Images: <br> https://www.oregonhistoryproject.org/media/uploads/William-Rumley-FSDM2.jpg <br> https://th.bing.com/th/id/R.4d8bef4b42d5309a10f2790c9805fd80?rik=wFl3VLxO4pL9Mw&riu=http%3a%2f%2fwww.penn.museum%2fcollections%2fassets%2f48466_800.jpg&ehk=z0fIM4CFZRk3MXL38z2UgfKr%2fj1zXipWa7x3gqh6K7E%3d&risl=&pid=ImgRaw&r=0%20alt=%20An%20image%20of%20a%20salmon%20spear%20shaft <br> <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Welcome to the Oregon Renamed Places Project.',
            description: 'This interactive map will take you through a range of locations in Oregon that have been renamed following an initiative that removed derogatory terms from public lands. Many of the new names are culturally significance to Indigenous peoples. Native people have been and continue to be present on this land and their culture is vital to understand. Keep scrolling to learn more about the meanings behind these names, and gain insight into the rich cultural heritage of Oregon’s Indigenous communities and their enduring connection to the land.',
            //this is the first location the map opens to, Oregon at the state level
            location: {
                center: [-120.67996, 44.51897],
                zoom: 6.37,
                pitch: 2.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 1
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 1
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            category: "IL",
            title: 'Renamed in an Indigenous Language',
            description: 'Of the 56 renamed locations, 19 of them were renamed using Indigenous languages. The three languages used are Takelma, Umatilla, Chinook Jargon, and the Northern Burns Paiute langauges. These features are marked as blue circles on the map. ',
            location: {
                center: [-120.67996, 44.51897],
                zoom: 6.37,
                pitch: 2.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 0
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            category: "IL",
            title: 'Talekma Creek',
            description: 'The Takelma Tribe lived across Southern Oregon for over 10,000 years. This creek flows through the the native homeland of the Takelma people known as Table Rocks. During the era of colonization, this region was renamed as the Rogue River Valley.',
                //From the late 1840s until about 1857, there were numerous conflicts and battles in the area between the Rogue River tribes and the newcomers. The culmination of the early conflicts were the treaties of 1853 and 1854 with some of the Rogue River tribes that ceded millions of acres of land to the United States in exchange for peace, safety, and a permanent reservation.
            location: {
                center: [-123.6477113, 42.2775561],
                zoom: 14.00,
                pitch: 2.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 0
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            category: "IL",
            title: 'West Fork Takelma Creek',
            description: 'The Takelma Tribe spoke the Takelma language. This language was also spoken by the Latgawa Tribe and the Cow Creek Band of Upper Umpqua. <br> <a href="https://www.cowcreekeducation.com/dictionary/" target="_blank">Click here to view a Takelma Dictionary</a>',
            location: {
                center: [-123.649277, 42.307096],
                zoom: 15.19,
                pitch: 2.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 0
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            category: "IL",
            title: 'Kailapa Mountain',
            description: 'In the Takelma Language, the first syllable of "Kailapa" rhymes with the word for "Eye" and the latter part of the word (lapa) translates to "Woman." This new name maintains the feminine quality of the previous toponym  using a respectful non-degrogatory Native term.',
            location: {
                center: [-123.4533364,42.1593452],
                zoom: 13.00,
                pitch: 62.00,
                bearing: 10.40
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [             
                {
                layer: 'languagetojso-9kwi1m',
                opacity: 1
            },
            {
                layer: 'oregon-rename-4a0v8j',
                opacity: 0
            },
            {
                layer: 'storytellingtojso-be5k6w',
                opacity: 0
            },
            {
                layer: 'importantfiguretojso-0ajq0o',
                opacity: 0
            }],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'right',
            hidden: false,
            category: "IL",
            title: 'Yulum Ridge',
            description: 'In the Takelma Language, "Yulum Ridge" translates to "Eagle Ridge."',
            location: {
                center: [-123.6665973, 42.33138345],
                zoom: 13.00,
                pitch: 62.00,
                bearing: 10.40
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 0
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            category: "IL",
            title: 'Nihwik Mountain',
            description: 'Within the Yulum Ridge, Nihwik Mountain peaks above the valley. In the Takelma Language, "Nihwik" translates to "Black Bear."',
            location: {
                center: [-123.666699, 42.33142992],
                zoom: 14.00,
                pitch: 75.00,
                bearing: 91.20
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'languagetojso-9kwi1m',
                opacity: 1
            },
            {
                layer: 'oregon-rename-4a0v8j',
                opacity: 0
            },
            {
                layer: 'storytellingtojso-be5k6w',
                opacity: 0
            },
            {
                layer: 'importantfiguretojso-0ajq0o',
                opacity: 0
            }],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            category: "IL",
            title: 'Teel Gap',
            description: 'Within the Siskiyou Mountains, In the Takelma Language, "Teel Gap" translates to "Yellow Jacket Gap."',
            location: {
                center: [-122.9364283, 42.0662398],
                zoom: 13.00,
                pitch: 75.00,
                pitch: 75.00,
                bearing: 67.20
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 0
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: '9-identifier',
            alignment: 'left',
            hidden: false,
            category: "IL",
            title: 'Wilámxa Tip',
            description: 'Wilámxa stems from the Takelma word "wiláu" meaning arrow.',
            //need to change the color of the marker to be pink
            location: {
                center: [-122.333941, 42.45141422],
                zoom: 13.00,
                pitch: 70.00,
                bearing: 100.80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter:  [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 0
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: '10-identifier',
            alignment: 'right',
            hidden: false,
            category: "IL",
            title: 'Máalsi Tip',
            //need to add the source for the image
            image: 'https://th.bing.com/th/id/R.4d8bef4b42d5309a10f2790c9805fd80?rik=wFl3VLxO4pL9Mw&riu=http%3a%2f%2fwww.penn.museum%2fcollections%2fassets%2f48466_800.jpg&ehk=z0fIM4CFZRk3MXL38z2UgfKr%2fj1zXipWa7x3gqh6K7E%3d&risl=&pid=ImgRaw&r=0 alt= An image of a salmon spear shaft',
            description: 'This neighbooring point, was renamed from the Takelma word "Máal" which refers to a "Salmon Spear Shaft." A tool shown above that is used by many tribes to catch salmon.',
            location: {
                center: [-122.3281298, 42.44095116],
                zoom: 13.00,
                pitch: 70.00,
                bearing: 76.80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter:  [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 0
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: '11-identifier',
            alignment: 'right',
            hidden: false,
            category: "IL",
            title: 'Paa-ba Tehaga Creek',
            description: 'Paa-ba Tehaga translates to "on the line" in the Northern Burns Paiute language.',
            location: {
                center: [-117.049026, 42.561881],
                zoom: 14.00,
                pitch: 41.00,
                bearing: 80.80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter:  [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 0
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: '12-identifier',
            alignment: 'right',
            hidden: false,
            category: "IL",
            title: 'Namaa-Tsa pi punni',
            description: 'Paa-ba Tehaga translates to "two rivers connecting" in the Northern Burns Paiute language. As you can see on the map, two rivers merge to one on either side of this area. This reflects the tendency of Indigenous languges to name features after their physcial apperances.',
            location: {
                center: [-117.032522, 42.559111],
                zoom: 14.00,
                pitch: 41.00,
                bearing: 80.80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter:  [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 0
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: '13-identifier',
            alignment: 'right',
            hidden: false,
            category: "IL",
            title: 'Paa nena-d Reservoir',
            description: 'In the Northern Burns Paiute language, "Reservoir" translates to ""Paa nena-d."',
            location: {
                center: [-117.7326128, 43.71980909],
                zoom: 15.00,
                pitch: 16.50,
                bearing: 56.17
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter:  [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 0
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        // {
        //     id: '14-identifier',
        //     alignment: 'right',
        //     hidden: false,
        //     category: "IL",
        //     title: 'Paa nena-d Reservoir',
        //     description: '"Paa nena-d" is used again to rename this body of water, using the same phrase to refer to the reservoir.',
        //     location: {
        //         center: [-117.2389967, 42.53602865],
        //         zoom: 16.00,
        //         pitch: 0,
        //         bearing: 0
        //         // flyTo additional controls-
        //         // These options control the flight curve, making it move
        //         // slowly and zoom out almost completely before starting
        //         // to pan.
        //         //speed: 2, // make the flying slow
        //         //curve: 1, // change the speed at which it zooms out
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: '15-identifier',
        //     alignment: 'right',
        //     hidden: false,
        //     category: "IL",
        //     title: 'Lapam Gulch',
        //     description: 'The Cow Creek Band Of Umpqua Tribe Of Indians proposed this name because "Lapam" shares a phonetic translation with the word "lapháam" that means frog."',
        //     location: {
        //         center: [-123.5252844, 42.36228966],
        //         zoom: 15.00,
        //         pitch: 45.50,
        //         bearing: 88.05
        //         // flyTo additional controls-
        //         // These options control the flight curve, making it move
        //         // slowly and zoom out almost completely before starting
        //         // to pan.
        //         //speed: 2, // make the flying slow
        //         //curve: 1, // change the speed at which it zooms out
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        {
            id: '16-identifier',
            alignment: 'right',
            hidden: false,
            category: "IL",
            title: 'Moolock Prairie',
            description: 'The word "Moolock" derives from the Chinook Jargon word for "elk."',
            location: {
                center: [-122.6175404, 42.7879034],
                zoom: 15.00,
                pitch: 0,
                bearing: 88.05
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter:  [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 0
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: '17-identifier',
            alignment: 'right',
            hidden: false,
            category: "IL",
            title: 'Sixes Bluff',
            description: 'The word "sixes" comes from the Chinook Jargon word for "friend." Sixes is a common name for features in Southern Oregon.',
            location: {
                center: [-124.5178861, 42.8262198],
                zoom: 16.00,
                pitch: 0,
                bearing: 88.05
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 0
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 1
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-chapter',
            alignment: 'left',
            hidden: false,
            category: "ST",
            title: 'Named after a persona in Native Story Telling.',
            description: 'The following points were named after characters from Native stories that are recited to teach listeners about various life lessons and natural phenomena. These points are shwon as orange circles on the map. ',
            location: {
                center: [-123.00421, 42.08511],
                zoom: 9.77,
                pitch: 2.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 0
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 1
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: '18-identifier',
            alignment: 'right',
            hidden: false,
            category: "ST",
            title: 'Acorn Woman Lake',
            description: 'In southwest Oregon, the legend of the Acorn Woman is a powerful story of sacrifice and care. The Acorn Woman is a native medicine woman who spreads her skin across the bark of oak trees each spring to produce arcons filled with her medicine.',
            //need to change the color of the marker to be pink
            location: {
                center: [-123.0203121, 42.04047036],
                zoom: 15.00,
                pitch: 45.00,
                bearing: 10.80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                
                {
                layer: 'storytellingtojso-be5k6w',
                opacity: 1
                }],
            onChapterExit: []
        },
        {
            id: '19-identifier',
            alignment: 'right',
            hidden: false,
            category: "ST",
            title: 'Acorn Woman Mountain',
            description: 'In the winter, the Acorn Woman returns to this mountain. During this time,  her hair turns white as she rests and begins preparing for the coming spring.',
            //need to either delete the peak or add second marker
            location: {
                center: [-122.9882101, 42.06336133],
                zoom: 13.00,
                pitch: 45.00,
                bearing: 76.80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '20-identifier',
            alignment: 'left',
            hidden: false,
            category: "ST",
            title: 'Acorn Woman Peak',
            description: 'A short distance from Acorn Woman Mountain, lies Acorn Woman peak.',
            //need to either delete the peak or add second marker
            location: {
                center: [-123.0119555, 42.0696414],
                zoom: 13.00,
                pitch: 45.00,
                bearing: 76.80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            category: "IF",
            title: 'Features named after significant people in Indigenous history.',
            description: 'The following points were named after characters from Native stories that are recited to teach listeners about various life lessons and natural phenomena. These are shown on the map as magenta circles. ',
            location: {
                center: [-123.26698, 43.90755],
                zoom: 6.93,
                pitch: 10.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 0
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 0
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 0
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'identifier-25',
            alignment: 'left',
            hidden: false,
            category: "IF",
            title: 'Rumley Creek',
            //ask how to make this photo smaller
            image: 'https://www.oregonhistoryproject.org/media/uploads/William-Rumley-FSDM2.jpg',
            description: 'Rumley Creek is named after William Rumley, a man born into slavery in 1830. He traveled from Missouri to Califronia during the gold rush where he escaped enslavment at the age of 21. Rumley ventured north and eventually married Native Karok woman, named Lucy, in 1864. The couple became community legends for their constant dedication and generosity.',
            //need to either delete the peak or add second marker
            location: {
                center: [-124.3631578, 42.4684427],
                zoom: 13.00,
                pitch: 45.00,
                bearing: 76.80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '22-identifier',
            alignment: 'right',
            hidden: false,
            category: "IF",
            title: 'Chief Miwaleta Creek',
            description: 'Chief Miwaleta lead The Cow Creek Band Of Umpqua Tribe Of Indians during the latter half of the 27th century. He was killed by influenza during the catastrophic gencoide of Indigenous people. This creek was renamed in his honor.',
            //need to either delete the peak or add second marker
            location: {
                center: [-123.4500688, 42.9190056],
                zoom: 14.00,
                pitch: 10.00,
                bearing: 85.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '23-identifier',
            alignment: 'right',
            hidden: false,
            category: "IF",
            title: 'Gathering Creek',
            description: 'The Cow Creek Band Of Umpqua Tribe lived between the Cascade and Coastal mountain ranges along the South Umpqua River. The tribes territory included the Umpqua watershed and the surrounding areas were places of trade, hunting and gathering. This creek was a place of gathering, celebration, and commune for the Cow Creek people and has been renamed to refelct their presence on the land.',
            //need to either delete the peak or add second marker
            location: {
                center: [-123.2948173, 44.1448454],
                zoom: 14.00,
                pitch: 50.00,
                bearing: 20.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thankyou',
            alignment: 'left',
            hidden: false,
            category: 'THANKYOU',
            title: 'Thank you for exploring this project!',
            description: 'If you are interesed in learning more about Indigenous presence in Oregon, explore the links below! <br> <a href="https://burnspaiute-nsn.gov/" target="_blank">Burns Paiute Tribe.</a> <br> <a href="https://www.cowcreek-nsn.gov/" target="_blank">Cow Creek Band of Umpqua Tribe of Indians.</a> <br> <a href="https://ctuir.org/" target="_blank">Confederated Tribes of the Umatilla Indian Reservation.</a> <br> <br> If you are aware of another location in Oregon with a degroagoty name that needs to be replaced, please follow the link below to submit a request. <br> <a href="https://www.ohs.org/about-us/affiliates-and-partners/oregon-geographic-names-board/proposing-a-name.cfm" target="_blank">Click here to propose a name change.</a>',
            location: {
                center: [-120.67996, 44.51897],
                zoom: 6.00,
                pitch: 2.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'languagetojso-9kwi1m',
                    opacity: 1
                },
                {
                    layer: 'oregon-rename-4a0v8j',
                    opacity: 1
                },
                {
                    layer: 'storytellingtojso-be5k6w',
                    opacity: 1
                },
                {
                    layer: 'importantfiguretojso-0ajq0o',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
    ]
};
