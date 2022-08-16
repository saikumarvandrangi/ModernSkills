import React from "react";
import * as RiIcons from 'react-icons/ri'

export const SidebarData =[
    {
        title: 'Git',
        path: '/git',
        iconClosed:<RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav:[
            {
                title:'Notes',
                path: '/git/notes',
                isCompleted: true
            }
        ]
    },
    {
        title: 'Jenkins',
        path: '/jenkins',
        iconClosed:<RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav:[
            {
                title:'Notes',
                path: '/jenkins/notes',
                isCompleted: false
            },
            
        ]
    },
    {
        title: 'Ansible',
        path: '/ansible',
        iconClosed:<RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav:[
            {
                title:'Notes',
                path: '/ansible/notes',
                isCompleted: false
            },
            
        ]
    },
    {
        title: 'Terraform',
        path: '/terraform',
        iconClosed:<RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav:[
            {
                title:'Notes',
                path: '/terraform/notes',
                isCompleted: false
            },
            
        ]
    },

]