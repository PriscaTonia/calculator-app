import styles from './styles.module.css'

const Header = ({ handleclick }) => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.calc}`}>calc</div>

      <div className={`${styles.themeGroup}`}>
        <span className={`${styles.themeTitle}`}>theme</span>
        <div>
          <div className={`${styles.themeNumber}`}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className={`${styles.inputGroup}`}>
            <input type="radio" name="theme" id="1" value="theme1" defaultChecked onClick={e => handleclick(e)} />
            <input type="radio" name="theme" id="2" value="theme2" onClick={e => handleclick(e)} />
            <input type="radio" name="theme" id="3" value="theme3" onClick={e => handleclick(e)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Header }
