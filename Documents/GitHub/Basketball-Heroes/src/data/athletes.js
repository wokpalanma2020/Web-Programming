// Data module holding all the relevant athletes data in one place so it can be easily imported into other components/modules
// synchronously

const athletes = [
    {
        'id': 'kyrie-irving',
        'name': 'Kyrie Irving',
        'country': 'Australia',
        'birthday': '03/23/1992',
        'position': 'Point Guard',
        'team': 'Brooklyn Nets',
        'link': 'https://en.wikipedia.org/wiki/Kyrie_Irving',
        'awards': [
            { 'year': '2016', 'type': 'Championship', 'title': 'NBA Champion'},
            { 'year': '2012', 'type': 'ROTY', 'title': 'Rookie'},
            { 'year': '2013-2015, 2017-2019', 'title': 'Allstar' },
            { 'year': '2014', 'type': 'MVP', 'title': 'Allstar MVP'},
            { 'year': '2014', 'type': 'MVP', 'title': 'Fiba MVP'}
        ],
    },
    {
        'id': 'michael-jordan',
        'name': 'Michael Jordan',
        'country': 'USA',
        'birthday': '02/17/1963',
        'position': 'Shooting Guard',
        'team': 'Retired',
        'link': 'https://en.wikipedia.org/wiki/Michael_Jordan',
        'awards': [
            { 'year': '1991-1993, 1996-1998', 'type': 'Championship', 'title': 'NBA Champion'},
            { 'year': '1991-1993, 1996-1998', 'type': 'MVP', 'title': 'Finals MVP'},
            { 'year': '1988, 1991, 1992, 1996, 1998', 'type': 'MVP', 'title': 'NBA MVP'},
            { 'year': '1988, 1996, 1998', 'type': 'MVP', 'title': 'All-Star MVP'},
            { 'year': '1985-1993, 1996-1998, 2002, 2003','type': 'All-Star Game', 'title': 'All-Star' },
            { 'year': '1985', 'type': 'ROTY', 'title': 'Rookie'},
        ], 
    },
    {
        'id': 'kobe-bryant',
        'name': 'Kobe Bryant',
        'country': 'USA',
        'birthday': '08/23/1978',
        'position': 'Shooting Guard',
        'team': 'Deceased',
        'link': 'https://en.wikipedia.org/wiki/Kobe_Bryant',
        'awards': [
            { 'year': '2000-2002, 2009,2010', 'type': 'Championship', 'title': 'NBA Champion'},
            { 'year': '2009, 2010', 'type': 'MVP', 'title': 'Finals MVP'},
            { 'year': '2008', 'type': 'MVP', 'title': 'NBA MVP'},
            { 'year': '2002, 2007, 2009, 2011', 'type': 'MVP', 'title': 'Allstar MVP'},
            { 'year': '1998, 2000-2016','type': 'All-Star Game', 'title': 'All-Star' },
        ], 
    },
    {
        'id': 'tim-duncan',
        'name': 'Tim Duncan',
        'country': 'USA',
        'birthday': '04/25/1976',
        'position': 'Power Forward',
        'team': 'Retired',
        'link': 'https://en.wikipedia.org/wiki/Tim_Duncan',
        'awards': [
            { 'year': '1999, 2003, 2005, 2007', 'type': 'Championship', 'title': 'NBA Champion'},
            { 'year': '1999, 2003, 2005', 'type': 'MVP', 'title': 'Finals MVP'},
            { 'year': '2002, 2003', 'type': 'MVP', 'title': 'NBA MVP'},
            { 'year': '2000', 'type': 'MVP', 'title': 'All-Star MVP'},
            { 'year': '1998, 2000-2011, 2013, 2015','type': 'All-Star Game', 'title': 'All-Star' },
            { 'year': '1998', 'type': 'ROTY', 'title': 'Rookie'},
        ], 
    },
    {
        'id': 'bill-russell',
        'name': 'Bill Russell',
        'country': 'USA',
        'birthday': '02/12/1934',
        'position': 'Center',
        'team': 'Retired',
        'link': 'https://en.wikipedia.org/wiki/Bill_Russell',
        'awards': [
            { 'year': '1957, 1959-1966, 198, 1969', 'type': 'Championship', 'title': 'NBA Champion'},
            { 'year': '1958, 1961-1963, 1965', 'type': 'MVP', 'title': 'NBA MVP'},
            { 'year': '1963', 'type': 'MVP', 'title': 'All-Star MVP'},
            { 'year': '1998, 2000-2011, 2013, 2015','type': 'All-Star Game', 'title': 'All-Star' },
            { 'year': '1998', 'type': 'ROTY', 'title': 'Rookie'},
        ],
    }
]