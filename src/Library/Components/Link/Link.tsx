import React from "react"

export interface LinkProps {
  label: string
  url: string,
  classes?: string
}

function Link({ label, url, classes = 'link link-primary' }: LinkProps) {
  return (
    <a href={url} className={classes}>{label}</a>
  )
}

export default Link