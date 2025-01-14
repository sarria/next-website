'use client'
import styles from './contactmodal.module.scss'
import cn from 'classnames'
import { Fragment } from 'react'
import NavClose from 'elements/NavClose'
import ContactLink from 'elements/ContactLink'
import { ContactModalProps } from '../types'

const ContactModal = ({ siteData, setContactModal, showContactModal }: ContactModalProps) => {
    return (
        <div
            className={cn(styles.root, {
                [styles.box]: true,
                [styles.show]: showContactModal,
            })}
        >
            <div className={styles.wrapper}>
                <div className={styles['title-block']}>
                    <h4>Contact Title</h4>
                    <NavClose setContactModal={setContactModal} type="contact" />
                </div>

                <div className={styles.list}>
                    <ul>
                        {siteData.contact.contactLinks?.map((item, index) => (
                            <Fragment key={index}>
                                {item.active && (
                                    <ContactLink
                                        cname={item.cName}
                                        link={item.link}
                                        icon={item.icon}
                                        content={item.content}
                                        type="box"
                                        showContactBox={siteData.contact.showContactBox}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactModal
