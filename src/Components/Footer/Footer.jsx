import './footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation()
    return (
        <footer className='text-center pb-4 pt-5'>
            <a target='__blank' className='fs-2' href='https://www.linkedin.com/in/valentina-belen-sanchez/' aria-label={t('ariaLabelLinkedin')}>
                <BsLinkedin />
            </a>
            <a target='__blank' className='fs-2 ms-5' href='https://github.com/ValentinaBS' aria-label={t('ariaLabelGithub')>
                <BsGithub />
            </a>
            <p className='text-white mt-3'>
                ©Valentina Belén Sánchez - 2023
            </p>
        </footer>
    )
}
