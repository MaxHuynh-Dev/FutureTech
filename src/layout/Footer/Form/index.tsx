import PrimaryButton from '@Components/Buttons/PrimaryButton';
import type React from 'react';

import styles from './form.module.scss';

function Form(): React.JSX.Element {
  return (
    <div className={styles.form}>
      <form>
        <div className={styles.form_group}>
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="phone" id="phone" name="phone" placeholder="Phone" />
        </div>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Message"
          className={styles.form_input}
        />
        <PrimaryButton text="Call me back" className={styles.form_button} />
      </form>
    </div>
  );
}

export default Form;
