import { ComponentStory, ComponentMeta } from '@storybook/react'
import MyHeader from '../components/MyHeader'

export default {
    title: 'New/MyHeader',
    component: MyHeader,
} as ComponentMeta<typeof MyHeader>

const Template: ComponentStory<typeof MyHeader> = (args) => <MyHeader {...args} />

const Default = Template.bind({})
Default.args = {
    pages: [
        {
            name: 'Test Page',
            slug: 'test-page',
            url: '/test-page/',
            id: '924',
            page_type: 'blank',
        },
        {
            name: 'Article v1 Permutations',
            slug: 'article-v1-permutations',
            url: '/article-v1-permutations/',
            id: '935',
            page_type: 'blank',
        },
        {
            name: 'New Page',
            slug: 'new-page',
            url: '/new-page/',
            id: '950',
            page_type: 'blank',
        },
        {
            name: 'Home',
            slug: 'home',
            url: '/home/',
            id: '839',
            page_type: 'homepage',
        },
        {
            name: 'Colors',
            slug: 'colors',
            url: '/colors/',
            id: '907',
            page_type: 'blank',
        },
    ],

    CMSLayout: {
        themeStyles: {
            mainColor: '#00ab80',
            textColor: '#666666',
            headingColor: '#008185',
            subHeadingColor: '#008185',
            textColorAccent: '#242424',
            linkColor: '#000000',
            accentBackgroundColor: '#ff7b42',
            accentColor2: '#00c2c9',
            altColor: '#00ab80',
            headerBackground: '#88f7fb',
            footerBackground: '#e3dccc',
            navBackground: '#88f7fb',
            BckdHeaderSocial: '#91fbff',
            NavText: '#008185',
        },
        logoUrl: '/files/2022/08/EiffelWater1.jpg',
        social: ['http://www.facebook.com/Tipsyburro', 'http://www.twitter.com/nbc'],
        contact: {
            phone: {
                name: 'Phone',
                number: '(919) 540-0390',
                disabled: '',
                isPrimaryPhone: true,
            },
            email: {
                name: 'Email',
                email: 'email@email.com',
                disabled: '',
                isPrimaryEmail: true,
            },
        },
        siteName: "Plastic Mind's Friends & Co.",
        phoneNumber: '9195400390',
        email: 'email@email.com',
        url: 'http://wordpress.test',
        modules: [
            {
                componentType: 'navigation',
                attributes: {
                    logoUrl: '/files/2022/08/EiffelWater1.jpg',
                    pages: [
                        {
                            name: 'Test Page',
                            slug: 'test-page',
                            url: '/test-page/',
                            id: '924',
                            page_type: 'blank',
                        },
                        {
                            name: 'Article v1 Permutations',
                            slug: 'article-v1-permutations',
                            url: '/article-v1-permutations/',
                            id: '935',
                            page_type: 'blank',
                        },
                        {
                            name: 'New Page',
                            slug: 'new-page',
                            url: '/new-page/',
                            id: '950',
                            page_type: 'blank',
                        },
                        {
                            name: 'Home',
                            slug: 'home',
                            url: '/home/',
                            id: '839',
                            page_type: 'homepage',
                        },
                        {
                            name: 'Colors',
                            slug: 'colors',
                            url: '/colors/',
                            id: '907',
                            page_type: 'blank',
                        },
                    ],
                    navStyle: 'layout1',
                    borderNum: 7,
                    navImage: '/files/2022/08/EiffelWater1.jpg',
                },
            },
            {
                componentType: 'footer',
                attributes: {
                    pages: [
                        {
                            name: 'Test Page',
                            slug: 'test-page',
                            url: '/test-page/',
                            id: '924',
                            page_type: 'blank',
                        },
                        {
                            name: 'Article v1 Permutations',
                            slug: 'article-v1-permutations',
                            url: '/article-v1-permutations/',
                            id: '935',
                            page_type: 'blank',
                        },
                        {
                            name: 'New Page',
                            slug: 'new-page',
                            url: '/new-page/',
                            id: '950',
                            page_type: 'blank',
                        },
                        {
                            name: 'Home',
                            slug: 'home',
                            url: '/home/',
                            id: '839',
                            page_type: 'homepage',
                        },
                        {
                            name: 'Colors',
                            slug: 'colors',
                            url: '/colors/',
                            id: '907',
                            page_type: 'blank',
                        },
                    ],
                    navStyle: 'layout1',
                    borderNum: 7,
                    socialData: [
                        {
                            linkUrl: 'https://www.google.com/',
                        },
                        {
                            linkUrl: 'https://www.facebook.com',
                        },
                        {
                            linkUrl: 'https://www.instagram.com',
                        },
                        {
                            linkUrl: 'https://www.twitter.com',
                        },
                    ],
                    addressData: {
                        street: '444 happy road',
                        cityState: 'Townsville, Georgia',
                        zip: '47384',
                    },
                },
            },
        ],
    },
}

export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
}