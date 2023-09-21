import styles from "./styles/SignInForm.module.css"
import { useState } from "react";
export default function SignIn() {  

  const[username, setUsername] = useState("");
  // const [updated, setUpdated] = useState(username);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    
    setPassword(e.target.value);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleClick = () => {
    // setUpdated(username);
    console.log(username);
    // setPassword(password)
    console.log(password);
  };

  return (
    <form className={styles.form} autoComplete="off">
      <div className={styles.control}>
        <h1>Sign In</h1>
      </div>
      <div className={`${styles.control} ${styles['block-cube']} ${styles['block-input']}`}>
        <input name="username" type="text" placeholder="Username" value= {username} onChange={handleChange}/>
        <div className={styles['bg-top']}>
          <div className={styles['bg-inner']}></div>
        </div>
        <div className={styles['bg-right']}>
          <div className={styles['bg-inner']}></div>
        </div>
        <div className={styles.bg}>
          <div className={styles['bg-inner']}></div>
        </div>
      </div>
      <div className={`${styles.control} ${styles['block-cube']} ${styles['block-input']}`}>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="password"
      />
        <div className={styles['bg-top']}>
          <div className={styles['bg-inner']}></div>
        </div>
        <div className={styles['bg-right']}>
          <div className={styles['bg-inner']}></div>
        </div>
        <div className={styles.bg}>
          <div className={styles['bg-inner']}></div>
        </div>
      </div>
      <button className={`${styles.btn} ${styles['block-cube']} ${styles['block-cube-hover']}`} type="button" onClick={handleClick}>
        <div className={styles['bg-top']}>
          <div className={styles['bg-inner']}></div>
        </div>
        <div className={styles['bg-right']}>
          <div className={styles['bg-inner']}></div>
        </div>
        <div className={styles.bg}>
          <div className={styles['bg-inner']}></div>
        </div>
        {/* Uncomment the next line if needed */}
        {/* <div className="bg2"></div> */}
        <div className={styles.text}>Log In</div>
      </button>
      <div className={styles.credits}>
        <a href="https://codepen.io/marko-zub/" target="_blank" rel="noopener noreferrer">
          My other codepens
        </a>
      </div>
    </form>
  );
};
