import React from "react"

type Props = {}

const ProtectedPage = (props: Props) => {
  return <div>Only logged in users can see this page</div>
}

export default ProtectedPage
