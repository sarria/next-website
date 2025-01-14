'use client'
import styles from './container.module.scss'
import { ContainerProps, ModuleData } from '../types'
import ContainerLayout from './ContainerLayout'
import { ModuleRenderer } from './ModuleRenderer'
import { defineContainerVars } from '../functions'
import cn from 'classnames'
import { Fragment } from 'react'
import PageHead from './PageHead'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
const { library } = require('@fortawesome/fontawesome-svg-core')

import { useEffect, useState } from 'react'

library.add(fas, fab, far)

export const Container = (props: ContainerProps) => {
    const { page, siteData } = props
    const { cmsUrl, themeStyles, columnStyles } = defineContainerVars(page, siteData)

    return (
        <>
            <PageHead page={page} siteData={siteData} />
            <ContainerLayout siteData={siteData} themeStyles={themeStyles} cName={page.data.slug}>
                {page.data && (
                    <div className={cn(styles.root, 'content-background', 'container')}>
                        <div className={styles.featured}>
                            <ModuleRenderer config={page.data.modules[0]} themeStyles={themeStyles} cmsUrl={cmsUrl} />
                        </div>
                        {page.data.modules[1].length != 0 && (
                            <div className={styles['column-blocks']}>
                                <div className={cn(styles.columns, styles[`${columnStyles}`])}>
                                    {page.data.modules.map((data: ModuleData[], idx: number) => (
                                        <Fragment key={idx}>
                                            {data.length != 0 && idx != 0 ? (
                                                <div className={cn(styles['column' + (idx + 1)], styles.column)}>
                                                    <ModuleRenderer config={data} themeStyles={themeStyles} cmsUrl={cmsUrl} />
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </ContainerLayout>
            <FontLoad fonts={siteData.fontImport} />
        </>
    )
}

const FontLoad = (props: any) => {
    const [isSSR, setIsSSR] = useState(true)

    //Setting state to false on load to avoid Hydration Error
    useEffect(() => {
        setIsSSR(false)
    }, [])
    return <>{!isSSR && <style>{props.fonts}</style>}</>
}
