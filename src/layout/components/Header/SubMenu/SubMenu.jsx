import styles from '../styles.module.scss';
function SubMenu({ dataSubMenu, isContent = true }) {
    const { SubMenu } = styles;

    return (
        <>
            <ul className={SubMenu}>
                {isContent
                    ? dataSubMenu.slice(0, 3).map((it, index) => (
                          <li key={index}>
                              <a href={it.href}>{it.content}</a>
                          </li>
                      ))
                    : dataSubMenu.slice(3).map((it, index) => (
                          <li key={index}>
                              <a href={it.href}>{it.content}</a>
                          </li>
                      ))}
            </ul>
        </>
    );
}

export default SubMenu;
