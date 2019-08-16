import React, { useRef, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const ScrollToTop = (props) => {
    const { pathname } = props.location;
    const prev = usePrevious({ pathname });
    useEffect(() => {
        if (prev) {
            if (prev.pathname !== pathname) {
                window.scrollTo(0, 0)
            }
        }
    })

    return <div>{props.children}</div>
}

export default withRouter(ScrollToTop)