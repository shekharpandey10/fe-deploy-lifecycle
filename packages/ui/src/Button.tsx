import styles from "./Button.module.css";

function Button({ onClick }: { onClick: () => void }) {
    return (
        <button className={styles.btn} onClick={onClick}>shared button </button>
    )
}

export default Button
