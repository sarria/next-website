import PageHead from 'components/PageHead'
import { generateLayout, getHomePage } from 'functions'

export default async function Head() {
    const { CMSLayout } = await generateLayout()
    const { page } = await getHomePage()

    return (
        <>
            <PageHead page={page} siteData={CMSLayout} pageType={'slug'} />
        </>
    )
}