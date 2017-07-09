// @flow
import React from 'react'
import './Hello.css'

type Props = {to: string}

export const Hello = ({ to }: Props) => <h1 className="Hello">Hello { to }</h1>

export default Hello
