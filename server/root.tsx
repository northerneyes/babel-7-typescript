import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Request, Response } from 'express'

const root = (_: Request, res: Response) => {
  const html =
    '<!DOCTYPE html>' +
    ReactDOMServer.renderToStaticMarkup(
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
          />
          <meta name="google-site-verification&quot; content=&quot;2ZKy2kS16ukxLDzNsKH5D4YsXn9Jl60QybjgVOJiUnE" />
        </head>
        <body
          dangerouslySetInnerHTML={{
            __html: `<div id="app" class="app"></div>
            <script src="/static/vendor.lib.js"></script>
            <script defer="" src="/app.js"></script>
            `
          }}
        />
      </html>
    )

  res.status(200).send(html)
}

export default root
