'use client'
import styles from './containerfooter.module.scss'
import cn from 'classnames'
import Logo from './Logo'
import { ContainerFooterProps, CompositeItem } from '../types'
import { domainImage } from '../functions'
import SocialLinks from 'elements/SocialLinks'
import NavToggle from 'elements/NavToggle'
import { WidgetRenderer } from 'elements/WidgetRenderer'

const ContainerFooter = (props: ContainerFooterProps) => {
    const { siteData, navSwitch } = props

    return (
        <footer className={cn(styles.root, 'footer')}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    {siteData.composites?.footer?.modules.items.map((item: CompositeItem, index: number) => (
                        <div key={index} className={styles.item}>
                            <WidgetRenderer item={item} siteData={siteData} navSwitch={navSwitch} />
                        </div>
                    ))}
                </div>
                <div className={styles.brand}>
                    {siteData.footerLogos?.image_src && (
                        <div className={cn(styles['logo-block'], styles['desktop-logo-block'])}>
                            <Logo logoUrl={domainImage(siteData.footerLogos.image_src, true)} link={siteData.footerLogos?.image_link} />
                        </div>
                    )}
                </div>
                <div className={styles['info-block']}>
                    <address className={styles.copy}>
                        <span className={styles.copyright}>
                            Copyright &#169; {new Date().getFullYear()} {siteData.siteName}, all rights reserved.
                        </span>{' '}
                        {siteData.contact.address?.street && <span className={styles['street-address']}>{siteData.contact.address.street}, </span>}
                        <span className={styles['city-state-zip-address']}>
                            {siteData.contact.address?.city && `${siteData.contact.address.city} ,`}{' '}
                            {siteData.contact.address?.state && `${siteData.contact.address.state} ,`}{' '}
                            {siteData.contact.address?.zip && `${siteData.contact.address.zip} ,`}
                        </span>{' '}
                        {siteData.contact.phone[0].number && <span className={styles.phone}> {siteData.contact.phone[0].number}</span>}
                    </address>
                </div>
                <div className={styles['bottom']}>
                    <div className={styles['social-block']}>
                        <SocialLinks siteData={siteData} modType="footer" />
                    </div>
                    <div className={styles['nav-block']}>
                        <NavToggle navSwitch={navSwitch} modType="footer" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default ContainerFooter