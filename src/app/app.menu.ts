import { MenuItem } from './menu.service';
export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'fa fa-tachometer fa-4x',
        route: 'authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'fa fa-globe fa-4x',
        route: 'countries',
        submenu: [
            {
                text: 'Select',
                icon: 'fa fa-check-square fa-4x',
                route: null,
                submenu: [
                    {
                        text: 'USA',
                        icon: 'fa fa-globe fa-4x',
                        route: 'authenticated/country-detail/USA',
                        submenu: null
                    },
                    {
                        text: 'Bharat',
                        icon: 'fa fa-globe fa-4x',
                        route: 'authenticated/country-detail/Bharat',
                        submenu: null
                    },
                    {
                        text: 'Switzerland',
                        icon: 'fa fa-globe fa-4x',
                        route: 'authenticated/country-detail/Switzerland',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3',
                icon: 'fa fa-cogs fa-4x',
                route: 'authenticated/country-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'fa fa-cogs fa-4x',
                route: 'authenticated/country-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'fa fa-cogs fa-4x',
                route: 'authenticated/country-list/0',
                submenu: null
            }
            
        ],
    },
    {
        text: 'Maintanance',
        icon: 'fa fa-wrench fa-4x',
        route: null,
        submenu: [
            {
                text: 'Country List',
                icon: 'fa fa-list-ol fa-4x',
                route: 'authenticated/country-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'fa fa-cogs fa-4x',
                route: 'authenticated/settings',
                submenu: null
            }
        ]
    }
    
];
