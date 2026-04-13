import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'catalog', href: '#products' },
    { key: 'whyUs', href: '#whyus' },
    { key: 'reviews', href: '#reviews' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            Vels<span className={styles.logoAccent}>.</span>
          </a>
          <p className={styles.description}>{t('footer.description')}</p>
          <p className={styles.address}>{t('footer.address')}</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>{t('footer.navigation')}</h4>
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className={styles.navLink}>
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>{t('footer.followUs')}</h4>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}>Instagram</a>
            <a href="#" className={styles.socialLink}>Facebook</a>
            <a href="#" className={styles.socialLink}>Twitter</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Vels Industries. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
