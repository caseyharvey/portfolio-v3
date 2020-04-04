import React, { useRef, useState } from "react"

const EmailLinks: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState<boolean>(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const copyEmailToClipboard = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select()
      document.execCommand("copy")
      setEmailCopied(true)
    }
  }
  return (
    <div className="links-container">
      <div className="links">
        <a href="mailto:im@caseys.tech?">open in mail</a>
        <span className="copy-email" onClick={copyEmailToClipboard}>
          copy email
        </span>
        <span className={emailCopied ? "success" : "hide"}>success</span>
      </div>
      <textarea
        readOnly
        ref={textAreaRef}
        value="im@caseys.tech"
        className="hide"
      ></textarea>
    </div>
  )
}

export default EmailLinks
