// @flow
import React from 'react'
import PropTypes from 'prop-types'
import './Hello.css'

type Props = {to: string}

export const Hello = ({ to }: Props) => <h1 className="Hello">Hello { to }</h1>

Hello.propTypes = {
  to: PropTypes.string.isRequired
}

export default Hello
