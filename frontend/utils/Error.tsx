import * as React from "react"
import MuiAlert from "@material-ui/lab/Alert"
import { Snackbar } from "@material-ui/core"

type TError = {
  error: any
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Error = (props: TError) => {
  const error = props.error
  const [open, setOpen] = React.useState<boolean>(true)
  const handleClose = () => setOpen(false)
  console.error(error)
  let message =
    error.graphQLErrors && error.graphQLErrors.length > 0
      ? error.graphQLErrors[0].message
      : error.message
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Error