import React, { useMemo } from 'react'

import { useSelector, useDispatch, votingSnackbarClose as snackbarClose } from 'store'
import { Snackbar } from 'components'

interface Props {}

const StudentVoteSnackbar: React.FC<Props> = () => {
  const snackbar = useSelector((state) => state.voting.snackbar)
  const dispatch = useDispatch()

  return useMemo(
    () => <Snackbar {...snackbar} onClose={() => dispatch(snackbarClose())} />,
    [dispatch, snackbar]
  )
}

export default StudentVoteSnackbar
