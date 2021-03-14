import React, { useRef, useState } from 'react'

const EmailLinks: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState<boolean>(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const copyEmailToClipboard = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select()
      document.execCommand('copy')
      setEmailCopied(true)
    }
  }
  return (
    <div className="email-link-container">
      <span className="copy-email" onClick={copyEmailToClipboard}>
        copy email
      </span>
      <span className={emailCopied ? 'success' : 'hide'}>success</span>
      <a href="mailto:im@casey.work?">open in mail</a>

      <textarea
        readOnly
        ref={textAreaRef}
        value="im@casey.work"
        className="hide"
      ></textarea>
    </div>
  )
}

export default EmailLinks
