import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from '../components/Card'
import { ArticleItems } from '../types'
import { themeStyles, buttonList1, buttonList2, buttonListJust2, createStoryStyles, imageSizes } from 'storydefaults'

export default {
    title: 'new/Card',
    component: Card,
    argTypes: {
        imgsize: {
            options: ['landscape_4_3', 'landscape_3_2', 'portrait_3_4', 'portrait_2_3', 'square_1_1', 'widescreen_16_9', 'widescreen_2_4_1', 'widescreen_3_1'],
            control: { type: 'radio' },
        },
        well: {
            options: ['', '1'],
            control: { type: 'radio' },
        },
        columns: {
            options: [1, 2, 3, 4],
            control: { type: 'radio' },
        },
        type: {
            options: ['article_1', 'article_2', 'article_3', 'article'],
            control: { type: 'radio' },
        },
        items: {
            align: {
                options: ['left', 'right', 'center'],
                control: { type: 'radio' },
            },
        },
    },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
    <>
        {colorStyles && <style>{colorStyles}</style>}
        <Card {...args} />
    </>
)

const Default = Template.bind({})
const item1: ArticleItems = {
    id: '1edcc99c_9904_445b_dbac_9029c0d9e456',
    nextImageSizes: imageSizes.normal,
    desc: 'changed',
    icon: '',
    align: 'center',
    icon2: '',
    icon3: '',
    image: '/files/2022/10/darkmountains.jpg',
    plugin: '',
    btnSize: '',
    btnType: '',
    weblink: '',
    btnSize2: '',
    btnType2: '',
    disabled: '',
    headline: 'changed article',
    isPlugin: '',
    pagelink: '/article/',
    weblink2: '',
    actionlbl: 'Button1',
    headerTag: '1',
    imageSize: {
        width: 4592,
        height: 2584,
        size: '5.09 MB',
    },
    newwindow: '',
    pagelink2: '/banner/',
    subheader: '',
    actionlbl2: 'Button2',
    isFeatured: '',
    newwindow2: '',
    pagelinkId: '',
    bkgrd_color: '',
    pagelink2Id: '',
    buttonList: [
        {
            name: 'btn1',
            link: '/article/',
            window: '',
            label: 'Button1',
            active: true,
            btnType: 'btn_1',
            btnSize: 'btn_md',
            linkType: 'local',
            blockBtn: false,
        },
        {
            name: 'btn2',
            link: '/banner/',
            window: '',
            label: 'Button2',
            active: true,
            btnType: 'btn_2',
            btnSize: 'btn_md',
            linkType: 'local',
            blockBtn: false,
        },
    ],
    twoButtons: true,
    isWrapLink: false,
    //visibleButton: true,
    isBeaconHero: false,
    imagePriority: false,
    itemCount: 1,
    imageType: 'crop',
}

const item2 = item1
const item3 = item1

Default.args = {
    modId: '1',
    type: 'card_1',
    well: '',
    align: 'center',
    imgsize: 'landscape_4_3',
    title: '',
    export: 1,
    columns: 1,
    lightbox: '',
    blockSwitch1: 1,
    scale_to_fit: '',
    items: [item1],
    themeStyles: themeStyles,
}

let colorStyles: string
if (Default.args?.themeStyles) {
    colorStyles = createStoryStyles(Default.args.themeStyles)
}

export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
    items: [
        {
            ...item1,
        },
    ],
}
export const NoImage = Template.bind({})
NoImage.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            image: '',
        },
    ],
}
export const AlignLeft = Template.bind({})
AlignLeft.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            align: 'left',
        },
    ],
}
export const AlignRight = Template.bind({})
AlignRight.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            align: 'right',
        },
    ],
}
export const H1 = Template.bind({})
H1.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            headerTag: '1',
            align: 'left',
        },
    ],
}
export const OnlySub = Template.bind({})
OnlySub.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            subheader: 'Only Subheadline',
            headline: '',
            desc: '',
            image: '',
            align: '',
        },
    ],
}
export const OnlyHeadline = Template.bind({})
OnlyHeadline.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            subheader: '',
            headline: 'Only Headline',
            desc: '',
            image: '',
            align: '',
        },
    ],
}
export const OnlyDesc = Template.bind({})
OnlyDesc.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            subheader: '',
            headline: '',
            desc: 'Only Desc',
            image: '',
            align: '',
        },
    ],
}
export const OnlyImage = Template.bind({})
OnlyImage.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            subheader: '',
            headline: '',
            desc: '',
        },
    ],
}
export const ModuleTitle = Template.bind({})
ModuleTitle.args = {
    ...AlignLeft.args,
    title: 'Module Title',
}

export const ImageSquare = Template.bind({})
ImageSquare.args = {
    ...AlignLeft.args,
    imgsize: 'square_1_1',
}
export const ImageLandscape_4_3 = Template.bind({})
ImageLandscape_4_3.args = {
    ...AlignLeft.args,
    imgsize: 'landscape_4_3',
}

export const ImageLandscape_3_2 = Template.bind({})
ImageLandscape_3_2.args = {
    ...AlignLeft.args,
    imgsize: 'landscape_3_2',
}
export const ImagePortrait_3_4 = Template.bind({})
ImagePortrait_3_4.args = {
    ...AlignLeft.args,
    imgsize: 'portrait_3_4',
}
export const ImagePortrait_2_3 = Template.bind({})
ImagePortrait_2_3.args = {
    ...AlignLeft.args,
    imgsize: 'portrait_2_3',
}
export const ImageWideScreen_16_9 = Template.bind({})
ImageWideScreen_16_9.args = {
    ...AlignLeft.args,
    imgsize: 'widescreen_16_9',
}

export const ImageWideScreen_2_4_1 = Template.bind({})
ImageWideScreen_2_4_1.args = {
    ...AlignLeft.args,
    imgsize: 'widescreen_2_4_1',
}
export const ImageWideScreen_3_1 = Template.bind({})
ImageWideScreen_3_1.args = {
    ...AlignLeft.args,
    imgsize: 'widescreen_3_1',
}
export const ImageNoSizing = Template.bind({})
ImageNoSizing.args = {
    ...AlignLeft.args,
    imgsize: 'no_sizing',
}

export const Button = Template.bind({})
Button.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            buttonList: buttonList1,
            twoButtons: false,
            isWrapLink: true,
            visibleButton: true,
        },
    ],
}
export const TwoButtons = Template.bind({})
TwoButtons.args = {
    ...Button.args,
    items: [
        {
            ...item1,
            buttonList: buttonList2,
            twoButtons: true,
            isWrapLink: false,
            visibleButton: true,
        },
    ],
}
export const Button2 = Template.bind({})
Button2.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            buttonList: buttonListJust2,
            twoButtons: true,
            isWrapLink: false,
            visibleButton: true,
        },
    ],
}
export const ButtonSizesBlock = Template.bind({})
ButtonSizesBlock.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            buttonList: [
                {
                    name: 'btn1',
                    link: '/article/',
                    window: '',
                    label: 'Button1',
                    active: true,
                    btnType: 'btn_1',
                    btnSize: 'btn_md',
                    linkType: 'local',
                    blockBtn: true,
                },
            ],
            twoButtons: true,
            isWrapLink: false,
            visibleButton: true,
        },
    ],
}
export const LinkNoButton = Template.bind({})
LinkNoButton.args = {
    ...Default.args,
    well: '1',
    items: [
        {
            ...item1,
            weblink: 'https://www.facebook.com/',
            align: 'left',
            newwindow: 1,
            isWrapLink: true,
        },
    ],
}

export const Border = Template.bind({})
Border.args = {
    ...AlignLeft.args,
    well: '1',
}

export const Featured = Template.bind({})
Featured.args = {
    ...AlignLeft.args,
    items: [{ ...item1, isFeatured: 'active', align: 'left' }],
}

export const MultiFeatured = Template.bind({})
MultiFeatured.args = {
    ...AlignLeft.args,
    columns: 3,
    items: [{ ...item1 }, { ...item1, isFeatured: 'active' }, { ...item1 }],
}

export const Caption = Template.bind({})
Caption.args = {
    ...Plain.args,

    items: [{ ...item1, caption_tag: 'caption', captionOn: 0 }],
}

export const Hidden = Template.bind({})
Hidden.args = {
    ...Plain.args,
    items: [{ ...item1, disabled: 'disabled' }],
}
export const V2 = Template.bind({})
V2.args = {
    ...Plain.args,
    type: 'article_2',
}
export const V2Multiple = Template.bind({})
V2Multiple.args = {
    ...Plain.args,
    type: 'article_2',
    columns: 2,
    items: [{ ...item1 }, { ...item1 }, { ...item1 }, { ...item1 }],
}
export const V3 = Template.bind({})
V3.args = {
    ...Plain.args,
    type: 'article_3',
    items: [{ ...item1 }],
}
export const V3Left = Template.bind({})
V3Left.args = {
    ...Plain.args,
    type: 'article_3',
    items: [{ ...item1, align: 'left' }],
}
export const V3Multiple = Template.bind({})
V3Multiple.args = {
    ...Plain.args,
    type: 'article_3',
    columns: 2,
    items: [
        { ...item1, align: 'right' },
        { ...item1, align: 'right' },
        { ...item1, align: 'right' },
        { ...item1, align: 'right' },
    ],
}
export const V3TextSizes = Template.bind({})
V3TextSizes.args = {
    ...Plain.args,
    type: 'article_3',
    columns: 3,
    items: [
        { ...item1, headSize: 'font_xs', descSize: 'font_sm' },
        { ...item1, headSize: 'font_md', descSize: 'font_md' },
        { ...item1, headSize: 'font_xl', descSize: 'font_xl' },
    ],
}
export const Icon3 = Template.bind({})
Icon3.args = {
    ...Plain.args,

    items: [{ ...item1, icon3: 'faAnchor', imageIcon: { iconModel: 'angry', iconPrefix: 'far' } }],
}

export const Beacon = Template.bind({})
Beacon.args = {
    ...Plain.args,
    type: 'article',
    items: [{ ...item1 }],
}
export const BeaconLeft = Template.bind({})
BeaconLeft.args = {
    ...Plain.args,
    type: 'article',
    items: [{ ...item1, align: 'left' }],
}

export const BeaconHero = Template.bind({})
BeaconHero.args = {
    ...Plain.args,
    type: 'article',
    items: [
        { ...item1, align: 'left', isFeatured: 'active' },
        /*        { ...item2, align: 'left' }, */
    ],
}

export const BeaconHeroMultiple = Template.bind({})
BeaconHeroMultiple.args = {
    ...Plain.args,
    columns: 3,
    type: 'article',
    items: [
        {
            ...item1,
            actionlbl: 'Contact Us',
            pagelink: '/',
            // actionlbl2: 'Contact 2',
            //pagelink2: '/',
            align: 'center',
            icon: 'faArchway',
            icon2: 'faAnchor',
            btnType: 'btn_1',
        },
        {
            ...item1,
            actionlbl: 'Contact Us',
            pagelink: '/',
            // actionlbl2: 'Contact 2',
            //pagelink2: '/',
            align: 'center',
            icon: 'faArchway',
            icon2: 'faAnchor',
            btnType: 'btn_1',
            isFeatured: 'active',
        },
        {
            ...item1,
            actionlbl: 'Contact Us',
            pagelink: '/',
            // actionlbl2: 'Contact 2',
            //pagelink2: '/',
            align: 'center',
            icon: 'faArchway',
            icon2: 'faAnchor',
            btnType: 'btn_1',
        },
    ],
}

export const UseAccentColor = Template.bind({})
UseAccentColor.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            useAccentColor: true,
            image: '',
        },
    ],
}

export const RoundedBorder = Template.bind({})
RoundedBorder.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            useAccentColor: true,
            borderType: 'round',
        },
    ],
}
