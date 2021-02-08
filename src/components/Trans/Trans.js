import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import t from 'utils/translate'

function Trans (props) {
  const { children } = props
  const { locale } = useRouter()

  if (typeof children === 'function') {
    return (
      <Fragment>
        {children(locale)}
      </Fragment>
    )
  }

  return (
    <Fragment>
      {t(children, locale)}
    </Fragment>
  )
}

Trans.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]).isRequired
}

export default Trans
