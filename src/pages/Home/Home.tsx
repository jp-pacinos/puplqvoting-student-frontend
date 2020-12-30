import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Spacer } from 'components/Core'
import styles from './Home.module.css'

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <h1>Welcome to PUPLCSC Voting System</h1>

      <div className={styles.subtitle_box}>
        <h4 className={styles.subtitle}>Agreement of Voting</h4>
        <p>
          By participating in this Vote you agree to be bound by the following
          terms and conditions:
        </p>
      </div>

      <div className={styles.content}>
        <p>
          <b>1.</b> You must be a enrolled student of PUP Lopez in a current
          school year.
        </p>
        <p>
          <b>2.</b> Students cannot vote by any other method. You can only vote
          once. The result rundown will be announced via CSC Office and school
          bulletin board. There may be announcements during the live vote window
          of the results thus far.
        </p>

        <p>
          <b>3.</b> The open and close times and dates may change so please pay
          attention to any notice published online. Any votes registered outside
          the announced voting window will not count.
        </p>

        <p>
          <b>4.</b> If, for any reason, the online voting system fails, the vote
          may be suspended or a contingency plan may be carried out.
        </p>

        <p>
          <b>5.</b> The online voting system reserves the right to change,
          cancel or suspend the vote at any time.
        </p>

        <p>
          <b>6.</b> The CSC voting system cannot accept any responsibility
          whatsoever for any technical failure or malfunction, or any other
          problem with any online system, server, provider or otherwise which
          may result in any vote being lost or not properly registered and
          recorded.
        </p>
        <p>
          <b>7.</b> The CSC voting system will only use your school data for the
          purposes of running this vote or otherwise in Accordance with the
          CSC’s Privacy Policy.
        </p>
        <p>
          <b>8.</b> These Terms and Conditions are governed by the laws of PUP
          Central Student Council.
        </p>
      </div>

      <Spacer level={3} />

      <Link to="/auth">
        <Button color="primary" size="lg" shadow="lg">
          Vote Now
        </Button>
      </Link>
    </>
  )
}

export default Home
