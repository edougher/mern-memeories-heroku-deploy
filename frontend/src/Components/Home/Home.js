import React, { useState, useEffect } from 'react';
import { Grow, Container, Grid } from '@material-ui/core'
import useStyles from '../../styles'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'

import Form from '../Form/Form'
import Posts from '../Posts/Posts'

const Home = () => {
    const [currentId, setCurrentId] = useState(0)
    const classes = useStyles();
    const dispatch = useDispatch();



    useEffect(() => {
      dispatch(getPosts())
    }, [currentId, dispatch])

    return (
        <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home;