import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Testimony = ({ id, title, client, theme, headshot, quote }) => {
  console.log('HEADSHOT:' + `/static/images/${headshot}`)
  return (
    <li className={`card ${theme}`}>
      <Card>
        <CardActionArea>
          <img
            className="avatar__image"
            src={`/images/${headshot}`}
            alt="user avatar"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {client}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {quote}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </li>
  )
}

export default Testimony
